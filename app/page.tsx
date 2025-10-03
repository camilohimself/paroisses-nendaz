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
    <div>
      {/* Hero Section - KPI: Messe en direct Dimanche 10h00 */}
      <section className="bg-gradient-to-b from-neutral-grisClaire to-white py-12 md:py-16 lg:py-20 vitrail-glow">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-anthracite mb-4 md:mb-6">
            Paroisses de Nendaz
          </h1>
          <p className="text-lg md:text-xl text-paroisse-bleuRoi mb-6 md:mb-8">Nendaz • Veysonnaz</p>
          <a
            href="https://www.youtube.com/@paroissesnendazetveysonnaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-paroisse-jaune/20 border-l-4 border-paroisse-jaune p-4 mx-auto max-w-2xl backdrop-blur-sm hover:bg-paroisse-jaune/30 transition-all rounded-r-lg group"
          >
            <span className="w-3 h-3 bg-paroisse-rouge rounded-full animate-pulse"></span>
            <strong className="text-neutral-anthracite">Messe en direct • Dimanche 10h00</strong>
            <svg className="w-4 h-4 ml-2 text-paroisse-rouge group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Quick Access - Palette Vitrail */}
      <section className="py-12 md:py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 md:mb-12 text-gray-800">
            Accès rapides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {/* Card 1 - Service Liturgique */}
            <a
              href="/service-liturgique"
              className="group bg-sky-500 hover:bg-sky-600 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Service Liturgique
              </h3>
              <p className="text-sky-50 text-sm mb-4">
                Inscriptions informations
              </p>
              <div className="space-y-1 text-xs text-sky-50 opacity-90">
                <div>• Jeunes lecteurs</div>
                <div>• Lecteurs</div>
                <div>• Servants de Messe</div>
                <div>• Technique</div>
                <div>• Chorale</div>
              </div>
            </a>

            {/* Card 2 - Sacrements */}
            <a
              href="/sacrements"
              className="group bg-emerald-500 hover:bg-emerald-600 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Sacrements
              </h3>
              <p className="text-emerald-50 text-sm mb-4">
                Baptême, communion, mariage...
              </p>
              <div className="flex items-center text-white text-sm font-medium">
                En savoir plus
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Card 3 - Base Enoria */}
            <a
              href="https://web.enoria.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{backgroundColor: '#2A8B8C'}}
            >
              <div className="flex items-start mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Base Enoria
              </h3>
              <p className="text-teal-50 text-sm mb-4">
                Accès paroissiens
              </p>
              <div className="flex items-center text-white text-sm font-medium">
                Lien externe
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Card 4 - Intentions */}
            <a
              href="/intentions-annonces"
              className="group bg-amber-500 hover:bg-amber-600 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Intentions & Annonces
              </h3>
              <p className="text-amber-50 text-sm mb-4">
                Demandes et feuilles
              </p>
              <div className="space-y-1 text-xs text-amber-50 opacity-90">
                <div>• Demander une intention</div>
                <div>• Feuilles d'annonces</div>
              </div>
            </a>

          </div>
        </div>
      </section>


      {/* Mass Schedule - Dynamic from Google Calendar */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-anthracite">Prochains événements</h2>
            <a
              href="/evenements"
              className="text-paroisse-bleuRoi hover:text-paroisse-rouge font-medium text-sm flex items-center transition-colors"
            >
              Voir tous les événements
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="max-w-4xl mx-auto">
            <HorairesMesse
              showCalendarSelector={true}
              maxEvents={6}
            />
          </div>

          {/* Fallback horaires fixes si Google Calendar ne fonctionne pas */}
          <div className="max-w-4xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-center text-gray-600">Horaires habituels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-paroisse-rouge">Week-end</h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Samedi 18h00</span>
                    <span className="text-gray-600">Haute-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Dimanche 10h00</span>
                    <span className="text-gray-600">Basse-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Dimanche 11h00</span>
                    <span className="text-gray-600">Veysonnaz (été)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-paroisse-bleuRoi">Semaine</h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Mardi 8h30</span>
                    <span className="text-gray-600">Basse-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Jeudi 18h30</span>
                    <span className="text-gray-600">Haute-Nendaz</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Vendredi 8h30</span>
                    <span className="text-gray-600">Veysonnaz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Live Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-neutral-grisClaire to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-anthracite mb-6 md:mb-8 text-center">
              Messe en direct
            </h2>
            <YouTubeLiveIndicator />
          </div>
        </div>
      </section>
    </div>
  )
}
