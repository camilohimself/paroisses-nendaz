import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendrier de l'Avent | Paroisses de Nendaz",
  description: "Pèlerins de l'espérance - Une démarche spirituelle interactive pour toute la famille. Découvrez chaque jour une prière, une méditation et participez aux missions avec Luce, Fe, Xin et Sky.",
  openGraph: {
    title: "Calendrier de l'Avent 2025",
    description: "Pèlerins de l'espérance - Une aventure spirituelle pour toute la famille !",
    images: [
      {
        url: "/images/avent/personnages/groupe.png",
        width: 480,
        height: 600,
        alt: "Les 4 pèlerins de l'espérance - Luce, Fe, Xin et Sky",
      },
    ],
    type: "website",
    locale: "fr_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendrier de l'Avent 2025",
    description: "Pèlerins de l'espérance - Une aventure spirituelle pour toute la famille !",
    images: ["/images/avent/personnages/groupe.png"],
  },
};

export default function AventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
