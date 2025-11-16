/**
 * BreadcrumbSchema - Données structurées JSON-LD
 * Type: BreadcrumbList
 * Usage: Toutes les pages (génère fil d'Ariane automatique)
 * Bénéfice: Fil d'Ariane dans résultats de recherche Google
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  // Toujours commencer par la page d'accueil
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://www.paroisses-nendaz.ch"
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.url
    }))
  ];

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
