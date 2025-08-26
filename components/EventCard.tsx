interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: 'MASS' | 'BAPTISM' | 'WEDDING' | 'FUNERAL' | 'CONFESSION' | 'MEETING' | 'CELEBRATION' | 'OTHER'
  description?: string
}

const eventTypeColors = {
  MASS: 'bg-blue-100 text-blue-800',
  BAPTISM: 'bg-green-100 text-green-800',
  WEDDING: 'bg-pink-100 text-pink-800',
  FUNERAL: 'bg-gray-100 text-gray-800',
  CONFESSION: 'bg-purple-100 text-purple-800',
  MEETING: 'bg-orange-100 text-orange-800',
  CELEBRATION: 'bg-yellow-100 text-yellow-800',
  OTHER: 'bg-gray-100 text-gray-800'
}

const eventTypeLabels = {
  MASS: 'Messe',
  BAPTISM: 'Baptême',
  WEDDING: 'Mariage',
  FUNERAL: 'Funérailles',
  CONFESSION: 'Confession',
  MEETING: 'Réunion',
  CELEBRATION: 'Célébration',
  OTHER: 'Autre'
}

interface EventCardProps {
  event: Event
  className?: string
}

export default function EventCard({ event, className = '' }: EventCardProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className={`bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow ${className}`}>
      <div className="text-sm text-blue-600 mb-2">
        {formatDate(event.date)}
      </div>
      
      <h3 className="font-semibold text-lg mb-2 text-gray-900">
        {event.title}
      </h3>
      
      <div className="text-gray-600 text-sm mb-4 space-y-1">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {event.time}
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location}
        </div>
      </div>

      {event.description && (
        <p className="text-gray-600 text-sm mb-4">
          {event.description}
        </p>
      )}
      
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors[event.type]}`}>
        {eventTypeLabels[event.type]}
      </span>
    </div>
  )
}