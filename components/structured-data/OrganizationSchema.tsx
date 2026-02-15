/**
 * OrganizationSchema - Données structurées JSON-LD
 * Type: ReligiousOrganization
 * Usage: Layout principal (site entier)
 * Bénéfice: Identité paroisse dans Google Knowledge Graph
 */

export default function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ReligiousOrganization",
    "@id": "https://www.paroisses-nendaz.ch/#organization",
    "name": "Paroisses de Nendaz",
    "alternateName": "Paroisses de Nendaz et Veysonnaz",
    "description": "Unité pastorale catholique regroupant 7 paroisses : Aproz, Basse-Nendaz, Brignon, Fey, Haute-Nendaz, Saclentse et Veysonnaz",
    "url": "https://www.paroisses-nendaz.ch",
    "logo": "https://www.paroisses-nendaz.ch/logo-paroisses.png",
    "image": "https://www.paroisses-nendaz.ch/logo-paroisses.png",
    "email": "paroisses.nendaz@netplus.ch",
    "telephone": "+41272882250",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Place de l'Eglise",
      "addressLocality": "Basse-Nendaz",
      "postalCode": "1997",
      "addressRegion": "Valais",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.19,
      "longitude": 7.30
    },
    "areaServed": {
      "@type": "Place",
      "name": "Nendaz et Veysonnaz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nendaz",
        "addressRegion": "Valais",
        "addressCountry": "CH"
      }
    },
    "sameAs": [
      "https://www.paroisses-nendaz.ch"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41272882250",
      "contactType": "Secrétariat paroissial",
      "availableLanguage": ["fr"],
      "areaServed": "CH"
    },
    "member": [
      {
        "@type": "Church",
        "name": "Paroisse Aproz",
        "url": "https://www.paroisses-nendaz.ch/paroisses/aproz"
      },
      {
        "@type": "Church",
        "name": "Paroisse Basse-Nendaz",
        "url": "https://www.paroisses-nendaz.ch/paroisses/basse-nendaz"
      },
      {
        "@type": "Church",
        "name": "Paroisse Brignon",
        "url": "https://www.paroisses-nendaz.ch/paroisses/brignon"
      },
      {
        "@type": "Church",
        "name": "Paroisse Fey",
        "url": "https://www.paroisses-nendaz.ch/paroisses/fey"
      },
      {
        "@type": "Church",
        "name": "Paroisse Haute-Nendaz",
        "url": "https://www.paroisses-nendaz.ch/paroisses/haute-nendaz"
      },
      {
        "@type": "Church",
        "name": "Paroisse Saclentse",
        "url": "https://www.paroisses-nendaz.ch/paroisses/saclentse"
      },
      {
        "@type": "Church",
        "name": "Paroisse Veysonnaz",
        "url": "https://www.paroisses-nendaz.ch/paroisses/veysonnaz"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}
