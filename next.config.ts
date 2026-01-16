import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignorer les erreurs ESLint pendant le build pour la présentation
    ignoreDuringBuilds: true,
  },

  // Redirections pour anciennes URLs WordPress (récupération trafic 404)
  async redirects() {
    return [
      // === URLs WordPress détectées dans Google ===
      {
        source: '/category/:path*',
        destination: '/paroisses',
        permanent: true,
      },
      {
        source: '/notre-vision-pastorale',
        destination: '/pastorale',
        permanent: true,
      },
      {
        source: '/inscriptions',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/eveil-a-foi',
        destination: '/pastorale',
        permanent: true,
      },
      {
        source: '/veysonnaz',
        destination: '/paroisses/veysonnaz',
        permanent: true,
      },
      {
        source: '/pelerinage-moitie-moitie',
        destination: '/actualites',
        permanent: true,
      },
      // === Anciennes pages du site ===
      {
        source: '/messe-en-direct',
        destination: '/',
        permanent: true,
      },
      {
        source: '/horaires',
        destination: '/paroisses',
        permanent: true,
      },
      {
        source: '/pardon',
        destination: '/sacrements/pardon',
        permanent: true,
      },
      {
        source: '/reservation',
        destination: 'https://davidica.ch/location-salle.html',
        permanent: true,
      },
      {
        source: '/documents',
        destination: '/actualites',
        permanent: true,
      },
      {
        source: '/nendaz',
        destination: '/paroisses',
        permanent: true,
      },
      {
        source: '/centre-dimpression-de-la-feuille-dannonce',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/servants-de-messe',
        destination: '/pastorale/liturgie',
        permanent: true,
      },
      {
        source: '/evenements',
        destination: '/actualites',
        permanent: true,
      },
      // Anciens PDFs agenda → actualités
      {
        source: '/agenda/:path*',
        destination: '/actualites',
        permanent: true,
      },
      // === Parcours des pèlerins (ex-Avent 2025) ===
      {
        source: '/avent/mission-1',
        destination: '/parcours-pelerins/luce',
        permanent: true,
      },
      {
        source: '/avent/mission-2',
        destination: '/parcours-pelerins/fe',
        permanent: true,
      },
      {
        source: '/avent/mission-3',
        destination: '/parcours-pelerins/xin',
        permanent: true,
      },
      {
        source: '/avent/mission-4',
        destination: '/parcours-pelerins/sky',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
