/**
 * EventListSchema - Données structurées JSON-LD pour plusieurs événements
 * Type: Event / ReligiousEvent
 * Usage: Page actualités (événements à venir)
 * Bénéfice: Apparaît dans Google Events et résultats enrichis
 *
 * Champs recommandés par Google (endDate, image, offers, performer) inclus
 * avec valeurs de repli, pour lever les avertissements Search Console.
 *
 * Sécurité: dangerouslySetInnerHTML est utilisé ici de manière sûre
 * car le contenu provient exclusivement de données statiques internes
 * (props du composant), sérialisées via JSON.stringify qui échappe
 * automatiquement les caractères spéciaux HTML/JS.
 */

const SITE_URL = 'https://www.paroisses-nendaz.ch';
const FALLBACK_IMAGE = `${SITE_URL}/images/paroisses/basse-nendaz/hero-desktop.jpg`;

interface EventItem {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url?: string;
  image?: string;
}

interface EventListSchemaProps {
  events: EventItem[];
}

export default function EventListSchema({ events }: EventListSchemaProps) {
  const eventsData = events.map((event) => {
    const eventUrl = event.url || `${SITE_URL}/actualites`;

    return {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.name,
      "description": event.description,
      "startDate": event.startDate,
      "endDate": event.endDate || event.startDate,
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
        "@id": `${SITE_URL}/#organization`,
        "name": "Paroisses de Nendaz",
        "url": SITE_URL,
      },
      "performer": {
        "@type": "Organization",
        "name": "Paroisses de Nendaz et Veysonnaz",
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "CHF",
        "availability": "https://schema.org/InStock",
        "validFrom": event.startDate,
        "url": eventUrl,
      },
      "url": eventUrl,
      "image": event.image ? `${SITE_URL}${event.image}` : FALLBACK_IMAGE,
      "inLanguage": "fr-CH",
      "isAccessibleForFree": true,
    };
  });

  const cleanData = JSON.parse(JSON.stringify(eventsData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanData) }}
    />
  );
}
