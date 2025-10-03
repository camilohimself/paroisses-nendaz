import parse from 'html-react-parser'

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
  MASS: 'bg-paroisse-bleuCommunaute/20 text-paroisse-bleuCommunaute',
  BAPTISM: 'bg-paroisse-vertFonce/20 text-paroisse-vertFonce',
  WEDDING: 'bg-paroisse-rougeFonce/20 text-paroisse-rougeFonce',
  FUNERAL: 'bg-neutral-gris/20 text-neutral-anthracite',
  CONFESSION: 'bg-paroisse-violetFonce/20 text-paroisse-violetFonce',
  MEETING: 'bg-paroisse-jaune/20 text-neutral-anthracite',
  CELEBRATION: 'bg-paroisse-jaune/20 text-neutral-anthracite',
  OTHER: 'bg-neutral-gris/20 text-neutral-anthracite'
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
    <div className={`bg-neutral-grisClaire p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-gris/10 ${className}`}>
      <div className="text-sm text-paroisse-bleuCielFonce font-medium mb-2">
        {formatDate(event.date)}
      </div>
      
      <h3 className="font-semibold text-lg mb-2 text-neutral-anthracite">
        {event.title}
      </h3>
      
      <div className="text-neutral-gris text-sm mb-4 space-y-1">
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
        <div className="text-neutral-gris text-sm mb-4 prose prose-sm max-w-none">
          {parse(event.description)}
        </div>
      )}
      
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors[event.type]}`}>
        {eventTypeLabels[event.type]}
      </span>
    </div>
  )
}