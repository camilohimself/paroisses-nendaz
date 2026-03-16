'use client'

import { Caveat } from 'next/font/google'
import { Cross } from 'lucide-react'
import Link from 'next/link'
import { pensees, MEMORIAL_CONFIG, type PenseeMessage } from '@/lib/pensees-crans-montana'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

function interleaveMessages(messages: PenseeMessage[]): PenseeMessage[] {
  const solidarite = messages.filter((m) => m.type === 'solidarite')
  const intention = messages.filter((m) => m.type === 'intention')
  const result: PenseeMessage[] = []
  let si = 0
  let ii = 0

  while (si < solidarite.length || ii < intention.length) {
    if (si < solidarite.length) result.push(solidarite[si++])
    if (si < solidarite.length) result.push(solidarite[si++])
    if (ii < intention.length) result.push(intention[ii++])
  }

  return result
}

const mergedPensees = interleaveMessages(pensees)

const postItColors = [
  'bg-amber-50 border-amber-200',
  'bg-sky-50 border-sky-200',
  'bg-rose-50 border-rose-200',
  'bg-emerald-50 border-emerald-200',
  'bg-violet-50 border-violet-200',
  'bg-orange-50 border-orange-200',
]

const rotations = [
  '-rotate-1',
  'rotate-1',
  '-rotate-2',
  'rotate-0',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
  'rotate-0',
]

export default function PrieresCransMontanaPage() {
  return (
    <div className="min-h-screen bg-stone-300 relative overflow-hidden">
      {/* Texture subtile */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iYmxhY2siIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-4 relative">
        {/* En-tête */}
        <div className="text-center pt-16 pb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-stone-500/60" />
            <Cross className="w-5 h-5 text-stone-600/80" strokeWidth={1.5} />
            <span className="w-12 h-px bg-stone-500/60" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            {MEMORIAL_CONFIG.title}
          </h1>
          <p className="text-stone-600 text-xl italic font-crimson">
            {MEMORIAL_CONFIG.subtitle} — {MEMORIAL_CONFIG.date}
          </p>
          <p className="text-stone-500 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            {MEMORIAL_CONFIG.description}
          </p>
        </div>

        {/* Mur de post-it */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto pb-8">
          {mergedPensees.map((pensee, i) => (
            <div
              key={pensee.id}
              className={`
                ${caveat.className}
                break-inside-avoid mb-4
                ${postItColors[i % postItColors.length]}
                border rounded-sm shadow-md
                p-5 relative
                ${rotations[i % rotations.length]}
                hover:rotate-0 hover:scale-105 hover:shadow-xl
                transition-all duration-300
              `}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-stone-400 shadow-sm border border-stone-500" />
              <p className="text-stone-700 text-lg md:text-xl leading-relaxed">
                {pensee.text}
              </p>
              {pensee.author && (
                <p className="text-stone-500 text-base mt-2 text-right italic">
                  — {pensee.author}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Pied */}
        <div className="text-center py-12 border-t border-stone-400/50">
          <p className="text-stone-500 text-sm italic font-crimson mb-6">
            {pensees.length} messages de solidarité et de prière
          </p>
          <Link
            href="/actualites"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-600 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-colors"
          >
            Retour aux actualités
          </Link>
        </div>
      </div>
    </div>
  )
}
