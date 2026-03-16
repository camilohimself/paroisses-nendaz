import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mur de prières — Crans-Montana',
  description:
    'Pensées et intentions de prière des paroissiens de Nendaz en mémoire des victimes de l\'incendie de Crans-Montana du 1er janvier 2026.',
  openGraph: {
    title: 'Mur de prières — En mémoire des victimes de Crans-Montana',
    description:
      'Pensées et intentions de prière des paroissiens de Nendaz en solidarité avec les familles touchées par le drame de Crans-Montana.',
    type: 'website',
  },
}

export default function PrieresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
