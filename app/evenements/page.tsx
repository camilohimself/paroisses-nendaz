import { Metadata } from 'next'
import EventCard from '@/components/EventCard'

export const metadata: Metadata = {
  title: 'Événements - Paroisses de Nendaz',
  description: 'Découvrez tous les événements et célébrations des paroisses de Nendaz et Veysonnaz.',
}

// Données temporaires - seront remplacées par la base de données
const allEvents = [
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
  },
  {
    id: '4',
    title: 'Baptême de Paul Dupont',
    date: '2025-02-09',
    time: '14h00',
    location: 'Basse-Nendaz',
    type: 'BAPTISM' as const,
    description: 'Célébration du baptême en famille'
  },
  {
    id: '5',
    title: 'Confession communautaire',
    date: '2025-02-15',
    time: '17h00',
    location: 'Haute-Nendaz',
    type: 'CONFESSION' as const,
    description: 'Temps de réconciliation avant le Carême'
  },
  {
    id: '6',
    title: 'Assemblée paroissiale',
    date: '2025-02-20',
    time: '20h00',
    location: 'Crypte de l\'église de Basse-Nendaz',
    type: 'MEETING' as const,
    description: 'Assemblée générale annuelle de la paroisse'
  }
]

const eventTypes = [
  { value: 'ALL', label: 'Tous les événements' },
  { value: 'MASS', label: 'Messes' },
  { value: 'BAPTISM', label: 'Baptêmes' },
  { value: 'WEDDING', label: 'Mariages' },
  { value: 'CELEBRATION', label: 'Célébrations' },
  { value: 'MEETING', label: 'Réunions' },
  { value: 'CONFESSION', label: 'Confessions' }
]

export default function EvenementsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Événements
          </h1>
          <p className="text-xl text-gray-600">
            Retrouvez tous nos événements et célébrations
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {eventTypes.map((type) => (
              <button
                key={type.value}
                className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors text-sm"
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Organisez votre événement
          </h3>
          <p className="mb-6 opacity-90">
            Vous souhaitez organiser un événement dans nos locaux ? 
            Contactez-nous pour réserver la salle paroissiale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/reservation"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Réserver la salle
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-medium"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Mass Schedule Quick Reference */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Horaires réguliers des messes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Week-end</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Samedi 18h00</span>
                  <span className="text-gray-600">Haute-Nendaz</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Dimanche 10h00</span>
                  <span className="text-gray-600">Basse-Nendaz</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Dimanche 11h00</span>
                  <span className="text-gray-600">Veysonnaz (été)</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Semaine</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Mardi 8h30</span>
                  <span className="text-gray-600">Basse-Nendaz</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium">Jeudi 18h30</span>
                  <span className="text-gray-600">Haute-Nendaz</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Vendredi 8h30</span>
                  <span className="text-gray-600">Veysonnaz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}