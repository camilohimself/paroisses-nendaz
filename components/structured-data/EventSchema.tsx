/**
 * EventSchema - Données structurées JSON-LD
 * Type: Event (ReligiousEvent)
 * Usage: Pages événements, actualités, horaires messes
 * Bénéfice: Apparaît dans Google Events et résultats enrichis
 */

interface EventSchemaProps {
  name: string;
  description?: string;
  startDate: string; // ISO 8601 format (ex: 2025-11-16T10:00:00+01:00)
  endDate?: string;
  location: {
    name: string;
    address?: {
      streetAddress?: string;
      addressLocality: string;
      postalCode?: string;
      addressCountry: string;
    };
  };
  eventType?: 'Mass' | 'Sacrament' | 'Pastoral' | 'Community';
  url?: string;
  image?: string;
  organizer?: {
    name: string;
    url: string;
  };
}

export default function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  eventType = 'Mass',
  url,
  image,
  organizer = {
    name: "Paroisses de Nendaz",
    url: "https://www.paroisses-nendaz.ch"
  }
}: EventSchemaProps) {
  // Déterminer le type d'événement spécifique
  const getEventAttendanceMode = () => {
    return "https://schema.org/OfflineEventAttendanceMode";
  };

  const eventData = {
    "@context": "https://schema.org",
    "@type": eventType === 'Mass' ? "ReligiousEvent" : "Event",
    "name": name,
    "description": description || name,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "eventAttendanceMode": getEventAttendanceMode(),
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": location.address ? {
        "@type": "PostalAddress",
        "streetAddress": location.address.streetAddress,
        "addressLocality": location.address.addressLocality,
        "postalCode": location.address.postalCode,
        "addressCountry": location.address.addressCountry
      } : undefined
    },
    "organizer": {
      "@type": "ReligiousOrganization",
      "@id": "https://www.paroisses-nendaz.ch/#organization",
      "name": organizer.name,
      "url": organizer.url
    },
    "url": url,
    "image": image,
    "inLanguage": "fr-CH",
    "isAccessibleForFree": true
  };

  // Nettoyer les valeurs undefined
  const cleanEventData = JSON.parse(JSON.stringify(eventData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanEventData) }}
    />
  );
}
