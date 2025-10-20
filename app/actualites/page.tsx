'use client'

import { Metadata } from 'next'
import { useState, useEffect } from 'react'

// Données temporaires - seront remplacées par la base de données
const allEvents = [
  {
    id: 'confirmation-2025-video',
    title: 'Célébration de la Confirmation 2025',
    excerpt: 'Revivez en images la magnifique célébration de la Confirmation de nos jeunes. Un moment fort de foi et de communion dans notre paroisse.',
    date: '2025-10-11',
    image: '/images/articles/confirmation-2025.jpg',
    hasImage: true, // Indique si l'événement a une image à afficher
    category: 'Événement',
    lieu: 'Église de Basse-Nendaz',
    featured: true,
    youtubeId: 'hAmnQ3YeMKo'
  },
  {
    id: 'toussaint-2025',
    title: 'Fête de la Toussaint',
    excerpt: 'Messes suivies d\'un temps de prière pour les défunts au cimetière. 10h : Aproz, Basse-Nendaz, Veysonnaz / 15h : Haute-Nendaz, Fey',
    date: '2025-11-01',
    hasImage: false,
    category: 'Événement',
    lieu: 'Toutes paroisses'
  },
  {
    id: 'defunts-2025',
    title: 'Commémoration des fidèles défunts',
    excerpt: 'Messe en mémoire de tous les fidèles défunts. Venez prier pour nos proches disparus.',
    date: '2025-11-02',
    hasImage: false,
    category: 'Liturgie',
    lieu: 'Basse-Nendaz - 10h'
  },
  {
    id: 'messe-adoration-vepres',
    title: 'Messe avec adoration et vêpres',
    excerpt: 'Soirée de prière : adoration dès 18h, office des vêpres à 18h30, messe à 19h.',
    date: '2025-11-07',
    hasImage: false,
    category: 'Liturgie',
    lieu: 'Basse-Nendaz - 18h-19h'
  },
  {
    id: 'confirmation-2026',
    title: 'Présentation de la Confirmation 2026',
    excerpt: 'Présentation du parcours de confirmation et remise des bulletins d\'inscription après la messe de 10h. Rendez-vous à 10h55.',
    date: '2025-11-09',
    hasImage: false,
    category: 'Formation',
    lieu: 'Basse-Nendaz - 10h55'
  },
  {
    id: 'loto-st-michel',
    title: 'Loto du Chœur St-Michel',
    excerpt: 'Après-midi loto organisé par le Chœur St-Michel. Ambiance conviviale et nombreux lots à gagner !',
    date: '2025-11-09',
    hasImage: false,
    category: 'Événement',
    lieu: 'Salle de la Biolette - 17h30'
  },
  {
    id: 'messe-enfants-catechese',
    title: 'Messe animée par les enfants',
    excerpt: 'Messe animée par les enfants des activités catéchétiques. Les familles sont chaleureusement invitées.',
    date: '2025-11-15',
    hasImage: false,
    category: 'Liturgie',
    lieu: 'Haute-Nendaz - 17h30'
  },
  {
    id: 'concert-cecilia-fey',
    title: 'Concert anniversaire Cécilia de Fey',
    excerpt: 'Concert anniversaire des 80 ans de la Cécilia de Fey. Plus d\'informations auprès de la Cécilia.',
    date: '2025-11-15',
    hasImage: false,
    category: 'Culture',
    lieu: 'Fey'
  },
  {
    id: 'communion-priere',
    title: 'Préparation 1ère Communion',
    excerpt: 'Après-midi en secteur de préparation à la première des communions.',
    date: '2025-11-19',
    hasImage: false,
    category: 'Formation',
    lieu: 'Basse-Nendaz - Après-midi'
  },
  {
    id: 'patronale-fey',
    title: 'Fête patronale du Christ-Roi',
    excerpt: 'Fête patronale du Christ-Roi à l\'église de Fey. Célébration solennelle suivie d\'un moment de convivialité.',
    date: '2025-11-22',
    hasImage: false,
    category: 'Événement',
    lieu: 'Fey - 19h'
  },
  {
    id: 'couronnes-avent',
    title: 'Journée intergénérationnelle des Couronnes de l\'Avent',
    excerpt: 'Journée de fabrication des couronnes de l\'Avent pour tous les âges. Messe à 17h30 animée avec les enfants et familles du Pardon.',
    date: '2025-11-29',
    image: '/images/articles/couronnes-avent.jpg',
    hasImage: true, // Cet événement aura une image (flyer)
    category: 'Événement',
    lieu: 'Messe 17h30'
  },
  {
    id: '1',
    title: 'Fête paroissiale 2025',
    excerpt: 'Grande fête paroissiale avec messe, repas et animations pour tous. Venez nombreux célébrer ensemble notre communauté !',
    date: '2025-10-12',
    hasImage: false,
    category: 'Événement',
    lieu: 'Basse-Nendaz'
  },
  {
    id: '2',
    title: 'Pèlerinage à Lourdes',
    excerpt: 'Inscriptions ouvertes pour le pèlerinage diocésain à Lourdes. Départ prévu en bus avec accompagnement spirituel.',
    date: '2025-11-20',
    hasImage: false,
    category: 'Pèlerinage',
    lieu: 'Lourdes, France'
  }
]

export default function ActualitesPage() {
  const [featuredEvent, setFeaturedEvent] = useState<typeof allEvents[0] | null>(null)
  const [highlightEvents, setHighlightEvents] = useState<typeof allEvents>([])
  const [regularEvents, setRegularEvents] = useState<typeof allEvents>([])
  const [pastEvents, setPastEvents] = useState<typeof allEvents>([])

  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Trouver l'événement featured
    const featured = allEvents.find(e => e.featured) || null
    setFeaturedEvent(featured)

    // Séparer les autres événements
    const otherEvents = allEvents.filter(e => !e.featured)
    const upcoming = otherEvents.filter(event => new Date(event.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const past = otherEvents.filter(event => new Date(event.date) < today).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Séparer événements avec images (highlights) et sans images (réguliers)
    const withImages = upcoming.filter(e => e.hasImage)
    const withoutImages = upcoming.filter(e => !e.hasImage)

    setHighlightEvents(withImages)
    setRegularEvents(withoutImages)
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

      {/* HERO - VIDÉO CONFIRMATION MISE EN VALEUR */}
      {featuredEvent && (
        <section className="relative bg-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              {/* Titre */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight text-neutral-anthracite" style={{ fontFamily: 'Playfair Display, serif' }}>
                {featuredEvent.title}
              </h1>

              <p className="text-xl md:text-2xl text-center text-neutral-gris mb-12 max-w-3xl mx-auto leading-relaxed">
                {featuredEvent.excerpt}
              </p>

              {/* Vidéo YouTube Embed */}
              <div className="max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${featuredEvent.youtubeId}?rel=0`}
                      title={featuredEvent.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Meta info sous la vidéo */}
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-neutral-gris">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{formatDate(featuredEvent.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{featuredEvent.lieu}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* SECTION ACTUALITÉS - LAYOUT STRUCTURÉ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Header section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Prochains événements
            </h2>
            <p className="text-xl text-neutral-gris max-w-2xl mx-auto">
              Suivez la vie de nos paroisses et ne manquez aucun rendez-vous
            </p>
          </div>

          <div className="max-w-6xl mx-auto">

            {/* ÉVÉNEMENTS AVEC IMAGES - Cartes mise en valeur */}
            {highlightEvents.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-neutral-anthracite mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="w-10 h-1 bg-paroisse-jaune"></span>
                  Événements phares
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {highlightEvents.map(event => (
                    <article key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-64 bg-gradient-to-br from-neutral-gris/20 to-neutral-grisClaire overflow-hidden">
                        {event.image && (
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        {!event.image && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-24 h-24 text-neutral-gris/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Contenu */}
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`inline-block px-3 py-1 border text-xs font-bold uppercase tracking-wider rounded-full ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                          <span className="text-neutral-gris text-sm font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(event.date)}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-neutral-anthracite mb-3 group-hover:text-paroisse-bleuRoi transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                          <a href={`/actualites/${event.id}`} className="hover:underline">
                            {event.title}
                          </a>
                        </h3>

                        <p className="text-neutral-gris leading-relaxed mb-4">
                          {event.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-neutral-gris text-sm mb-4">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{event.lieu}</span>
                        </div>

                        <a
                          href={`/actualites/${event.id}`}
                          className="inline-flex items-center text-paroisse-bleuRoi hover:text-paroisse-rouge font-semibold text-sm group/link"
                        >
                          En savoir plus
                          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* ÉVÉNEMENTS SANS IMAGES - Liste compacte et ordonnée */}
            {regularEvents.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-neutral-anthracite mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="w-10 h-1 bg-paroisse-vert"></span>
                  Agenda paroissial
                </h3>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="divide-y divide-neutral-gris/20">
                    {regularEvents.map(event => (
                      <article key={event.id} className="group p-6 hover:bg-neutral-grisClaire transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Date */}
                          <div className="flex-shrink-0 md:w-32">
                            <div className="inline-flex flex-col items-center bg-paroisse-vert/10 rounded-lg p-3 border-2 border-paroisse-vert/30">
                              <span className="text-3xl font-bold text-paroisse-vertFonce" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {new Date(event.date).getDate()}
                              </span>
                              <span className="text-sm font-semibold text-paroisse-vert uppercase">
                                {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                              </span>
                            </div>
                          </div>

                          {/* Contenu */}
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={`inline-block px-2 py-1 border text-xs font-bold uppercase tracking-wider rounded ${getCategoryColor(event.category)}`}>
                                {event.category}
                              </span>
                            </div>

                            <h3 className="text-xl font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-vert transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                              <a href={`/actualites/${event.id}`} className="hover:underline">
                                {event.title}
                              </a>
                            </h3>

                            <p className="text-neutral-gris text-sm mb-2 line-clamp-2">
                              {event.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-neutral-gris text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="font-medium">{event.lieu}</span>
                            </div>
                          </div>

                          {/* Arrow CTA */}
                          <div className="flex-shrink-0">
                            <a
                              href={`/actualites/${event.id}`}
                              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-paroisse-vert/10 text-paroisse-vert group-hover:bg-paroisse-vertFonce group-hover:text-white transition-all duration-300"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ÉVÉNEMENTS PASSÉS - Section condensée */}
            {pastEvents.length > 0 && (
              <div className="mt-24">
                <h3 className="text-2xl font-bold text-neutral-anthracite mb-8 flex items-center gap-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="w-10 h-1 bg-neutral-gris"></span>
                  Archives
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pastEvents.slice(0, 4).map(event => (
                    <article key={event.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-75 hover:opacity-100">
                      <div className="p-4">
                        <span className={`inline-block px-2 py-1 border text-xs font-bold uppercase tracking-wider rounded mb-2 ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                        <h3 className="font-bold text-neutral-anthracite text-base mb-2 group-hover:text-paroisse-vert transition-colors line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
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
    </div>
  )
}
