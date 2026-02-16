import type { Metadata } from 'next'
import Link from 'next/link'
import VideoHero from '@/components/VideoHero'
import SaintDuJour from '@/components/SaintDuJour'
import AnnouncementModal from '@/components/AnnouncementModal'
import { SlidersHorizontal, Briefcase, User, Eye, ExternalLink } from 'lucide-react'
import dynamic from 'next/dynamic'

// Lazy load non-critical components
const HorairesMesse = dynamic(() => import('@/components/HorairesMesse'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-32" />
})

export const metadata: Metadata = {
  title: 'Accueil | Paroisses de Nendaz et Veysonnaz',
  description: 'Site officiel des paroisses catholiques de Nendaz et Veysonnaz. Horaires des messes, saint du jour, sacrements, événements et vie paroissiale en Valais.',
  openGraph: {
    title: 'Paroisses de Nendaz et Veysonnaz',
    description: 'Horaires des messes, saint du jour, sacrements, événements et vie paroissiale en Valais.',
    url: 'https://www.paroisses-nendaz.ch',
  },
  alternates: {
    canonical: 'https://www.paroisses-nendaz.ch',
  },
}

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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
              Accès rapides
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-px w-16 bg-amber-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {/* Card 1 - Service Liturgique */}
            <Link
              href="/pastorale/liturgie"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-amber-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-amber-500 flex items-center justify-center transition-all">
                  <SlidersHorizontal className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
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
            </Link>

            {/* Card 2 - Sacrements */}
            <Link
              href="/pastorale#sacrements"
              className="group bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-amber-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-stone-300 group-hover:border-amber-500 flex items-center justify-center transition-all">
                  <Briefcase className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
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
            </Link>

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
                  <User className="w-5 h-5 text-stone-600 group-hover:text-[#2A8B8C] transition-colors" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-[#2A8B8C] transition-colors">
                Base Enoria
              </h3>
              <p className="text-stone-600 text-sm mb-4">
                Accès paroissiens
              </p>
              <div className="flex items-center text-[#2A8B8C] font-semibold text-sm pt-4 border-t border-stone-300">
                Lien externe
                <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
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
                  <Eye className="w-5 h-5 text-stone-600 group-hover:text-amber-700 transition-colors" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
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
            <h3 className="text-lg font-semibold mb-6 text-center text-stone-700">
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
