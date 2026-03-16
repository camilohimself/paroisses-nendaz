import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Fe — Parcours des pèlerins',
  description: 'Accompagne Fe à l\'église de Fey et découvre l\'ambon et la Bible. Mission interactive pour les enfants des paroisses de Nendaz.',
}

export default function FeLayout({ children }: { children: React.ReactNode }) {
  return children
}
