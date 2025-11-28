import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission 1 - Luce | Calendrier de l'Avent",
  description: "Découvre Luce et pars à la recherche du Tabernacle dans cette première mission du calendrier de l'Avent des Paroisses de Nendaz.",
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout sans Header/Footer pour l'expérience immersive
  return <>{children}</>;
}
