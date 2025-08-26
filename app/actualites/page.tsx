import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Actualités - Paroisses de Nendaz',
  description: 'Suivez les dernières actualités et nouvelles des paroisses de Nendaz et Veysonnaz.',
}

// Données temporaires - seront remplacées par la base de données
const articles = [
  {
    id: '1',
    title: 'Nouvelle année pastorale 2024-2025',
    excerpt: 'Découvrez le programme et les nouveautés de cette année pastorale qui débute avec de nombreux projets.',
    date: '2024-12-15',
    image: '/images/articles/nouvelle-annee.jpg',
    category: 'Pastorale'
  },
  {
    id: '2',
    title: 'Inscriptions ouvertes pour le catéchisme',
    excerpt: 'Les inscriptions pour le catéchisme des enfants et jeunes sont ouvertes. Informations et modalités.',
    date: '2024-12-10',
    image: '/images/articles/catechisme.jpg',
    category: 'Formation'
  },
  {
    id: '3',
    title: 'Horaires d&apos;été 2025',
    excerpt: 'Les nouveaux horaires des messes pour la période estivale sont maintenant disponibles.',
    date: '2024-12-05',
    image: '/images/articles/horaires-ete.jpg',
    category: 'Informations'
  }
]

export default function ActualitesPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Actualités
            </h1>
            <p className="text-xl text-gray-600">
              Suivez la vie de nos paroisses
            </p>
          </div>

          {/* Articles List */}
          <div className="space-y-8">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="md:flex">
                  {/* Image placeholder */}
                  <div className="md:w-1/3 bg-gray-200 h-48 md:h-auto flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-4">
                        {formatDate(article.date)}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <a href={`/actualites/${article.id}`}>
                        {article.title}
                      </a>
                    </h2>
                    
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <a 
                      href={`/actualites/${article.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Lire la suite
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ne manquez aucune actualité
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles de nos paroisses.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}