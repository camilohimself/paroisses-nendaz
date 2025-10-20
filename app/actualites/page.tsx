'use client'

import { Metadata } from 'next'
import { useState, useEffect } from 'react'

// Données temporaires - seront remplacées par la base de données
const allEvents = [
  {
    id: '1',
    title: 'Fête paroissiale 2025',
    excerpt: 'Grande fête paroissiale avec messe, repas et animations pour tous. Venez nombreux célébrer ensemble notre communauté !',
    date: '2025-10-12',
    image: '/images/articles/fete-paroissiale.jpg',
    category: 'Événement',
    lieu: 'Basse-Nendaz'
  },
  {
    id: 'toussaint-2025',
    title: 'Fête de la Toussaint',
    excerpt: 'Messes suivies d\'un temps de prière pour les défunts au cimetière. 10h : Aproz, Basse-Nendaz, Veysonnaz / 15h : Haute-Nendaz, Fey',
    date: '2025-11-01',
    image: '/images/articles/toussaint.jpg',
    category: 'Événement',
    lieu: 'Toutes paroisses'
  },
  {
    id: 'defunts-2025',
    title: 'Commémoration des fidèles défunts',
    excerpt: 'Messe en mémoire de tous les fidèles défunts. Venez prier pour nos proches disparus.',
    date: '2025-11-02',
    image: '/images/articles/defunts.jpg',
    category: 'Événement',
    lieu: 'Basse-Nendaz - 10h'
  },
  {
    id: 'messe-adoration-vepres',
    title: 'Messe avec adoration et vêpres',
    excerpt: 'Soirée de prière : adoration dès 18h, office des vêpres à 18h30, messe à 19h.',
    date: '2025-11-07',
    image: '/images/articles/adoration.jpg',
    category: 'Liturgie',
    lieu: 'Basse-Nendaz - 18h-19h'
  },
  {
    id: 'confirmation-2026',
    title: 'Présentation de la Confirmation 2026',
    excerpt: 'Présentation du parcours de confirmation et remise des bulletins d\'inscription après la messe de 10h. Rendez-vous à 10h55.',
    date: '2025-11-09',
    image: '/images/articles/confirmation.jpg',
    category: 'Formation',
    lieu: 'Basse-Nendaz - 10h55'
  },
  {
    id: 'loto-st-michel',
    title: 'Loto du Chœur St-Michel',
    excerpt: 'Après-midi loto organisé par le Chœur St-Michel. Ambiance conviviale et nombreux lots à gagner !',
    date: '2025-11-09',
    image: '/images/articles/loto.jpg',
    category: 'Événement',
    lieu: 'Salle de la Biolette - 17h30'
  },
  {
    id: 'messe-enfants-catechese',
    title: 'Messe animée par les enfants',
    excerpt: 'Messe animée par les enfants des activités catéchétiques. Les familles sont chaleureusement invitées.',
    date: '2025-11-15',
    image: '/images/articles/messe-enfants.jpg',
    category: 'Liturgie',
    lieu: 'Haute-Nendaz - 17h30'
  },
  {
    id: 'concert-cecilia-fey',
    title: 'Concert anniversaire Cécilia de Fey',
    excerpt: 'Concert anniversaire des 80 ans de la Cécilia de Fey. Plus d\'informations auprès de la Cécilia.',
    date: '2025-11-15',
    image: '/images/articles/concert.jpg',
    category: 'Culture',
    lieu: 'Fey'
  },
  {
    id: 'communion-priere',
    title: 'Préparation 1ère Communion',
    excerpt: 'Après-midi en secteur de préparation à la première des communions.',
    date: '2025-11-19',
    image: '/images/articles/premiere-communion.jpg',
    category: 'Formation',
    lieu: 'Basse-Nendaz - Après-midi'
  },
  {
    id: 'patronale-fey',
    title: 'Fête patronale du Christ-Roi',
    excerpt: 'Fête patronale du Christ-Roi à l\'église de Fey. Célébration solennelle suivie d\'un moment de convivialité.',
    date: '2025-11-22',
    image: '/images/articles/patronale.jpg',
    category: 'Événement',
    lieu: 'Fey - 19h'
  },
  {
    id: 'couronnes-avent',
    title: 'Journée intergénérationnelle des Couronnes de l\'Avent',
    excerpt: 'Journée de fabrication des couronnes de l\'Avent pour tous les âges. Messe à 17h30 animée avec les enfants et familles du Pardon. Plus d\'infos sur paroisses-nendaz.ch',
    date: '2025-11-29',
    image: '/images/articles/couronnes-avent.jpg',
    category: 'Événement',
    lieu: 'Messe 17h30'
  },
  {
    id: '2',
    title: 'Pèlerinage à Lourdes',
    excerpt: 'Inscriptions ouvertes pour le pèlerinage diocésain à Lourdes. Départ prévu en bus avec accompagnement spirituel.',
    date: '2025-11-20',
    image: '/images/articles/lourdes.jpg',
    category: 'Pèlerinage',
    lieu: 'Lourdes, France'
  },
  {
    id: '3',
    title: 'Nouvelle année pastorale 2024-2025',
    excerpt: 'Découvrez le programme et les nouveautés de cette année pastorale qui débute avec de nombreux projets.',
    date: '2024-09-15',
    image: '/images/articles/nouvelle-annee.jpg',
    category: 'Pastorale',
    lieu: 'Toutes paroisses'
  },
  {
    id: '4',
    title: 'Inscriptions catéchisme',
    excerpt: 'Les inscriptions pour le catéchisme des enfants et jeunes sont ouvertes. Informations et modalités disponibles.',
    date: '2024-08-10',
    image: '/images/articles/catechisme.jpg',
    category: 'Formation',
    lieu: 'Basse-Nendaz'
  },
  {
    id: '5',
    title: 'Concert de Noël 2024',
    excerpt: 'La chorale paroissiale présente son concert de Noël avec des chants traditionnels et des nouveautés.',
    date: '2024-12-20',
    image: '/images/articles/concert-noel.jpg',
    category: 'Culture',
    lieu: 'Église Haute-Nendaz'
  }
]

export default function ActualitesPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<typeof allEvents>([])
  const [pastEvents, setPastEvents] = useState<typeof allEvents>([])

  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const upcoming = allEvents.filter(event => new Date(event.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const past = allEvents.filter(event => new Date(event.date) < today).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
      'Pèlerinage': 'bg-sky-500/10 text-sky-600 border-sky-500/30',
      'Pastorale': 'bg-paroisse-vert/10 text-paroisse-vert border-paroisse-vert/30',
      'Formation': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      'Culture': 'bg-paroisse-violet/10 text-paroisse-violet border-paroisse-violet/30',
      'Informations': 'bg-paroisse-bleuRoi/10 text-paroisse-bleuRoi border-paroisse-bleuRoi/30'
    }
    return colors[category] || 'bg-neutral-gris/10 text-neutral-gris border-neutral-gris/30'
  }

  const renderEventCard = (event: typeof allEvents[0]) => (
    <article
      key={event.id}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-neutral-gris/10"
    >
      <div className="md:flex">
        {/* Image placeholder */}
        <div className="md:w-1/3 bg-gradient-to-br from-neutral-gris/10 to-neutral-gris/5 h-64 md:h-auto flex items-center justify-center">
          <svg className="w-20 h-20 text-neutral-gris/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-block px-4 py-1.5 border ${getCategoryColor(event.category)} text-sm font-semibold uppercase tracking-wider`}>
              {event.category}
            </span>
            <span className="text-neutral-gris text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(event.date)}
            </span>
            <span className="text-neutral-gris text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.lieu}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-anthracite mb-3 hover:text-paroisse-bleuRoi transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            <a href={`/actualites/${event.id}`}>
              {event.title}
            </a>
          </h2>

          <p className="text-neutral-gris leading-relaxed mb-6">
            {event.excerpt}
          </p>

          <a
            href={`/actualites/${event.id}`}
            className="inline-flex items-center text-paroisse-bleuRoi hover:text-paroisse-rouge font-semibold uppercase tracking-wider text-sm transition-colors group"
          >
            En savoir plus
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-gris/10">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">

        {/* Header élégant */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-paroisse-bleuRoi to-paroisse-bleuRoi"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-paroisse-bleuRoi transform rotate-45"></div>
            <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent via-paroisse-bleuRoi to-paroisse-bleuRoi"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-anthracite mb-6 md:mb-10 tracking-tight leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Actualités
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-gris leading-relaxed max-w-3xl mx-auto font-light">
            Suivez la vie de nos paroisses et ne manquez aucun événement
          </p>
        </div>

        <div className="max-w-6xl mx-auto">

          {/* ÉVÉNEMENTS À VENIR */}
          <section className="mb-16 md:mb-24">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-anthracite mb-3 flex items-center gap-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="w-12 h-1 bg-paroisse-vert"></span>
                Événements à venir
              </h2>
              <p className="text-neutral-gris text-lg ml-16">
                Prochains rendez-vous de notre communauté
              </p>
            </div>

            <div className="space-y-8">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map(renderEventCard)
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border-2 border-neutral-gris/10">
                  <p className="text-neutral-gris text-lg">Aucun événement à venir pour le moment.</p>
                </div>
              )}
            </div>
          </section>

          {/* ÉVÉNEMENTS PASSÉS */}
          <section className="mb-16">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-anthracite mb-3 flex items-center gap-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="w-12 h-1 bg-neutral-gris"></span>
                Événements passés
              </h2>
              <p className="text-neutral-gris text-lg ml-16">
                Retour sur les moments forts de notre paroisse
              </p>
            </div>

            <div className="space-y-8 opacity-75">
              {pastEvents.length > 0 ? (
                pastEvents.map(renderEventCard)
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border-2 border-neutral-gris/10">
                  <p className="text-neutral-gris text-lg">Aucun événement passé enregistré.</p>
                </div>
              )}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}