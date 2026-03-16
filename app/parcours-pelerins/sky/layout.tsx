import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission Sky — Parcours des pèlerins',
  description: 'Accompagne Sky à l\'église d\'Aproz et découvre l\'ange. Dernière mission du parcours des pèlerins des paroisses de Nendaz.',
}

export default function SkyLayout({ children }: { children: React.ReactNode }) {
  return children
}
