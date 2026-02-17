import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carême 2026 : Prophète ? Moi ?',
  description: 'Vivez le Carême 2026 avec les paroisses de Nendaz. 47 jours de méditations, prières et versets bibliques sur le thème « Prophète ? Moi ? » inspiré de Jérémie 1,5.',
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    siteName: 'Paroisses de Nendaz',
    title: 'Carême 2026 : Prophète ? Moi ?',
    description: '47 jours de méditations et prières pour le Carême. « Avant que tu ne sois formé, je t\'ai consacré » — Jérémie 1,5',
    url: 'https://www.paroisses-nendaz.ch/careme2026',
    images: [
      {
        url: '/images/logo-paroisses-header@2x.png',
        width: 1000,
        height: 400,
        alt: 'Carême 2026 — Prophète ? Moi ? — Paroisses de Nendaz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carême 2026 : Prophète ? Moi ?',
    description: '47 jours de méditations et prières. Paroisses de Nendaz et Veysonnaz.',
    images: ['/images/logo-paroisses-header@2x.png'],
  },
  alternates: {
    canonical: 'https://www.paroisses-nendaz.ch/careme2026',
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
