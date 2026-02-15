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
    name: 'Loto des églises de Basse-Nendaz et Haute-Nendaz',
    description: 'Après-midi loto organisé au profit des églises de Basse-Nendaz et Haute-Nendaz.',
    startDate: '2026-02-22T17:30:00+01:00',
    location: 'Salle de la Biolette, Basse-Nendaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
  {
    name: 'Soirée biblique 1 — L\'appel du prophète',
    description: 'Une vocation dérangeante. Comprendre ce qu\'est un prophète et comment Dieu appelle. Texte : Jérémie 1, 4-10.',
    startDate: '2026-03-04T19:30:00+01:00',
    location: 'Cure de Basse-Nendaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
  {
    name: 'Temps Fort de Carême — Soupe & Témoignage',
    description: 'Soirée spéciale Carême : Messe ATAC à 19h, suivie d\'une soupe partagée et d\'un témoignage sur le Rwanda.',
    startDate: '2026-03-13T19:00:00+01:00',
    location: 'Église de Basse-Nendaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
  },
  {
    name: 'Festival des Familles',
    description: 'Journée mêlant foi, rencontres, rires et jeux. Messe, pique-nique et défis en famille.',
    startDate: '2026-03-15T09:30:00+01:00',
    location: 'Labyrinthe Aventure, Evionnaz',
    url: 'https://www.paroisses-nendaz.ch/actualites',
    image: '/images/articles/festival-familles-2026.webp',
  },
  {
    name: 'Concert Davidica avec le chœur Chanson du pays de Gruyère',
    description: 'Concert exceptionnel de l\'ensemble Davidica accompagné du chœur Chanson du pays de Gruyère.',
    startDate: '2026-03-29T17:30:00+01:00',
    location: 'Église de Haute-Nendaz',
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
