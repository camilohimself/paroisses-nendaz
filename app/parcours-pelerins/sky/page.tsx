'use client'

import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import { MapPin, Music, Star } from 'lucide-react'
import { trackMission } from '@/lib/analytics-events'


// ============================================
// IMAGES DE SKY - POSTURES PERSONNALISÉES
// ============================================
const IMAGES_SKY = {
  accueil: 'Sky.png',              // Sky pose neutre
  presentation: 'Sky-presentation.png',  // Sky qui salue
  chant: 'Sky-chant.png',          // Sky joue guitare
  indices: 'Sky-indices.png',      // Sky doigt sur lèvres (mystère)
  cherche: 'Sky-cherche.png',      // Sky main sur yeux, cherche
  ange: 'Sky-ange.png',            // Sky devant la crèche avec ange
  bravo: 'Sky-bravo.png',          // Sky bras levés, confettis
  fin: 'Sky-fin.png',              // Sky qui dit au revoir
}

// Images des autres personnages pour le récap final
const IMAGES_AUTRES = {
  luce: 'Luce.png',
  fe: 'Fe.png',
  xin: 'Xin.png',
}

// ============================================
// TYPE POUR LES SLIDES
// ============================================
type SlideType = 'dialogue' | 'question-guitare' | 'cta-mission' | 'action-chercher' | 'defi-chant' | 'fin-mission' | 'scene-creche'

interface Slide {
  id: number
  texte: string
  bullePosition: 'top' | 'bottom'
  animation: string
  image: string
  type?: SlideType
}

// ============================================
// ÉTAPE 1 : Présentation Sky (slides 1-5)
// ============================================
const SLIDES_ETAPE1: Slide[] = [
  {
    id: 1,
    texte: "Salut toi\u00A0! Bienvenue à l'église d'Aproz\u00A0!",
    bullePosition: 'top',
    animation: 'zoomIn',
    image: IMAGES_SKY.presentation
  },
  {
    id: 2,
    texte: "Je m'appelle Sky... Ça veut dire «\u00A0ciel\u00A0»\u00A0! Tu sais, le ciel où brillent les étoiles, où volent les oiseaux... et les anges\u00A0!",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_SKY.accueil
  },
  {
    id: 3,
    texte: "Je suis tellement content de t'accompagner pour cette aventure\u00A0!",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_SKY.presentation
  },
  {
    id: 4,
    texte: "Avant de commencer, j'ai une petite devinette pour toi... Observe-moi bien\u00A0! Il y a quelque chose d'accroché dans mon dos. C'est un objet qui m'aide à prier d'une façon très spéciale...",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_SKY.accueil,
    type: 'question-guitare'
  }
]

// ============================================
// ÉTAPE 2 : Mission Ange (slides 6-11)
// ============================================
const SLIDES_ETAPE2: Slide[] = [
  {
    id: 6,
    texte: "Allez, tu es prêt pour la suite de l'aventure\u00A0? Cette fois, tu vas devoir chercher quelque chose dans l'église... C'est parti\u00A0!",
    bullePosition: 'top',
    animation: 'bounce',
    image: IMAGES_SKY.presentation,
    type: 'cta-mission'
  },
  {
    id: 7,
    texte: "Voici mon premier indice : «\u00A0Je suis toujours près de toi... mais tu ne peux pas me toucher.\u00A0»",
    bullePosition: 'bottom',
    animation: 'float',
    image: IMAGES_SKY.indices
  },
  {
    id: 8,
    texte: "Deuxième indice : «\u00A0Je suis un messager très spécial. J'adore annoncer les bonnes nouvelles\u00A0!\u00A0»",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_SKY.indices
  },
  {
    id: 9,
    texte: "Dernier indice : «\u00A0Je t'aide à faire de bonnes choses et je veille sur toi...\u00A0»",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_SKY.indices
  },
  {
    id: 10,
    texte: "Maintenant, ouvre grand les yeux et parcours l'église... Bonne chance\u00A0!",
    bullePosition: 'top',
    animation: 'zoom',
    image: IMAGES_SKY.cherche,
    type: 'action-chercher'
  }
]

// ============================================
// ÉTAPE 3 : Explication Ange
// ============================================
const SLIDES_ETAPE3: Slide[] = [
  {
    id: 11,
    texte: "Tu l'as trouvé\u00A0! C'est l'Ange\u00A0! Il veille sur l'église avec son message «\u00A0Paix sur la terre\u00A0».",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_SKY.ange,
    type: 'scene-creche'
  },
  {
    id: 12,
    texte: "Les anges sont les messagers de Dieu. Tu sais, dans la Bible, c'est un ange qui est venu dire aux bergers\u00A0: «\u00A0N'ayez pas peur\u00A0! Le Sauveur est né\u00A0!\u00A0»",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_SKY.ange,
    type: 'scene-creche'
  },
  {
    id: 13,
    texte: "Et tous les anges se sont mis à chanter de joie\u00A0!",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_SKY.chant
  }
]

// ============================================
// ÉTAPE 4 : Défi chant/prière
// ============================================
const SLIDES_ETAPE4: Slide[] = [
  {
    id: 14,
    texte: "Maintenant, j'ai un petit défi pour toi... Est-ce que tu voudrais chanter un chant que tu aimes\u00A0? Celui que tu préfères\u00A0! Ou si tu veux, on peut lire ensemble une belle prière...",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_SKY.chant,
    type: 'defi-chant'
  }
]

// ============================================
// ÉTAPE 5 : Fin et récap des 4 personnages
// ============================================
const SLIDES_ETAPE5: Slide[] = [
  {
    id: 15,
    texte: "BRAVO\u00A0! Tu as réussi toutes les missions du parcours des pèlerins\u00A0!",
    bullePosition: 'top',
    animation: 'bounce',
    image: IMAGES_SKY.bravo
  },
  {
    id: 16,
    texte: "Tu as vécu une belle aventure\u00A0! Merci d'avoir participé avec nous.",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_SKY.fin,
    type: 'fin-mission'
  }
]

const ALL_SLIDES = [...SLIDES_ETAPE1, ...SLIDES_ETAPE2, ...SLIDES_ETAPE3, ...SLIDES_ETAPE4, ...SLIDES_ETAPE5]

const PRIERE_SKY = `Seigneur, je te loue pour cette belle aventure\u00A0!

Merci pour la lumière, la foi, l'espérance et la joie
que tu as semées dans mon cœur.

Chaque jour, aide-moi à partager
ton amour avec tous ceux que je rencontre.

Que les anges chantent dans mon cœur\u00A0!
Merci, Jésus\u00A0!`

const REPONSES_NON_GUITARE = [
  "Regarde bien dans mon dos...",
  "C'est un instrument de musique avec des cordes\u00A0!"
]

const TEXTE_BRAVO_GUITARE = "Bravo, tu as l'œil\u00A0! C'est bien ma guitare\u00A0!"

const TEXTE_EXPLICATION_GUITARE = "Tu sais ce qu'on dit\u00A0? «\u00A0Quand on chante, on prie deux fois\u00A0!\u00A0» La musique, c'est comme une prière qui s'envole vers le ciel..."

// ============================================
// COMPOSANT SKY ANIMÉ
// ============================================
function SkyAnimated({
  animation,
  size = 200,
  imageName = 'Sky.png'
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
        alt="Sky"
        width={size}
        height={size * 1.25}
        className="object-contain drop-shadow-xl"
        priority
      />
    </div>
  )
}

// ============================================
// COMPOSANT BULLE AVEC TRIANGLE
// ============================================
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

// ============================================
// PAGE PRINCIPALE MISSION 4
// ============================================
export default function Mission4Page() {
  
  const [slideIndex, setSlideIndex] = useState(0)
  const [tentativesNon, setTentativesNon] = useState(0)
  const [showBravoGuitare, setShowBravoGuitare] = useState(false)
  const [showExplicationGuitare, setShowExplicationGuitare] = useState(false)
  const [showBravoAnge, setShowBravoAnge] = useState(false)
  const [showIndice, setShowIndice] = useState(false)
  const [showPriere, setShowPriere] = useState(false)
  const [etape, setEtape] = useState(1)
  const hasTrackedStart = useRef(false)
  const hasTrackedComplete = useRef(false)

  // Tracker le début de la mission (une seule fois)
  useEffect(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true
      trackMission.start(4, 'Sky', 'Aproz')
    }
  }, [])

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

  // Question Guitare
  const handleOuiGuitare = () => {
    setShowBravoGuitare(true)
  }

  const handleNonGuitare = () => {
    if (tentativesNon < 2) {
      setTentativesNon(tentativesNon + 1)
      setShowIndice(true)

      if (tentativesNon === 1) {
        setTimeout(() => {
          setShowBravoGuitare(true)
        }, 2000)
      }
    }
  }

  const handleContinuerApresGuitare = () => {
    setShowBravoGuitare(false)
    setShowExplicationGuitare(true)
  }

  const handleContinuerApresExplication = () => {
    setShowExplicationGuitare(false)
    setSlideIndex(SLIDES_ETAPE1.length)
    setEtape(2)
    setTentativesNon(0)
    setShowIndice(false)
  }

  // Action chercher Ange
  const handleTrouveAnge = () => {
    setShowBravoAnge(true)
    trackMission.angelFound(4)
  }

  const handleContinuerApresAnge = () => {
    setShowBravoAnge(false)
    setSlideIndex(SLIDES_ETAPE1.length + SLIDES_ETAPE2.length)
    setEtape(3)
  }

  // ============================================
  // ÉCRAN BRAVO GUITARE
  // ============================================
  if (showBravoGuitare) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <SkyAnimated animation="bounce" size={220} imageName={IMAGES_SKY.bravo} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_BRAVO_GUITARE} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresGuitare}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Raconte-moi !
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN EXPLICATION GUITARE
  // ============================================
  if (showExplicationGuitare) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <SkyAnimated animation="glow" size={240} imageName={IMAGES_SKY.chant} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_EXPLICATION_GUITARE} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresExplication}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer l'aventure
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN BRAVO ANGE
  // ============================================
  if (showBravoAnge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <SkyAnimated animation="glow" size={280} imageName={IMAGES_SKY.bravo} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte="Bravo, tu as trouvé !" triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresAnge}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Découvrir la suite
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN QUESTION GUITARE (Étape 1)
  // ============================================
  if (currentSlide.type === 'question-guitare') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <SkyAnimated animation="zoom" size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle
            texte={showIndice ? REPONSES_NON_GUITARE[tentativesNon - 1] : currentSlide.texte}
            triangleDirection="top"
          />

          {showIndice ? (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (tentativesNon >= 2) {
                    setShowBravoGuitare(true)
                  } else {
                    setShowIndice(false)
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
              >
                Suivant
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleOuiGuitare}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-blue-400 text-blue-600 font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Oui, je vois !
              </button>
              <button
                onClick={handleNonGuitare}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-300 text-slate-600 font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Je ne sais pas
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
          <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DÉFI CHANT/PRIÈRE (Étape 4)
  // ============================================
  if (currentSlide.type === 'defi-chant') {
    if (showPriere) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
          {/* Carte prière */}
          <div className="w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl mb-6">
            <p className="text-sm text-blue-500 font-medium mb-3 text-center">Prière :</p>
            <p className="text-lg text-slate-700 leading-relaxed text-center font-serif whitespace-pre-line italic">
              {PRIERE_SKY}
            </p>
          </div>

          {/* Sky en prière/chant */}
          <div className="mb-4">
            <SkyAnimated animation="glow" size={120} imageName={IMAGES_SKY.chant} />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowPriere(false)}
              className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
            >
              Retour
            </button>
            <button
              onClick={handleSuivant}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer
            </button>
          </div>

          {/* Indicateur étape */}
          <div className="mt-6 text-center">
            <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <SkyAnimated animation="float" size={180} imageName={IMAGES_SKY.chant} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleSuivant}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform flex items-center gap-2"
            >
              <Music className="w-5 h-5" />
              Je chante !
            </button>
            <button
              onClick={() => setShowPriere(true)}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Je prie
            </button>
          </div>

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
        <div className="mt-6 text-center">
          <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN SCÈNE CRÈCHE - IMAGE PLEIN ÉCRAN
  // ============================================
  if (currentSlide.type === 'scene-creche') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col p-4">
        {/* Image ange en grand - pleine largeur */}
        <div className="flex-1 flex items-center justify-center mb-4">
          <div className="w-full max-w-2xl">
            <Image
              src={`/images/avent/personnages/${currentSlide.image}`}
              alt="Sky avec l'ange"
              width={800}
              height={450}
              className="w-full h-auto rounded-2xl shadow-2xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Bulle de texte en bas */}
        <div className="w-full max-w-md mx-auto mb-4">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />
        </div>

        {/* Boutons navigation */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={handleRetour}
            className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
          >
            Retour
          </button>
          <button
            onClick={handleSuivant}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
          >
            Suivant
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="text-center">
          <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN FIN DE MISSION - RÉCAP 4 PERSONNAGES
  // ============================================
  if (currentSlide.type === 'fin-mission') {
    // Tracker la mission complète (une seule fois)
    if (!hasTrackedComplete.current) {
      hasTrackedComplete.current = true
      trackMission.complete(4, 'Sky')
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">

        {/* 1. Célébration - Sky */}
        <div className="animate-pulse mb-4">
          <Image
            src={`/images/avent/personnages/${IMAGES_SKY.bravo}`}
            alt="Sky"
            width={140}
            height={175}
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Message de félicitations */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl mb-6 max-w-md text-center">
          <p className="text-2xl md:text-3xl font-black text-blue-600 mb-4">
            Toutes les missions accomplies !
          </p>

          {/* Récap des 4 personnages */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="text-center">
              <Image src={`/images/avent/personnages/${IMAGES_AUTRES.luce}`} alt="Luce" width={50} height={62} className="mx-auto" />
              <p className="text-xs text-amber-600 font-medium mt-1">Lumière</p>
            </div>
            <div className="text-center">
              <Image src={`/images/avent/personnages/${IMAGES_AUTRES.fe}`} alt="Fe" width={50} height={62} className="mx-auto" />
              <p className="text-xs text-red-600 font-medium mt-1">Foi</p>
            </div>
            <div className="text-center">
              <Image src={`/images/avent/personnages/${IMAGES_AUTRES.xin}`} alt="Xin" width={50} height={62} className="mx-auto" />
              <p className="text-xs text-emerald-600 font-medium mt-1">Espérance</p>
            </div>
            <div className="text-center">
              <Image src={`/images/avent/personnages/${IMAGES_SKY.accueil}`} alt="Sky" width={50} height={62} className="mx-auto" />
              <p className="text-xs text-blue-600 font-medium mt-1">Joie</p>
            </div>
          </div>

          <p className="text-lg text-slate-700">
            Tu as vécu une belle aventure !
          </p>
        </div>

        {/* 3. Message de fin */}
        <div className="text-center mb-6">
          <p className="text-3xl font-black bg-gradient-to-r from-amber-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Bravo, pèlerin !
          </p>
        </div>

        <button
          onClick={() => {
            window.location.href = '/parcours-pelerins'
          }}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
        >
          Retour aux missions
        </button>
      </div>
    )
  }

  // ============================================
  // ÉCRAN ACTION CHERCHER ANGE (Étape 2)
  // ============================================
  if (currentSlide.type === 'action-chercher') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <SkyAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleTrouveAnge}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
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
          <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN CTA MISSION (Transition vers étape 2)
  // ============================================
  if (currentSlide.type === 'cta-mission') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mb-8">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
        </div>

        <div className="mb-6">
          <SkyAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSuivant}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
          >
            C'est parti !
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-8 text-center">
          <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DIALOGUE STANDARD
  // ============================================
  const isBulleTop = currentSlide.bullePosition === 'top'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-blue-100 flex flex-col items-center justify-center p-4">

      {/* Layout bulle en HAUT : Bulle → Personnage */}
      {isBulleTop && (
        <>
          <div className="w-full max-w-md mb-8">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
          </div>

          <div className="mb-6">
            <SkyAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
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
            <SkyAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
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
                  ? 'bg-blue-500 scale-125'
                  : e < etape
                  ? 'bg-blue-400'
                  : 'bg-white/60'
              }`}
            />
          ))}
        </div>
        <span className="text-blue-600 font-medium text-sm">Étape {etape} sur 5</span>
      </div>
    </div>
  )
}
