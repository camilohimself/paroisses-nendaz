import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Paroisses de Nendaz et Veysonnaz',
    short_name: 'Paroisses Nendaz',
    description: 'Site officiel des paroisses de Nendaz et Veysonnaz. Horaires des messes, événements, sacrements et vie paroissiale.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#F59E0B', // amber-500
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['religion', 'lifestyle', 'community'],
    lang: 'fr',
    dir: 'ltr',
  }
}
