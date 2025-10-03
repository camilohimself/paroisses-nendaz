import Link from 'next/link'

export default function SacrementsV4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-grisClaire/30">
      {/* Header simple */}
      <div className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-neutral-anthracite mb-2">VERSION 4 : Lettrine Enluminée</h1>
          <p className="text-neutral-gris">Style manuscrit médiéval • Lettres capitales • Palette Vitrail</p>
        </div>
      </div>

      {/* Section Sacrements - VERSION 4 */}
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

            {/* Grille 2 colonnes avec lettrines */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

              {/* Baptême */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-sky-500 group-hover:shadow-lg transition-all duration-300 border-4 border-sky-200">
                      <span className="text-6xl font-serif text-white leading-none">B</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-sky-600 transition-colors">
                      Baptême
                    </h3>
                    <p className="text-sm text-neutral-gris mb-4 leading-relaxed">
                      Premier sacrement de la vie chrétienne, porte d'entrée dans la communauté des croyants.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                      <span>• 0-7 ans ou adultes</span>
                      <span>• 2 rencontres</span>
                    </div>
                    <Link href="/sacrements/bapteme" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold group/link transition-colors">
                      <span className="border-b-2 border-sky-500/30 group-hover/link:border-sky-600 transition-all">En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Première Communion */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-emerald-500 group-hover:shadow-lg transition-all duration-300 border-4 border-emerald-200">
                      <span className="text-6xl font-serif text-white leading-none">C</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-emerald-600 transition-colors">
                      Première Communion
                    </h3>
                    <p className="text-sm text-neutral-gris mb-4 leading-relaxed">
                      Recevoir Jésus Pain de Vie, nourriture pour la route.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                      <span>• 8-9 ans (3H-4H)</span>
                      <span>• Septembre à mai</span>
                    </div>
                    <Link href="/sacrements/communion" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group/link transition-colors">
                      <span className="border-b-2 border-emerald-500/30 group-hover/link:border-emerald-600 transition-all">En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Confirmation */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-amber-500 group-hover:shadow-lg transition-all duration-300 border-4 border-amber-200">
                      <span className="text-6xl font-serif text-white leading-none">C</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-amber-600 transition-colors">
                      Confirmation
                    </h3>
                    <p className="text-sm text-neutral-gris mb-4 leading-relaxed">
                      Le sacrement du don de l'Esprit Saint, force pour témoigner.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                      <span>• 14-15 ans (10CO-11CO)</span>
                      <span>• Parcours 2 ans</span>
                    </div>
                    <Link href="/sacrements/confirmation" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group/link transition-colors">
                      <span className="border-b-2 border-amber-500/30 group-hover/link:border-amber-600 transition-all">En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mariage */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-rose-500 group-hover:shadow-lg transition-all duration-300 border-4 border-rose-200">
                      <span className="text-6xl font-serif text-white leading-none">M</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-rose-600 transition-colors">
                      Mariage
                    </h3>
                    <p className="text-sm text-neutral-gris mb-4 leading-relaxed">
                      L'alliance sacrée qui unit deux personnes dans l'amour du Christ.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                      <span>• Préparation 6 mois</span>
                      <span>• 4 rencontres</span>
                    </div>
                    <Link href="/sacrements/mariage" className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold group/link transition-colors">
                      <span className="border-b-2 border-rose-500/30 group-hover/link:border-rose-600 transition-all">En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Onction des malades */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-indigo-500 group-hover:shadow-lg transition-all duration-300 border-4 border-indigo-200">
                      <span className="text-6xl font-serif text-white leading-none">O</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-indigo-600 transition-colors">
                      Onction des malades
                    </h3>
                    <p className="text-sm text-neutral-gris mb-4 leading-relaxed">
                      La grâce du Seigneur pour ceux qui traversent la maladie et la souffrance.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                      <span>• Sur demande</span>
                      <span>• 24h/24 • 7j/7</span>
                    </div>
                    <Link href="/sacrements/onction-malades" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group/link transition-colors">
                      <span className="border-b-2 border-indigo-500/30 group-hover/link:border-indigo-600 transition-all">En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Réconciliation */}
              <div className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-lime-600 group-hover:shadow-lg transition-all duration-300 border-4 border-lime-200">
                      <span className="text-6xl font-serif text-white leading-none">R</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-lime-700 transition-colors">
                      Réconciliation
                    </h3>
                    <p className="text-sm text-neutral-gris mb-4 leading-relaxed">
                      Le sacrement du pardon de Dieu et de la paix retrouvée.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-neutral-gris mb-4">
                      <span>• Samedi 17h00-17h45</span>
                      <span>• Sur rendez-vous</span>
                    </div>
                    <Link href="/sacrements/pardon" className="inline-flex items-center text-lime-700 hover:text-lime-800 font-semibold group/link transition-colors">
                      <span className="border-b-2 border-lime-600/30 group-hover/link:border-lime-700 transition-all">En savoir plus</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
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
          <Link href="/sacrements-v1" className="px-6 py-3 bg-white border-2 border-sky-500 text-sky-600 rounded-lg hover:bg-sky-500 hover:text-white font-semibold transition">← VERSION 1</Link>
          <Link href="/sacrements-v2" className="px-6 py-3 bg-white border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white font-semibold transition">← VERSION 2</Link>
          <Link href="/sacrements-v3" className="px-6 py-3 bg-white border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-500 hover:text-white font-semibold transition">← VERSION 3</Link>
        </div>
      </div>
    </div>
  )
}
