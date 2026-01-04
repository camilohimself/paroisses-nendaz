'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, ChevronLeft, Lock } from 'lucide-react'
import { trackMission } from '@/lib/analytics-events'
import { estAventArchive } from '@/lib/avent-data'

// ============================================
// IMAGES DE FE - POSTURES PERSONNALISÉES
// ============================================
const IMAGES_FE = {
  accueil: 'Fe-accueil.png',       // Fe bras ouverts, accueillant
  presentation: 'Fe-salut.png',    // Fe qui salue, se présente
  indices: 'Fe-indices.png',       // Fe doigt levé, donne des indices
  cherche: 'Fe-indices.png',       // Fe qui invite à chercher
  bravo: 'Fe-bravo.png',           // Fe bras levés, célébration
  bible: 'Fe-bible.png',           // Fe avec la Bible + bâton pèlerin
  showingBible: 'Fe-showing-bible.png', // Fe montre la Bible ouverte
  ambon: 'Fe-ambon.png',           // Fe devant l'ambon (contexte église)
  priere: 'Fe-priere.png',         // Fe en prière, yeux fermés
  defi: 'Fe-indices.png',          // Fe énergique (réutilise indices)
  fin: 'Fe-fin.png',               // Fe qui dit au revoir + bâton
}

// Teaser semaine 3
const IMAGE_XIN_TEASER = 'Xin.png'

// ============================================
// DATE D'ACTIVATION DE LA MISSION
// ============================================
const DATE_ACTIVATION = new Date('2025-12-07T00:00:00+01:00')

// ============================================
// TYPE POUR LES SLIDES
// ============================================
type SlideType = 'dialogue' | 'question-bible' | 'cta-mission' | 'action-chercher' | 'psaume' | 'defi' | 'fin-mission'

interface Slide {
  id: number
  texte: string
  bullePosition: 'top' | 'bottom'
  animation: string
  image: string
  type?: SlideType
}

// ============================================
// ÉTAPE 1 : Présentation Fe (slides 1-5)
// ============================================
const SLIDES_ETAPE1: Slide[] = [
  {
    id: 1,
    texte: "Salut toi\u00A0! Bienvenue, petit pèlerin\u00A0!",
    bullePosition: 'top',
    animation: 'zoomIn',
    image: IMAGES_FE.accueil
  },
  {
    id: 2,
    texte: "Moi c'est Fe\u00A0! Tu sais ce que ça veut dire\u00A0? Foi\u00A0!",
    bullePosition: 'top',
    animation: 'pulse',
    image: IMAGES_FE.presentation
  },
  {
    id: 3,
    texte: "Fe à Fey... Pas mal comme cachette, non\u00A0?",
    bullePosition: 'bottom',
    animation: 'float',
    image: IMAGES_FE.presentation
  },
  {
    id: 4,
    texte: "Tu vois ma cape rouge\u00A0? C'est la couleur de l'énergie et du courage\u00A0! Avec Jésus, j'avance sans avoir peur.",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_FE.presentation
  },
  {
    id: 5,
    texte: "J'ai un secret à te partager... Des paroles qui réchauffent le cœur et font grandir la foi\u00A0!",
    bullePosition: 'bottom',
    animation: 'float',
    image: IMAGES_FE.indices
  },
  {
    id: 6,
    texte: "Regarde-moi bien... Tu vois l'objet que je porte\u00A0? Il contient des trésors de paroles\u00A0!",
    bullePosition: 'top',
    animation: 'zoom',
    image: IMAGES_FE.indices,
    type: 'question-bible'
  }
]

// ============================================
// ÉTAPE 2 : Mission Ambon (slides 7-12)
// ============================================
const SLIDES_ETAPE2: Slide[] = [
  {
    id: 7,
    texte: "Prêt pour une nouvelle aventure\u00A0? Allez, suis-moi\u00A0!",
    bullePosition: 'top',
    animation: 'bounce',
    image: IMAGES_FE.accueil,
    type: 'cta-mission'
  },
  {
    id: 8,
    texte: "On part à la chasse au trésor\u00A0! Je cherche un endroit très spécial...",
    bullePosition: 'bottom',
    animation: 'float',
    image: IMAGES_FE.indices
  },
  {
    id: 9,
    texte: "C'est depuis cet endroit qu'on raconte les plus belles histoires de Jésus pendant la messe\u00A0!",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_FE.indices
  },
  {
    id: 10,
    texte: "Ici, les mots de Dieu prennent vie et parlent à notre cœur.",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_FE.bible
  },
  {
    id: 11,
    texte: "Tout le monde peut voir et entendre celui qui lit. Et c'est là qu'on pose la Bible pour lire ses histoires\u00A0!",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_FE.bible
  },
  {
    id: 12,
    texte: "À toi de jouer\u00A0! Cherche cet endroit dans l'église... Je t'y attends\u00A0!",
    bullePosition: 'bottom',
    animation: 'zoom',
    image: IMAGES_FE.cherche,
    type: 'action-chercher'
  }
]

// ============================================
// ÉTAPE 3 : Explication Ambon + Psaume
// ============================================
const SLIDES_ETAPE3: Slide[] = [
  {
    id: 13,
    texte: "Cet endroit s'appelle l'ambon. C'est ici qu'on lit la Parole de Dieu\u00A0!",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_FE.ambon
  },
  {
    id: 14,
    texte: "Tu te souviens\u00A0? La Bible avec ses 73 livres\u00A0! Ici tu peux en feuilleter un et découvrir une histoire de Jésus.",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_FE.bible
  },
  {
    id: 15,
    texte: "",
    bullePosition: 'top',
    animation: 'glow',
    image: IMAGES_FE.priere,
    type: 'psaume'
  }
]

// ============================================
// ÉTAPE 4 : Défi de la semaine
// ============================================
const SLIDES_ETAPE4: Slide[] = [
  {
    id: 16,
    texte: "Maintenant, ton cœur est rempli de belles paroles...",
    bullePosition: 'top',
    animation: 'float',
    image: IMAGES_FE.defi
  },
  {
    id: 17,
    texte: "Mon défi pour toi\u00A0: cette semaine, ouvre la Bible et lis une histoire avec quelqu'un que tu aimes\u00A0!",
    bullePosition: 'bottom',
    animation: 'pulse',
    image: IMAGES_FE.bible,
    type: 'defi'
  }
]

// ============================================
// ÉTAPE 5 : Fin et teaser Xin
// ============================================
const SLIDES_ETAPE5: Slide[] = [
  {
    id: 18,
    texte: "Youpi\u00A0! Mission accomplie\u00A0!",
    bullePosition: 'top',
    animation: 'bounce',
    image: IMAGES_FE.bravo
  },
  {
    id: 19,
    texte: "On se retrouve bientôt pour une nouvelle aventure\u00A0! Que Dieu te garde.",
    bullePosition: 'bottom',
    animation: 'glow',
    image: IMAGES_FE.fin,
    type: 'fin-mission'
  }
]

const ALL_SLIDES = [...SLIDES_ETAPE1, ...SLIDES_ETAPE2, ...SLIDES_ETAPE3, ...SLIDES_ETAPE4, ...SLIDES_ETAPE5]

const PSAUME_SEMAINE2 = `« Chantez au Seigneur un chant nouveau,
car il a fait des merveilles »

Psaume 97`

const DEFIS_SEMAINE = [
  "Lire des passages de la Bible",
  "Dire chaque jour : « J'ai confiance en toi Jésus »",
  "Chanter une chanson qui te donne de la joie",
  "Écrire un mot gentil aux personnes que tu aimes"
]

const REPONSES_NON_BIBLE = [
  "Regarde bien dans ma poche...",
  "C'est un grand livre avec une croix dessus !"
]

const TEXTE_BRAVO_BIBLE = "Bravo tu as trouvé\u00A0! C'est une Bible que j'ai mise dans ma poche\u00A0!"

const TEXTE_EXPLICATION_BIBLE = "La Bible, c'est une vraie bibliothèque\u00A0! Elle contient 73 livres écrits par plein de personnes différentes, sur plus de 1000 ans\u00A0!"

// ============================================
// COMPOSANT FE ANIMÉ
// ============================================
function FeAnimated({
  animation,
  size = 200,
  imageName = 'Fe.png'
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
        alt="Fe"
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
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Icône cadenas */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-red-200 rounded-full flex items-center justify-center">
            <Lock className="w-10 h-10 text-red-600" />
          </div>
        </div>

        {/* Fe en aperçu */}
        <div className="mb-6 opacity-60">
          <Image
            src="/images/avent/personnages/Fe.png"
            alt="Fe"
            width={150}
            height={187}
            className="mx-auto object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
          Mission pas encore disponible
        </h1>

        <p className="text-lg text-red-700 mb-6">
          Fe t'attend à l'église de <strong>Fey</strong> à partir du <strong>7 décembre</strong> !
        </p>

        {/* Compteur */}
        <div className="grid grid-cols-4 gap-2 mb-8">
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-red-600">{timeLeft.jours}</div>
            <div className="text-xs text-slate-500">jours</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-red-600">{timeLeft.heures}</div>
            <div className="text-xs text-slate-500">heures</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-red-600">{timeLeft.minutes}</div>
            <div className="text-xs text-slate-500">min</div>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-lg">
            <div className="text-2xl font-bold text-red-600">{timeLeft.secondes}</div>
            <div className="text-xs text-slate-500">sec</div>
          </div>
        </div>

        {/* Lien retour */}
        <Link
          href="/avent"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Retour au calendrier
        </Link>
      </div>
    </div>
  )
}

// ============================================
// PAGE PRINCIPALE MISSION 2
// ============================================
export default function Mission2Page() {
  const router = useRouter()
  const [isAccessible, setIsAccessible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [slideIndex, setSlideIndex] = useState(0)
  const [tentativesNon, setTentativesNon] = useState(0)
  const [showBravoBible, setShowBravoBible] = useState(false)
  const [showExplicationBible, setShowExplicationBible] = useState(false)
  const [showBravoAmbon, setShowBravoAmbon] = useState(false)
  const [showIndice, setShowIndice] = useState(false)
  const [etape, setEtape] = useState(1)
  const hasTrackedStart = useRef(false)
  const hasTrackedComplete = useRef(false)

  // Rediriger vers la page d'archive après le 6 janvier 2026
  useEffect(() => {
    if (estAventArchive()) {
      router.replace('/avent')
    }
  }, [router])

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
      trackMission.start(2, 'Fe', 'Fey')
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

  // Question Bible
  const handleOuiBible = () => {
    setShowBravoBible(true)
    trackMission.bibleDiscovered(2)
  }

  const handleNonBible = () => {
    if (tentativesNon < 2) {
      setTentativesNon(tentativesNon + 1)
      setShowIndice(true)

      if (tentativesNon === 1) {
        setTimeout(() => {
          setShowBravoBible(true)
        }, 2000)
      }
    }
  }

  const handleContinuerApresBible = () => {
    setShowBravoBible(false)
    setShowExplicationBible(true) // Passer à l'explication de la Bible
  }

  const handleContinuerApresExplication = () => {
    setShowExplicationBible(false)
    setSlideIndex(SLIDES_ETAPE1.length) // Aller au premier slide de l'étape 2
    setEtape(2)
    setTentativesNon(0)
    setShowIndice(false)
  }

  // Action chercher ambon
  const handleTrouveAmbon = () => {
    setShowBravoAmbon(true)
    trackMission.ambonFound(2)
  }

  const handleContinuerApresAmbon = () => {
    setShowBravoAmbon(false)
    setSlideIndex(SLIDES_ETAPE1.length + SLIDES_ETAPE2.length) // Premier slide étape 3
    setEtape(3)
  }

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex items-center justify-center">
        <div className="animate-pulse text-red-600 text-xl">Chargement...</div>
      </div>
    )
  }

  // Pas encore accessible
  if (!isAccessible) {
    return <EcranNonDisponible />
  }

  // ============================================
  // ÉCRAN BRAVO BIBLE
  // ============================================
  if (showBravoBible) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <FeAnimated animation="bounce" size={220} imageName={IMAGES_FE.bravo} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_BRAVO_BIBLE} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresBible}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Raconte-moi !
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN EXPLICATION BIBLE
  // ============================================
  if (showExplicationBible) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <FeAnimated animation="glow" size={240} imageName={IMAGES_FE.showingBible} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte={TEXTE_EXPLICATION_BIBLE} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresExplication}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer l'aventure
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN BRAVO AMBON
  // ============================================
  if (showBravoAmbon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <FeAnimated animation="glow" size={280} imageName={IMAGES_FE.bravo} />
        </div>

        <div className="w-full max-w-md">
          <BulleAvecTriangle texte="Félicitations, Bravo, tu as trouvé !" triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleContinuerApresAmbon}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Découvrir la suite
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN QUESTION BIBLE (Étape 1)
  // ============================================
  if (currentSlide.type === 'question-bible') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <FeAnimated animation="zoom" size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle
            texte={showIndice ? REPONSES_NON_BIBLE[tentativesNon - 1] : currentSlide.texte}
            triangleDirection="top"
          />

          {showIndice ? (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  if (tentativesNon >= 2) {
                    setShowBravoBible(true)
                  } else {
                    setShowIndice(false)
                  }
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
              >
                Suivant
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleOuiBible}
                className="px-10 py-4 rounded-2xl bg-white border-2 border-red-400 text-red-600 font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Oui
              </button>
              <button
                onClick={handleNonBible}
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
          <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN PSAUME (Étape 3)
  // ============================================
  if (currentSlide.type === 'psaume') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        {/* Carte psaume */}
        <div className="w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-2xl mb-6">
          <p className="text-sm text-red-500 font-medium mb-3 text-center">Ou lis ce psaume :</p>
          <p className="text-lg text-slate-700 leading-relaxed text-center font-serif whitespace-pre-line italic">
            {PSAUME_SEMAINE2}
          </p>
        </div>

        {/* Fe en prière */}
        <div className="mb-4">
          <FeAnimated animation="glow" size={120} imageName={IMAGES_FE.priere} />
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
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
          >
            Continuer
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DÉFI (Étape 4)
  // ============================================
  if (currentSlide.type === 'defi') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="mb-6">
          <FeAnimated animation="float" size={180} imageName={IMAGES_FE.defi} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          {/* Liste des défis */}
          <div className="bg-white rounded-2xl p-5 mt-6 shadow-lg">
            <p className="text-red-600 font-bold mb-3">À faire cette semaine :</p>
            <ul className="space-y-2">
              {DEFIS_SEMAINE.map((defi, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-red-500 mt-1">•</span>
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-lg shadow-xl active:scale-95 transition-transform"
            >
              Continuer
            </button>
          </div>
        </div>

        {/* Indicateur étape */}
        <div className="mt-6 text-center">
          <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
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
      trackMission.complete(2, 'Fe')
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">

        {/* 1. Célébration - Fe */}
        <div className="animate-pulse mb-4">
          <Image
            src={`/images/avent/personnages/${IMAGES_FE.bravo}`}
            alt="Fe"
            width={160}
            height={200}
            className="object-contain drop-shadow-xl"
          />
        </div>

        {/* 2. Message de félicitations */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl mb-6 max-w-md text-center">
          <p className="text-3xl md:text-4xl font-black text-red-600 mb-3">
            Mission accomplie !
          </p>
          <p className="text-xl text-slate-700 font-medium">
            Bravo, tu as terminé l'aventure avec Fe !
          </p>
        </div>

        {/* 3. Teaser Xin - L'aventure continue */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-5 border-2 border-emerald-200 shadow-lg mb-6 max-w-md">
          <div className="flex items-center gap-4">
            <Image
              src={`/images/avent/personnages/${IMAGE_XIN_TEASER}`}
              alt="Xin"
              width={80}
              height={100}
              className="object-contain"
            />
            <div className="flex-1">
              <p className="text-lg text-emerald-700 font-bold mb-1">
                L'aventure continue...
              </p>
              <p className="text-slate-600 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span><strong>Xin</strong> t'attend à l'église de <strong>Veysonnaz</strong></span>
              </p>
              <p className="text-sm text-emerald-600 mt-1 font-medium flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                À partir du 14 décembre
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = '/avent'
          }}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-red-400 to-emerald-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
        >
          Retour au calendrier
        </button>
      </div>
    )
  }

  // ============================================
  // ÉCRAN ACTION CHERCHER AMBON (Étape 2)
  // ============================================
  if (currentSlide.type === 'action-chercher') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <FeAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="w-full max-w-md mx-auto">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="top" />

          <div className="flex justify-center mt-6">
            <button
              onClick={handleTrouveAmbon}
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
          <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN CTA MISSION (Transition vers étape 2)
  // ============================================
  if (currentSlide.type === 'cta-mission') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mb-8">
          <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
        </div>

        <div className="mb-6">
          <FeAnimated animation={currentSlide.animation} size={220} imageName={currentSlide.image} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSuivant}
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-xl shadow-xl active:scale-95 transition-transform"
          >
            C'est parti !
          </button>
        </div>

        {/* Indicateur étape */}
        <div className="mt-8 text-center">
          <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
        </div>
      </div>
    )
  }

  // ============================================
  // ÉCRAN DIALOGUE STANDARD
  // ============================================
  const isBulleTop = currentSlide.bullePosition === 'top'

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-red-50 to-red-100 flex flex-col items-center justify-center p-4">

      {/* Layout bulle en HAUT : Bulle → Personnage */}
      {isBulleTop && (
        <>
          <div className="w-full max-w-md mb-8">
            <BulleAvecTriangle texte={currentSlide.texte} triangleDirection="bottom" />
          </div>

          <div className="mb-6">
            <FeAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
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
            <FeAnimated animation={currentSlide.animation} imageName={currentSlide.image} />
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
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
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
                  ? 'bg-red-500 scale-125'
                  : e < etape
                  ? 'bg-red-400'
                  : 'bg-white/60'
              }`}
            />
          ))}
        </div>
        <span className="text-red-600 font-medium text-sm">Étape {etape} sur 5</span>
      </div>
    </div>
  )
}
