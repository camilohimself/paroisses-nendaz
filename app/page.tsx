import QuickAccessCard from '@/components/QuickAccessCard'
import VideoHero from '@/components/VideoHero'
import SaintDuJour from '@/components/SaintDuJour'
import AnnouncementModal from '@/components/AnnouncementModal'
import dynamic from 'next/dynamic'

// Lazy load non-critical components
const HorairesMesse = dynamic(() => import('@/components/HorairesMesse'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-32" />
})


export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* ========================================= */}
      {/* MODAL ANNONCE - LOTO DES ÉGLISES         */}
      {/* ========================================= */}
      <AnnouncementModal />

      {/* ========================================= */}
      {/* HERO VIDEO - DRONE PAROISSES            */}
      {/* ========================================= */}
      <VideoHero />

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
              href="/pastorale/liturgie"
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
                Inscriptions et informations
              </p>
              <div className="space-y-1 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Baptême</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Pardon</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Communion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Mariage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Onction des malades</span>
                </div>
              </div>
            </a>

            {/* Card 3 - Base Enoria */}
            <a
              href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
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

            {/* Card 4 - Feuille d'annonces */}
            <a
              href="/api/feuille-annonces/generate"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-amber-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-amber-500 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                Feuille d'annonces
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Voir le PDF
              </p>
              <div className="space-y-1 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Messes 2 prochaines semaines</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Événements paroissiaux</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  <span>Format A4 imprimable</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SAINT DU JOUR - BANDEAU                 */}
      {/* ========================================= */}
      <SaintDuJour variante="bandeau" />

      {/* ========================================= */}
      {/* PROCHAINS ÉVÉNEMENTS - PIERRE ET LUMIÈRE */}
      {/* ========================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="container mx-auto px-4">

          {/* Titre section */}
          <div className="mb-10">
            <div className="h-px w-12 bg-amber-300 mb-3"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Annonce des prochaines célébrations
            </h2>
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
                    <span className="font-medium text-stone-800">Basse-Nendaz</span>
                    <span className="text-stone-600">Tous les dimanches 10h00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
