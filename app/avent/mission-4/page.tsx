'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Clock, Star, Sparkles } from 'lucide-react'

// ============================================
// DATE D'ACTIVATION DE LA MISSION
// ============================================
const DATE_ACTIVATION = new Date('2025-12-21T00:00:00+01:00')

// ============================================
// COMPOSANT COMPTE À REBOURS
// ============================================
function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
          heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          secondes: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {[
        { value: timeLeft.jours, label: 'jours' },
        { value: timeLeft.heures, label: 'heures' },
        { value: timeLeft.minutes, label: 'min' },
        { value: timeLeft.secondes, label: 'sec' }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px] border border-white/30">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-blue-100 mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

// ============================================
// PAGE MISSION 4 - COMPTE À REBOURS
// ============================================
export default function Mission4Page() {
  const [isActivated, setIsActivated] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const now = new Date()
    setIsActivated(now >= DATE_ACTIVATION)
  }, [])

  // Évite le flash de contenu pendant l'hydratation
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
        <div className="animate-pulse">
          <Star className="w-12 h-12 text-blue-300" />
        </div>
      </div>
    )
  }

  // Si la mission est activée, on affichera le contenu complet (à développer)
  if (isActivated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
        <div className="container mx-auto px-4 py-8 max-w-lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/avent"
              className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Retour</span>
            </Link>
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Semaine 4</span>
            </div>
          </div>

          {/* Contenu activé - placeholder */}
          <div className="text-center py-12">
            <div className="relative w-64 h-64 mx-auto mb-8">
              <Image
                src="/images/avent/personnages/Sky.png"
                alt="Sky"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Mission de Sky
            </h1>
            <p className="text-blue-100 text-lg">
              La mission arrive bientôt...
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Page compte à rebours
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      {/* Étoiles décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-blue-300/40" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 max-w-lg relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/avent"
            className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
          <div className="flex items-center gap-2 text-blue-300">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Bientôt disponible</span>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="text-center">
          {/* Badge semaine */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-blue-300" />
            <span className="text-blue-100 text-sm font-medium">Semaine 4 - Du 21 au 25 décembre</span>
          </div>

          {/* Image Sky */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 mx-auto mb-8">
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
            <Image
              src="/images/avent/personnages/Sky.png"
              alt="Sky - Personnage de la semaine 4"
              fill
              className="object-contain drop-shadow-2xl relative z-10"
              priority
            />
          </div>

          {/* Titre */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Sky arrive bientôt !
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-sm mx-auto">
            La dernière mission du calendrier de l&apos;Avent t&apos;attend à l&apos;église d&apos;Aproz...
          </p>

          {/* Compte à rebours */}
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-600/30 mb-8">
            <p className="text-blue-200 text-sm mb-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              La mission commence dans...
            </p>
            <Countdown targetDate={DATE_ACTIVATION} />
          </div>

          {/* Message teaser */}
          <div className="bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-600/20 rounded-xl p-5 border border-blue-500/20">
            <p className="text-blue-100 italic">
              &quot;Je suis Sky, et je vais t&apos;accompagner pour la dernière semaine
              avant Noël ! Prépare-toi pour une belle aventure...&quot;
            </p>
            <p className="text-blue-300 text-sm mt-3">
              Rendez-vous le 21 décembre !
            </p>
          </div>

          {/* Lien retour calendrier */}
          <div className="mt-10">
            <Link
              href="/avent"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Voir le calendrier de l&apos;Avent
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
