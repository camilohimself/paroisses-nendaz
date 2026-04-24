import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import EventListSchema from '@/components/structured-data/EventListSchema'

export const metadata: Metadata = {
  title: 'Actualités et événements',
  description: 'Suivez les actualités et événements des paroisses de Nendaz et Veysonnaz : célébrations, concerts, rencontres paroissiales et agenda.',
  openGraph: {
    title: 'Actualités - Paroisses de Nendaz',
    description: 'Événements, célébrations et agenda des paroisses de Nendaz et Veysonnaz.',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
}

const upcomingEvents = [
  {
    name: 'Chapelet du mois de Marie — Tournée des Hospitaliers de Lourdes',
    description: 'Durant tout le mois de mai 2026, les Hospitaliers de Lourdes invitent les paroissiens à prier le chapelet chaque soir à 19h30 dans cinq lieux successifs : Foyer Ma Vallée, église de Veysonnaz, église d\'Aproz, chapelle St-Michel, chapelle de Brignon. Les dimanches, le chapelet est prié à la chapelle de Saclentse.',
    startDate: '2026-05-01T19:30:00+02:00',
    location: '5 lieux dans les paroisses de Nendaz et Veysonnaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
    image: '/images/articles/mois-de-marie-2026.webp',
  },
  {
    name: 'Messe des Rogations — Chapelle de Clèbes',
    description: 'Messe des Rogations à la chapelle de Clèbes. Départ de la procession à 18h au chemin de Champlan, suivie de la messe à 19h. Une tradition ancienne qui confie à Dieu les travaux des champs.',
    startDate: '2026-05-12T19:00:00+02:00',
    location: 'Chapelle de Clèbes',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
  {
    name: 'Messe de l\'Ascension et de la Première Communion',
    description: 'Messe de l\'Ascension du Seigneur et célébration de la Première Communion à l\'église de Basse-Nendaz.',
    startDate: '2026-05-14T10:00:00+02:00',
    location: 'Église de Basse-Nendaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
  {
    name: 'Patronale de Veysonnaz — Première Communion',
    description: 'Messe de la Fête Patronale de Veysonnaz et célébration de la Première Communion à l\'église de Veysonnaz.',
    startDate: '2026-05-24T10:00:00+02:00',
    location: 'Église de Veysonnaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
  {
    name: 'Patronale Notre-Dame de l\'Espérance — Brignon',
    description: 'Messe de la Fête Patronale Notre-Dame de l\'Espérance à la chapelle de Brignon, suivie d\'un apéritif convivial.',
    startDate: '2026-05-28T19:00:00+02:00',
    location: 'Chapelle de Brignon',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
]

export default function ActualitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Actualités', url: 'https://www.paroisses-nendaz.ch/actualites' },
        ]}
      />
      <EventListSchema events={upcomingEvents} />
      {children}
    </>
  )
}
