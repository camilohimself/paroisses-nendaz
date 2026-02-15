/**
 * PlaceSchema - Données structurées JSON-LD
 * Type: Place (Church)
 * Usage: Pages paroisses individuelles
 * Bénéfice: Géolocalisation Google Maps + Knowledge Graph
 */

interface PlaceSchemaProps {
  name: string;
  description?: string;
  streetAddress?: string;
  addressLocality: string;
  postalCode?: string;
  addressRegion?: string;
  addressCountry?: string;
  latitude?: number;
  longitude?: number;
  telephone?: string;
  email?: string;
  image?: string;
  url?: string;
  paroisseName?: string; // Nom spécifique de la paroisse
}

export default function PlaceSchema({
  name,
  description,
  streetAddress,
  addressLocality,
  postalCode,
  addressRegion = "Valais",
  addressCountry = "CH",
  latitude,
  longitude,
  telephone,
  email,
  image,
  url,
  paroisseName
}: PlaceSchemaProps) {
  const placeData = {
    "@context": "https://schema.org",
    "@type": "Church",
    "@id": url ? `${url}#church` : undefined,
    "name": paroisseName || name,
    "description": description || `Église catholique de ${addressLocality}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "postalCode": postalCode,
      "addressRegion": addressRegion,
      "addressCountry": addressCountry
    },
    "geo": latitude && longitude ? {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    } : undefined,
    "telephone": telephone,
    "email": email,
    "image": image,
    "url": url,
    "parentOrganization": {
      "@type": "ReligiousOrganization",
      "@id": "https://www.paroisses-nendaz.ch/#organization",
      "name": "Paroisses de Nendaz"
    },
    "isAccessibleForFree": true,
    "publicAccess": true
  };

  // Nettoyer les valeurs undefined
  const cleanPlaceData = JSON.parse(JSON.stringify(placeData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanPlaceData) }}
    />
  );
}
