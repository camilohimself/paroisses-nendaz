'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Star, X, ExternalLink, Download } from 'lucide-react'
import MemorialTeaser from '@/components/MemorialTeaser'

// Données temporaires - seront remplacées par la base de données
const allEvents = [
  // === ÉVÉNEMENTS DIOCÉSAINS (autres villes) ===
  {
    id: 'saint-valentin-2026',
    title: 'Saint Valentin en tout temps',
    excerpt: 'Prenez soin de votre couple le temps d\'une soirée animée par un couple dynamique ! Repas en amoureux de 19h à 22h. Menu spécial 100.- par couple. 19 fév à Troistorrents, 20 fév à Martigny.',
    date: '2026-02-19',
    image: '/images/articles/saint-valentin-2026.webp',
    hasImage: true,
    category: 'Pastorale',
    lieu: 'Troistorrents & Martigny',
    externalUrl: 'https://diocese-sion.ch/et-moi/couples/evenements-couples',
    displayUntil: '2026-02-20'
  },
  {
    id: 'festival-familles-2026',
    title: 'Festival des Familles',
    excerpt: 'Une journée sympathique mêlant foi, rencontres, rires et jeux au Labyrinthe Aventure ! 9h30 ouverture, 10h messe, 12h pique-nique, 13h30 défis en famille, 15h louange et bénédiction.',
    date: '2026-03-15',
    image: '/images/articles/festival-familles-2026.webp',
    hasImage: true,
    category: 'Événement',
    lieu: 'Labyrinthe Aventure, Evionnaz',
    externalUrl: 'https://diocese-sion.ch/et-moi/familles/evenement/festival-des-familles'
  },
  {
    id: 'montee-paques-simplon-2026',
    title: 'Montée vers Pâques au Simplon',
    excerpt: 'Quatre jours extraordinaires pour vivre intensément le mystère de Pâques en famille à l\'Hospice du Simplon. Un moment très attendu par les familles ! Inscriptions ouvertes.',
    date: '2026-04-02',
    hasImage: false,
    category: 'Pastorale',
    lieu: 'Hospice du Simplon - du 2 au 5 avril',
    externalUrl: 'https://diocese-sion.ch/et-moi/familles/evenement/montee-vers-paques-au-simplon',
    displayUntil: '2026-04-05'
  },
  // === SOIRÉES BIBLIQUES CARÊME 2026 ===
  {
    id: 'soiree-biblique-1-careme-2026',
    title: 'Soirée biblique 1 — L\'appel du prophète',
    excerpt: 'Une vocation dérangeante. Comprendre ce qu\'est un prophète et comment Dieu appelle. Texte : Jérémie 1, 4-10. Série de 4 soirées sur le thème "Être prophète".',
    date: '2026-03-04',
    hasImage: false,
    category: 'Pastorale',
    lieu: 'Cure de Basse-Nendaz - 19h30',
    displayUntil: '2026-03-04'
  },
  {
    id: 'soiree-biblique-2-careme-2026',
    title: 'Soirée biblique 2 — Le prophète face à l\'injustice',
    excerpt: 'Parole qui dérange. Explorer le rôle du prophète comme dénonciateur de l\'injustice. Texte : Amos 5, 21-24. Série de 4 soirées sur le thème "Être prophète".',
    date: '2026-03-11',
    hasImage: false,
    category: 'Pastorale',
    lieu: 'Cure de Basse-Nendaz - 20h00',
    displayUntil: '2026-03-11'
  },
  {
    id: 'soiree-careme-2026',
    title: 'Soirée de Carême — Soupe, film et témoignages',
    excerpt: '18h : Adoration et confession. 19h : Messe chantée animée par le groupe ATAC. Suivie d\'une soupe de Carême organisée par les confirmants à la salle Davidica, puis projection du film et témoignages du voyage au Rwanda 2025 (Association Tête au Cœur — ATAC).',
    date: '2026-03-13',
    image: '/images/articles/soiree-careme-2026.jpg',
    hasImage: true,
    category: 'Événement',
    lieu: 'Église de Basse-Nendaz & Salle Davidica — dès 18h00',
    displayUntil: '2026-03-13'
  },
  {
    id: 'soiree-biblique-3-careme-2026',
    title: 'Soirée biblique 3 — Le souffle de l\'Esprit',
    excerpt: 'Prophète inspiré. Découvrir que le prophète est habité par l\'Esprit. Texte : Ézéchiel 37, 1-14 (la vision des ossements). Série de 4 soirées sur le thème "Être prophète".',
    date: '2026-03-25',
    hasImage: false,
    category: 'Pastorale',
    lieu: 'Cure de Basse-Nendaz - 20h00',
    displayUntil: '2026-03-25'
  },
  {
    id: 'soiree-biblique-4-careme-2026',
    title: 'Soirée biblique 4 — Prophète pour aujourd\'hui',
    excerpt: 'Témoins du Royaume. Relier la mission prophétique à l\'action concrète dans le monde. Texte : Matthieu 11, 7-11 (Jean le Baptiste). Série de 4 soirées sur le thème "Être prophète".',
    date: '2026-04-01',
    hasImage: false,
    category: 'Pastorale',
    lieu: 'Cure de Basse-Nendaz - 19h30',
    displayUntil: '2026-04-01'
  },
  // === ÉVÉNEMENTS PAROISSES NENDAZ ===
  {
    id: 'montee-paques-2026',
    title: 'Mont\u00e9e vers P\u00e2ques — Semaine Sainte',
    excerpt: 'Vivez les temps forts de la Semaine Sainte dans nos paroisses. Jeudi Saint : MVP enfants et Messe de la derni\u00e8re C\u00e8ne. Vendredi Saint : Chemins de croix \u00e0 15h (familles \u00e0 Basse-Nendaz, paroisses \u00e0 Haute-Nendaz, Aproz, Veysonnaz) et C\u00e9l\u00e9bration de la Passion \u00e0 20h. Samedi Saint : MVP confirmands et Veill\u00e9e pascale \u00e0 20h30. Dimanche de P\u00e2ques : Messes \u00e0 9h (Veysonnaz), 10h (Basse-Nendaz, Haute-Nendaz, Aproz) et 10h30 (Fey).',
    date: '2026-04-02',
    image: '/images/articles/montee-paques-2026.webp',
    hasImage: true,
    category: '\u00c9v\u00e9nement',
    lieu: 'Toutes les paroisses — du 2 au 5 avril 2026',
    pdfUrl: '/documents/montee-vers-paques-2026.pdf',
    pdfLabel: 'Affiche Semaine Sainte',
    displayUntil: '2026-04-05'
  },
  {
    id: 'journee-malades-2026',
    title: 'Journée de prière pour les malades',
    excerpt: 'Ce dimanche, durant la messe de 10h, le sacrement des malades sera célébré. Si vous êtes absent, contactez le secrétariat de la paroisse pour prendre un rendez-vous afin de recevoir le sacrement des malades.',
    date: '2026-03-01',
    image: '/images/articles/journee-malades-2026.jpg',
    hasImage: true,
    category: 'Pastorale',
    lieu: 'Église de Basse-Nendaz - Messe de 10h00',
    pdfUrl: '/documents/message-eveques-journee-malades-2026.pdf',
    pdfLabel: 'Message des évêques suisses',
    displayUntil: '2026-03-01'
  },
  {
    id: 'loto-eglises-basse-haute-nendaz',
    title: 'Loto des églises de Basse-Nendaz et Haute-Nendaz',
    excerpt: 'Après-midi loto organisé au profit des églises de Basse-Nendaz et Haute-Nendaz. Venez nombreux pour passer un bon moment convivial !',
    date: '2026-02-22',
    hasImage: false,
    category: 'Événement',
    lieu: 'Salle de la Biolette, Basse-Nendaz - 17h30'
  },
  {
    id: 'concert-caecilia-mars-2026',
    title: 'Concert Caecilia',
    excerpt: 'Concert du chœur La Caecilia de Fey. Une soirée musicale à ne pas manquer !',
    date: '2026-03-18',
    hasImage: false,
    category: 'Culture',
    lieu: 'Église de Fey - 20h15'
  },
  {
    id: 'concert-davidica-2026',
    title: 'Concert Davidica avec le chœur Chanson du pays de Gruyère',
    excerpt: 'Concert exceptionnel de l\'ensemble Davidica accompagné du chœur Chanson du pays de Gruyère. Une belle rencontre musicale entre chorales.',
    date: '2026-03-29',
    hasImage: false,
    category: 'Culture',
    lieu: 'Église de Haute-Nendaz - 17h30'
  }
]

// Date de fin du Carême 2026
const CAREME_END = new Date('2026-04-06T00:00:00')

export default function ActualitesPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<typeof allEvents>([])
  const [pastEvents, setPastEvents] = useState<typeof allEvents>([])
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [showCaremeBanner, setShowCaremeBanner] = useState(false)

  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    setShowCaremeBanner(today < CAREME_END)

    const isStillVisible = (event: typeof allEvents[0]) => {
      if ('displayUntil' in event && event.displayUntil) {
        return new Date(event.displayUntil) >= today
      }
      return new Date(event.date) >= today
    }

    const upcoming = allEvents
      .filter(event => isStillVisible(event))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const past = allEvents
      .filter(event => !isStillVisible(event))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    setUpcomingEvents(upcoming)
    setPastEvents(past)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Événement': 'bg-paroisse-rouge/10 text-paroisse-rouge border-paroisse-rouge/30',
      'Pèlerinage': 'bg-paroisse-bleuCiel/10 text-paroisse-bleuCiel border-paroisse-bleuCiel/30',
      'Liturgie': 'bg-paroisse-vert/10 text-paroisse-vert border-paroisse-vert/30',
      'Formation': 'bg-paroisse-bleuRoi/10 text-paroisse-bleuRoi border-paroisse-bleuRoi/30',
      'Culture': 'bg-paroisse-violet/10 text-paroisse-violet border-paroisse-violet/30',
      'Pastorale': 'bg-paroisse-turquoise/10 text-paroisse-turquoise border-paroisse-turquoise/30'
    }
    return colors[category] || 'bg-neutral-gris/10 text-neutral-gris border-neutral-gris/30'
  }

  return (
    <div className="min-h-screen bg-neutral-grisClaire">

      {/* HERO AVEC IMAGE */}
      <section className="relative h-[300px] md:h-[380px] overflow-hidden">
        <Image
          src="/images/paroisses/basse-nendaz/hero-desktop.webp"
          alt="Église de Basse-Nendaz — Paroisses de Nendaz et Veysonnaz"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="container mx-auto px-4 relative h-full flex items-end pb-10 md:pb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-1 bg-amber-400"></span>
              <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Paroisses de Nendaz et Veysonnaz</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              Actualit&eacute;s
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Suivez la vie de nos paroisses et ne manquez aucun rendez-vous
            </p>

            {/* Liens rapides */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/pastorale" className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
                Vie pastorale
              </Link>
              <Link href="/paroisses" className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
                Nos paroisses
              </Link>
              <Link href="/contact" className="px-5 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BANNIÈRE CARÊME (temporaire, jusqu'au 5 avril) */}
      {showCaremeBanner && (
        <section className="bg-gradient-to-r from-[#4B0082] to-[#360060] py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-1">
                  18 f&eacute;vrier — 5 avril 2026
                </p>
                <p className="text-white text-xl md:text-2xl font-bold">
                  Car&ecirc;me 2026 : Proph&egrave;te ? Moi ?
                </p>
              </div>
              <Link
                href="/careme2026"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4B0082] font-semibold rounded-full hover:bg-amber-50 transition-colors flex-shrink-0"
              >
                D&eacute;couvrir le parcours
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* MUR DE PRIÈRES — CRANS-MONTANA */}
      <MemorialTeaser />

      {/* ÉVÉNEMENTS — LISTE UNIFIÉE CHRONOLOGIQUE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto">

            {/* ÉVÉNEMENTS À VENIR */}
            {upcomingEvents.length > 0 ? (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-neutral-anthracite mb-8 flex items-center gap-3">
                  <span className="w-10 h-1 bg-paroisse-vert"></span>
                  Prochains &eacute;v&eacute;nements
                </h2>

                <div className="space-y-6">
                  {upcomingEvents.map(event => (
                    <article
                      key={event.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image (si disponible) */}
                        {event.hasImage && 'image' in event && event.image && (
                          <div
                            className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 cursor-pointer overflow-hidden"
                            onClick={() => setLightboxImage(event.image!)}
                          >
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 288px"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Contenu */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className={`inline-block px-3 py-1 border text-xs font-bold uppercase tracking-wider rounded-full ${getCategoryColor(event.category)}`}>
                              {event.category}
                            </span>
                            <span className="text-neutral-gris text-sm font-medium flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(event.date)}
                            </span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-vert transition-colors">
                            {event.title}
                          </h3>

                          <p className="text-neutral-gris leading-relaxed mb-4">
                            {event.excerpt}
                          </p>

                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 text-neutral-gris text-sm">
                              <MapPin className="w-4 h-4" />
                              <span className="font-medium">{event.lieu}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {'pdfUrl' in event && event.pdfUrl && (
                                <a
                                  href={event.pdfUrl}
                                  download
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-stone-700 text-white text-sm font-semibold rounded-full hover:bg-stone-800 transition-colors"
                                >
                                  <Download className="w-4 h-4" />
                                  {'pdfLabel' in event && event.pdfLabel ? event.pdfLabel : 'Document PDF'}
                                </a>
                              )}
                              {'externalUrl' in event && event.externalUrl && (
                                <a
                                  href={event.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-paroisse-vert text-white text-sm font-semibold rounded-full hover:bg-paroisse-vertFonce transition-colors"
                                >
                                  Plus d&apos;infos
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-16 text-center py-12">
                <Star className="w-12 h-12 text-neutral-gris/30 mx-auto mb-4" strokeWidth={1} />
                <p className="text-neutral-gris text-lg">Aucun &eacute;v&eacute;nement &agrave; venir pour le moment</p>
              </div>
            )}

            {/* ARCHIVES */}
            {pastEvents.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-neutral-anthracite mb-8 flex items-center gap-3">
                  <span className="w-10 h-1 bg-neutral-gris"></span>
                  Archives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pastEvents.slice(0, 8).map(event => (
                    <article key={event.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-75 hover:opacity-100">
                      <div className="p-4">
                        <span className={`inline-block px-2 py-1 border text-xs font-bold uppercase tracking-wider rounded mb-2 ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                        <h3 className="font-bold text-neutral-anthracite text-base mb-2 group-hover:text-paroisse-vert transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-neutral-gris text-xs">{formatDate(event.date)}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-grisClaire transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage}
              alt="Affiche &eacute;v&eacute;nement"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
