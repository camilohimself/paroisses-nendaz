import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import FaqSchema from '@/components/structured-data/FaqSchema'

export const metadata: Metadata = {
  title: 'Accompagnement du deuil | Paroisses de Nendaz-Veysonnaz',
  description:
    'Funérailles, veillées de prière, messe du souvenir et dépôt de l’urne — services proposés par les paroisses catholiques de Nendaz-Veysonnaz pour accompagner les familles dans le deuil.',
  openGraph: {
    type: 'article',
    locale: 'fr_CH',
    siteName: 'Paroisses de Nendaz',
    title: 'Accompagnement du deuil | Paroisses de Nendaz-Veysonnaz',
    description:
      'Services pastoraux pour les funérailles dans le secteur de Nendaz-Veysonnaz : veillées, messe publique, cérémonies dans l’intimité, messe du souvenir.',
    url: 'https://www.paroisses-nendaz.ch/accompagnement-deuil',
    images: [
      {
        url: '/images/logo-paroisses-header@2x.png',
        width: 1000,
        height: 400,
        alt: 'Accompagnement du deuil — Paroisses de Nendaz-Veysonnaz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accompagnement du deuil | Paroisses de Nendaz',
    description:
      'Démarches pastorales pour les funérailles dans le secteur de Nendaz-Veysonnaz.',
    images: ['/images/logo-paroisses-header@2x.png'],
  },
  alternates: {
    canonical: 'https://www.paroisses-nendaz.ch/accompagnement-deuil',
  },
}

const FAQ_ITEMS = [
  {
    question: 'Que propose la paroisse pour une veillée de prière avant les funérailles ?',
    answer:
      'La veille des funérailles, et quel que soit le type de célébration choisi, les proches du défunt peuvent demander à leur paroisse un temps de prière qui se déroule généralement au moment de la visite mortuaire. Ces temps de prière sont assurés par des équipes de bénévoles dans les églises du secteur (Veysonnaz, Haute-Nendaz, Basse-Nendaz, Fey et Aproz). La demande peut être faite aux représentants des Pompes funèbres ou directement à la paroisse.',
  },
  {
    question: 'Comment se déroule une messe de funérailles publique ?',
    answer:
      'La présence du prêtre est indispensable pour le rituel d’Adieu vécu au cours d’une messe annoncée publiquement, à horaires fixes en semaine à 17h00 ou le samedi matin à 10h00 (pas le dimanche). Les familles rencontrent le prêtre pour préparer la célébration et peuvent demander une veillée de prière la veille. Les chorales du secteur se rendent disponibles pour chanter la messe d’enterrement publique.',
  },
  {
    question: 'Les paroisses proposent-elles des funérailles dans l’intimité ?',
    answer:
      'Oui. Les paroisses proposent des funérailles chrétiennes composées d’une liturgie de la Parole sans communion, avec rituel du dernier Adieu, vécues dans l’intimité de la famille et des proches. Deux agents pastoraux laïcs prennent en charge ces célébrations : Martin Fendrych et Jean-Philippe Glassey. Une rencontre de préparation avec celui qui conduira la cérémonie est indispensable.',
  },
  {
    question: 'Qu’est-ce qu’une messe de septième ou du souvenir ?',
    answer:
      'Après tout type de funérailles, les familles peuvent demander aux paroisses une messe de septième ou du souvenir à une date choisie lors d’une messe dominicale. Durant ces messes, il sera fait mention du défunt au moment de la prière eucharistique. Les hommages publics sont réservés aux funérailles.',
  },
  {
    question: 'Le dépôt de l’urne peut-il faire l’objet d’une prière chrétienne ?',
    answer:
      'Oui. En cas de crémation, le moment du dépôt de l’urne peut faire l’objet d’un temps de prière chrétienne en présence du prêtre. La demande peut être faite par les familles ; le prêtre se rendra présent, généralement avant une messe qu’il vient célébrer dans l’église voisine.',
  },
  {
    question:
      'Qui contacter pour une cérémonie non chrétienne ou pour l’emplacement d’une tombe ?',
    answer:
      'Pour une cérémonie non chrétienne, ou pour le choix entre crémation et enterrement, adressez-vous à l’entreprise de Pompes funèbres choisie. Pour l’emplacement de la tombe au cimetière ou de l’urne au columbarium (ou au Jardin du souvenir), adressez-vous aux Communes compétentes.',
  },
]

export default function AccompagnementDeuilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Contact', url: 'https://www.paroisses-nendaz.ch/contact' },
          {
            name: 'Accompagnement du deuil',
            url: 'https://www.paroisses-nendaz.ch/accompagnement-deuil',
          },
        ]}
      />
      <FaqSchema items={FAQ_ITEMS} />
      {children}
    </>
  )
}
