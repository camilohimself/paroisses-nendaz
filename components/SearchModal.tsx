'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  X,
  ArrowRight,
  FileText,
  Heart,
  Cross,
  Users,
  Compass,
  Sparkles,
  Calendar,
  type LucideIcon,
} from 'lucide-react'
import MiniSearch from 'minisearch'
import {
  searchDocuments,
  searchSuggestions,
  type SearchCategory,
  type SearchDocument,
} from '@/lib/search-data'
import { trackSearch } from '@/lib/analytics-events'

interface Props {
  isOpen: boolean
  onClose: () => void
}

type ScoredResult = SearchDocument & { score: number }

const CATEGORY_ORDER: SearchCategory[] = [
  'Accueil',
  'Démarches',
  'Sacrements',
  'Pastorale',
  'Paroisses',
  'Carême',
  'Avent',
  'Parcours pèlerins',
  'Pratique',
]

const CATEGORY_ICONS: Record<SearchCategory, LucideIcon> = {
  Accueil: FileText,
  Démarches: Heart,
  Sacrements: Cross,
  Pastorale: Users,
  Paroisses: Compass,
  Carême: Sparkles,
  Avent: Calendar,
  'Parcours pèlerins': Compass,
  Pratique: FileText,
}

function stripDiacritics(s: string) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const miniSearch = useMemo(() => {
    const instance = new MiniSearch<SearchDocument>({
      idField: 'id',
      fields: ['title', 'keywords', 'body'],
      storeFields: ['url', 'title', 'category', 'body'],
      tokenize: (text) =>
        stripDiacritics(text.toLowerCase())
          .split(/[^a-z0-9']+/)
          .filter((t) => t.length > 1),
      processTerm: (term) => stripDiacritics(term.toLowerCase()),
      extractField: (doc, fieldName) => {
        const value = (doc as unknown as Record<string, unknown>)[fieldName]
        if (Array.isArray(value)) return value.join(' ')
        return String(value ?? '')
      },
    })
    instance.addAll(searchDocuments)
    return instance
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query.trim()), 120)
    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setDebouncedQuery('')
      setActiveIndex(0)
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  const results = useMemo<ScoredResult[]>(() => {
    if (!debouncedQuery) return []
    const raw = miniSearch.search(debouncedQuery, {
      boost: { title: 3, keywords: 2, body: 1 },
      prefix: true,
      fuzzy: 0.2,
      combineWith: 'AND',
    })
    return raw as unknown as ScoredResult[]
  }, [debouncedQuery, miniSearch])

  // Track query (debounced) avec compte de résultats
  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      trackSearch.search(debouncedQuery, results.length)
      if (results.length === 0) trackSearch.noResults(debouncedQuery)
    }
  }, [debouncedQuery, results.length])

  const groups = useMemo(() => {
    if (results.length === 0) return [] as { category: SearchCategory; items: ScoredResult[] }[]
    const map = new Map<SearchCategory, ScoredResult[]>()
    for (const r of results) {
      const cat = r.category
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(r)
    }
    return CATEGORY_ORDER.filter((cat) => map.has(cat)).map((category) => ({
      category,
      items: map.get(category)!,
    }))
  }, [results])

  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups])

  useEffect(() => {
    setActiveIndex(0)
  }, [debouncedQuery])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, Math.max(flat.length - 1, 0)))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        const target = flat[activeIndex]
        if (target) {
          e.preventDefault()
          trackSearch.resultClick(debouncedQuery, target.url)
          window.location.href = target.url
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, flat, activeIndex, onClose, debouncedQuery])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-stone-900/60 backdrop-blur-sm px-3 pt-3 sm:pt-20"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-input-label"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[70vh] overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-stone-200 px-4 sm:px-5 py-3.5">
          <Search className="w-5 h-5 text-stone-400 flex-shrink-0" aria-hidden="true" />
          <label htmlFor="search-input" id="search-input-label" className="sr-only">
            Rechercher dans le site
          </label>
          <input
            ref={inputRef}
            id="search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher dans le site…"
            className="flex-1 outline-none text-stone-900 placeholder:text-stone-400 bg-transparent text-base"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="button"
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 transition-colors p-1 rounded"
            aria-label="Fermer la recherche"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {!debouncedQuery ? (
            <EmptyState onSelect={(q) => setQuery(q)} />
          ) : groups.length === 0 ? (
            <NoResults query={debouncedQuery} />
          ) : (
            <ResultsList
              groups={groups}
              activeIndex={activeIndex}
              flat={flat}
              query={debouncedQuery}
              onClose={onClose}
            />
          )}
        </div>

        <div className="border-t border-stone-100 px-4 sm:px-5 py-2.5 text-xs text-stone-400 flex items-center justify-between flex-wrap gap-y-1.5 gap-x-3">
          <div className="hidden sm:flex items-center gap-3">
            <KbdHint label="naviguer" keys={['↑', '↓']} />
            <KbdHint label="ouvrir" keys={['↵']} />
            <KbdHint label="fermer" keys={['Esc']} />
          </div>
          <span className="text-stone-300 ml-auto">Paroisses Nendaz-Veysonnaz</span>
        </div>
      </div>
    </div>
  )
}

function KbdHint({ label, keys }: { label: string; keys: string[] }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex gap-1">
        {keys.map((k) => (
          <kbd
            key={k}
            className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 rounded text-stone-600 font-sans text-[10px]"
          >
            {k}
          </kbd>
        ))}
      </span>
      {label}
    </span>
  )
}

function EmptyState({ onSelect }: { onSelect: (q: string) => void }) {
  return (
    <div className="px-5 py-7">
      <p className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3">
        Suggestions
      </p>
      <div className="flex flex-wrap gap-2">
        {searchSuggestions.map((s) => (
          <button
            key={s.query}
            onClick={() => onSelect(s.query)}
            className="px-3 py-1.5 rounded-full border border-stone-200 text-sm text-stone-700 hover:border-stone-400 hover:bg-stone-50 transition-colors"
            type="button"
          >
            {s.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-stone-400 mt-6 leading-relaxed">
        Vous cherchez un sacrement, une paroisse, une démarche ? Tapez quelques mots et le site vous indique la bonne page.
      </p>
    </div>
  )
}

function NoResults({ query }: { query: string }) {
  return (
    <div className="px-5 py-12 text-center">
      <p className="text-stone-700 text-base font-medium">Aucun résultat pour « {query} »</p>
      <p className="text-stone-500 text-sm mt-2">
        Essayez avec d&apos;autres mots-clés ou parcourez le menu de navigation.
      </p>
    </div>
  )
}

function ResultsList({
  groups,
  activeIndex,
  flat,
  query,
  onClose,
}: {
  groups: { category: SearchCategory; items: ScoredResult[] }[]
  activeIndex: number
  flat: ScoredResult[]
  query: string
  onClose: () => void
}) {
  return (
    <div className="py-1">
      {groups.map(({ category, items }) => {
        const Icon = CATEGORY_ICONS[category]
        return (
          <div key={category} className="mb-1.5">
            <div className="px-4 sm:px-5 py-1.5 text-[11px] uppercase tracking-wider font-semibold text-stone-500 bg-stone-50/70 flex items-center gap-2">
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              {category}
            </div>
            {items.map((r) => {
              const flatIndex = flat.findIndex((fr) => fr.id === r.id)
              const isActive = flatIndex === activeIndex
              return (
                <Link
                  key={r.id}
                  href={r.url}
                  onClick={() => {
                    trackSearch.resultClick(query, r.url)
                    onClose()
                  }}
                  className={`block px-4 sm:px-5 py-3 transition-colors border-l-2 ${
                    isActive
                      ? 'bg-stone-100 border-stone-700'
                      : 'border-transparent hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-stone-900 text-sm">
                        <Highlight text={r.title} query={query} />
                      </p>
                      <p className="text-stone-500 text-xs mt-0.5 line-clamp-2 leading-relaxed">
                        <Highlight text={r.body} query={query} />
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors ${
                        isActive ? 'text-stone-700' : 'text-stone-300'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

function Highlight({ text, query }: { text: string; query: string }) {
  const term = query.trim().split(/\s+/)[0]
  if (!term || term.length < 2) return <>{text}</>
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')
  const parts = text.split(regex)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark
            key={i}
            className="bg-amber-100 text-amber-900 not-italic font-medium rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}
