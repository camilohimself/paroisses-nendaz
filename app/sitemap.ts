import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paroisses-nendaz.vercel.app'
  const currentDate = new Date()

  // Slugs de toutes les paroisses/chapelles
  const paroisseSlugs = [
    'basse-nendaz',
    'haute-nendaz',
    'fey',
    'aproz',
    'baar',
    'brignon',
    'planchouet',
    'rairettes',
    'beuson',
    'condemines',
    'saclentse',
    'bleusy',
    'saint-michel',
    'saint-sebastien',
    'veysonnaz',
    'clebes',
    'saint-barthelemy',
    'foyer-ma-vallee',
    'foyer-les-vergers'
  ]

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/evenements`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/paroisses`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pastorale`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pastorale/priere`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pastorale/liturgie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pastorale/diaconie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Pages sacrements
  const sacrementPages: MetadataRoute.Sitemap = [
    'bapteme',
    'communion',
    'confirmation',
    'pardon',
    'mariage',
    'onction-malades',
  ].map((sacrement) => ({
    url: `${baseUrl}/sacrements/${sacrement}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Pages paroisses dynamiques
  const paroissesPages: MetadataRoute.Sitemap = paroisseSlugs.map((slug) => ({
    url: `${baseUrl}/paroisses/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...sacrementPages, ...paroissesPages]
}
