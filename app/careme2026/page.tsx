'use client'

import { useState } from 'react'
import {
  JOURS_CAREME,
  SEMAINES_CAREME,
  getSaintById,
  getEtatJour,
  getProgression,
  getJoursParSemaine,
  type JourCareme,
  type EtatJour
} from '@/lib/careme-data'
import Image from 'next/image'
import {
  Lock,
  Check,
  ChevronDown,
  ChevronUp,
  X,
  Download,
  Church,
  BookOpen,
  Palette,
  Scissors,
  Star
} from 'lucide-react'

// Palette "Lavande Douce" - Option A
const COLORS = {
  headerFrom: '#8B7CB3',      // Lavande moyenne
  headerTo: '#6B5B95',        // Lavande profonde
  active: '#8B7CB3',          // Lavande moyenne
  activeRing: '#C4B7D4',      // Lavande claire
  complete: '#7BA087',        // Vert sauge doux
  accent: '#D4AF37',          // Or doux
  bgFrom: '#F5F3F7',          // Fond très clair
  bgTo: '#EDE8F2',            // Fond lavande pâle
  text: '#4A4063',            // Texte violet foncé
  textLight: '#7B6E8F',       // Texte violet moyen
  lightBg: '#F0EBF4',         // Fond clair pour cards
}

// Date de démonstration (à remplacer par new Date() en production)
// Pour tester : mettre une date entre le 18 fév et le 5 avril 2026
const DATE_DEMO = new Date('2026-03-08') // Dimanche St Nicolas de Flüe

export default function Careme2026Page() {
  const [selectedJour, setSelectedJour] = useState<JourCareme | null>(null)
  const [expandedSemaines, setExpandedSemaines] = useState<number[]>([0, 1, 2, 3, 4, 5, 6])

  const progression = getProgression(DATE_DEMO)

  const toggleSemaine = (numero: number) => {
    setExpandedSemaines(prev =>
      prev.includes(numero)
        ? prev.filter(n => n !== numero)
        : [...prev, numero]
    )
  }

  const handleJourClick = (jour: JourCareme, etat: EtatJour) => {
    if (etat !== 'verrouille') {
      setSelectedJour(jour)
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, ${COLORS.bgFrom}, ${COLORS.bgTo})` }}
    >
      {/* Header */}
      <header
        className="text-white py-8 px-4"
        style={{ background: `linear-gradient(to right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/70 text-sm uppercase tracking-wider mb-2">
            Carême 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Prophète ? Moi ?
          </h1>
          <p className="text-white/80 text-lg">
            47 jours pour devenir porte-parole de Dieu
          </p>

          {/* Barre de progression */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-white/70 mb-1">
              <span>Jour {progression.joursCompletes} / {progression.joursTotal}</span>
              <span>{progression.pourcentage}%</span>
            </div>
            <div className="h-3 bg-black/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progression.pourcentage}%`, backgroundColor: COLORS.accent }}
              />
            </div>
            <p className="text-xs text-white/60 mt-2">
              18 février → 5 avril 2026
            </p>
          </div>
        </div>
      </header>

      {/* Timeline des semaines */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {SEMAINES_CAREME.map((semaine) => {
            const saint = getSaintById(semaine.saintCoachId)
            const jours = getJoursParSemaine(semaine.numero)
            const isExpanded = expandedSemaines.includes(semaine.numero)

            return (
              <section
                key={semaine.numero}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                {/* Header de la semaine */}
                <button
                  onClick={() => toggleSemaine(semaine.numero)}
                  className="w-full px-4 py-4 flex items-center gap-4 transition-colors"
                  style={{ backgroundColor: isExpanded ? COLORS.lightBg : 'white' }}
                >
                  {/* Avatar Saint */}
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                    {saint?.image ? (
                      <Image
                        src={saint.image}
                        alt={saint.nom}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-white text-xl font-bold"
                        style={{ background: `linear-gradient(to bottom right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
                      >
                        {saint?.nom.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Infos semaine */}
                  <div className="flex-1 text-left">
                    <p
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: COLORS.active }}
                    >
                      {semaine.nom}
                    </p>
                    <h2 className="text-lg font-semibold" style={{ color: COLORS.text }}>
                      {saint?.nom}
                    </h2>
                    {saint?.eglisePatronale && (
                      <p className="text-sm flex items-center gap-1" style={{ color: COLORS.textLight }}>
                        <Church className="w-3 h-3" />
                        {saint.eglisePatronale}
                      </p>
                    )}
                  </div>

                  {/* Chevron */}
                  <div style={{ color: COLORS.textLight }}>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Jours de la semaine */}
                {isExpanded && (
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-7 gap-2">
                      {jours.map((jour) => {
                        const etat = getEtatJour(jour.date, DATE_DEMO)
                        return (
                          <JourCard
                            key={jour.jour}
                            jour={jour}
                            etat={etat}
                            onClick={() => handleJourClick(jour, etat)}
                          />
                        )
                      })}
                    </div>
                  </div>
                )}
              </section>
            )
          })}
        </div>

        {/* Légende */}
        <div className="mt-8 flex justify-center gap-6 text-sm" style={{ color: COLORS.textLight }}>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center">
              <Lock className="w-2 h-2 text-gray-400" />
            </div>
            <span>À venir</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: COLORS.active, boxShadow: `0 0 0 2px ${COLORS.activeRing}` }}
            />
            <span>Aujourd'hui</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded flex items-center justify-center"
              style={{ backgroundColor: COLORS.complete }}
            >
              <Check className="w-2 h-2 text-white" />
            </div>
            <span>Fait</span>
          </div>
        </div>
      </main>

      {/* Modal détail jour */}
      {selectedJour && (
        <JourModal
          jour={selectedJour}
          onClose={() => setSelectedJour(null)}
        />
      )}
    </div>
  )
}

// Composant carte jour
function JourCard({
  jour,
  etat,
  onClick
}: {
  jour: JourCareme
  etat: EtatJour
  onClick: () => void
}) {
  const jourDuMois = new Date(jour.date).getDate()

  const getStyles = () => {
    switch (etat) {
      case 'verrouille':
        return {
          backgroundColor: '#f3f4f6',
          color: '#9ca3af',
          cursor: 'not-allowed'
        }
      case 'actif':
        return {
          backgroundColor: COLORS.active,
          color: 'white',
          boxShadow: `0 0 0 4px ${COLORS.activeRing}, 0 10px 15px -3px rgba(0,0,0,0.1)`,
          cursor: 'pointer'
        }
      case 'complete':
        return {
          backgroundColor: COLORS.complete,
          color: 'white',
          cursor: 'pointer'
        }
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={etat === 'verrouille'}
      className="aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200"
      style={{
        ...getStyles(),
        ...(jour.estDimanche && etat !== 'verrouille' ? { boxShadow: `0 0 0 2px ${COLORS.accent}` } : {})
      }}
    >
      {etat === 'verrouille' ? (
        <Lock className="w-4 h-4" />
      ) : etat === 'complete' ? (
        <>
          <Check className="w-4 h-4" />
          <span className="text-xs mt-0.5">{jourDuMois}</span>
        </>
      ) : (
        <>
          <span className="text-lg font-bold">{jourDuMois}</span>
          {jour.estDimanche && <Star className="w-3 h-3 mt-0.5" style={{ color: COLORS.accent }} />}
        </>
      )}
    </button>
  )
}

// Modal détail jour
function JourModal({
  jour,
  onClose
}: {
  jour: JourCareme
  onClose: () => void
}) {
  const saint = getSaintById(jour.saintCoachId)
  const dateFormatee = new Date(jour.date).toLocaleDateString('fr-CH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[85vh] overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header modal */}
        <div
          className="sticky top-0 text-white p-6 rounded-t-3xl"
          style={{ background: `linear-gradient(to right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="text-white/70 text-sm capitalize">{dateFormatee}</p>
          <h2 className="text-2xl font-bold mt-1">Jour {jour.jour}</h2>
          {jour.estPaques && (
            <p className="font-semibold mt-1" style={{ color: COLORS.accent }}>
              Joyeuses Pâques !
            </p>
          )}
        </div>

        {/* Contenu */}
        <div className="p-6">
          {/* Message du jour */}
          <div className="rounded-2xl p-5 mb-6" style={{ backgroundColor: COLORS.lightBg }}>
            <p className="text-lg leading-relaxed" style={{ color: COLORS.text }}>
              {jour.contenu}
            </p>
          </div>

          {/* Section Saint (pour les dimanches) */}
          {jour.estDimanche && saint && (
            <div className="border-t pt-6">
              {/* Image fiche complète du saint */}
              {saint.image && (
                <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={saint.image}
                    alt={`Fiche identité ${saint.nom}`}
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                  {saint.image ? (
                    <Image
                      src={saint.image}
                      alt={saint.nom}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
                      style={{ background: `linear-gradient(to bottom right, ${COLORS.headerFrom}, ${COLORS.headerTo})` }}
                    >
                      {saint.nom.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: COLORS.text }}>
                    {saint.nom}
                  </h3>
                  <p style={{ color: COLORS.active }}>{saint.titre}</p>
                  {saint.eglisePatronale && (
                    <p className="text-sm flex items-center gap-1" style={{ color: COLORS.textLight }}>
                      <Church className="w-3 h-3" />
                      Patron de {saint.eglisePatronale}
                    </p>
                  )}
                </div>
              </div>

              <p className="mb-4" style={{ color: COLORS.textLight }}>
                {saint.description}
              </p>

              <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: '#FEF9E7' }}>
                <p className="text-sm italic" style={{ color: '#92700C' }}>
                  "{saint.priere}"
                </p>
              </div>

              {/* Boutons téléchargement */}
              <div className="space-y-2">
                <p className="text-sm font-medium mb-3" style={{ color: COLORS.text }}>
                  Activités pour les enfants :
                </p>
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
                  icon={<BookOpen className="w-4 h-4" />}
                  label="Vitrail à colorier"
                  filename={`vitrail-${saint.id}.pdf`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Bouton de téléchargement
function DownloadButton({
  icon,
  label,
  filename
}: {
  icon: React.ReactNode
  label: string
  filename: string
}) {
  return (
    <a
      href={`/documents/careme/${filename}`}
      download
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
