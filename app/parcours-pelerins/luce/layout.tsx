import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Luce — Parcours des pèlerins',
  description: 'Accompagne Luce à l\'église de Basse-Nendaz et découvre le tabernacle. Mission interactive pour les enfants des paroisses de Nendaz.',
}

export default function LuceLayout({ children }: { children: React.ReactNode }) {
  return children
}
