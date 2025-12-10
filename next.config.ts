import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignorer les erreurs ESLint pendant le build pour la présentation
    ignoreDuringBuilds: true,
  },

  // Redirections pour anciennes URLs (récupération trafic 404)
  async redirects() {
    return [
      // Anciennes pages du site (trafic légitime)
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
    ];
  },
};

export default nextConfig;
