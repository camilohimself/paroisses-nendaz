import EventCard from '@/components/EventCard'
import QuickAccessCard from '@/components/QuickAccessCard'
import YouTubeLiveIndicator from '@/components/YouTubeLiveIndicator'
import HorairesMesse from '@/components/HorairesMesse'

// Données temporaires - seront remplacées par la base de données
const upcomingEvents = [
  {
    id: '1',
    title: 'Messe dominicale',
    date: '2025-01-19',
    time: '10h00',
    location: 'Basse-Nendaz',
    type: 'MASS' as const,
    description: 'Messe dominicale avec diffusion YouTube Live'
  },
  {
    id: '2',
    title: 'Adoration eucharistique',
    date: '2025-01-21',
    time: '18h00',
    location: 'Haute-Nendaz',
    type: 'CELEBRATION' as const,
    description: 'Temps de prière et d\'adoration du Saint-Sacrement'
  },
  {
    id: '3',
    title: 'Catéchisme - Parcours confirmation',
    date: '2025-01-25',
    time: '13h30',
    location: 'Salle paroissiale',
    type: 'MEETING' as const,
    description: 'Rencontre pour les jeunes en parcours de confirmation'
  },
  {
    id: '4',
    title: 'Messe de la Chandeleur',
    date: '2025-02-02',
    time: '10h00',
    location: 'Veysonnaz',
    type: 'CELEBRATION' as const,
    description: 'Célébration de la Présentation du Seigneur avec bénédiction des cierges'
  },
  {
    id: '5',
    title: 'Soirée de l\'Amitié',
    date: '2025-02-08',
    time: '19h00',
    location: 'Salle paroissiale Basse-Nendaz',
    type: 'MEETING' as const,
    description: 'Rencontre conviviale avec repas partagé et animation'
  },
  {
    id: '6',
    title: 'Messe des Cendres',
    date: '2025-03-05',
    time: '18h30',
    location: 'Haute-Nendaz',
    type: 'MASS' as const,
    description: 'Entrée en Carême avec imposition des Cendres'
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-grisClaire to-white py-20 vitrail-glow">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-anthracite mb-6">
            Paroisses de Nendaz
          </h1>
          <p className="text-xl text-paroisse-bleuRoi mb-8">
            Nendaz • Veysonnaz
          </p>
          <div className="bg-paroisse-jaune/20 border-l-4 border-paroisse-jaune p-4 mb-8 mx-auto max-w-2xl backdrop-blur-sm">
            <p className="text-neutral-anthracite flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-paroisse-rouge rounded-full animate-pulse"></span>
              <strong>Messe en direct</strong> • Dimanche 10h00 sur YouTube
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-neutral-anthracite">
            Accès rapides
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <QuickAccessCard
              title="Messe en direct"
              description="YouTube Live - Dimanche 10h"
              href="https://www.youtube.com/@paroissesnendazetveysonnaz"
              color="red"
              external
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              }
            />
            <QuickAccessCard
              title="Base Enoria"
              description="Accès paroissiens"
              href="https://web.enoria.app/"
              color="enoria"
              external
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
            />
            <QuickAccessCard
              title="Réservation salle"
              description="Salle paroissiale"
              href="/reservation"
              color="green"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <QuickAccessCard
              title="Feuilles d&apos;annonces"
              description="Documents PDF"
              href="/documents"
              color="purple"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-neutral-grisClaire">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-anthracite">Prochains événements</h2>
            <a
              href="/evenements"
              className="text-paroisse-bleuRoi hover:text-paroisse-rouge font-medium text-sm flex items-center transition-colors"
            >
              Voir tous les événements
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Mass Schedule - Dynamic from Google Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-anthracite">Prochaines célébrations</h2>
          <div className="max-w-4xl mx-auto">
            <HorairesMesse
              showCalendarSelector={true}
              maxEvents={8}
            />
          </div>

          {/* Fallback horaires fixes si Google Calendar ne fonctionne pas */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-600">Horaires habituels</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-paroisse-rouge">Week-end</h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Samedi 18h00</span>
                    <span className="text-gray-600">Haute-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Dimanche 10h00</span>
                    <span className="text-gray-600">Basse-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Dimanche 11h00</span>
                    <span className="text-gray-600">Veysonnaz (été)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-paroisse-bleuRoi">Semaine</h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Mardi 8h30</span>
                    <span className="text-gray-600">Basse-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Jeudi 18h30</span>
                    <span className="text-gray-600">Haute-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Vendredi 8h30</span>
                    <span className="text-gray-600">Veysonnaz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Live Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-grisClaire to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-anthracite mb-8 text-center">
              Messe en direct
            </h2>
            <YouTubeLiveIndicator />
          </div>
        </div>
      </section>
    </div>
  )
}
