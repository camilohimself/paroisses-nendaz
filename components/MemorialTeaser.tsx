'use client'

import { Caveat } from 'next/font/google'
import { Cross } from 'lucide-react'
import Link from 'next/link'
import { pensees, MEMORIAL_CONFIG } from '@/lib/pensees-crans-montana'

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// 8 messages choisis pour le teaser — mélange des deux tons
const teaserMessages = [
  pensees.find((p) => p.id === 34)!, // Stefan, tu voles avec les anges
  pensees.find((p) => p.id === 1)!,  // Que Dieu vous donne force et paix — Céline
  pensees.find((p) => p.id === 29)!, // 41 anges de plus au paradis
  pensees.find((p) => p.id === 16)!, // On vous aime !
  pensees.find((p) => p.id === 17)!, // Force, foi et paix
  pensees.find((p) => p.id === 45)!, // Je t'aime K…
  pensees.find((p) => p.id === 24)!, // Ensemble !
  pensees.find((p) => p.id === 51)!, // Unis à vous tous et toutes
]

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
]

export default function MemorialTeaser() {
  const today = new Date()
  const from = new Date(MEMORIAL_CONFIG.displayFrom)
  const until = new Date(MEMORIAL_CONFIG.displayUntil)
  until.setHours(23, 59, 59, 999)

  if (today < from || today > until) return null

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 via-amber-100 to-stone-100 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iYmxhY2siIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-4 relative">
        {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-stone-500/60" />
            <Cross className="w-5 h-5 text-stone-600/80" strokeWidth={1.5} />
            <span className="w-12 h-px bg-stone-500/60" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-3">
            {MEMORIAL_CONFIG.title}
          </h2>
          <p className="text-stone-600 text-lg italic font-crimson">
            {MEMORIAL_CONFIG.subtitle} — {MEMORIAL_CONFIG.date}
          </p>
        </div>

        {/* Aperçu post-it — 2 colonnes mobile, 4 desktop */}
        <div className="columns-2 md:columns-4 gap-4 max-w-5xl mx-auto">
          {teaserMessages.map((pensee, i) => (
            <div
              key={pensee.id}
              className={`
                ${caveat.className}
                break-inside-avoid mb-4
                ${postItColors[i % postItColors.length]}
                border rounded-sm shadow-md
                p-4 relative
                ${rotations[i % rotations.length]}
              `}
            >
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-stone-400 shadow-sm border border-stone-500" />
              <p className="text-stone-700 text-base md:text-lg leading-relaxed">
                {pensee.text}
              </p>
              {pensee.author && (
                <p className="text-stone-500 text-sm mt-2 text-right italic">
                  — {pensee.author}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/prieres-crans-montana"
            className="inline-flex items-center gap-2 px-8 py-3 bg-stone-600 text-white text-sm font-semibold rounded-full hover:bg-stone-700 transition-all duration-300"
          >
            Voir tous les messages
            <span className="text-stone-300 font-normal">({pensees.length})</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
