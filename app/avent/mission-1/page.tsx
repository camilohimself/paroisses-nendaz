'use client'

import { useState } from 'react'
import Image from 'next/image'
import BulleDialogue from '@/components/avent/BulleDialogue'

// Type pour les slides
type SlideType = 'dialogue' | 'question-chapelet' | 'cta-mission' | 'action-chercher' | 'priere' | 'fun-text' | 'fin-mission'

interface Slide {
  id: number
  texte: string
  bullePosition: 'top' | 'bottom'
  animation: string
  image: string
  type?: SlideType
}

// ============================================
// ÉTAPE 1 : Présentation Luce (slides 1-5)
// ============================================
const SLIDES_ETAPE1: Slide[] = [
  {
    id: 1,
    texte: "Salut ! Bienvenue à toi, pèlerin de l'espérance !",
    bullePosition: 'top',
    animation: 'zoomIn',
    image: 'Luce.png'
  },
  {
    id: 2,
    texte: "Je m'appelle Luce. Mon nom veut dire... Lumière !",
    bullePosition: 'top',
    animation: 'pulse',
    image: 'Luce.png'
  },
  {
    id: 3,
    texte: "Tu vois ma tenue jaune ? C'est la couleur du drapeau du Vatican ! Jaune et blanc.",
    bullePosition: 'bottom',
    animation: 'float',
    image: 'Luce.png'
  },
  {
    id: 4,
    texte: "Je suis ici pour te montrer la lumière qui habite dans mon cœur. Elle illumine notre chemin de foi !",
    bullePosition: 'top',
    animation: 'glow',
    image: 'Luce.png'
  },
  {
    id: 5,
    texte: "Observe-moi bien... Tu vois un objet qui m'aide à prier ? L'as-tu trouvé ?",
    bullePosition: 'bottom',
    animation: 'zoom',
    image: 'Luce.png',
    type: 'question-chapelet'
  }
]

// ============================================
// ÉTAPE 2 : Mission Tabernacle (slides 6-11)
// ============================================
const SLIDES_ETAPE2: Slide[] = [
  {
    id: 6,
    texte: "Es-tu prêt pour la suite ? C'est parti !",
    bullePosition: 'top',
    animation: 'bounce',
    image: 'Luce.png',
    type: 'cta-mission'
  },
  {
    id: 7,
    texte: "Je suis dans un lieu secret et précieux... Seul le prêtre peut l'ouvrir !",
    bullePosition: 'bottom',
    animation: 'float',
    image: 'Luce-bible.png'
  },
  {
    id: 8,
    texte: "Ce lieu brille comme une étoile au cœur de l'église... souvent avec de l'or !",
    bullePosition: 'top',
    animation: 'glow',
    image: 'Luce-priere.png'
  },
  {
    id: 9,
    texte: "C'est là qu'on garde le plus grand trésor de la messe...",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: 'Luce.png'
  },
  {
    id: 10,
    texte: "On ne peut pas le toucher... seulement le recevoir.",
    bullePosition: 'top',
    animation: 'float',
    image: 'Luce-priere.png'
  },
  {
    id: 11,
    texte: "Maintenant, parcours l'église et trouve-moi !",
    bullePosition: 'bottom',
    animation: 'zoom',
    image: 'Luce-coeur.png',
    type: 'action-chercher'
  }
]

// ============================================
// ÉTAPE 3 : Explication Tabernacle/Eucharistie
// ============================================
const SLIDES_ETAPE3: Slide[] = [
  {
    id: 12,
    texte: "Ce que tu vois, c'est le Tabernacle !",
    bullePosition: 'top',
    animation: 'glow',
    image: 'Luce-bravo.png'
  },
  {
    id: 13,
    texte: "C'est ici que l'on conserve l'Eucharistie... le corps du Christ, Lumière du monde !",
    bullePosition: 'bottom',
    animation: 'glow',
    image: 'Eucharistie.png'
  },
  {
    id: 14,
    texte: "Un moment de silence et de prière... La présence réelle de Dieu parmi nous, pendant que nous attendons Noël.",
    bullePosition: 'top',
    animation: 'pulse',
    image: 'Luce-priere.png'
  },
  {
    id: 15,
    texte: "Bien joué !",
    bullePosition: 'bottom',
    animation: 'bounce',
    image: 'Luce-coeur.png'
  }
]

// ============================================
// ÉTAPE 4 : Prière à Jésus
// ============================================
const SLIDES_ETAPE4: Slide[] = [
  {
    id: 16,
    texte: "Je te propose maintenant, pour terminer, d'adresser cette prière à Jésus...",
    bullePosition: 'top',
    animation: 'float',
    image: 'Luce-invite.png'
  },
  {
    id: 17,
    texte: "",
    bullePosition: 'top',
    animation: 'glow',
    image: 'Luce-priere.png',
    type: 'priere'
  }
]

// ============================================
// ÉTAPE 5 : Défi - Partager la joie !
// ============================================
const SLIDES_ETAPE5: Slide[] = [
  {
    id: 18,
    texte: "Maintenant que tu es tout lumineux...",
    bullePosition: 'top',
    animation: 'glow',
    image: 'Luce-smile.png'
  },
  {
    id: 19,
    texte: "Je te propose de partager autour de toi la rayonnante joie reçue !",
    bullePosition: 'bottom',
    animation: 'float',
    image: 'Luce-invite.png'
  },
  {
    id: 20,
    texte: "Par un sourire...",
    bullePosition: 'top',
    animation: 'pulse',
    image: 'Luce-coeur.png',
    type: 'fun-text'
  },
  {
    id: 21,
    texte: "Par une parole qui fait du bien...",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: 'Luce-invite.png',
    type: 'fun-text'
  },
  {
    id: 22,
    texte: "Par ta joie de vivre !",
    bullePosition: 'top',
    animation: 'bounce',
    image: 'Luce-smile.png',
    type: 'fin-mission'
  }
]

const ALL_SLIDES = [...SLIDES_ETAPE1, ...SLIDES_ETAPE2, ...SLIDES_ETAPE3, ...SLIDES_ETAPE4, ...SLIDES_ETAPE5]

const PRIERE_JESUS = `Ô Jésus, Tu es lumière...

Tu es la lumière qui guide mes pas,
ouvre mes oreilles à ta parole...

Tu es la lumière qui réchauffe mon cœur,
remplis-le,
que je devienne à mon tour, lumière pour les autres.

Tu es ma lumière,
merci pour la paix que tu me donnes...`

const REPONSES_NON_CHAPELET = [
  "Regarde autour de mon cou...",
  "C'est un chapelet !"
]

const TEXTE_BRAVO_CHAPELET = "Bravo ! Tu as trouvé ! C'est un chapelet que je porte autour du cou."

// Composant Luce avec animation et image variable
function LuceAnimated({
  animation,
  size = 200,
  imageName = 'Luce.png'
}: {
  animation: string
  size?: number
  imageName?: string
}) {
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
        src={`/images/avent/personnages/${imageName}`}
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
  triangleDirection = 'bottom'
}: {
  texte: string
  triangleDirection?: 'top' | 'bottom'
}) {
  return (
    <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
      {triangleDirection === 'top' && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-white" />
      )}

      <p className="text-xl text-slate-800 leading-relaxed text-center font-medium">
        {texte}
      </p>

      {triangleDirection === 'bottom' && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white" />
      )}
    </div>
  )
}

export default function Mission1Page() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [tentativesNon, setTentativesNon] = useState(0)
  const [showBravoChapelet, setShowBravoChapelet] = useState(false)
  const [showBravoTabernacle, setShowBravoTabernacle] = useState(false)
  const [showIndice, setShowIndice] = useState(false)
  const [etape, setEtape] = useState(1) // 1 = présentation, 2 = mission tabernacle

  const currentSlide = ALL_SLIDES[slideIndex]
  const isFirstSlide = slideIndex === 0

  const handleSuivant = () => {
    if (slideIndex < ALL_SLIDES.length - 1) {
      const newIndex = slideIndex + 1
      setSlideIndex(newIndex)
      setShowIndice(false)

      // Gestion des étapes
      const etape1End = SLIDES_ETAPE1.length
      const etape2End = etape1End + SLIDES_ETAPE2.length
      const etape3End = etape2End + SLIDES_ETAPE3.length
      const etape4End = etape3End + SLIDES_ETAPE4.length

      if (newIndex >= etape4End) {
        setEtape(5)
      } else if (newIndex >= etape3End) {
        setEtape(4)
      } else if (newIndex >= etape2End) {
        setEtape(3)
      } else if (newIndex >= etape1End) {
        setEtape(2)
      }
    }
  }

  const handleRetour = () => {
    if (slideIndex > 0) {
      const newIndex = slideIndex - 1
      setSlideIndex(newIndex)
      setShowIndice(false)
      setTentativesNon(0)

      // Gestion des étapes
      const etape1End = SLIDES_ETAPE1.length
      const etape2End = etape1End + SLIDES_ETAPE2.length
      const etape3End = etape2End + SLIDES_ETAPE3.length
      const etape4End = etape3End + SLIDES_ETAPE4.length

      if (newIndex < etape1End) {
        setEtape(1)
      } else if (newIndex < etape2End) {
        setEtape(2)
      } else if (newIndex < etape3End) {
        setEtape(3)
      } else if (newIndex < etape4End) {
        setEtape(4)
      } else {
        setEtape(5)
      }
    }
  }

  // Question chapelet
  const handleOuiChapelet = () => {
    setShowBravoChapelet(true)
  }

  const handleNonChapelet = () => {
    if (tentativesNon < 2) {
      setTentativesNon(tentativesNon + 1)
      setShowIndice(true)

      if (tentativesNon === 1) {
        setTimeout(() => {
          setShowBravoChapelet(true)
        }, 2000)
      }
    }
  }

  const handleContinuerApresChapelet = () => {
    setShowBravoChapelet(false)
    setSlideIndex(SLIDES_ETAPE1.length) // Aller au premier slide de l'étape 2
    setEtape(2)
    setTentativesNon(0)
    setShowIndice(false)
  }

  // Action chercher tabernacle
  const handleTrouveTabernacle = () => {
    setShowBravoTabernacle(true)
  }

  const handleContinuerApresTabernacle = () => {
    setShowBravoTabernacle(false)
    setSlideIndex(SLIDES_ETAPE1.length + SLIDES_ETAPE2.length) // Premier slide étape 3
    setEtape(3)
  }

  // ============================================
  // ÉCRAN BRAVO CHAPELET
  // ============================================
  if (showBravoChapelet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <LuceAnimated animation="bounce" size={220} imageName="Luce.png" />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_BRAVO_CHAPELET} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresChapelet}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer l'aventure
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN BRAVO TABERNACLE → Lance étape 3
  // ============================================
  if (showBravoTabernacle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <LuceAnimated animation="glow" size={280} imageName="Luce-bravo.png" />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte="Bravo ! Tu as trouvé !" triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresTabernacle}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Découvrir la suite
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN QUESTION CHAPELET (Étape 1)
  // ============================================
  if (currentSlide.type === 'question-chapelet') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <LuceAnimated animation="zoom" size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle
            texte={showIndice ? REPONSES_NON_CHAPELET[tentativesNon - 1] : currentSlide.texte}
            triangleDirection="top"
          />

          {showIndice ? (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (tentativesNon >= 2) {
                    setShowBravoChapelet(true)
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
                onClick={handleOuiChapelet}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-amber-400 text-amber-600 font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Oui
              </button>
              <button
                onClick={handleNonChapelet}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-300 text-slate-600 font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Non
              </button>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <button
              onClick={handleRetour}
              className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform text-sm"
            >
              Retour
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-8 text-center">
          <span className="text-amber-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN FUN TEXT (Étape 5 - slides dynamiques)
  // ============================================
  if (currentSlide.type === 'fun-text') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        {/* Texte fun en grand */}
        <div className="w-full max-w-md mx-auto mb-8">
          <p className="text-3xl md:text-4xl font-bold text-center text-amber-600 animate-pulse">
            {currentSlide.texte}
          </p>
        </div>

        {/* Luce animée */}
        <div className="mb-6">
          <LuceAnimated animation={currentSlide.animation} size={200} imageName={currentSlide.image} />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleRetour}
            className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
          >
            Retour
          </button>
          <button
            onClick={handleSuivant}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
          >
            Suivant
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-amber-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN FIN DE MISSION
  // ============================================
  if (currentSlide.type === 'fin-mission') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-200 flex flex-col items-center justify-center p-4">
        {/* Texte de fin en très grand */}
        <div className="w-full max-w-md mx-auto mb-6">
          <p className="text-4xl md:text-5xl font-black text-center text-amber-600 animate-bounce">
            {currentSlide.texte}
          </p>
        </div>

        {/* Luce rayonnante */}
        <div className="mb-8">
          <LuceAnimated animation="glow" size={250} imageName={currentSlide.image} />
        </div>

        {/* Message de fin */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl mb-6 max-w-md">
          <p className="text-xl text-slate-700 text-center font-medium">
            Mission de la semaine accomplie ! À bientôt pour de nouvelles aventures avec Luce !
          </p>
        </div>

        <button
          onClick={() => {
            // Retour au début ou vers la page Avent
            window.location.href = '/avent'
          }}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
        >
          Terminer
        </button>
      </div>
    )
  }

  // ============================================
  // ÉCRAN PRIÈRE À JÉSUS (Étape 4)
  // ============================================
  if (currentSlide.type === 'priere') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        {/* Carte de prière élégante */}
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl mb-6">
          <p className="text-lg text-slate-700 leading-relaxed text-center font-serif whitespace-pre-line italic">
            {PRIERE_JESUS}
          </p>
        </div>

        {/* Luce en prière en petit */}
        <div className="mb-4">
          <LuceAnimated animation="glow" size={120} imageName="Luce-priere.png" />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleRetour}
            className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
          >
            Retour
          </button>
          <button
            onClick={handleSuivant}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
          >
            Continuer
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-amber-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN ACTION CHERCHER TABERNACLE (Étape 2)
  // ============================================
  if (currentSlide.type === 'action-chercher') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <LuceAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleTrouveTabernacle}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              J'ai trouvé !
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleRetour}
              className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform text-sm"
            >
              Revoir les indices
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-8 text-center">
          <span className="text-amber-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN CTA MISSION (Transition vers étape 2)
  // ============================================
  if (currentSlide.type === 'cta-mission') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mb-8">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
        </div>

        <div className="mb-6">
          <LuceAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSuivant}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
          >
            C'est parti !
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-8 text-center">
          <span className="text-amber-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DIALOGUE STANDARD
  // ============================================
  const isBulleTop = currentSlide.bullePosition === 'top'

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 flex flex-col items-center justify-center p-4">

      {/* Layout bulle en HAUT : Bulle → Personnage */}
      {isBulleTop && (
        <>
          <div className="w-full max-w-md mb-8">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
          </div>

          <div className="mb-6">
            <LuceAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
          </div>

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

      {/* Layout bulle en BAS : Personnage → Bulle */}
      {!isBulleTop && (
        <>
          <div className="mb-8">
            <LuceAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
          </div>

          <div className="w-full max-w-md mb-6">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />
          </div>

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

      {/* Indicateur de progression par étape */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5].map((e) => (
            <div
              key={e}
              className={`w-3 h-3 rounded-full transition-colors ${
                e === etape
                  ? 'bg-amber-500 scale-125'
                  : e < etape
                  ? 'bg-amber-400'
                  : 'bg-white/60'
              }`}
            />
          ))}
        </div>
        <span className="text-amber-600 font-medium text-sm">Étape {etape} sur 5</span>
      </div>
    </div>
  )
}
