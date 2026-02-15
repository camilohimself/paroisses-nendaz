import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carême 2026 : Prophète ? Moi ?',
  description: 'Vivez le Carême 2026 avec les paroisses de Nendaz. 47 jours de méditations, prières et versets bibliques sur le thème « Prophète ? Moi ? » inspiré de Jérémie 1,5.',
  openGraph: {
    title: 'Carême 2026 : Prophète ? Moi ? - Paroisses de Nendaz',
    description: '47 jours de méditations et prières pour le Carême. « Avant que tu ne sois formé, je t\'ai consacré » — Jérémie 1,5',
    url: 'https://www.paroisses-nendaz.ch/careme2026',
  },
}

import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

export default function Careme2026Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Carême 2026', url: 'https://www.paroisses-nendaz.ch/careme2026' },
        ]}
      />
      {children}
    </>
  )
}
