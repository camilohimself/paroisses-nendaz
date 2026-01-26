import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Communion - Sacrements - Paroisses de Nendaz',
  description: 'Préparez la première communion de votre enfant dans notre communauté paroissiale de Nendaz et Veysonnaz.',
  openGraph: {
    title: 'Première Communion | Paroisses de Nendaz',
    description: 'Préparez la première communion de votre enfant.',
    url: 'https://www.paroisses-nendaz.ch/sacrements/communion',
    images: [{ url: '/images/sacrements/communion-hero.jpg', width: 1200, height: 630 }],
  },
}

export default function CommunionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
