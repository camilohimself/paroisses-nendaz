import Link from 'next/link'

export default function SacrementsV2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header simple */}
      <div className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-neutral-anthracite mb-2">VERSION 2 : Liste Manuscrit</h1>
          <p className="text-neutral-gris">Style enluminure • Liste verticale • Séparateurs clairs • Palette Vitrail</p>
        </div>
      </div>

      {/* Section Sacrements - VERSION 2 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Les Six Sacrements
              </h2>
              <div className="w-24 h-0.5 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-neutral-gris italic max-w-2xl mx-auto text-lg">
                Signes visibles de la grâce invisible
              </p>
            </div>

            {/* Liste verticale avec séparateurs clairs */}
            <div className="space-y-0">

              {/* Baptême */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <Link href="/sacrements/bapteme" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-sky-500">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-3xl font-bold text-neutral-anthracite group-hover:text-sky-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Baptême
                        </h3>
                        <p className="text-sm text-sky-600 font-semibold uppercase tracking-wide">
                          Initiation Chrétienne
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed mb-3">
                        Premier sacrement de la vie chrétienne, porte d'entrée dans la communauté des croyants.
                      </p>
                      <p className="text-sm text-neutral-gris/70">• 0-7 ans ou adultes • 2 rencontres</p>
                    </div>
                    <svg className="w-6 h-6 text-neutral-gris group-hover:text-sky-500 group-hover:translate-x-2 transition-all flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Première Communion */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <Link href="/sacrements/communion" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-emerald-500">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-3xl font-bold text-neutral-anthracite group-hover:text-emerald-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Première Communion
                        </h3>
                        <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">
                          Eucharistie
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed mb-3">
                        Recevoir Jésus Pain de Vie, nourriture pour la route de notre existence.
                      </p>
                      <p className="text-sm text-neutral-gris/70">• 8-9 ans (3H-4H) • Septembre à mai</p>
                    </div>
                    <svg className="w-6 h-6 text-neutral-gris group-hover:text-emerald-500 group-hover:translate-x-2 transition-all flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Confirmation */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <Link href="/sacrements/confirmation" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-amber-500">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-3xl font-bold text-neutral-anthracite group-hover:text-amber-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Confirmation
                        </h3>
                        <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide">
                          Don de l'Esprit Saint
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed mb-3">
                        Le sacrement du don de l'Esprit Saint, force pour témoigner de notre foi.
                      </p>
                      <p className="text-sm text-neutral-gris/70">• 14-15 ans (10CO-11CO) • Parcours 2 ans</p>
                    </div>
                    <svg className="w-6 h-6 text-neutral-gris group-hover:text-amber-500 group-hover:translate-x-2 transition-all flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Mariage */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <Link href="/sacrements/mariage" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-rose-500">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-3xl font-bold text-neutral-anthracite group-hover:text-rose-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Mariage
                        </h3>
                        <p className="text-sm text-rose-600 font-semibold uppercase tracking-wide">
                          Alliance Sacrée
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed mb-3">
                        L'union sacrée qui lie deux personnes dans l'amour du Christ pour toute la vie.
                      </p>
                      <p className="text-sm text-neutral-gris/70">• Préparation 6 mois • 4 rencontres</p>
                    </div>
                    <svg className="w-6 h-6 text-neutral-gris group-hover:text-rose-500 group-hover:translate-x-2 transition-all flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Onction des malades */}
              <div className="group relative border-b-2 border-neutral-grisClaire">
                <Link href="/sacrements/onction-malades" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-indigo-500">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-3xl font-bold text-neutral-anthracite group-hover:text-indigo-600 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Onction des malades
                        </h3>
                        <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
                          Grâce du Seigneur
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed mb-3">
                        La présence du Christ auprès de ceux qui traversent la maladie et la souffrance.
                      </p>
                      <p className="text-sm text-neutral-gris/70">• Sur demande • 24h/24 • 7j/7</p>
                    </div>
                    <svg className="w-6 h-6 text-neutral-gris group-hover:text-indigo-500 group-hover:translate-x-2 transition-all flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Réconciliation */}
              <div className="group relative">
                <Link href="/sacrements/pardon" className="block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-lime-600">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-3xl font-bold text-neutral-anthracite group-hover:text-lime-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Réconciliation
                        </h3>
                        <p className="text-sm text-lime-700 font-semibold uppercase tracking-wide">
                          Pardon et Paix
                        </p>
                      </div>
                      <p className="text-neutral-gris leading-relaxed mb-3">
                        Le sacrement du pardon de Dieu et de la paix retrouvée avec soi-même et les autres.
                      </p>
                      <p className="text-sm text-neutral-gris/70">• Samedi 17h00-17h45 • Sur rendez-vous</p>
                    </div>
                    <svg className="w-6 h-6 text-neutral-gris group-hover:text-lime-600 group-hover:translate-x-2 transition-all flex-shrink-0 ml-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

            </div>

            {/* Citation finale style enluminure */}
            <div className="mt-20 text-center">
              <div className="relative py-12">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                <p className="text-neutral-anthracite text-2xl leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                  « Les sacrements sont les chefs-d'œuvre de Dieu
                  <br />
                  dans la nouvelle et éternelle Alliance. »
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="py-8 bg-neutral-grisClaire/50 border-t text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sacrements-v1" className="px-6 py-3 bg-white border-2 border-sky-500 text-sky-600 rounded-lg hover:bg-sky-500 hover:text-white font-semibold transition">← VERSION 1</Link>
          <Link href="/sacrements-v3" className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 font-semibold transition">VERSION 3 →</Link>
          <Link href="/sacrements-v4" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-semibold transition">VERSION 4 →</Link>
        </div>
      </div>
    </div>
  )
}
