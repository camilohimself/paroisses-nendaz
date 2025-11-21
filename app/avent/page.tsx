'use client'

import { useEffect, useState } from 'react'
import { Calendar, Sparkles } from 'lucide-react'

export default function AventPage() {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0
  })

  const [isLaunched, setIsLaunched] = useState(false)

  useEffect(() => {
    const launchDate = new Date('2025-11-30T00:00:00+01:00') // 30 novembre 2025, minuit (Europe/Zurich)

    const updateCountdown = () => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        setIsLaunched(true)
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

  if (isLaunched) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-emerald-50 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <Sparkles className="w-20 h-20 mx-auto mb-6 text-amber-500" />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            L'aventure de l'Avent commence !
          </h1>
          <p className="text-xl text-slate-600">
            Le contenu sera bientôt disponible...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 via-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <div className="text-center max-w-4xl w-full">
        {/* Titre principal */}
        <div className="mb-8">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-slate-700" />
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            Calendrier de l'Avent
          </h1>
          <p className="text-2xl md:text-3xl font-light text-slate-600 mb-2">
            L'aventure commence bientôt...
          </p>
        </div>

        {/* Compteur avec 4 couleurs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {/* Jours - Jaune */}
          <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-6 md:p-8 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.jours}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.jours > 1 ? 'Jours' : 'Jour'}
            </div>
          </div>

          {/* Heures - Rouge */}
          <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-6 md:p-8 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.heures}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.heures > 1 ? 'Heures' : 'Heure'}
            </div>
          </div>

          {/* Minutes - Vert */}
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 md:p-8 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.minutes > 1 ? 'Minutes' : 'Minute'}
            </div>
          </div>

          {/* Secondes - Bleu */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 md:p-8 shadow-lg transform hover:scale-105 transition-transform">
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {timeLeft.secondes}
            </div>
            <div className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
              {timeLeft.secondes > 1 ? 'Secondes' : 'Seconde'}
            </div>
          </div>
        </div>

        {/* Message inférieur */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <p className="text-lg md:text-xl text-slate-700 font-medium">
            Une aventure interactive avec 4 semaines de découvertes et de missions
          </p>
          <p className="text-sm md:text-base text-slate-500 mt-2">
            Paroisses de Nendaz
          </p>
        </div>
      </div>
    </div>
  )
}
