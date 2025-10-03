import Link from 'next/link'

export default function SacrementsV1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-grisClaire/30">
      {/* Header simple */}
      <div className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-neutral-anthracite mb-2">VERSION 1 : Grille 2 Colonnes</h1>
          <p className="text-neutral-gris">Style moderne • Cartes compactes • Palette Vitrail Tailwind</p>
        </div>
      </div>

      {/* Section Sacrements - VERSION 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="w-16 h-1 bg-emerald-500 mx-auto mb-4"></div>
                <h2 className="text-4xl font-bold text-neutral-anthracite">Les Sacrements</h2>
                <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4"></div>
              </div>
              <p className="text-lg text-neutral-gris max-w-2xl mx-auto italic">
                « Les sacrements sont les signes efficaces de la grâce, institués par le Christ et confiés à l'Église »
              </p>
            </div>

            {/* Grille 2 colonnes */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Baptême */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-sky-500">
                <h3 className="text-2xl font-bold text-sky-600 mb-3">
                  Baptême
                </h3>
                <p className="text-sm text-sky-600 font-semibold uppercase tracking-wide mb-4">
                  Initiation Chrétienne
                </p>
                <p className="text-neutral-gris mb-4 leading-relaxed">
                  Premier sacrement de la vie chrétienne, porte d'entrée dans la communauté des croyants.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                  <span>• 0-7 ans ou adultes</span>
                  <span>• 2 rencontres</span>
                </div>
                <Link href="/sacrements/bapteme" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold group transition-colors">
                  <span className="border-b-2 border-sky-500/30 group-hover:border-sky-600 transition-all">En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Première Communion */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                <h3 className="text-2xl font-bold text-emerald-600 mb-3">
                  Première Communion
                </h3>
                <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide mb-4">
                  Eucharistie
                </p>
                <p className="text-neutral-gris mb-4 leading-relaxed">
                  Recevoir Jésus Pain de Vie, nourriture pour la route.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                  <span>• 8-9 ans (3H-4H)</span>
                  <span>• Septembre à mai</span>
                </div>
                <Link href="/sacrements/communion" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group transition-colors">
                  <span className="border-b-2 border-emerald-500/30 group-hover:border-emerald-600 transition-all">En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Confirmation */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-amber-600 mb-3">
                  Confirmation
                </h3>
                <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide mb-4">
                  Don de l'Esprit Saint
                </p>
                <p className="text-neutral-gris mb-4 leading-relaxed">
                  Le sacrement du don de l'Esprit Saint, force pour témoigner.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                  <span>• 14-15 ans (10CO-11CO)</span>
                  <span>• Parcours 2 ans</span>
                </div>
                <Link href="/sacrements/confirmation" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group transition-colors">
                  <span className="border-b-2 border-amber-500/30 group-hover:border-amber-600 transition-all">En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Mariage */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-rose-500">
                <h3 className="text-2xl font-bold text-rose-600 mb-3">
                  Mariage
                </h3>
                <p className="text-sm text-rose-600 font-semibold uppercase tracking-wide mb-4">
                  Alliance Sacrée
                </p>
                <p className="text-neutral-gris mb-4 leading-relaxed">
                  L'alliance sacrée qui unit deux personnes dans l'amour du Christ.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                  <span>• Préparation 6 mois</span>
                  <span>• 4 rencontres</span>
                </div>
                <Link href="/sacrements/mariage" className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold group transition-colors">
                  <span className="border-b-2 border-rose-500/30 group-hover:border-rose-600 transition-all">En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Onction des malades */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                  Onction des malades
                </h3>
                <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-4">
                  Grâce du Seigneur
                </p>
                <p className="text-neutral-gris mb-4 leading-relaxed">
                  La grâce du Seigneur pour ceux qui traversent la maladie et la souffrance.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                  <span>• Sur demande</span>
                  <span>• 24h/24 • 7j/7</span>
                </div>
                <Link href="/sacrements/onction-malades" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group transition-colors">
                  <span className="border-b-2 border-indigo-500/30 group-hover:border-indigo-600 transition-all">En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Réconciliation */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-lime-600">
                <h3 className="text-2xl font-bold text-lime-700 mb-3">
                  Réconciliation
                </h3>
                <p className="text-sm text-lime-700 font-semibold uppercase tracking-wide mb-4">
                  Pardon et Paix
                </p>
                <p className="text-neutral-gris mb-4 leading-relaxed">
                  Le sacrement du pardon de Dieu et de la paix retrouvée.
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                  <span>• Samedi 17h00-17h45</span>
                  <span>• Sur rendez-vous</span>
                </div>
                <Link href="/sacrements/pardon" className="inline-flex items-center text-lime-700 hover:text-lime-800 font-semibold group transition-colors">
                  <span className="border-b-2 border-lime-600/30 group-hover:border-lime-700 transition-all">En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>

            {/* Citation finale */}
            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto p-8 border-t border-b border-emerald-500/20">
                <p className="text-neutral-anthracite italic text-lg leading-relaxed">
                  « Par les sacrements, le Christ continue d'agir dans son Église,
                  <br className="hidden md:block" />
                  pour la sanctification des âmes et la gloire de Dieu. »
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="py-8 bg-white border-t text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sacrements-v2" className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-semibold transition">→ VERSION 2 (Liste manuscrit)</Link>
          <Link href="/sacrements-v3" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-semibold transition">→ VERSION 3 (Minimal)</Link>
          <Link href="/sacrements-v4" className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 font-semibold transition">→ VERSION 4 (Lettrine)</Link>
        </div>
      </div>
    </div>
  )
}
