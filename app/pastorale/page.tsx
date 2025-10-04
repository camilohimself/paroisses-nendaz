import Link from 'next/link'

export default function PastoralePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Vatican sobre */}
      <section className="bg-gradient-to-br from-emerald-500 to-sky-500 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Vie Pastorale</h1>
          <p className="text-xl md:text-2xl opacity-95 mb-4">Sacrements • Catéchèse • Communauté</p>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Cheminer ensemble dans la foi, grandir dans l'amour du Christ et servir nos frères et sœurs.
          </p>
        </div>
      </section>

      {/* Sacrements - VERSION 3 : Minimaliste Épuré */}
      <section id="sacrements" className="py-20">
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
                      Don de l&apos;Esprit Saint • 14-15 ans (10CO-11CO)
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
                « Les sacrements sont les signes efficaces de la grâce, institués par le Christ et confiés à l&apos;Église »
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Catéchèse - VARIANTE A Palette Vitrail */}
      <section id="catechese" className="py-20 bg-white relative overflow-hidden">
        {/* Fonds décoratifs doux */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">

            {/* Titre section avec bandes colorées Vitrail */}
            <div className="mb-20">
              <div className="flex items-stretch mb-8">
                <div className="w-2 bg-amber-500"></div>
                <div className="w-2 bg-sky-500 ml-1"></div>
                <div className="w-2 bg-emerald-500 ml-1"></div>
                <div className="flex-1 pl-8">
                  <h2 className="text-6xl md:text-7xl font-bold text-neutral-anthracite mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Catéchèse
                  </h2>
                  <p className="text-xl text-neutral-gris leading-relaxed max-w-2xl">
                    Un parcours de foi coloré et vivant,
                    <br />
                    <span className="text-2xl font-semibold text-sky-600">pour tous les âges de la vie</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Grille asymétrique */}
            <div className="space-y-8">

              {/* Éveil à la foi - AMBER-500 */}
              <div className="grid md:grid-cols-12 gap-8 items-center group">
                <div className="md:col-span-7 order-2 md:order-1">
                  <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-3xl border-l-8 border-amber-500 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-3xl font-serif text-white">É</span>
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-amber-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Éveil à la foi
                        </h3>
                        <div className="inline-block px-4 py-1.5 bg-amber-500 text-white rounded-full">
                          <p className="text-sm font-bold uppercase tracking-wider">
                            3-6 ans
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-neutral-anthracite mb-6 leading-relaxed">
                      Premiers pas dans la découverte <strong className="text-amber-600">joyeuse et ludique</strong> de Jésus et de son message d'amour.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl border-2 border-amber-200">
                        <p className="text-xs text-amber-600 font-semibold uppercase mb-1">Fréquence</p>
                        <p className="text-sm text-neutral-anthracite font-bold">1x / mois</p>
                        <p className="text-xs text-neutral-gris">Samedi matin</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border-2 border-amber-200">
                        <p className="text-xs text-amber-600 font-semibold uppercase mb-1">Format</p>
                        <p className="text-sm text-neutral-anthracite font-bold">Parents-enfants</p>
                        <p className="text-xs text-neutral-gris">Activités créatives</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-amber-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Inscription via secrétariat
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="text-9xl md:text-[12rem] font-bold text-amber-500/10 leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                    01
                  </div>
                </div>
              </div>

              {/* Grain de Soleil - SKY-500 */}
              <div className="grid md:grid-cols-12 gap-8 items-center group">
                <div className="md:col-span-5">
                  <div className="text-9xl md:text-[12rem] font-bold text-sky-500/10 leading-none text-right" style={{ fontFamily: 'Playfair Display, serif' }}>
                    02
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="bg-gradient-to-br from-sky-50 to-white p-10 rounded-3xl border-r-8 border-sky-500 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-3xl font-serif text-white">G</span>
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-sky-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Grain de Soleil
                        </h3>
                        <div className="inline-block px-4 py-1.5 bg-sky-500 text-white rounded-full">
                          <p className="text-sm font-bold uppercase tracking-wider">
                            7-15 ans
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-neutral-anthracite mb-6 leading-relaxed">
                      Parcours de <strong className="text-sky-600">croissance et d'approfondissement</strong> vers les sacrements de la communion et de la confirmation.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl border-2 border-sky-200">
                        <p className="text-xs text-sky-600 font-semibold uppercase mb-1">Rencontres</p>
                        <p className="text-sm text-neutral-anthracite font-bold">Hebdomadaires</p>
                        <p className="text-xs text-neutral-gris">Par classe d'âge</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border-2 border-sky-200">
                        <p className="text-xs text-sky-600 font-semibold uppercase mb-1">Pédagogie</p>
                        <p className="text-sm text-neutral-anthracite font-bold">Interactive</p>
                        <p className="text-xs text-neutral-gris">Ludique et vivante</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-sky-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Préparation aux sacrements
                    </div>
                  </div>
                </div>
              </div>

              {/* Parcours Adultes - EMERALD-500 */}
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-10 rounded-3xl border-t-8 border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                        <span className="text-5xl font-serif text-white">P</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-5xl font-bold text-emerald-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Parcours Adultes
                        </h3>
                        <div className="inline-block px-4 py-1.5 bg-emerald-500 text-white rounded-full">
                          <p className="text-sm font-bold uppercase tracking-wider">
                            Formation continue
                          </p>
                        </div>
                      </div>

                      <p className="text-lg text-neutral-anthracite mb-6 leading-relaxed max-w-3xl">
                        Approfondir sa foi, se préparer aux sacrements ou <strong className="text-emerald-600">cheminer spirituellement à tout âge</strong> à travers des formations, conférences et accompagnements personnalisés.
                      </p>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border-2 border-emerald-200">
                          <p className="text-xs text-emerald-600 font-semibold uppercase mb-1">Formation</p>
                          <p className="text-sm text-neutral-anthracite font-bold">À la demande</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-2 border-emerald-200">
                          <p className="text-xs text-emerald-600 font-semibold uppercase mb-1">Baptême</p>
                          <p className="text-sm text-neutral-anthracite font-bold">Adultes</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border-2 border-emerald-200">
                          <p className="text-xs text-emerald-600 font-semibold uppercase mb-1">Suivi</p>
                          <p className="text-sm text-neutral-anthracite font-bold">Personnalisé</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 text-9xl font-bold text-emerald-500/10 leading-none hidden lg:block" style={{ fontFamily: 'Playfair Display, serif' }}>
                      03
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Citation avec bandes colorées Vitrail */}
            <div className="mt-24">
              <div className="flex items-stretch">
                <div className="flex flex-col gap-2">
                  <div className="w-3 h-full bg-amber-500 rounded-l-lg"></div>
                  <div className="w-3 h-full bg-sky-500 rounded-l-lg"></div>
                  <div className="w-3 h-full bg-emerald-500 rounded-l-lg"></div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-neutral-grisClaire/30 to-transparent p-12 rounded-r-3xl">
                  <p className="text-3xl md:text-4xl text-neutral-anthracite leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                    « Laissez les enfants venir à moi,
                    <br />
                    <span className="text-sky-600 font-semibold">car le royaume de Dieu est à ceux qui leur ressemblent. »</span>
                  </p>
                  <p className="text-sm text-neutral-gris uppercase tracking-widest font-bold">
                    — Marc 10:14
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vie communautaire - 3 piliers */}
      <section className="py-20 bg-gradient-to-b from-neutral-grisClaire/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-neutral-anthracite mb-4">Vie communautaire</h2>
            <p className="text-lg text-neutral-gris max-w-3xl mx-auto leading-relaxed">
              Notre vie paroissiale s&apos;articule autour de trois piliers : la Prière, la Liturgie et la Diaconie (service fraternel).
              Découvrez les groupes et services qui animent notre communauté.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Card 1: Prière */}
            <Link href="/pastorale/priere" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-neutral-gris/20 hover:border-sky-500 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-20 bg-sky-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-sky-600 transition-colors duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      Prière
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-sky-600 font-semibold">
                      Vie spirituelle
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed mb-6">
                  Groupes de prière pour nourrir notre relation avec Dieu.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Adoration eucharistique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Chapelet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Vêpres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">La Mère pèlerine</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">La prière des Mères</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-neutral-gris/10">
                  <span className="text-sky-600 font-semibold group-hover:underline text-sm">Découvrir</span>
                  <svg className="w-5 h-5 text-sky-600 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2: Liturgie */}
            <Link href="/pastorale/liturgie" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-neutral-gris/20 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-20 bg-emerald-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-emerald-600 transition-colors duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      Liturgie
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">
                      Service liturgique
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed mb-6">
                  Ministères et services pour célébrer dignement notre foi.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Auxiliaires de l'Eucharistie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Chorales (12 ensembles)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Lecteurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Sacristains</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Servants de messe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Service audiovisuel</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-neutral-gris/10">
                  <span className="text-emerald-600 font-semibold group-hover:underline text-sm">Découvrir</span>
                  <svg className="w-5 h-5 text-emerald-600 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 3: Diaconie */}
            <Link href="/pastorale/diaconie" className="group">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-neutral-gris/20 hover:border-amber-500 hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-20 bg-amber-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-2 group-hover:text-amber-600 transition-colors duration-300"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      Diaconie
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-amber-600 font-semibold">
                      Service fraternel
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed mb-6">
                  Services de charité et d'accompagnement du prochain.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Veillées de prières</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Hospitaliers de Lourdes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">MCR-Vie montante</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span className="text-sm text-neutral-anthracite">Visiteurs des malades</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-neutral-gris/10">
                  <span className="text-amber-600 font-semibold group-hover:underline text-sm">Découvrir</span>
                  <svg className="w-5 h-5 text-amber-600 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Section Contact - Style Vatican sobre */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-neutral-anthracite mb-4">Contact et Informations</h2>
              <p className="text-lg text-neutral-gris leading-relaxed">
                Pour toute demande de sacrement ou information sur la vie pastorale
              </p>
            </div>

            <div className="max-w-2xl mx-auto mb-12">
              {/* Secrétariat */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-2xl font-serif font-bold text-neutral-anthracite mb-6">Secrétariat paroissial</h3>
                <div className="space-y-4 text-neutral-gris">
                  <p className="text-lg font-semibold text-neutral-anthracite">Caroline Karlen</p>
                  <div className="space-y-2 text-sm">
                    <p>Route de Nendaz 355, 1996 Basse-Nendaz</p>
                    <p>paroisse_nendaz@bluemail.ch</p>
                    <p>027 / 288 22 50</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="font-semibold text-neutral-anthracite mb-1">Horaires</p>
                    <p className="text-sm">Lundi-Vendredi: 8h30-11h30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liens utiles - Style sobre */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors font-semibold"
              >
                Formulaire de contact
              </Link>
              <Link
                href="/paroisses"
                className="inline-flex items-center justify-center px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors font-semibold"
              >
                Nos paroisses
              </Link>
              <a
                href="https://web.enoria.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-white rounded-lg transition-colors font-semibold"
                style={{backgroundColor: '#2A8B8C'}}
              >
                Plateforme Enoria
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}