'use client'

import { useState } from 'react'
import Image from 'next/image'
import BulleDialogue from '@/components/avent/BulleDialogue'

// Données des slides avec positions variées pour dynamiser
// bullePosition: 'top' = bulle en haut, personnage en bas | 'bottom' = personnage en haut, bulle en bas
const SLIDES = [
  {
    id: 1,
    texte: "Salut ! Bienvenue à toi, pèlerin de l'espérance !",
    type: 'dialogue',
    bullePosition: 'top',
    animation: 'zoomIn'
  },
  {
    id: 2,
    texte: "Je m'appelle Luce. Mon nom veut dire... Lumière !",
    type: 'dialogue',
    bullePosition: 'top',
    animation: 'pulse'
  },
  {
    id: 3,
    texte: "Tu vois ma tenue jaune ? C'est la couleur du drapeau du Vatican ! Jaune et blanc.",
    type: 'dialogue',
    bullePosition: 'bottom',
    animation: 'float'
  },
  {
    id: 4,
    texte: "Je suis ici pour te montrer la lumière qui habite dans mon cœur. Elle illumine notre chemin de foi !",
    type: 'dialogue',
    bullePosition: 'top',
    animation: 'glow'
  },
  {
    id: 5,
    texte: "Observe-moi bien... Tu vois un objet qui m'aide à prier ? L'as-tu trouvé ?",
    type: 'question',
    bullePosition: 'bottom',
    animation: 'zoom'
  }
]

const REPONSES_NON = [
  "Regarde autour de mon cou...",
  "C'est un chapelet !"
]

const TEXTE_BRAVO = "Bravo ! Tu as trouvé ! C'est un chapelet que je porte autour du cou."

// Composant Luce avec animation
function LuceAnimated({ animation, size = 200 }: { animation: string; size?: number }) {
  const animationClasses: Record<string, string> = {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    float: 'animate-float',
    glow: 'animate-glow',
    zoom: 'animate-zoom',
    zoomIn: 'animate-zoomIn'
  }

  return (
    <div className={`transition-all duration-500 ${animationClasses[animation] || ''}`}>
      <Image
        src="/images/avent/personnages/Luce.png"
        alt="Luce"
        width={size}
        height={size * 1.25}
        className="object-contain drop-shadow-xl"
        priority
      />
    </div>
  )
}

// Composant Bulle avec triangle haut ou bas
function BulleAvecTriangle({
  texte,
  triangleDirection = 'bottom' // 'bottom' = triangle en bas (pointe vers le bas), 'top' = triangle en haut
}: {
  texte: string
  triangleDirection?: 'top' | 'bottom'
}) {
  return (
    <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
      {/* Triangle en haut (pointe vers le haut) */}
      {triangleDirection === 'top' && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-white" />
      )}

      <p className="text-xl text-slate-800 leading-relaxed text-center font-medium">
        {texte}
      </p>

      {/* Triangle en bas (pointe vers le bas) */}
      {triangleDirection === 'bottom' && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white" />
      )}
    </div>
  )
}

export default function Mission1Page() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [tentativesNon, setTentativesNon] = useState(0)
  const [showBravo, setShowBravo] = useState(false)
  const [showIndice, setShowIndice] = useState(false)

  const currentSlide = SLIDES[slideIndex]
  const isFirstSlide = slideIndex === 0

  const handleSuivant = () => {
    if (slideIndex < SLIDES.length - 1) {
      setSlideIndex(slideIndex + 1)
      setShowIndice(false)
    }
  }

  const handleRetour = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
      setShowIndice(false)
      setTentativesNon(0)
    }
  }

  const handleOui = () => {
    setShowBravo(true)
  }

  const handleNon = () => {
    if (tentativesNon < 2) {
      setTentativesNon(tentativesNon + 1)
      setShowIndice(true)

      // Après 2 NON, on révèle automatiquement
      if (tentativesNon === 1) {
        setTimeout(() => {
          setShowBravo(true)
        }, 2000)
      }
    }
  }

  const handleContinuerApresBravo = () => {
    // TODO: Naviguer vers la suite de la mission (tabernacle)
    console.log('Suite de la mission...')
  }

  // Écran Bravo
  if (showBravo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6 animate-bounce">
          <LuceAnimated animation="bounce" size={220} />
        </div>

        <BulleDialogue
          texte={TEXTE_BRAVO}
          showRetour={false}
          onSuivant={handleContinuerApresBravo}
          texteSuivant="Continuer"
        />
      </div>
    )
  }

  // Écran Question avec Oui/Non (personnage en haut, bulle en bas)
  if (currentSlide.type === 'question') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        {/* Luce en haut avec zoom pour observer */}
        <div className="mb-8">
          <LuceAnimated animation="zoom" size={220} />
        </div>

        {/* Bulle en bas avec triangle pointant vers le haut */}
        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle
            texte={showIndice ? REPONSES_NON[tentativesNon - 1] : currentSlide.texte}
            triangleDirection="top"
          />

          {/* Bouton Suivant si indice affiché, sinon Oui/Non */}
          {showIndice ? (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (tentativesNon >= 2) {
                    setShowBravo(true)
                  } else {
                    setShowIndice(false)
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
              >
                Suivant
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleOui}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-amber-400 text-amber-600 font-bold text-lg shadow-lg active:scale-95 transition-transform hover:bg-amber-50"
              >
                Oui
              </button>
              <button
                onClick={handleNon}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-300 text-slate-600 font-bold text-lg shadow-lg active:scale-95 transition-transform hover:bg-slate-50"
              >
                Non
              </button>
            </div>
          )}

          {/* Bouton Retour */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleRetour}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform text-sm"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Layout selon bullePosition: 'top' ou 'bottom'
  const isBulleTop = currentSlide.bullePosition === 'top'

  // Écran Dialogue standard avec bulle en haut ou en bas
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">

      {/* Layout bulle en HAUT (slides 1, 2, 4) : Bulle → Personnage */}
      {isBulleTop && (
        <>
          {/* Bulle en haut avec triangle vers le bas */}
          <div className="w-full max-w-md mb-8">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
          </div>

          {/* Personnage en bas */}
          <div className="mb-6">
            <LuceAnimated animation={currentSlide.animation} />
          </div>

          {/* Boutons navigation */}
          <div className="flex gap-4">
            {!isFirstSlide && (
              <button
                onClick={handleRetour}
                className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
              >
                Retour
              </button>
            )}
            <button
              onClick={handleSuivant}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
            >
              Suivant
            </button>
          </div>
        </>
      )}

      {/* Layout bulle en BAS (slide 3) : Personnage → Bulle */}
      {!isBulleTop && (
        <>
          {/* Personnage en haut */}
          <div className="mb-8">
            <LuceAnimated animation={currentSlide.animation} />
          </div>

          {/* Bulle en bas avec triangle vers le haut */}
          <div className="w-full max-w-md mb-6">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />
          </div>

          {/* Boutons navigation */}
          <div className="flex gap-4">
            {!isFirstSlide && (
              <button
                onClick={handleRetour}
                className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
              >
                Retour
              </button>
            )}
            <button
              onClick={handleSuivant}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
            >
              Suivant
            </button>
          </div>
        </>
      )}

      {/* Indicateur de progression */}
      <div className="mt-8 flex gap-2">
        {SLIDES.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === slideIndex
                ? 'bg-amber-500'
                : index < slideIndex
                ? 'bg-amber-300'
                : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
