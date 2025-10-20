'use client'

import { Metadata } from 'next'
import { useState, useEffect } from 'react'

// Données temporaires - seront remplacées par la base de données
const allEvents = [
  {
    id: 'confirmation-2025-video',
    title: 'Célébration de la Confirmation 2025',
    excerpt: 'Revivez en images la magnifique célébration de la Confirmation de nos jeunes. Un moment fort de foi et de communion dans notre paroisse.',
    date: '2025-10-19',
    image: '/images/articles/confirmation-2025.jpg',
    category: 'Événement',
    lieu: 'Paroisses de Nendaz',
    featured: true,
    youtubeId: 'hAmnQ3YeMKo'
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
    category: 'Liturgie',
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
    excerpt: 'Journée de fabrication des couronnes de l\'Avent pour tous les âges. Messe à 17h30 animée avec les enfants et familles du Pardon.',
    date: '2025-11-29',
    image: '/images/articles/couronnes-avent.jpg',
    category: 'Événement',
    lieu: 'Messe 17h30'
  },
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
    id: '2',
    title: 'Pèlerinage à Lourdes',
    excerpt: 'Inscriptions ouvertes pour le pèlerinage diocésain à Lourdes. Départ prévu en bus avec accompagnement spirituel.',
    date: '2025-11-20',
    image: '/images/articles/lourdes.jpg',
    category: 'Pèlerinage',
    lieu: 'Lourdes, France'
  }
]

export default function ActualitesPage() {
  const [featuredEvent, setFeaturedEvent] = useState<typeof allEvents[0] | null>(null)
  const [upcomingEvents, setUpcomingEvents] = useState<typeof allEvents>([])
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
      'Événement': 'bg-amber-500/10 text-amber-700 border-amber-500/30',
      'Pèlerinage': 'bg-sky-500/10 text-sky-600 border-sky-500/30',
      'Liturgie': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
      'Formation': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30',
      'Culture': 'bg-violet-500/10 text-violet-600 border-violet-500/30',
      'Pastorale': 'bg-rose-500/10 text-rose-600 border-rose-500/30'
    }
    return colors[category] || 'bg-neutral-gris/10 text-neutral-gris border-neutral-gris/30'
  }

  return (
    <div className="min-h-screen bg-stone-50">

      {/* HERO - VIDÉO CONFIRMATION MISE EN VALEUR */}
      {featuredEvent && (
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              {/* Badge "À la une" */}
              <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-xl">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  À la une
                </span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {featuredEvent.title}
              </h1>

              <p className="text-xl md:text-2xl text-center text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
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
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-white/80">
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

          {/* Décoration */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent"></div>
        </section>
      )}

      {/* SECTION ACTUALITÉS - STYLE MAGAZINE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Header section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Prochains événements
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Suivez la vie de nos paroisses et ne manquez aucun rendez-vous
            </p>
          </div>

          {/* GRID MAGAZINE - Layout Bento Box */}
          <div className="max-w-7xl mx-auto">
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => {
                  // Alternance de tailles pour effet magazine dynamique
                  const isLarge = index % 5 === 0
                  const isMedium = index % 5 === 1 || index % 5 === 2

                  return (
                    <article
                      key={event.id}
                      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                        isLarge ? 'md:col-span-2 md:row-span-2' :
                        isMedium ? 'md:col-span-1' :
                        'md:col-span-1'
                      }`}
                    >
                      {/* Image avec effet hover */}
                      <div className={`relative overflow-hidden bg-gradient-to-br from-stone-200 to-stone-100 ${
                        isLarge ? 'h-80 lg:h-96' : 'h-64'
                      }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-24 h-24 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        {/* Overlay gradient au hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Contenu */}
                      <div className={`p-6 ${isLarge ? 'lg:p-8' : ''}`}>
                        {/* Badge catégorie + date */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`inline-block px-3 py-1 border text-xs font-bold uppercase tracking-wider rounded-full ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                          <span className="text-stone-500 text-sm font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(event.date)}
                          </span>
                        </div>

                        {/* Titre */}
                        <h3 className={`font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors ${
                          isLarge ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'
                        }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                          <a href={`/actualites/${event.id}`} className="hover:underline">
                            {event.title}
                          </a>
                        </h3>

                        {/* Excerpt */}
                        <p className={`text-stone-600 leading-relaxed mb-4 ${
                          isLarge ? 'text-base lg:text-lg' : 'text-sm'
                        }`}>
                          {event.excerpt}
                        </p>

                        {/* Lieu */}
                        <div className="flex items-center gap-2 text-stone-500 text-sm mb-4">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{event.lieu}</span>
                        </div>

                        {/* CTA */}
                        <a
                          href={`/actualites/${event.id}`}
                          className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold text-sm group/link"
                        >
                          En savoir plus
                          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                <p className="text-stone-600 text-lg">Aucun événement à venir pour le moment.</p>
              </div>
            )}
          </div>

          {/* ÉVÉNEMENTS PASSÉS - Section condensée */}
          {pastEvents.length > 0 && (
            <div className="max-w-7xl mx-auto mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Archives
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {pastEvents.slice(0, 4).map(event => (
                  <article key={event.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-75 hover:opacity-100">
                    <div className="relative h-32 bg-gradient-to-br from-stone-200 to-stone-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className={`inline-block px-2 py-1 border text-xs font-bold uppercase tracking-wider rounded mb-2 ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                      <h3 className="font-bold text-stone-800 text-base mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {event.title}
                      </h3>
                      <p className="text-stone-500 text-xs">{formatDate(event.date)}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}
