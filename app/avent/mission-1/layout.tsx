import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mission 1 - Luce | Calendrier de l'Avent",
  description: "Découvre Luce et pars à la recherche du Tabernacle dans cette première mission du calendrier de l'Avent des Paroisses de Nendaz.",
  openGraph: {
    title: "Mission 1 - Luce | Calendrier de l'Avent",
    description: "Découvre Luce et pars à la recherche du Tabernacle !",
    images: [
      {
        url: "/images/avent/personnages/Luce.png",
        width: 500,
        height: 500,
        alt: "Luce - Mascotte du calendrier de l'Avent",
      },
    ],
  },
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header visible uniquement sur desktop (md+) */}
      <div className="hidden md:block">
        <Header />
      </div>

      {children}

      {/* Footer visible uniquement sur desktop (md+) */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}
