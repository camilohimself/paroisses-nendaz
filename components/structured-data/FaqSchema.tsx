/**
 * FaqSchema - Données structurées JSON-LD
 * Type: FAQPage
 * Usage: Pages avec questions/réponses structurées
 * Bénéfice: Rich snippets Google (FAQ expandable dans les résultats)
 */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  items: FaqItem[];
}

export default function FaqSchema({ items }: FaqSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
