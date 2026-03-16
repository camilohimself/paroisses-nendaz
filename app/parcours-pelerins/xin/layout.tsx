import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Xin — Parcours des pèlerins',
  description: 'Accompagne Xin à l\'église de Veysonnaz et découvre la statue de Marie. Mission interactive pour les enfants des paroisses de Nendaz.',
}

export default function XinLayout({ children }: { children: React.ReactNode }) {
  return children
}
