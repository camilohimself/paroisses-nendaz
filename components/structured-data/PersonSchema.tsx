/**
 * PersonSchema - Données structurées JSON-LD
 * Type: Person
 * Usage: Page contact (équipe pastorale)
 * Bénéfice: Rich snippets pour les membres de l'équipe, Knowledge Graph
 *
 * Note: dangerouslySetInnerHTML est sûr ici car le contenu est
 * entièrement contrôlé (données statiques sérialisées en JSON).
 */

interface PersonSchemaProps {
  persons: {
    name: string;
    jobTitle: string;
    telephone?: string;
    email?: string;
    image?: string;
  }[];
}

export default function PersonSchema({ persons }: PersonSchemaProps) {
  const personsData = persons.map((person) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.jobTitle,
    "telephone": person.telephone,
    "email": person.email,
    "image": person.image
      ? `https://www.paroisses-nendaz.ch${person.image}`
      : undefined,
    "worksFor": {
      "@type": "ReligiousOrganization",
      "@id": "https://www.paroisses-nendaz.ch/#organization",
      "name": "Paroisses de Nendaz",
    },
    "workLocation": {
      "@type": "Place",
      "name": "Cure de Basse-Nendaz",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Basse-Nendaz",
        "postalCode": "1996",
        "addressRegion": "Valais",
        "addressCountry": "CH",
      },
    },
  }));

  const cleanData = JSON.parse(JSON.stringify(personsData));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanData) }}
    />
  );
}
