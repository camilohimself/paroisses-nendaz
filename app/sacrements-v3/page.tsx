import Link from 'next/link'

export default function SacrementsV3() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header simple */}
      <div className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-neutral-anthracite mb-2">VERSION 3 : Minimaliste Épuré</h1>
          <p className="text-neutral-gris">Ultra-sobre • Espacement aéré • Palette Vitrail Tailwind</p>
        </div>
      </div>

      {/* Section Sacrements - VERSION 3 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-4">Les Sacrements</h2>
              <p className="text-neutral-gris italic">Signes de la grâce divine</p>
            </div>

            {/* Liste ultra-minimaliste */}
            <div className="space-y-8">

              {/* Baptême */}
              <Link href="/sacrements/bapteme" className="group block p-6 hover:bg-sky-50 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-anthracite group-hover:text-sky-600 transition-colors mb-2">
                      Baptême
                    </h3>
                    <p className="text-neutral-gris text-sm">
                      Premier sacrement de la vie chrétienne • 0-7 ans ou adultes
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center group-hover:bg-sky-500 transition-all">
                    <svg className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Première Communion */}
              <Link href="/sacrements/communion" className="group block p-6 hover:bg-emerald-50 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-anthracite group-hover:text-emerald-600 transition-colors mb-2">
                      Première Communion
                    </h3>
                    <p className="text-neutral-gris text-sm">
                      Recevoir Jésus Pain de Vie • 8-9 ans (3H-4H)
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                    <svg className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Confirmation */}
              <Link href="/sacrements/confirmation" className="group block p-6 hover:bg-amber-50 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-anthracite group-hover:text-amber-600 transition-colors mb-2">
                      Confirmation
                    </h3>
                    <p className="text-neutral-gris text-sm">
                      Don de l'Esprit Saint • 14-15 ans (10CO-11CO)
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-all">
                    <svg className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Mariage */}
              <Link href="/sacrements/mariage" className="group block p-6 hover:bg-rose-50 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-anthracite group-hover:text-rose-600 transition-colors mb-2">
                      Mariage
                    </h3>
                    <p className="text-neutral-gris text-sm">
                      Alliance sacrée • Préparation 6 mois
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-500 transition-all">
                    <svg className="w-5 h-5 text-rose-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Onction des malades */}
              <Link href="/sacrements/onction-malades" className="group block p-6 hover:bg-indigo-50 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-anthracite group-hover:text-indigo-600 transition-colors mb-2">
                      Onction des malades
                    </h3>
                    <p className="text-neutral-gris text-sm">
                      Grâce du Seigneur • Sur demande 24h/24
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-500 transition-all">
                    <svg className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Réconciliation */}
              <Link href="/sacrements/pardon" className="group block p-6 hover:bg-lime-50 transition-all duration-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-neutral-anthracite group-hover:text-lime-700 transition-colors mb-2">
                      Réconciliation
                    </h3>
                    <p className="text-neutral-gris text-sm">
                      Pardon et Paix • Samedi 17h00-17h45
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center group-hover:bg-lime-600 transition-all">
                    <svg className="w-5 h-5 text-lime-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

            </div>

            {/* Citation finale */}
            <div className="mt-20 text-center">
              <p className="text-neutral-gris italic text-lg max-w-2xl mx-auto">
                « Les sacrements sont les signes efficaces de la grâce, institués par le Christ et confiés à l'Église »
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="py-8 bg-neutral-grisClaire/50 border-t text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/sacrements-v1" className="px-6 py-3 bg-white border-2 border-sky-500 text-sky-600 rounded-lg hover:bg-sky-500 hover:text-white font-semibold transition">← VERSION 1</Link>
          <Link href="/sacrements-v2" className="px-6 py-3 bg-white border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white font-semibold transition">← VERSION 2</Link>
          <Link href="/sacrements-v4" className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-semibold transition">VERSION 4 →</Link>
        </div>
      </div>
    </div>
  )
}
