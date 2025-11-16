/**
 * WebSiteSchema - Données structurées JSON-LD
 * Type: WebSite
 * Usage: Layout principal (site entier)
 * Bénéfice: Barre de recherche Google + sitelinks
 */

export default function WebSiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.paroisses-nendaz.ch/#website",
    "url": "https://www.paroisses-nendaz.ch",
    "name": "Paroisses de Nendaz",
    "description": "Site officiel des paroisses de Nendaz et Veysonnaz. Horaires des messes, événements, sacrements et vie paroissiale.",
    "publisher": {
      "@id": "https://www.paroisses-nendaz.ch/#organization"
    },
    "inLanguage": "fr-CH",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.paroisses-nendaz.ch/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}
