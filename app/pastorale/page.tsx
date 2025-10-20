import Link from 'next/link'

export default function PastoralePage() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* ========================================= */}
      {/* HERO - PIERRE ET LUMIÈRE VERSION 1      */}
      {/* ========================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">

        {/* Texture pierre subtile */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzdG9uZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICA8cGF0aCBkPSJNMCwwIEwyMDAsMjAwIE0yMDAsMCBMMCwyMDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0b25lKSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Petite croix minimaliste */}
            <div className="flex justify-center mb-8">
              <div className="relative w-12 h-16">
                <div className="absolute left-1/2 top-0 w-0.5 h-full bg-stone-400 transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-4 w-full h-0.5 bg-stone-400"></div>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="block text-6xl md:text-8xl font-light text-stone-700 mb-4 tracking-wide">
                Vie pastorale
              </span>
              <span className="block text-3xl md:text-4xl font-light text-amber-600 tracking-widest uppercase">
                Secteur de Nendaz-Veysonnaz
              </span>
            </h1>

            {/* Citation biblique */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="h-px w-24 bg-amber-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed italic" style={{ fontFamily: 'Crimson Text, serif' }}>
                « Je suis le chemin, la vérité et la vie. »
              </p>
              <p className="text-sm text-stone-400 mt-3 tracking-widest uppercase">Jean 14, 6</p>
              <div className="h-px w-24 bg-amber-300 mx-auto mt-6"></div>
            </div>

            {/* Trois piliers - navigation directe */}
            <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
              <a href="#sacrements" className="group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all duration-500 flex items-center justify-center border border-stone-300/30">
                    <span className="text-2xl text-stone-600 group-hover:text-amber-700 transition-colors">✟</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 mb-2 tracking-wider uppercase">Sacrements</h3>
                <p className="text-xs text-stone-500">Signes de grâce</p>
              </a>

              <a href="#catechese" className="group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all duration-500 flex items-center justify-center border border-stone-300/30">
                    <span className="text-2xl text-stone-600 group-hover:text-amber-700 transition-colors">♱</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 mb-2 tracking-wider uppercase">Catéchèse</h3>
                <p className="text-xs text-stone-500">Chemins de foi</p>
              </a>

              <a href="#communaute" className="group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all duration-500 flex items-center justify-center border border-stone-300/30">
                    <span className="text-2xl text-stone-600 group-hover:text-amber-700 transition-colors">❖</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 mb-2 tracking-wider uppercase">Communauté</h3>
                <p className="text-xs text-stone-500">Vivre ensemble</p>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-stone-300"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>
        </div>

      </section>

      {/* ========================================= */}
      {/* SACREMENTS - PALETTE PIERRE/OR           */}
      {/* Structure validée par le curé - conservée */}
      {/* ========================================= */}
      <section id="sacrements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-20">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Les Sacrements
              </h2>
              <p className="text-stone-500 italic">Signes de la grâce divine</p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Liste sacrements - style Pierre et Lumière */}
            <div className="space-y-6">

              {/* Baptême */}
              <Link href="/sacrements/bapteme" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Baptême
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Premier sacrement de la vie chrétienne • 0-7 ans ou adultes
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Réconciliation */}
              <Link href="/sacrements/pardon" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Réconciliation
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Premier Pardon 4H • Confession sur rdv, vendredi & dimanche avant messe à Basse-Nendaz
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Première Communion */}
              <Link href="/sacrements/communion" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Première Communion
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Recevoir Jésus Pain de Vie • 5H
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Confirmation */}
              <Link href="/sacrements/confirmation" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Confirmation
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Don de l&apos;Esprit Saint • 7H-8H
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Onction des malades */}
              <Link href="/sacrements/onction-malades" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Onction des malades
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Grâce du Seigneur • Sur demande 24h/24
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Mariage */}
              <Link href="/sacrements/mariage" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Mariage
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Alliance sacrée • Préparation 6 mois
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

            </div>

            {/* Citation finale */}
            <div className="mt-20 text-center">
              <div className="h-px w-24 bg-stone-300 mx-auto mb-6"></div>
              <p className="text-stone-600 italic text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Crimson Text, serif' }}>
                « Les sacrements sont les signes efficaces de la grâce,<br />institués par le Christ et confiés à l&apos;Église. »
              </p>
              <div className="h-px w-24 bg-stone-300 mx-auto mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CATÉCHÈSE - CHALEUREUX ET JOYEUX         */}
      {/* ========================================= */}
      <section id="catechese" className="py-20 bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Titre section - Plus chaleureux */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border-2 border-amber-300 shadow-lg">
                  <span className="text-2xl">✨</span>
                  <p className="text-amber-700 font-bold uppercase tracking-wider text-sm">Grandir dans la foi</p>
                  <span className="text-2xl">✨</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Catéchèse
              </h2>
              <p className="text-2xl text-amber-800 leading-relaxed max-w-2xl mx-auto font-light">
                Un parcours <span className="font-bold text-orange-600">joyeux et coloré</span> pour tous les âges !
              </p>
            </div>

            {/* Liste des parcours - Design joyeux et chaleureux */}
            <div className="space-y-8">

              {/* Éveil à la foi - JAUNE SOLEIL */}
              <div className="group bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-yellow-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                    <span className="text-4xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Éveil à la foi
                    </h3>
                    <div className="inline-block px-5 py-2 bg-yellow-400 rounded-full shadow-md">
                      <p className="text-base font-bold text-amber-900">
                        👶 0 à 10 ans
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-amber-900 mb-6 leading-relaxed">
                  Les premiers pas <strong className="text-orange-600">joyeux et ludiques</strong> pour découvrir Jésus et son message d'amour ! 💛
                </p>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-yellow-300 mb-6 shadow-lg">
                  <p className="text-sm text-amber-800 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span>📅</span> Prochaines rencontres 2025-2026
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-yellow-50 p-3 rounded-xl">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <p className="font-bold text-amber-900">Samedi 20 décembre 2025 • 9h30</p>
                        <p className="text-amber-700 text-sm">Église de Basse-Nendaz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-yellow-50 p-3 rounded-xl">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <p className="font-bold text-amber-900">Vendredi 3 avril 2026 • 15h</p>
                        <p className="text-amber-700 text-sm">Église de Basse-Nendaz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-yellow-50 p-3 rounded-xl">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <p className="font-bold text-amber-900">Dimanche 5 avril 2026 • 10h</p>
                        <p className="text-amber-700 text-sm">Église de Basse-Nendaz • Atelier de la Parole</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-yellow-200">
                    <p className="text-sm text-amber-800 font-semibold">✨ 3 belles rencontres par année</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-amber-900 font-bold bg-yellow-200/50 px-4 py-3 rounded-xl">
                  <span className="text-xl">💌</span>
                  <p>Inscription via le secrétariat paroissial</p>
                </div>
              </div>

              {/* Grain de Soleil - ORANGE CHALEUREUX */}
              <div className="group bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-orange-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-orange-400 rounded-2xl flex items-center justify-center transform group-hover:-rotate-6 transition-transform duration-500 shadow-lg">
                    <span className="text-4xl">☀️</span>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-orange-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Grain de Soleil
                    </h3>
                    <div className="inline-block px-5 py-2 bg-orange-400 rounded-full shadow-md">
                      <p className="text-base font-bold text-orange-900">
                        🌱 7-15 ans
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-orange-900 mb-6 leading-relaxed">
                  Grandir ensemble vers les <strong className="text-amber-700">sacrements de communion et confirmation</strong> ! Un chemin lumineux et joyeux. ☀️
                </p>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-orange-300 mb-6 shadow-lg">
                  <p className="text-sm text-orange-800 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span>⛪</span> Messes Grain de Soleil
                  </p>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <p className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                        <span>📍</span> À Veysonnaz
                      </p>
                      <div className="space-y-1 text-sm text-orange-800 pl-6">
                        <p>• 10h à la Toussaint</p>
                        <p>• 10h à Noël</p>
                        <p>• 9h le jour de Pâques</p>
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <p className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                        <span>📍</span> À Basse-Nendaz
                      </p>
                      <div className="space-y-1 text-sm text-orange-800 pl-6">
                        <p>• 10h à la fête paroissiale (1er dimanche d'octobre)</p>
                        <p>• 10h à Pâques</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-orange-900 font-bold bg-orange-200/50 px-4 py-3 rounded-xl">
                  <span className="text-xl">🎯</span>
                  <p>Préparation joyeuse aux sacrements</p>
                </div>
              </div>

              {/* Parcours Adultes - STYLE MATURE MAIS ACCUEILLANT */}
              <div className="group bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100 p-8 md:p-10 rounded-3xl shadow-xl border-4 border-emerald-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-4xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-emerald-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Parcours Adultes
                    </h3>
                  </div>
                </div>

                <p className="text-xl text-emerald-900 leading-relaxed">
                  Approfondir sa foi, se préparer aux sacrements ou <strong>cheminer spirituellement à tout âge</strong> 🌟 à travers des formations, conférences et accompagnements personnalisés.
                </p>
              </div>

              {/* Messes des familles - STYLE FESTIF ET FAMILIAL */}
              <div className="group bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-8 md:p-10 rounded-3xl shadow-xl border-4 border-pink-300">
                <div className="flex items-start gap-6 mb-6">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-purple-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Messes des activités catéchétiques
                    </h3>
                    <div className="inline-block px-5 py-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-md">
                      <p className="text-base font-bold text-white">Messes des familles</p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-purple-900 mb-8 leading-relaxed">
                  Des moments privilégiés pour <strong>célébrer en famille</strong> et vivre la foi ensemble avec toute la communauté paroissiale.
                </p>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-pink-300 shadow-lg mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-sm text-purple-700 font-bold uppercase tracking-wider">Programme 2025-2026</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-l-4 border-pink-400">
                      <div>
                        <p className="font-bold text-purple-900">Samedi 15 novembre 2025 • 17h</p>
                        <p className="text-sm text-purple-700">📍 Haute-Nendaz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-pink-50 p-4 rounded-xl border-l-4 border-blue-400">
                      <div>
                        <p className="font-bold text-blue-900">Dimanche 15 décembre 2025 • 10h</p>
                        <p className="text-sm text-blue-700">📍 Basse-Nendaz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl border-l-4 border-purple-400">
                      <div>
                        <p className="font-bold text-purple-900">Dimanche 4 janvier 2026 • 10h</p>
                        <p className="text-sm text-purple-700">📍 Basse-Nendaz • Messe des familles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-l-4 border-pink-400">
                      <div>
                        <p className="font-bold text-pink-900">Samedi 7 février 2026 • 19h</p>
                        <p className="text-sm text-pink-700">📍 Aproz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-purple-400">
                      <div>
                        <p className="font-bold text-purple-900">Samedi 21 mars 2026 • 19h</p>
                        <p className="text-sm text-purple-700">📍 Veysonnaz</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-purple-900 font-bold bg-gradient-to-r from-pink-200/50 to-purple-200/50 px-5 py-4 rounded-xl">
                  <span className="text-2xl">❤️</span>
                  <p className="text-lg">Toutes les familles sont les bienvenues !</p>
                </div>
              </div>

            </div>

            {/* Citation finale Catéchèse - VERSION JOYEUSE */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <span className="text-3xl">✨</span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
              <p className="text-amber-900 italic text-2xl max-w-3xl mx-auto leading-relaxed font-semibold" style={{ fontFamily: 'Crimson Text, serif' }}>
                « Laissez les enfants venir à moi,<br />car le royaume de Dieu est à ceux qui leur ressemblent. »
              </p>
              <p className="text-base text-orange-700 mt-4 font-bold tracking-wider">Marc 10, 14</p>
              <div className="inline-flex items-center gap-4 mt-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <span className="text-3xl">🌟</span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* VIE COMMUNAUTAIRE - 3 PILIERS           */}
      {/* ========================================= */}
      <section id="communaute" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Vie communautaire
              </h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Notre vie paroissiale s&apos;articule autour de trois piliers : la Prière, la Liturgie et la Diaconie (service fraternel).
                Découvrez les groupes et services qui animent notre communauté.
              </p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Grille 3 piliers - Style Pierre et Lumière */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Pilier 1: Prière */}
              <Link href="/pastorale/priere" className="group">
                <div className="bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-16 bg-amber-400"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Prière
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                        Vie spirituelle
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed mb-6">
                    Groupes de prière pour nourrir notre relation avec Dieu.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Adoration eucharistique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Chapelet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Vêpres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">La Mère pèlerine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">La prière des Mères</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-300">
                    <span className="text-amber-700 font-semibold group-hover:underline text-sm">Découvrir</span>
                    <svg className="w-5 h-5 text-amber-700 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Pilier 2: Liturgie */}
              <Link href="/pastorale/liturgie" className="group">
                <div className="bg-stone-50 p-8 border-2 border-stone-200 hover:border-stone-500 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-16 bg-stone-500"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-stone-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Liturgie
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-stone-600 font-semibold">
                        Service liturgique
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed mb-6">
                    Ministères et services pour célébrer dignement notre foi.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Auxiliaires de l'Eucharistie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Chorales (12 ensembles)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Lecteurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Sacristains</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Servants de messe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Service audiovisuel</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-300">
                    <span className="text-stone-700 font-semibold group-hover:underline text-sm">Découvrir</span>
                    <svg className="w-5 h-5 text-stone-700 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Pilier 3: Diaconie */}
              <Link href="/pastorale/diaconie" className="group">
                <div className="bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-16 bg-amber-400"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Diaconie
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                        Service fraternel
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed mb-6">
                    Services de charité et d'accompagnement du prochain.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Veillées de prières</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Hospitaliers de Lourdes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">MCR-Vie montante</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Visiteurs des malades</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-300">
                    <span className="text-amber-700 font-semibold group-hover:underline text-sm">Découvrir</span>
                    <svg className="w-5 h-5 text-amber-700 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION CONTACT - FINALE                */}
      {/* ========================================= */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Titre */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact et Informations
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Pour toute demande de sacrement ou information sur la vie pastorale
              </p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Secrétariat */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white p-8 border-2 border-stone-300 shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Secrétariat paroissial
                </h3>
                <div className="space-y-4 text-stone-700">
                  <p className="text-lg font-semibold text-stone-800">Caroline Karlen</p>
                  <div className="space-y-2 text-sm">
                    <p>Route de Nendaz 355, 1996 Basse-Nendaz</p>
                    <p>paroisse_nendaz@bluemail.ch</p>
                    <p>+41 27 288 22 50</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-300">
                    <p className="font-semibold text-stone-800 mb-1">Horaires</p>
                    <p className="text-sm">Mardi et Vendredi</p>
                    <p className="text-sm">8h-11h30</p>
                    <p className="text-sm">14h-16h30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liens */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-400 text-stone-700 hover:bg-stone-100 transition-colors font-semibold">
                Formulaire de contact
              </Link>
              <Link href="/paroisses" className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-semibold">
                Nos paroisses
              </Link>
              <a href="https://web.enoria.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-400 text-stone-700 hover:bg-stone-100 transition-colors font-semibold">
                Plateforme Enoria
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
