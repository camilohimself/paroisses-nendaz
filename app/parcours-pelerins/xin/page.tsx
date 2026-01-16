'use client'

import { useState, useEffect, useRef } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, ChevronLeft, Lock } from 'lucide-react'
import { trackMission } from '@/lib/analytics-events'


// ============================================
// IMAGES DE XIN - POSTURES PERSONNALISÉES
// ============================================
const IMAGES_XIN = {
  accueil: 'Xin.png',              // Xin bras ouverts, accueillante
  presentation: 'Xin-presentation.png',  // Xin qui se présente, salut
  indices: 'Xin-indices.png',      // Xin doigt levé, donne des indices
  baton: 'Xin-baton.png',          // Xin montrant son bâton avec fleur
  cherche: 'Xin-cherche.png',      // Xin main sur yeux, cherche
  bravo: 'Xin-bravo.png',          // Xin bras levés, célébration
  marie: 'Xin-marie.png',          // Xin devant vitraux Marie
  priere: 'Xin-priere.png',        // Xin en prière, yeux fermés
  defi: 'Xin-defi.png',            // Xin câline son doudou
  fin: 'Xin-fin.png',              // Xin qui dit au revoir
}

// Teaser semaine 4
const IMAGE_SKY_TEASER = 'Sky.png'

// ============================================
// DATE D'ACTIVATION DE LA MISSION
// ============================================
const DATE_ACTIVATION = new Date('2025-12-14T00:00:00+01:00')

// ============================================
// TYPE POUR LES SLIDES
// ============================================
type SlideType = 'dialogue' | 'question-baton' | 'cta-mission' | 'action-chercher' | 'priere' | 'defi' | 'fin-mission'

interface Slide {
  id: number
  texte: string
  bullePosition: 'top' | 'bottom'
  animation: string
  image: string
  type?: SlideType
}

// ============================================
// ÉTAPE 1 : Présentation Xin (slides 1-6)
// ============================================
const SLIDES_ETAPE1: Slide[] = [
  {
    id: 1,
    texte: "Coucou toi\u00A0! Je m'appelle Xin et je suis trop contente de te voir ici, à l'église de Veysonnaz\u00A0!",
    bullePosition: 'top',
    animation: 'zoomIn',
    image: IMAGES_XIN.accueil
  },
  {
    id: 2,
    texte: "Tu sais quoi\u00A0? Mon nom veut dire «\u00A0cœur\u00A0»\u00A0! C'est joli, non\u00A0?",
    bullePosition: 'top',
    animation: 'pulse',
    image: IMAGES_XIN.presentation
  },
  {
    id: 3,
    texte: "Tu as vu ma jolie cape verte\u00A0? Le vert, c'est la couleur de l'espérance et de la douceur... comme un câlin\u00A0!",
    bullePosition: 'bottom',
    animation: 'float',
    image: IMAGES_XIN.presentation
  },
  {
    id: 4,
    texte: "Regarde bien\u00A0! J'ai un objet spécial qui m'accompagne partout. Tu le vois\u00A0?",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_XIN.baton,
    type: 'question-baton'
  }
]

// ============================================
// ÉTAPE 2 : Mission Statue Marie (slides 7-12)
// ============================================
const SLIDES_ETAPE2: Slide[] = [
  {
    id: 7,
    texte: "Maintenant, j'ai une mission pour toi\u00A0! Tu es prêt\u00A0?",
    bullePosition: 'top',
    animation: 'bounce',
    image: IMAGES_XIN.accueil,
    type: 'cta-mission'
  },
  {
    id: 8,
    texte: "Ce que tu cherches, c'est quelqu'un de très doux et très aimant...",
    bullePosition: 'bottom',
    animation: 'float',
    image: IMAGES_XIN.indices
  },
  {
    id: 9,
    texte: "Mon doudou aussi est tout doux\u00A0! Mais non, ce n'est pas lui qu'il faut trouver...",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_XIN.defi
  },
  {
    id: 10,
    texte: "Les gens aiment lui offrir des fleurs et allumer des bougies devant elle...",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_XIN.indices
  },
  {
    id: 11,
    texte: "Allez, ouvre grand tes yeux et cherche dans l'église\u00A0! Tu vas trouver\u00A0!",
    bullePosition: 'top',
    animation: 'zoom',
    image: IMAGES_XIN.cherche,
    type: 'action-chercher'
  }
]

// ============================================
// ÉTAPE 3 : Explication Marie + Prière
// ============================================
const SLIDES_ETAPE3: Slide[] = [
  {
    id: 12,
    texte: "Oui\u00A0! C'est Marie, la maman de Jésus\u00A0!",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_XIN.marie
  },
  {
    id: 13,
    texte: "Marie a dit oui à Dieu et a accueilli Jésus dans son cœur. Et tu sais quoi\u00A0? Elle t'accueille toi aussi, comme si tu étais son enfant\u00A0!",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_XIN.marie
  },
  {
    id: 14,
    texte: "On fait une petite prière ensemble\u00A0? Ferme les yeux...",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_XIN.priere,
    type: 'priere'
  }
]

// ============================================
// ÉTAPE 4 : Défi de la semaine
// ============================================
const SLIDES_ETAPE4: Slide[] = [
  {
    id: 15,
    texte: "Tu sens cette douceur dans ton cœur\u00A0?",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_XIN.defi
  },
  {
    id: 16,
    texte: "Cette semaine, je te lance un défi\u00A0: semer de la joie et de la tendresse autour de toi\u00A0!",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_XIN.defi,
    type: 'defi'
  }
]

// ============================================
// ÉTAPE 5 : Fin et teaser Sky
// ============================================
const SLIDES_ETAPE5: Slide[] = [
  {
    id: 17,
    texte: "Tu as été super\u00A0! Merci d'avoir fait cette aventure avec moi\u00A0!",
    bullePosition: 'top',
    animation: 'bounce',
    image: IMAGES_XIN.bravo
  },
  {
    id: 18,
    texte: "La semaine prochaine, mon ami Sky t'attendra à Aproz\u00A0! Il a hâte de te rencontrer\u00A0!",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_XIN.fin,
    type: 'fin-mission'
  }
]

const ALL_SLIDES = [...SLIDES_ETAPE1, ...SLIDES_ETAPE2, ...SLIDES_ETAPE3, ...SLIDES_ETAPE4, ...SLIDES_ETAPE5]

const PRIERE_MARIE = `Marie, je te prie pour toutes les personnes qui n'ont plus de maison,
qui souffrent dans leur cœur.

Soutiens-les, protège-les.
Aide-moi à me faire proche de ceux qui souffrent.

Marie, répands ta douceur sur chaque personne que je vais rencontrer aujourd'hui.`

const DEFIS_SEMAINE = [
  "Faire un câlin aux personnes que tu aimes",
  "Offrir un dessin à une personne qui se sent seule",
  "Semer un sourire autour de toi",
  "Réconforter quelqu'un de triste"
]

const REPONSES_NON_BATON = [
  "Je le tiens dans ma main...",
  "C'est un bâton avec une fleur dessus !"
]

const TEXTE_BRAVO_BATON = "Bravo\u00A0! C'est mon bâton de pèlerin\u00A0! Il m'aide à marcher vers Noël\u00A0!"

const TEXTE_EXPLICATION_BATON = "Tu vois la fleur au bout\u00A0? Elle me rappelle de semer de la joie et de l'espoir partout où je vais\u00A0!"

// ============================================
// COMPOSANT XIN ANIMÉ
// ============================================
function XinAnimated({
  animation,
  size = 200,
  imageName = 'Xin.png'
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
        alt="Xin"
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
// ÉCRAN "PAS ENCORE DISPONIBLE"
// ============================================
function EcranNonDisponible() {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const difference = DATE_ACTIVATION.getTime() - now.getTime()

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Icône cadenas */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-emerald-200 rounded-full flex items-center justify-center">
            <Lock className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        {/* Xin en aperçu */}
        <div className="mb-6 opacity-60">
          <Image
            src="/images/avent/personnages/Xin.png"
            alt="Xin"
            width={150}
            height={187}
            className="mx-auto object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
          Mission pas encore disponible
        </h1>

        <p className="text-lg text-emerald-700 mb-6">
          Xin t'attend à l'église de <strong>Veysonnaz</strong> à partir du <strong>14 décembre</strong> !
        </p>

        {/* Compteur */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-emerald-600">{timeLeft.jours}</div>
            <div className="text-xs text-slate-500">jours</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-emerald-600">{timeLeft.heures}</div>
            <div className="text-xs text-slate-500">heures</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-emerald-600">{timeLeft.minutes}</div>
            <div className="text-xs text-slate-500">min</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-emerald-600">{timeLeft.secondes}</div>
            <div className="text-xs text-slate-500">sec</div>
          </div>
        </div>

        {/* Lien retour */}
        <Link
          href="/avent"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Retour aux missions
        </Link>
      </div>
    </div>
  )
}

// ============================================
// PAGE PRINCIPALE MISSION 3
// ============================================
export default function Mission3Page() {
  
  const [isAccessible, setIsAccessible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [slideIndex, setSlideIndex] = useState(0)
  const [tentativesNon, setTentativesNon] = useState(0)
  const [showBravoBaton, setShowBravoBaton] = useState(false)
  const [showExplicationBaton, setShowExplicationBaton] = useState(false)
  const [showBravoMarie, setShowBravoMarie] = useState(false)
  const [showIndice, setShowIndice] = useState(false)
  const [etape, setEtape] = useState(1)
  const hasTrackedStart = useRef(false)
  const hasTrackedComplete = useRef(false)

  // Vérification de la date d'accès (avec bypass dev via ?dev=true)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const devMode = params.get('dev') === 'true'
    const now = new Date()
    const accessible = devMode || now >= DATE_ACTIVATION
    setIsAccessible(accessible)
    setIsLoading(false)

    // Tracker le début de la mission (une seule fois)
    if (accessible && !hasTrackedStart.current) {
      hasTrackedStart.current = true
      trackMission.start(3, 'Xin', 'Veysonnaz')
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

  // Question Bâton
  const handleOuiBaton = () => {
    setShowBravoBaton(true)
  }

  const handleNonBaton = () => {
    if (tentativesNon < 2) {
      setTentativesNon(tentativesNon + 1)
      setShowIndice(true)

      if (tentativesNon === 1) {
        setTimeout(() => {
          setShowBravoBaton(true)
        }, 2000)
      }
    }
  }

  const handleContinuerApresBaton = () => {
    setShowBravoBaton(false)
    setShowExplicationBaton(true)
  }

  const handleContinuerApresExplication = () => {
    setShowExplicationBaton(false)
    setSlideIndex(SLIDES_ETAPE1.length)
    setEtape(2)
    setTentativesNon(0)
    setShowIndice(false)
  }

  // Action chercher Marie
  const handleTrouveMarie = () => {
    setShowBravoMarie(true)
    trackMission.marieFound(3)
  }

  const handleContinuerApresMarie = () => {
    setShowBravoMarie(false)
    setSlideIndex(SLIDES_ETAPE1.length + SLIDES_ETAPE2.length)
    setEtape(3)
  }

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex items-center justify-center">
        <div className="animate-pulse text-emerald-600 text-xl">Chargement...</div>
      </div>
    )
  }

  // Pas encore accessible
  if (!isAccessible) {
    return <EcranNonDisponible />
  }

  // ============================================
  // ÉCRAN BRAVO BÂTON
  // ============================================
  if (showBravoBaton) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <XinAnimated animation="bounce" size={220} imageName={IMAGES_XIN.bravo} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_BRAVO_BATON} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresBaton}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Raconte-moi !
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN EXPLICATION BÂTON
  // ============================================
  if (showExplicationBaton) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <XinAnimated animation="glow" size={240} imageName={IMAGES_XIN.baton} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_EXPLICATION_BATON} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresExplication}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer l'aventure
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN BRAVO MARIE
  // ============================================
  if (showBravoMarie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <XinAnimated animation="glow" size={280} imageName={IMAGES_XIN.bravo} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte="Bravo, tu as trouvé !" triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresMarie}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Découvrir la suite
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN QUESTION BÂTON (Étape 1)
  // ============================================
  if (currentSlide.type === 'question-baton') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <XinAnimated animation="zoom" size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle
            texte={showIndice ? REPONSES_NON_BATON[tentativesNon - 1] : currentSlide.texte}
            triangleDirection="top"
          />

          {showIndice ? (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (tentativesNon >= 2) {
                    setShowBravoBaton(true)
                  } else {
                    setShowIndice(false)
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
              >
                Suivant
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleOuiBaton}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-emerald-400 text-emerald-600 font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Oui
              </button>
              <button
                onClick={handleNonBaton}
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
          <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN PRIÈRE (Étape 3)
  // ============================================
  if (currentSlide.type === 'priere') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        {/* Carte prière */}
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl mb-6">
          <p className="text-sm text-emerald-500 font-medium mb-3 text-center">Prière à Marie :</p>
          <p className="text-lg text-slate-700 leading-relaxed text-center font-serif whitespace-pre-line italic">
            {PRIERE_MARIE}
          </p>
        </div>

        {/* Xin en prière */}
        <div className="mb-4">
          <XinAnimated animation="glow" size={120} imageName={IMAGES_XIN.priere} />
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
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
          >
            Continuer
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DÉFI (Étape 4)
  // ============================================
  if (currentSlide.type === 'defi') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <XinAnimated animation="float" size={180} imageName={IMAGES_XIN.defi} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          {/* Liste des défis */}
          <div className="bg-white rounded-2xl p-5 mt-6 shadow-lg">
            <p className="text-emerald-600 font-bold mb-3">À faire cette semaine :</p>
            <ul className="space-y-2">
              {DEFIS_SEMAINE.map((defi, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-emerald-500 mt-1">•</span>
                  {defi}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleRetour}
              className="px-6 py-3 rounded-xl bg-white/80 text-slate-500 font-medium shadow active:scale-95 transition-transform"
            >
              Retour
            </button>
            <button
              onClick={handleSuivant}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN FIN DE MISSION
  // ============================================
  if (currentSlide.type === 'fin-mission') {
    // Tracker la mission complète (une seule fois)
    if (!hasTrackedComplete.current) {
      hasTrackedComplete.current = true
      trackMission.complete(3, 'Xin')
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">

        {/* 1. Célébration - Xin */}
        <div className="animate-pulse mb-4">
          <Image
            src={`/images/avent/personnages/${IMAGES_XIN.bravo}`}
            alt="Xin"
            width={160}
            height={200}
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Message de félicitations */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl mb-6 max-w-md text-center">
          <p className="text-3xl md:text-4xl font-black text-emerald-600 mb-3">
            Mission accomplie !
          </p>
          <p className="text-xl text-slate-700 font-medium">
            Bravo, tu as terminé l'aventure avec Xin !
          </p>
        </div>

        {/* 3. Teaser Sky - L'aventure continue */}
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-5 border-2 border-blue-200 shadow-lg mb-6 max-w-md">
          <div className="flex items-center gap-4">
            <Image
              src={`/images/avent/personnages/${IMAGE_SKY_TEASER}`}
              alt="Sky"
              width={80}
              height={100}
              className="object-contain"
            />
            <div className="flex-1">
              <p className="text-lg text-blue-700 font-bold mb-1">
                L'aventure continue...
              </p>
              <p className="text-slate-600 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span><strong>Sky</strong> t'attend à l'église d'<strong>Aproz</strong></span>
              </p>
              <p className="text-sm text-blue-600 mt-1 font-medium flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                À partir du 21 décembre
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = '/parcours-pelerins'
          }}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
        >
          Retour aux missions
        </button>
      </div>
    )
  }

  // ============================================
  // ÉCRAN ACTION CHERCHER MARIE (Étape 2)
  // ============================================
  if (currentSlide.type === 'action-chercher') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <XinAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleTrouveMarie}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
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
          <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN CTA MISSION (Transition vers étape 2)
  // ============================================
  if (currentSlide.type === 'cta-mission') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mb-8">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
        </div>

        <div className="mb-6">
          <XinAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSuivant}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
          >
            C'est parti !
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-8 text-center">
          <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DIALOGUE STANDARD
  // ============================================
  const isBulleTop = currentSlide.bullePosition === 'top'

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">

      {/* Layout bulle en HAUT : Bulle → Personnage */}
      {isBulleTop && (
        <>
          <div className="w-full max-w-md mb-8">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
          </div>

          <div className="mb-6">
            <XinAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
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
            <XinAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
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
                  ? 'bg-emerald-500 scale-125'
                  : e < etape
                  ? 'bg-emerald-400'
                  : 'bg-white/60'
              }`}
            />
          ))}
        </div>
        <span className="text-emerald-600 font-medium text-sm">Étape {etape} sur 5</span>
      </div>
    </div>
  )
}
