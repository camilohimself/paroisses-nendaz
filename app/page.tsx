import QuickAccessCard from '@/components/QuickAccessCard'
import dynamic from 'next/dynamic'

// Lazy load non-critical components
const HorairesMesse = dynamic(() => import('@/components/HorairesMesse'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-32" />
})
const YouTubeLiveIndicator = dynamic(() => import('@/components/YouTubeLiveIndicator'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-32" />
})


export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* ========================================= */}
      {/* HERO - PIERRE ET LUMIÈRE                */}
      {/* ========================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">

        {/* Texture pierre subtile */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzdG9uZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICA8cGF0aCBkPSJNMCwwIEwyMDAsMjAwIE0yMDAsMCBMMCwyMDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0b25lKSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Petite croix minimaliste */}
            <div className="flex justify-center mb-6">
              <div className="relative w-10 h-14">
                <div className="absolute left-1/2 top-0 w-0.5 h-full bg-stone-400 transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-3 w-full h-0.5 bg-stone-400"></div>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              <span className="block text-5xl md:text-7xl font-light text-stone-700 mb-3 tracking-wide">
                Paroisses de Nendaz
              </span>
              <span className="block text-2xl md:text-3xl font-light text-amber-600 tracking-widest uppercase">
                Nendaz • Veysonnaz
              </span>
            </h1>

            {/* Citation biblique */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="h-px w-20 bg-amber-300 mx-auto mb-5"></div>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed italic" style={{ fontFamily: 'Crimson Text, serif' }}>
                « Voici que<br />je suis avec vous tous les jours »
              </p>
              <p className="text-xs text-stone-400 mt-2 tracking-widest uppercase">Matthieu 18, 20</p>
              <div className="h-px w-20 bg-amber-300 mx-auto mt-5"></div>
            </div>

            {/* Messe en direct - Badge élégant */}
            <a
              href="https://www.youtube.com/@paroissesnendazetveysonnaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm border-2 border-amber-400 px-6 py-4 rounded-full hover:bg-white/80 transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="w-2.5 h-2.5 bg-amber-600 rounded-full animate-pulse"></span>
              <strong className="text-stone-800">Messe en direct</strong>
              <span className="text-stone-600">•</span>
              <span className="text-stone-700">Dimanche 10h00</span>
              <svg className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-stone-300"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>
        </div>

      </section>

      {/* ========================================= */}
      {/* ACCÈS RAPIDES - PIERRE ET LUMIÈRE       */}
      {/* ========================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">

          {/* Titre section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="h-px w-16 bg-amber-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Accès rapides
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-px w-16 bg-amber-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {/* Card 1 - Service Liturgique */}
            <a
              href="/pastorale#communaute"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-amber-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-amber-500 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                Service Liturgique
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Inscriptions et informations
              </p>
              <div className="space-y-1 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Jeunes lecteurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Lecteurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Servants de Messe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Technique</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Chorale</span>
                </div>
              </div>
            </a>

            {/* Card 2 - Sacrements */}
            <a
              href="/pastorale#sacrements"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-amber-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-amber-500 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                Sacrements
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Baptême, communion, mariage...
              </p>
              <div className="flex items-center text-amber-700 font-semibold text-sm pt-4 border-t border-stone-300">
                En savoir plus
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Card 3 - Base Enoria */}
            <a
              href="https://web.enoria.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-[#2A8B8C] hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-[#2A8B8C]"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-[#2A8B8C] flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-stone-600 group-hover:text-[#2A8B8C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-[#2A8B8C] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                Base Enoria
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Accès paroissiens
              </p>
              <div className="flex items-center text-[#2A8B8C] font-semibold text-sm pt-4 border-t border-stone-300">
                Lien externe
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Card 4 - Intentions */}
            <a
              href="/intentions-annonces"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-amber-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-amber-500 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                Intentions & Annonces
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Demandes et feuilles
              </p>
              <div className="space-y-1 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Demander une intention</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Feuilles d'annonces</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* ========================================= */}
      {/* PROCHAINS ÉVÉNEMENTS - PIERRE ET LUMIÈRE */}
      {/* ========================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">

          {/* Titre section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <div className="h-px w-12 bg-amber-300 mb-3"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                Prochains événements
              </h2>
            </div>
            <a
              href="/evenements"
              className="text-amber-700 hover:text-amber-800 font-semibold text-sm flex items-center transition-colors group"
            >
              Voir tous les événements
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="max-w-5xl mx-auto">
            <HorairesMesse
              showCalendarSelector={true}
              maxEvents={6}
            />
          </div>

          {/* Fallback horaires fixes */}
          <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-stone-300">
            <h3 className="text-lg font-semibold mb-6 text-center text-stone-700" style={{ fontFamily: 'Playfair Display, serif' }}>
              Horaires habituels
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold mb-4 text-amber-700">Messes dominicales du secteur : horaire normal</h4>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-stone-200 hover:bg-stone-50 px-4 transition-colors">
                    <span className="font-medium text-stone-800">Haute-Nendaz</span>
                    <span className="text-stone-600">Tous les samedis 17h30</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-stone-200 hover:bg-stone-50 px-4 transition-colors">
                    <span className="font-medium text-stone-800">Aproz/Veysonnaz</span>
                    <span className="text-stone-600">1er et 3e samedis du mois 19h00</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-stone-200 hover:bg-stone-50 px-4 transition-colors">
                    <span className="font-medium text-stone-800">Fey</span>
                    <span className="text-stone-600">
                      <a href="/paroisses/fey" className="text-amber-700 hover:text-amber-800 hover:underline">
                        cf. site internet paroisses-nendaz.ch
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-stone-200 hover:bg-stone-50 px-4 transition-colors">
                    <span className="font-medium text-stone-800">Basse-Nendaz</span>
                    <span className="text-stone-600">Tous les dimanches 10h00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* YOUTUBE LIVE - PIERRE ET LUMIÈRE        */}
      {/* ========================================= */}
      <section id="messe-direct" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Messe en direct
              </h2>
              <p className="text-stone-600">YouTube de la Paroisse</p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            <YouTubeLiveIndicator />
          </div>
        </div>
      </section>
    </div>
  )
}
