/**
 * EventListSchema - Données structurées JSON-LD pour plusieurs événements
 * Type: Event / ReligiousEvent
 * Usage: Page actualités (événements à venir)
 * Bénéfice: Apparaît dans Google Events et résultats enrichis
 *
 * Sécurité: dangerouslySetInnerHTML est utilisé ici de manière sûre
 * car le contenu provient exclusivement de données statiques internes
 * (props du composant), sérialisées via JSON.stringify qui échappe
 * automatiquement les caractères spéciaux HTML/JS.
 */

interface EventItem {
  name: string;
  description: string;
  startDate: string;
  location: string;
  url?: string;
  image?: string;
}

interface EventListSchemaProps {
  events: EventItem[];
}

export default function EventListSchema({ events }: EventListSchemaProps) {
  const eventsData = events.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": event.location,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Valais",
        "addressCountry": "CH",
      },
    },
    "organizer": {
      "@type": "ReligiousOrganization",
      "@id": "https://www.paroisses-nendaz.ch/#organization",
      "name": "Paroisses de Nendaz",
      "url": "https://www.paroisses-nendaz.ch",
    },
    "url": event.url || "https://www.paroisses-nendaz.ch/actualites",
    "image": event.image
      ? `https://www.paroisses-nendaz.ch${event.image}`
      : undefined,
    "inLanguage": "fr-CH",
    "isAccessibleForFree": true,
  }));

  const cleanData = JSON.parse(JSON.stringify(eventsData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanData) }}
    />
  );
}
