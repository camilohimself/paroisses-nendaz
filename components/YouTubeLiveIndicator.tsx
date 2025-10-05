'use client'

import { useState, useEffect } from 'react'

interface YouTubeLiveIndicatorProps {
  channelHandle?: string
  className?: string
}

export default function YouTubeLiveIndicator({ 
  channelHandle = "@paroissesnendazetveysonnaz",
  className = "" 
}: YouTubeLiveIndicatorProps) {
  const [isLive, setIsLive] = useState(false)
  const [nextMassTime, setNextMassTime] = useState<string>("")
  
  useEffect(() => {
    // Simulation de vérification du statut live
    // Dans un environnement réel, on utiliserait l'API YouTube Data API v3
    checkLiveStatus()
    getNextMassTime()
    
    // Vérifier le statut toutes les 5 minutes
    const interval = setInterval(checkLiveStatus, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])
  
  const checkLiveStatus = async () => {
    // Logique temporaire - détecte si c'est dimanche entre 9h45 et 11h00
    const now = new Date()
    const day = now.getDay() // 0 = dimanche
    const hour = now.getHours()
    const minute = now.getMinutes()

    const isDimanche = day === 0
    const isTimeRange = (hour === 9 && minute >= 45) || (hour === 10 && minute < 60) // Jusqu'à 11h00 max

    // TEMPORAIRE: Forcer mode HORS LIGNE pour démo
    setIsLive(false)
  }
  
  const getNextMassTime = () => {
    const now = new Date()
    const nextSunday = new Date(now)
    
    // Calculer le prochain dimanche à 10h
    const daysUntilSunday = (7 - now.getDay()) % 7
    if (daysUntilSunday === 0 && now.getHours() >= 11) {
      nextSunday.setDate(now.getDate() + 7) // Dimanche suivant si la messe est passée
    } else if (daysUntilSunday === 0) {
      // C'est dimanche et la messe n'est pas encore passée
    } else {
      nextSunday.setDate(now.getDate() + daysUntilSunday)
    }
    
    nextSunday.setHours(10, 0, 0, 0)
    
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      day: 'numeric', 
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }
    
    setNextMassTime(nextSunday.toLocaleDateString('fr-FR', options))
  }
  
  return (
    <div className={`${className}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header avec statut */}
        <div className={`p-4 ${isLive ? 'bg-paroisse-rouge' : 'bg-paroisse-bleuCommunaute'} text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-white animate-pulse' : 'bg-white/60'}`}></div>
              <span className="font-semibold">
                {isLive ? 'EN DIRECT' : 'HORS LIGNE'}
              </span>
            </div>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
        </div>
        
        {/* Contenu */}
        <div className="p-6">
          {isLive ? (
            <>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
                Messe en direct - Dimanche 10h00
              </h3>
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/live_stream?channel=UCeh02km__1I_7wjpSQ0IqPg&autoplay=1"
                  title="Messe en direct - Paroisses Nendaz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href={`https://youtube.com/${channelHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-paroisse-rouge hover:bg-paroisse-rouge/90 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-parish"
              >
                <span>Voir sur YouTube</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                Prochaine messe en direct
              </h3>
              <p className="text-paroisse-vert mb-4 font-medium">
                {nextMassTime}
              </p>
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8AaGadHv55E"
                  title="Vidéo paroissiale - Paroisses Nendaz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href={`https://youtube.com/${channelHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-paroisse-bleuCommunaute hover:bg-paroisse-bleuCommunaute/90 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-parish"
              >
                <span>Visiter la chaîne YouTube</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </>
          )}
        </div>
        
        {/* Footer avec infos */}
        <div className="px-6 py-4 bg-neutral-grisClaire border-t">
          <div className="flex items-center justify-between text-sm text-neutral-gris">
            <span>Messes dominicales</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-paroisse-vert rounded-full"></span>
              10h00 - Basse-Nendaz
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}