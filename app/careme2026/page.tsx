'use client'

import { useState, useEffect, useRef } from 'react'
import {
  JOURS_CAREME,
  SEMAINES_CAREME,
  SAINTS_COACHS,
  getSaintById,
  getJourByDate,
  getProgression,
  getEtatJour,
  getJoursParSemaine,
  type JourCareme,
  type SaintCoach,
  type SemaineCareme
} from '@/lib/careme-data'
import { trackCareme } from '@/lib/analytics-events'
import Image from 'next/image'
import {
  ChevronDown,
  Download,
  Church,
  BookOpen,
  Palette,
  Scissors,
  Sun,
  Heart,
  CalendarDays,
  X,
  ZoomIn,
  Puzzle
} from 'lucide-react'

// Palette "Violet Liturgique" — #4B0082 (Indigo, couleur du Carême)
const COLORS = {
  headerFrom: '#4B0082',
  headerTo: '#360060',
  active: '#4B0082',
  activeRing: '#9B72CF',
  complete: '#7BA087',
  accent: '#D4AF37',
  bgFrom: '#F7F3FA',
  bgTo: '#EDE5F5',
  text: '#2D004E',
  textLight: '#6B4D8A',
  lightBg: '#F0E8F7',
}

// Mode production : suit le jour réel
// Pour prévisualiser, décommenter une date fixe ci-dessous :
// const DATE_DEMO = new Date('2026-02-18') // jour 1
// const DATE_DEMO = new Date('2026-03-08') // dimanche, mi-carême
// const DATE_DEMO = new Date('2026-04-05') // Pâques
const DATE_DEMO = new Date()

// Dates clés
const DATE_DEBUT = new Date('2026-02-18')
const DATE_FIN = new Date('2026-04-05')

function getTodayStr(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function normalizeDate(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export default function Careme2026Page() {
  const [expandedPastJour, setExpandedPastJour] = useState<number | null>(null)
  const [browseJour, setBrowseJour] = useState<number | null>(null)

  const aujourdhui = normalizeDate(DATE_DEMO)
  const todayStr = getTodayStr(DATE_DEMO)
  const progression = getProgression(DATE_DEMO)

  // Avant le Carême ?
  if (aujourdhui < normalizeDate(DATE_DEBUT)) {
    return <CountdownView aujourdhui={aujourdhui} />
  }

  // Après Pâques ?
  if (aujourdhui > normalizeDate(DATE_FIN)) {
    return (
      <CompletedView
        browseJour={browseJour}
        setBrowseJour={setBrowseJour}
      />
    )
  }

  // Pendant le Carême : compagnon quotidien
  const jourDuJour = getJourByDate(todayStr)
  if (!jourDuJour) return null

  const saintCoach = getSaintById(jourDuJour.saintCoachId)
  const semaineCourante = SEMAINES_CAREME.find(s => {
    const debut = normalizeDate(new Date(s.dateDebut))
    const fin = normalizeDate(new Date(s.dateFin))
    return aujourdhui >= debut && aujourdhui <= fin
  })
  const joursPassés = JOURS_CAREME.filter(j => {
    const etat = getEtatJour(j.date, DATE_DEMO)
    return etat === 'complete'
  }).reverse()

  const joursSemaine = semaineCourante
    ? getJoursParSemaine(semaineCourante.numero)
    : []

  // Tracking GA4 : vue page Carême
  const hasTrackedPage = useRef(false)
  useEffect(() => {
    if (hasTrackedPage.current) return
    hasTrackedPage.current = true
    trackCareme.pageView(jourDuJour.jour, semaineCourante?.numero ?? 0)
  }, [jourDuJour.jour, semaineCourante?.numero])

  return (
    <div
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, ${COLORS.bgFrom}, ${COLORS.bgTo})` }}
    >
      {/* ZONE A: Header sticky + barre de progression */}
      <StickyProgressBar progression={progression} />

      {/* ZONE B: Contenu du jour */}
      <main className="max-w-2xl mx-auto px-4 pt-4 pb-8">
        {jourDuJour.estDimanche && !jourDuJour.estPaques ? (
          <TodaySunday
            jour={jourDuJour}
            saint={saintCoach}
            semaine={semaineCourante}
          />
        ) : (
          <TodaySection
            jour={jourDuJour}
            saint={saintCoach}
            semaine={semaineCourante}
          />
        )}

        {/* ZONE C: Piste de la semaine */}
        {semaineCourante && (
          <WeekStrip
            jours={joursSemaine}
            jourActif={jourDuJour.jour}
            semaine={semaineCourante}
          />
        )}

        {/* ZONE D: Journal des jours passés */}
        {joursPassés.length > 0 && (
          <PastDaysJournal
            jours={joursPassés}
            expandedJour={expandedPastJour}
            onToggle={(num) => {
              setExpandedPastJour(prev => prev === num ? null : num)
              trackCareme.jourExpand(num)
            }}
          />
        )}
      </main>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// ZONE A : Barre de progression sticky
// ═══════════════════════════════════════════════════════════

function StickyProgressBar({
  progression
}: {
  progression: { joursCompletes: number; joursTotal: number; pourcentage: number }
}) {
  return (
    <header
      className="sticky top-0 z-40 text-white py-3 px-4 shadow-md"
      style={{ background: `linear-gradient(to right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-1.5">
          <h1 className="text-lg font-bold tracking-tight">
            Carême 2026
          </h1>
          <span className="text-sm text-white/80">
            Jour {progression.joursCompletes} / {progression.joursTotal}
          </span>
        </div>
        <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${progression.pourcentage}%`, backgroundColor: COLORS.accent }}
          />
        </div>
      </div>
    </header>
  )
}

// ═══════════════════════════════════════════════════════════
// ZONE B : Contenu du jour (jours normaux)
// ═══════════════════════════════════════════════════════════

function TodaySection({
  jour,
  saint,
  semaine
}: {
  jour: JourCareme
  saint: SaintCoach | undefined
  semaine: SemaineCareme | undefined
}) {
  const dateFormatee = new Date(jour.date).toLocaleDateString('fr-CH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <section className="space-y-6 mt-2">
      {/* En-tête du jour */}
      <div className="text-center space-y-2">
        <p className="text-sm capitalize" style={{ color: COLORS.textLight }}>
          {dateFormatee}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.text }}>
          Jour {jour.jour}
        </h2>
        {semaine && (
          <p className="text-sm font-medium" style={{ color: COLORS.active }}>
            {semaine.nom} — {semaine.theme}
          </p>
        )}
      </div>

      {/* Pâques : message festif */}
      {jour.estPaques && (
        <div
          className="text-center py-6 rounded-2xl"
          style={{ backgroundColor: '#FEF9E7' }}
        >
          <Sun className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} />
          <p className="text-2xl font-bold" style={{ color: COLORS.accent }}>
            Joyeuses Pâques !
          </p>
          <p className="text-sm mt-1" style={{ color: '#92700C' }}>
            Jésus est ressuscité !
          </p>
        </div>
      )}

      {/* Action / résumé du jour */}
      <div
        className="rounded-2xl p-5"
        style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      >
        <div className="flex items-start gap-3">
          <CalendarDays className="w-5 h-5 mt-0.5 shrink-0" style={{ color: COLORS.active }} />
          <p className="text-base leading-relaxed font-medium" style={{ color: COLORS.text }}>
            {jour.contenu}
          </p>
        </div>
      </div>

      {/* Citation biblique */}
      {jour.citationBiblique && (
        <div
          className="border-l-4 pl-5 py-3"
          style={{ borderColor: COLORS.accent }}
        >
          <p
            className="text-lg italic leading-relaxed"
            style={{ color: COLORS.text, fontFamily: 'var(--font-crimson)' }}
          >
            {jour.citationBiblique}
          </p>
          {jour.verset && (
            <p className="text-sm mt-3 font-medium" style={{ color: COLORS.active }}>
              {jour.verset}
            </p>
          )}
        </div>
      )}

      {/* Méditation */}
      {jour.meditation && (
        <div
          className="rounded-2xl p-5"
          style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4" style={{ color: COLORS.active }} />
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.active }}>
              Méditation
            </p>
          </div>
          <p
            className="leading-relaxed"
            style={{ color: COLORS.textLight, fontSize: '17px', lineHeight: '1.75' }}
          >
            {jour.meditation}
          </p>
        </div>
      )}

      {/* Prière */}
      {jour.priere && (
        <div
          className="rounded-2xl p-5"
          style={{ backgroundColor: '#FEF9E7' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4" style={{ color: '#92700C' }} />
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#92700C' }}>
              Prière
            </p>
          </div>
          <p
            className="italic leading-relaxed"
            style={{ color: '#92700C', fontSize: '17px', lineHeight: '1.75', fontFamily: 'var(--font-crimson)' }}
          >
            {jour.priere}
          </p>
        </div>
      )}

      {/* Fiche saint de la semaine (visible tous les jours, en bas après le contenu du jour) */}
      {saint && <SaintCard saint={saint} />}

    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// Fiche saint réutilisable (dimanche + jours spéciaux)
// ═══════════════════════════════════════════════════════════

function SaintCard({ saint }: { saint: SaintCoach }) {
  const [lightbox, setLightbox] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
    >
      {saint.image && (
        <>
          <button
            onClick={() => {
              setLightbox(true)
              trackCareme.saintView(saint.id as Parameters<typeof trackCareme.saintView>[0])
            }}
            className="aspect-[4/3] relative overflow-hidden w-full cursor-zoom-in group"
            aria-label={`Voir la fiche complète de ${saint.nom}`}
          >
            <Image
              src={saint.image}
              alt={`Fiche identité ${saint.nom}`}
              fill
              sizes="(max-width: 672px) 100vw, 640px"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute bottom-2 right-2 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </button>

          {/* Lightbox plein écran */}
          {lightbox && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(false)}
            >
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full max-w-lg max-h-[90vh] aspect-[2/3]">
                <Image
                  src={saint.image}
                  alt={`Fiche identité ${saint.nom}`}
                  fill
                  sizes="(max-width: 512px) 100vw, 512px"
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </>
      )}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold" style={{ color: COLORS.text }}>
            {saint.nom}
          </h3>
          <p className="font-medium" style={{ color: COLORS.active }}>
            {saint.titre}
          </p>
          {saint.eglisePatronale && (
            <p className="text-sm flex items-center gap-1 mt-1" style={{ color: COLORS.textLight }}>
              <Church className="w-3.5 h-3.5" />
              Patron de {saint.eglisePatronale}
            </p>
          )}
        </div>
        <p className="leading-relaxed" style={{ color: COLORS.textLight, fontSize: '16px', lineHeight: '1.7' }}>
          {saint.description}
        </p>
        <div className="rounded-xl p-4" style={{ backgroundColor: '#FEF9E7' }}>
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4" style={{ color: '#92700C' }} />
            <p className="text-sm font-semibold" style={{ color: '#92700C' }}>Prière</p>
          </div>
          <p
            className="italic leading-relaxed"
            style={{ color: '#92700C', fontFamily: 'var(--font-crimson)' }}
          >
            &laquo; {saint.priere} &raquo;
          </p>
        </div>
        <div className="pt-2">
          <p className="text-sm font-medium mb-3" style={{ color: COLORS.text }}>
            Activités pour les enfants :
          </p>
          <div className="space-y-2">
            <DownloadButton
              icon={<Palette className="w-4 h-4" />}
              label="Coloriage"
              filename={`coloriage-${saint.id}.pdf`}
            />
            <DownloadButton
              icon={<Scissors className="w-4 h-4" />}
              label="Bricolage"
              filename={`bricolage-${saint.id}.pdf`}
            />
            <DownloadButton
              icon={<Puzzle className="w-4 h-4" />}
              label="Vitrail des 7 saints"
              filename="vitrail-7-saints.pdf"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// ZONE B variante : Dimanche (fiche saint + PDFs)
// ═══════════════════════════════════════════════════════════

function TodaySunday({
  jour,
  saint,
  semaine
}: {
  jour: JourCareme
  saint: SaintCoach | undefined
  semaine: SemaineCareme | undefined
}) {
  const dateFormatee = new Date(jour.date).toLocaleDateString('fr-CH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <section className="space-y-6 mt-2">
      {/* En-tête */}
      <div className="text-center space-y-2">
        <p className="text-sm capitalize" style={{ color: COLORS.textLight }}>
          {dateFormatee}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: COLORS.text }}>
          Jour {jour.jour}
        </h2>
        {semaine && (
          <p className="text-sm font-medium" style={{ color: COLORS.active }}>
            {semaine.nom} — {semaine.theme}
          </p>
        )}
      </div>

      {/* Action / résumé du jour */}
      <div
        className="rounded-2xl p-5"
        style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      >
        <div className="flex items-start gap-3">
          <CalendarDays className="w-5 h-5 mt-0.5 shrink-0" style={{ color: COLORS.active }} />
          <p className="text-base leading-relaxed font-medium" style={{ color: COLORS.text }}>
            {jour.contenu}
          </p>
        </div>
      </div>

      {/* Méditation dimanche (certains dimanches en ont) */}
      {jour.meditation && (
        <div
          className="rounded-2xl p-5"
          style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4" style={{ color: COLORS.active }} />
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.active }}>
              Méditation
            </p>
          </div>
          <p
            className="leading-relaxed"
            style={{ color: COLORS.textLight, fontSize: '17px', lineHeight: '1.75' }}
          >
            {jour.meditation}
          </p>
        </div>
      )}

      {/* Fiche saint + activités enfants (en bas) */}
      {saint && <SaintCard saint={saint} />}
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ZONE C : Piste de la semaine
// ═══════════════════════════════════════════════════════════

function WeekStrip({
  jours,
  jourActif,
  semaine
}: {
  jours: JourCareme[]
  jourActif: number
  semaine: SemaineCareme
}) {
  const saint = getSaintById(semaine.saintCoachId)

  return (
    <section className="mt-10 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.textLight }}>
          {semaine.nom}
        </h3>
        {saint && (
          <span className="text-xs" style={{ color: COLORS.active }}>
            {saint.nom}
          </span>
        )}
      </div>

      {/* Trail horizontal */}
      <div className="flex items-center justify-between relative">
        {/* Ligne de fond */}
        <div
          className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
          style={{ backgroundColor: COLORS.activeRing }}
        />

        {jours.map((jour) => {
          const etat = getEtatJour(jour.date, DATE_DEMO)
          const isActif = jour.jour === jourActif
          const jourDate = new Date(jour.date)
          const jourDuMois = jourDate.getDate()
          const jourLabel = jour.jourSemaine.slice(0, 2)

          return (
            <div key={jour.jour} className="flex flex-col items-center relative z-10">
              <span
                className="text-xs mb-1 font-medium"
                style={{ color: isActif ? COLORS.active : COLORS.textLight }}
              >
                {jourLabel}
              </span>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all"
                style={{
                  backgroundColor: isActif
                    ? COLORS.active
                    : etat === 'complete'
                      ? COLORS.complete
                      : 'white',
                  color: etat === 'verrouille' ? COLORS.textLight : 'white',
                  boxShadow: isActif
                    ? `0 0 0 3px ${COLORS.activeRing}, 0 4px 12px rgba(139,124,179,0.3)`
                    : etat === 'verrouille'
                      ? 'inset 0 0 0 1px #e5e7eb'
                      : 'none',
                  ...(jour.estDimanche ? { border: `2px solid ${COLORS.accent}` } : {})
                }}
              >
                {jourDuMois}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ZONE D : Journal des jours passés
// ═══════════════════════════════════════════════════════════

function PastDaysJournal({
  jours,
  expandedJour,
  onToggle
}: {
  jours: JourCareme[]
  expandedJour: number | null
  onToggle: (num: number) => void
}) {
  return (
    <section>
      <h3
        className="text-sm font-semibold uppercase tracking-wide mb-4"
        style={{ color: COLORS.textLight }}
      >
        Jours précédents
      </h3>
      <div className="space-y-2">
        {jours.map((jour) => (
          <PastDayCard
            key={jour.jour}
            jour={jour}
            isExpanded={expandedJour === jour.jour}
            onToggle={() => onToggle(jour.jour)}
          />
        ))}
      </div>
    </section>
  )
}

function PastDayCard({
  jour,
  isExpanded,
  onToggle
}: {
  jour: JourCareme
  isExpanded: boolean
  onToggle: () => void
}) {
  const dateFormatee = new Date(jour.date).toLocaleDateString('fr-CH', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  })

  return (
    <div
      className="rounded-xl overflow-hidden transition-colors"
      style={{ backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full flex items-center gap-3 p-3 text-left"
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
          style={{ backgroundColor: COLORS.complete, color: 'white' }}
        >
          {jour.jour}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate" style={{ color: COLORS.text }}>
            {jour.contenu}
          </p>
          <p className="text-xs capitalize" style={{ color: COLORS.textLight }}>
            {dateFormatee}
          </p>
        </div>
        <ChevronDown
          className="w-4 h-4 shrink-0 transition-transform duration-200"
          style={{
            color: COLORS.textLight,
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>

      {/* Contenu dépliable */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isExpanded ? '800px' : '0' }}
      >
        <div className="px-4 pb-4 pt-1 space-y-3">
          {jour.citationBiblique && (
            <div className="border-l-2 pl-3 py-1" style={{ borderColor: COLORS.accent }}>
              <p
                className="text-sm italic leading-relaxed"
                style={{ color: COLORS.text, fontFamily: 'var(--font-crimson)' }}
              >
                {jour.citationBiblique}
              </p>
              {jour.verset && (
                <p className="text-xs mt-1 font-medium" style={{ color: COLORS.active }}>
                  {jour.verset}
                </p>
              )}
            </div>
          )}
          {jour.meditation && (
            <p className="text-sm leading-relaxed" style={{ color: COLORS.textLight }}>
              {jour.meditation}
            </p>
          )}
          {jour.priere && (
            <div className="rounded-lg p-3" style={{ backgroundColor: '#FEF9E7' }}>
              <p
                className="text-sm italic leading-relaxed"
                style={{ color: '#92700C', fontFamily: 'var(--font-crimson)' }}
              >
                {jour.priere}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// Bouton de téléchargement (conservé)
// ═══════════════════════════════════════════════════════════

function DownloadButton({
  icon,
  label,
  filename
}: {
  icon: React.ReactNode
  label: string
  filename: string
}) {
  // Extraire saintId et pdfType depuis le nom de fichier (ex: "coloriage-carlo-acutis.pdf")
  const handleClick = () => {
    const match = filename.match(/^(coloriage|bricolage)-(.+)\.pdf$/)
    if (match) {
      trackCareme.pdfDownload(match[2] as Parameters<typeof trackCareme.pdfDownload>[0], match[1] as 'coloriage' | 'bricolage')
    }
  }

  return (
    <a
      href={`/documents/careme/${filename}`}
      download
      onClick={handleClick}
      className="flex items-center gap-3 p-3 rounded-xl transition-colors group"
      style={{ backgroundColor: '#f9fafb' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.lightBg}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
    >
      <div
        className="p-2 rounded-lg transition-colors"
        style={{ backgroundColor: COLORS.lightBg, color: COLORS.active }}
      >
        {icon}
      </div>
      <span className="flex-1" style={{ color: COLORS.text }}>{label}</span>
      <Download className="w-4 h-4" style={{ color: COLORS.textLight }} />
    </a>
  )
}

// ═══════════════════════════════════════════════════════════
// CountdownView : Avant le Carême
// ═══════════════════════════════════════════════════════════

function CountdownView({ aujourdhui }: { aujourdhui: Date }) {
  const joursRestants = Math.ceil(
    (normalizeDate(DATE_DEBUT).getTime() - aujourdhui.getTime()) / (1000 * 60 * 60 * 24)
  )

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: `linear-gradient(to bottom, ${COLORS.bgFrom}, ${COLORS.bgTo})` }}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center space-y-4 max-w-md">
          <p className="text-sm uppercase tracking-wider font-medium" style={{ color: COLORS.active }}>
            Carême 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: COLORS.text }}>
            Prophète ? Moi ?
          </h1>
          <p style={{ color: COLORS.textLight }}>
            47 jours pour devenir porte-parole de Dieu
          </p>

          <div className="py-6">
            <div
              className="inline-flex items-center justify-center w-24 h-24 rounded-full text-white"
              style={{ background: `linear-gradient(to bottom right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
            >
              <div className="text-center">
                <span className="text-3xl font-bold block">{joursRestants}</span>
                <span className="text-xs text-white/80">
                  {joursRestants === 1 ? 'jour' : 'jours'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm" style={{ color: COLORS.textLight }}>
            Le Carême commence le 18 février
          </p>
        </div>

        {/* Aperçu des 7 saints coachs */}
        <div className="mt-10 w-full max-w-md">
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-4 text-center"
            style={{ color: COLORS.textLight }}
          >
            Vos 7 saints coachs
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            {SAINTS_COACHS.map((saint) => (
              <div key={saint.id} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  {saint.image ? (
                    <Image
                      src={saint.image}
                      alt={saint.nom}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: `linear-gradient(to bottom right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
                    >
                      {saint.nom.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-xs text-center max-w-[60px] leading-tight" style={{ color: COLORS.textLight }}>
                  {saint.nom.split(' ').pop()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// CompletedView : Après Pâques (navigation libre)
// ═══════════════════════════════════════════════════════════

function CompletedView({
  browseJour,
  setBrowseJour
}: {
  browseJour: number | null
  setBrowseJour: (j: number | null) => void
}) {
  const selectedJour = browseJour
    ? JOURS_CAREME.find(j => j.jour === browseJour)
    : null

  return (
    <div
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, ${COLORS.bgFrom}, ${COLORS.bgTo})` }}
    >
      <header
        className="text-white py-6 px-4 text-center"
        style={{ background: `linear-gradient(to right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
      >
        <p className="text-white/70 text-sm uppercase tracking-wider mb-1">
          Carême 2026
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">
          Prophète ? Moi ?
        </h1>
        <p className="text-white/80 text-sm mt-1">
          Le chemin est accompli. Relisez les 47 jours.
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Contenu sélectionné */}
        {selectedJour && (
          <div className="mb-8">
            <button
              onClick={() => setBrowseJour(null)}
              className="text-sm mb-4 font-medium"
              style={{ color: COLORS.active }}
            >
              Retour à la liste
            </button>
            <TodaySection
              jour={selectedJour}
              saint={getSaintById(selectedJour.saintCoachId)}
              semaine={SEMAINES_CAREME.find(s => {
                const debut = new Date(s.dateDebut)
                const fin = new Date(s.dateFin)
                const d = new Date(selectedJour.date)
                return d >= debut && d <= fin
              })}
            />
          </div>
        )}

        {/* Liste des 47 jours */}
        {!selectedJour && (
          <div className="space-y-2">
            {SEMAINES_CAREME.map((semaine) => {
              const saint = getSaintById(semaine.saintCoachId)
              const jours = getJoursParSemaine(semaine.numero)

              return (
                <div key={semaine.numero}>
                  <div className="flex items-center gap-2 py-3">
                    {saint && saint.image && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm shrink-0">
                        <Image
                          src={saint.image}
                          alt={saint.nom}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold" style={{ color: COLORS.text }}>
                        {semaine.nom}
                      </p>
                      {semaine.theme && (
                        <p className="text-xs" style={{ color: COLORS.textLight }}>
                          {semaine.theme}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    {jours.map((jour) => {
                      const dateFormatee = new Date(jour.date).toLocaleDateString('fr-CH', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                      })
                      return (
                        <button
                          key={jour.jour}
                          onClick={() => {
                            setBrowseJour(jour.jour)
                            trackCareme.browsePastDay(jour.jour)
                          }}
                          className="w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-colors hover:bg-white/80"
                          style={{ backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
                        >
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                            style={{
                              backgroundColor: jour.estPaques ? COLORS.accent : COLORS.complete,
                              color: 'white'
                            }}
                          >
                            {jour.jour}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate" style={{ color: COLORS.text }}>
                              {jour.contenu}
                            </p>
                          </div>
                          <span className="text-xs shrink-0 capitalize" style={{ color: COLORS.textLight }}>
                            {dateFormatee}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
