'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronRight, ChevronLeft, Play, Lock, Sparkles, BookOpen, Music, X, Flame } from 'lucide-react'
import {
  SEMAINES_AVENT,
  JOURS_SEMAINE_1,
  getSemaineActuelle,
  getJourActuel,
  estJourAccessible,
  getJourData,
  getSemaineParJour,
  type JourAvent,
  type SemaineAvent
} from '@/lib/avent-data'

// ============================================
// COMPOSANT MODAL JOUR
// ============================================
function ModalJour({
  jour,
  semaine,
  onClose
}: {
  jour: JourAvent
  semaine: SemaineAvent
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-gradient-to-br ${semaine.couleurTailwind.bgGradient}`}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm border-b border-white/50">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${semaine.couleurTailwind.accent} flex items-center justify-center text-white font-bold`}>
              {jour.jour}
            </div>
            <div>
              <p className="text-sm text-slate-500">
                {new Date(jour.date).toLocaleDateString('fr-CH', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>
              <h3 className={`font-bold ${semaine.couleurTailwind.text}`}>{jour.titre}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6 space-y-6">
          {/* Texte biblique */}
          {jour.texteBiblique && (
            <div className="bg-white/70 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <BookOpen className={`w-5 h-5 mt-1 ${semaine.couleurTailwind.text} flex-shrink-0`} />
                <p className="text-slate-800 font-medium leading-relaxed">
                  {jour.texteBiblique}
                </p>
              </div>
            </div>
          )}

          {/* Méditation */}
          {jour.meditation && (
            <div className="space-y-3">
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {jour.meditation}
              </p>
            </div>
          )}

          {/* Prière */}
          {jour.priere && (
            <div className={`rounded-2xl p-5 border-2 ${semaine.couleurTailwind.border} bg-white/50`}>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line italic">
                {jour.priere}
              </p>
            </div>
          )}

          {/* Indicateur bougie */}
          {jour.special === 'bougie' && (
            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <Flame className="w-6 h-6 text-amber-500" />
              <p className="text-amber-800 font-medium">
                J'allume une bougie sur le bord de ma fenêtre
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// COMPOSANT CASE CALENDRIER
// ============================================
function CaseCalendrier({
  jour,
  accessible,
  semaine,
  onClick,
  estAujourdhui
}: {
  jour: number
  accessible: boolean
  semaine: SemaineAvent
  onClick: () => void
  estAujourdhui: boolean
}) {
  const baseClasses = "relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"

  if (!accessible) {
    return (
      <div className={`${baseClasses} bg-stone-200/50 cursor-not-allowed`}>
        <Lock className="w-4 h-4 text-stone-400 mb-1" />
        <span className="text-lg font-bold text-stone-400">{jour}</span>
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${semaine.couleurTailwind.accent} text-white shadow-lg hover:scale-105 hover:shadow-xl ${estAujourdhui ? 'ring-4 ring-white ring-offset-2 ring-offset-stone-100' : ''}`}
    >
      {estAujourdhui && (
        <Sparkles className="absolute top-1 right-1 w-4 h-4 text-white/80 animate-pulse" />
      )}
      <span className="text-2xl md:text-3xl font-bold">{jour}</span>
      {estAujourdhui && (
        <span className="text-[10px] uppercase tracking-wide opacity-80">Aujourd'hui</span>
      )}
    </div>
  )
}

// ============================================
// COMPOSANT SECTION SEMAINE
// ============================================
function SectionSemaine({ semaine }: { semaine: SemaineAvent }) {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className={`rounded-3xl p-6 md:p-8 bg-gradient-to-br ${semaine.couleurTailwind.bgGradient} shadow-lg`}>
      {/* Header semaine */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="flex items-center gap-4">
          <Image
            src={`/images/avent/personnages/${semaine.personnage}.png`}
            alt={semaine.personnage}
            width={80}
            height={100}
            className="object-contain"
          />
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-wide">Semaine {semaine.numero}</p>
            <h2 className={`text-2xl md:text-3xl font-bold ${semaine.couleurTailwind.text}`}>
              {semaine.theme}
            </h2>
            <p className="text-slate-600 mt-1">
              Avec <strong>{semaine.personnage}</strong> ({semaine.signification})
            </p>
          </div>
        </div>
      </div>

      {/* Psaume */}
      <div className="bg-white/70 rounded-2xl p-5 mb-6">
        <p className="text-sm font-medium text-slate-500 mb-2">{semaine.psaume.numero}</p>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line italic">
          {semaine.psaume.texte}
        </p>
      </div>

      {/* Prière de la semaine */}
      <div className={`rounded-2xl p-5 mb-6 border-2 ${semaine.couleurTailwind.border} bg-white/50`}>
        <h3 className={`font-bold mb-3 ${semaine.couleurTailwind.text}`}>Prière de la semaine</h3>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
          {semaine.priereSemaine}
        </p>
      </div>

      {/* Chant */}
      <div className="bg-white/70 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Music className={`w-5 h-5 ${semaine.couleurTailwind.text}`} />
            <div>
              <p className="text-sm text-slate-500">Chant de la semaine</p>
              <p className={`font-bold ${semaine.couleurTailwind.text}`}>{semaine.chant.titre}</p>
            </div>
          </div>
          <button
            onClick={() => setShowVideo(!showVideo)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${semaine.couleurTailwind.accent} text-white font-medium hover:opacity-90 transition-opacity`}
          >
            <Play className="w-4 h-4" />
            {showVideo ? 'Masquer' : 'Écouter'}
          </button>
        </div>

        {showVideo && (
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${semaine.chant.youtubeId}`}
              title={semaine.chant.titre}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  )
}

// ============================================
// PAGE PRINCIPALE
// ============================================
export default function AventPage() {
  const [jourActuel, setJourActuel] = useState(0)
  const [semaineActuelle, setSemaineActuelle] = useState<SemaineAvent>(SEMAINES_AVENT[0])
  const [selectedJour, setSelectedJour] = useState<JourAvent | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const jour = getJourActuel()
    setJourActuel(jour)
    setSemaineActuelle(getSemaineActuelle())
  }, [])

  // Avant le 1er décembre, afficher le compteur
  if (isClient && jourActuel === 0) {
    return <CompteurAvantLancement />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 pt-6 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Fil d'Ariane */}
          <Link
            href="/actualites"
            className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour aux actualités
          </Link>

          {/* Titre + Image groupe */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-stone-800 mb-4">
              Calendrier de l'Avent
            </h1>
            <p className="text-lg text-stone-600 mb-6">
              Pèlerins de l'espérance — Une démarche spirituelle pour toute la famille
            </p>

            {/* Image groupe des 4 personnages */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/avent/personnages/groupe.png"
                alt="Les 4 pèlerins de l'espérance"
                width={320}
                height={200}
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          {/* CTA Mission en cours */}
          <div className={`rounded-2xl p-6 shadow-lg bg-gradient-to-r ${semaineActuelle.couleurTailwind.bgGradient} border-2 ${semaineActuelle.couleurTailwind.border}`}>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image
                src={`/images/avent/personnages/${semaineActuelle.personnage}.png`}
                alt={semaineActuelle.personnage}
                width={60}
                height={75}
                className="object-contain"
              />
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-slate-600 uppercase tracking-wide">Défi de la semaine {semaineActuelle.numero}</p>
                <h2 className={`text-xl font-bold ${semaineActuelle.couleurTailwind.text}`}>
                  Mission avec {semaineActuelle.personnage}
                </h2>
              </div>
              <Link
                href={`/avent/mission-${semaineActuelle.numero}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-full ${semaineActuelle.couleurTailwind.accent} text-white font-bold shadow-lg hover:opacity-90 transition-opacity`}
              >
                Participer
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-stone-700" />
            <h2 className="text-2xl font-bold text-stone-800">Décembre 2025</h2>
          </div>

          {/* Grille 5x5 pour les 25 jours */}
          <div className="grid grid-cols-5 gap-2 md:gap-3">
            {Array.from({ length: 25 }, (_, i) => i + 1).map((jour) => {
              const accessible = isClient ? estJourAccessible(jour) : false
              const semaine = getSemaineParJour(jour)
              const estAujourdhui = jour === jourActuel

              return (
                <CaseCalendrier
                  key={jour}
                  jour={jour}
                  accessible={accessible}
                  semaine={semaine}
                  estAujourdhui={estAujourdhui}
                  onClick={() => {
                    if (accessible) {
                      const data = getJourData(jour)
                      if (data) setSelectedJour(data)
                    }
                  }}
                />
              )
            })}
          </div>

          {/* Légende des couleurs */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {SEMAINES_AVENT.map((s) => (
              <div key={s.numero} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${s.couleurTailwind.accent}`} />
                <span className="text-sm text-slate-600">S{s.numero}: {s.personnage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section semaine en cours */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <SectionSemaine semaine={semaineActuelle} />
        </div>
      </section>

      {/* Modal jour */}
      {selectedJour && (
        <ModalJour
          jour={selectedJour}
          semaine={getSemaineParJour(selectedJour.jour)}
          onClose={() => setSelectedJour(null)}
        />
      )}
    </div>
  )
}

// ============================================
// COMPTEUR AVANT LANCEMENT (avant le 1er déc)
// ============================================
function CompteurAvantLancement() {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0
  })

  useEffect(() => {
    const launchDate = new Date('2025-12-01T00:00:00+01:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        window.location.reload()
        return
      }

      const jours = Math.floor(difference / (1000 * 60 * 60 * 24))
      const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const secondes = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ jours, heures, minutes, secondes })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl w-full">
        <div className="mb-8">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-stone-700" />
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-4">
            Calendrier de l'Avent
          </h1>
          <p className="text-2xl md:text-3xl font-light text-stone-600 mb-2">
            L'aventure commence bientôt...
          </p>
        </div>

        {/* Image groupe */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/avent/personnages/groupe.png"
            alt="Les 4 pèlerins de l'espérance"
            width={280}
            height={175}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Compteur */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-gradient-to-br from-stone-700 to-stone-800 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.jours}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.jours > 1 ? 'Jours' : 'Jour'}
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-600 to-stone-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.heures}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.heures > 1 ? 'Heures' : 'Heure'}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.minutes > 1 ? 'Minutes' : 'Minute'}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.secondes}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.secondes > 1 ? 'Secondes' : 'Seconde'}
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <p className="text-lg md:text-xl text-stone-700 font-medium">
            Une aventure interactive avec 4 semaines de découvertes et de missions
          </p>
          <p className="text-sm md:text-base text-stone-500 mt-2">
            Paroisses de Nendaz
          </p>
        </div>
      </div>
    </div>
  )
}
