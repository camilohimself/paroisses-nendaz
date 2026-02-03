'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, MapPin, Star, X, ExternalLink } from 'lucide-react'

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
    id: 'temps-fort-careme-2026',
    title: 'Temps Fort de Carême — Soupe & Témoignage',
    excerpt: 'Soirée spéciale Carême : Messe ATAC à 19h, suivie d\'une soupe partagée et d\'un témoignage sur le Rwanda. Un moment fort de partage et de fraternité.',
    date: '2026-03-13',
    hasImage: false,
    category: 'Événement',
    lieu: 'Église de Basse-Nendaz - 19h00',
    featured: true,
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
    id: 'billet-priere-janvier-2026',
    title: 'Billet de prière - Janvier 2026',
    excerpt: '« Une seule espérance ! » — Intentions de prière du Pape, des évêques suisses et pour notre secteur. Prière pour l\'unité des chrétiens.',
    date: '2026-01-01',
    image: '/images/articles/billet-priere-janvier-2026.jpg',
    hasImage: true,
    category: 'Pastorale',
    lieu: 'Toutes paroisses',
    pdfUrl: '/documents/billets-priere/billet-priere-janvier-2026.pdf',
    displayUntil: '2026-01-31' // Visible tout le mois de janvier
  },
  {
    id: 'epiphanie-2026',
    title: 'L\'Épiphanie - Messe des Familles',
    excerpt: 'Crèche vivante, mise en scène de l\'Évangile par les confirmands, bénédiction des musiciens. Les enfants sont invités à venir habillés en mages ou en bergers ! RDV enfants à 9h45.',
    date: '2026-01-04',
    image: '/images/articles/epiphanie-2026.jpg',
    hasImage: true,
    category: 'Événement',
    lieu: 'Église de Basse-Nendaz - 10h00',
    featured: false
  },
  {
    id: 'confirmation-2025-video',
    title: 'Célébration de la Confirmation 2025',
    excerpt: 'Revivez en images la magnifique célébration de la Confirmation de nos jeunes. Un moment fort de foi et de communion dans notre paroisse.',
    date: '2025-10-11',
    hasImage: false,
    category: 'Événement',
    lieu: 'Église de Basse-Nendaz',
    featured: true,
    youtubeId: 'hAmnQ3YeMKo'
  },
  {
    id: 'billet-priere-novembre',
    title: 'Billet de prière - Novembre 2025',
    excerpt: 'Intention de prière pour le mois de novembre. Téléchargez le billet pour accompagner votre prière quotidienne.',
    date: '2025-11-01',
    image: '/images/articles/billet-priere-novembre-2025.jpg',
    hasImage: true,
    category: 'Pastorale',
    lieu: 'Toutes paroisses',
    pdfUrl: '/documents/billets-priere/billet-priere-novembre-2025.pdf',
    displayUntil: '2025-11-30' // Reste visible tout le mois de novembre
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
    title: 'Concert anniversaire Caecilia de Fey',
    excerpt: 'Concert anniversaire des 80 ans de la Caecilia de Fey. Plus d\'informations auprès de la Caecilia.',
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
    image: '/images/articles/couronnes-avent-2025.jpg',
    hasImage: true,
    category: 'Événement',
    lieu: 'Messe 17h30'
  },
  {
    id: 'saint-nicolas-2025',
    title: 'Saint Nicolas à Basse-Nendaz',
    excerpt: 'Saint Nicolas sera au rendez-vous ! Messe animée par les enfants des activités catéchétiques, suivie de la distribution de friandises à tous les enfants.',
    date: '2025-12-14',
    image: '/images/articles/saint-nicolas-2025.jpg',
    hasImage: true,
    category: 'Événement',
    lieu: 'Église de Basse-Nendaz - après la messe de 10h'
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
    id: 'loto-muguet-dec',
    title: 'Loto du chœur Le Muguet',
    excerpt: 'Après-midi loto organisé par le chœur Le Muguet à la salle de gym d\'Aproz. Nombreux lots à gagner !',
    date: '2025-12-07',
    hasImage: false,
    category: 'Événement',
    lieu: 'Salle de gym d\'Aproz - 17h30'
  },
  {
    id: 'eveil-foi-noel',
    title: 'Rencontre de Noël - Éveil à la Foi',
    excerpt: 'Rencontre de Noël pour les tout-petits et leurs accompagnants. Un moment de partage et de découverte adapté aux plus jeunes.',
    date: '2025-12-20',
    hasImage: false,
    category: 'Formation',
    lieu: 'Église de Basse-Nendaz - 9h30'
  },
  {
    id: 'concert-noel-muguet',
    title: 'Concert de Noël - Le Muguet & Echo du Mont',
    excerpt: 'Concert de Noël du chœur Le Muguet d\'Aproz et de la fanfare l\'Echo du Mont. Une soirée musicale festive !',
    date: '2025-12-20',
    hasImage: false,
    category: 'Culture',
    lieu: 'Église d\'Aproz - 20h'
  },
  {
    id: 'loto-caecilia-dec',
    title: 'Loto du Chœur Caecilia',
    excerpt: 'Loto organisé par le Chœur La Caecilia. Venez tenter votre chance et passer un bon moment convivial !',
    date: '2025-12-21',
    hasImage: false,
    category: 'Événement',
    lieu: 'Salle de la Biolette - 17h30'
  },
  {
    id: 'chantee-noel',
    title: 'Chantée de Noël',
    excerpt: 'Chantée de Noël au centre de la station à Haute-Nendaz. Venez chanter les chants traditionnels de Noël !',
    date: '2025-12-23',
    hasImage: false,
    category: 'Culture',
    lieu: 'Centre station Haute-Nendaz - 17h30 à 18h15'
  },
  {
    id: 'concert-noel-veysonnaz',
    title: 'Concert de Noël à Veysonnaz',
    excerpt: 'Concert de Noël à l\'église de Veysonnaz. Une belle soirée musicale pour célébrer les fêtes.',
    date: '2025-12-26',
    hasImage: false,
    category: 'Culture',
    lieu: 'Église de Veysonnaz - 20h'
  },
  {
    id: 'loto-hospitaliers-lourdes',
    title: 'Loto des Hospitaliers de Lourdes',
    excerpt: 'Après-midi loto organisé par les Hospitaliers de Lourdes. Venez nombreux pour soutenir cette belle cause et passer un moment convivial !',
    date: '2026-01-11',
    hasImage: false,
    category: 'Événement',
    lieu: 'Salle de la Biolette, Basse-Nendaz - 17h30'
  },
  {
    id: 'fete-patronale-st-sebastien',
    title: 'Fête de St-Sébastien',
    excerpt: 'Fête patronale de Basse-Nendaz animée par Le Papatuor. Vin chaud offert après la messe avec la participation des chasseurs de la paroisse.',
    date: '2026-01-20',
    hasImage: false,
    category: 'Événement',
    lieu: 'Chapelle Saint-Sébastien - 19h00'
  },
  {
    id: 'loto-eglise-aproz',
    title: 'Loto de l\'église d\'Aproz',
    excerpt: 'Après-midi loto organisé au profit de l\'église d\'Aproz. De nombreux lots à gagner dans une ambiance chaleureuse !',
    date: '2026-01-25',
    hasImage: false,
    category: 'Événement',
    lieu: 'Salle de gym d\'Aproz - 17h30'
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
    id: 'soupe-careme-2026',
    title: 'Soupe de Carême et temps de ressourcement',
    excerpt: 'Soirée de partage autour d\'une soupe de Carême suivie d\'un temps de ressourcement spirituel. Un moment simple et fraternel pour vivre le Carême ensemble.',
    date: '2026-03-13',
    hasImage: false,
    category: 'Pastorale',
    lieu: 'Salle paroissiale de Basse-Nendaz - 19h30'
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
    lieu: 'Église de Haute-Nendaz - 17h00'
  }
]

export default function ActualitesPage() {
  const [featuredEvent, setFeaturedEvent] = useState<typeof allEvents[0] | null>(null)
  const [highlightEvents, setHighlightEvents] = useState<typeof allEvents>([])
  const [regularEvents, setRegularEvents] = useState<typeof allEvents>([])
  const [pastEvents, setPastEvents] = useState<typeof allEvents>([])
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  useEffect(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Trouver l'événement featured
    const featured = allEvents.find(e => e.featured) || null
    setFeaturedEvent(featured)

    // Séparer les autres événements
    const otherEvents = allEvents.filter(e => !e.featured)

    // Fonction pour déterminer si un événement doit rester visible
    const isStillVisible = (event: typeof allEvents[0]) => {
      // Si l'événement a une date de fin d'affichage (displayUntil), on vérifie celle-ci
      if ('displayUntil' in event && event.displayUntil) {
        return new Date(event.displayUntil) >= today
      }
      // Sinon, on utilise la date de l'événement
      return new Date(event.date) >= today
    }

    const upcoming = otherEvents.filter(event => isStillVisible(event)).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const past = otherEvents.filter(event => !isStillVisible(event)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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

      {/* HERO - CARÊME 2026 */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Image de fond */}
        <Image
          src="/images/articles/hero-careme-2026.webp"
          alt="Chemin forestier vers la croix - Carême 2026"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="container mx-auto px-4 relative h-full flex items-end pb-12 md:pb-16">
          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
              18 février — 5 avril 2026
            </span>

            {/* Titre principal */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Carême 2026 : Prophète ? Moi ?
            </h1>

            {/* Citation biblique */}
            <blockquote className="text-xl md:text-2xl text-white/90 italic mb-2" style={{ fontFamily: 'Crimson Text, serif' }}>
              « Avant que tu ne sois formé, je t'ai consacré »
            </blockquote>
            <p className="text-white/70 mb-6">
              — Jérémie 1, 5
            </p>

            {/* CTA */}
            <a
              href="/careme2026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-800 font-semibold rounded-full hover:bg-amber-50 transition-colors"
            >
              Découvrir le parcours
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>
        </div>
      </section>

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
                  Rencontres et partages
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {highlightEvents.map(event => (
                    <article key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Image */}
                      <div
                        className="relative h-64 bg-gradient-to-br from-neutral-gris/20 to-neutral-grisClaire overflow-hidden cursor-pointer"
                        onClick={() => {
                          if ('pdfUrl' in event && event.pdfUrl) {
                            window.open(event.pdfUrl, '_blank')
                          } else if ('image' in event && event.image) {
                            setLightboxImage(event.image)
                          }
                        }}
                      >
                        {'image' in event && event.image ? (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Star className="w-24 h-24 text-neutral-gris/40" strokeWidth={1} />
                          </div>
                        )}
                        {/* Overlay avec indication de clic */}
                        {'image' in event && event.image && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <div className="bg-white/90 px-4 py-2 rounded-full text-neutral-anthracite font-semibold text-sm">
                              {'pdfUrl' in event && event.pdfUrl ? 'Cliquer pour télécharger' : 'Cliquer pour agrandir'}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Contenu */}
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`inline-block px-3 py-1 border text-xs font-bold uppercase tracking-wider rounded-full ${getCategoryColor(event.category)}`}>
                            {event.category}
                          </span>
                          <span className="text-neutral-gris text-sm font-medium flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(event.date)}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-neutral-anthracite mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {event.title}
                        </h3>

                        <p className="text-neutral-gris leading-relaxed mb-4">
                          {event.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-neutral-gris text-sm">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{event.lieu}</span>
                          </div>
                          {'externalUrl' in event && event.externalUrl && (
                            <a
                              href={event.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-paroisse-vert text-white text-sm font-semibold rounded-full hover:bg-paroisse-vertFonce transition-colors"
                            >
                              Plus d'infos
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
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

                            <h3 className="text-xl font-bold text-neutral-anthracite mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {event.title}
                            </h3>

                            <p className="text-neutral-gris text-sm mb-2 line-clamp-2">
                              {event.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-neutral-gris text-sm">
                                <MapPin className="w-4 h-4" />
                                <span className="font-medium">{event.lieu}</span>
                              </div>
                              {'externalUrl' in event && event.externalUrl && (
                                <a
                                  href={event.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-paroisse-vert text-sm font-semibold hover:text-paroisse-vertFonce transition-colors"
                                >
                                  Plus d'infos
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
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

          {/* Liens utiles */}
          <div className="mt-16 pt-12 border-t border-neutral-gris/20">
            <h3 className="text-xl font-bold text-neutral-anthracite mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Découvrir aussi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a href="/pastorale" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-neutral-gris/20">
                <p className="font-semibold text-neutral-anthracite group-hover:text-paroisse-vert transition-colors">Vie pastorale</p>
                <p className="text-xs text-neutral-gris">Sacrements & catéchèse</p>
              </a>
              <a href="/paroisses" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-neutral-gris/20">
                <p className="font-semibold text-neutral-anthracite group-hover:text-paroisse-vert transition-colors">Nos paroisses</p>
                <p className="text-xs text-neutral-gris">Églises & chapelles</p>
              </a>
              <a href="/contact" className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center border border-neutral-gris/20">
                <p className="font-semibold text-neutral-anthracite group-hover:text-paroisse-vert transition-colors">Nous contacter</p>
                <p className="text-xs text-neutral-gris">Questions & demandes</p>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
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
              alt="Affiche événement"
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
