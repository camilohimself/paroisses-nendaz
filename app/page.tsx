import EventCard from '@/components/EventCard'
import QuickAccessCard from '@/components/QuickAccessCard'
import YouTubeLiveIndicator from '@/components/YouTubeLiveIndicator'
import DecorativeOrnament from '@/components/DecorativeOrnament'

// Données temporaires - seront remplacées par la base de données
const upcomingEvents = [
  {
    id: '1',
    title: 'Messe en famille',
    date: '2025-01-19',
    time: '10h00',
    location: 'Haute-Nendaz',
    type: 'MASS' as const,
    description: 'Messe dominicale adaptée aux familles avec enfants'
  },
  {
    id: '2', 
    title: 'Parcours confirmation',
    date: '2025-01-25',
    time: '13h30',
    location: 'Basse-Nendaz',
    type: 'MEETING' as const,
    description: 'Rencontre pour les jeunes en parcours de confirmation'
  },
  {
    id: '3',
    title: 'Messe des familles',
    date: '2025-02-02',
    time: '10h00', 
    location: 'Veysonnaz',
    type: 'CELEBRATION' as const,
    description: 'Célébration de la Chandeleur'
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[var(--beige-parchemin)] to-white py-20 vitrail-glow">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
            Paroisses de Nendaz
          </h1>
          <p className="text-xl text-accent text-[var(--gris-doux)] mb-8">
            Nendaz • Veysonnaz
          </p>
          <div className="bg-lumiere/20 border-l-4 border-lumiere p-4 mb-8 mx-auto max-w-2xl backdrop-blur-sm">
            <p className="text-[var(--foreground)] flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-communion rounded-full animate-pulse"></span>
              <strong>Messe en direct</strong> • Dimanche 10h00 sur YouTube
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[var(--foreground)]">
            Accès rapides
          </h2>
          <DecorativeOrnament type="divider" className="mb-8" />
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
              href="#"
              color="blue"
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
      <section className="py-16 bg-parchemin">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--foreground)]">Prochains événements</h2>
            <a 
              href="/evenements" 
              className="text-ciel hover:text-communion font-medium text-sm flex items-center transition-parish"
            >
              Voir tous les événements
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Mass Schedule */}
      <section className="py-16 bg-white relative">
        <DecorativeOrnament type="corner" position="top" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[var(--foreground)]">Horaires des messes</h2>
          <DecorativeOrnament type="cross" className="mb-8" />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-communion">Week-end</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span>Samedi 18h00</span>
                    <span className="text-gray-600">Haute-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Dimanche 10h00</span>
                    <span className="text-gray-600">Basse-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Dimanche 11h00</span>
                    <span className="text-gray-600">Veysonnaz (été)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-ciel">Semaine</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span>Mardi 8h30</span>
                    <span className="text-gray-600">Basse-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Jeudi 18h30</span>
                    <span className="text-gray-600">Haute-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
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
      <section className="py-16 bg-gradient-to-br from-[var(--beige-parchemin)] to-white relative">
        <DecorativeOrnament type="corner" position="bottom" />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4 text-center">
              Messe en direct
            </h2>
            <DecorativeOrnament type="divider" className="mb-8" />
            <YouTubeLiveIndicator />
          </div>
        </div>
      </section>
    </div>
  )
}
