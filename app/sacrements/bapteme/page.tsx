import Link from 'next/link'
import { Metadata } from 'next'
import { Calendar, MapPin, Clock } from 'lucide-react'
import PageTracker from '@/components/PageTracker'

export const metadata: Metadata = {
  title: 'Baptême - Sacrements - Paroisses de Nendaz',
  description: 'Préparez le baptême de votre enfant ou votre propre baptême dans notre communauté paroissiale de Nendaz et Veysonnaz.',
  openGraph: {
    title: 'Baptême | Paroisses de Nendaz',
    description: 'Premier sacrement de la vie chrétienne, porte d\'entrée dans la communauté des croyants.',
    url: 'https://www.paroisses-nendaz.ch/sacrements/bapteme',
    images: [{ url: '/logo-paroisses.png', width: 1080, height: 1350 }],
  },
}

export default function BaptemePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-bleuCommunaute/10">
      <PageTracker type="sacrement" sacrement="bapteme" />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-bleuRoi transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-paroisse-bleuRoi transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Baptême</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-paroisse-bleuCommunaute/10 px-4 py-2 rounded-full mb-4">
            <span className="text-paroisse-bleuRoi font-semibold text-sm">Sacrement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
            Baptême
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl">
            Premier sacrement de la vie chrétienne, porte d&apos;entrée dans la communauté des croyants.
          </p>
        </div>

        {/* Contenu principal - Grid restructuré mobile-first */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - premier sur mobile, à droite sur desktop */}
          <div className="lg:order-last lg:col-span-1 space-y-6">
            {/* Infos pratiques */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Lieux</p>
                    <p className="text-neutral-gris">Basse-Nendaz, Haute-Nendaz, Veysonnaz, Aproz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Quand ?</p>
                    <p className="text-neutral-gris">Dimanche ou samedi après la messe</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Préparation</p>
                    <p className="text-neutral-gris">Rencontre à la cure de Basse-Nendaz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-paroisse-bleuRoi text-white rounded-xl shadow-lg p-6 lg:sticky lg:top-6">
              <h3 className="text-xl font-bold mb-4">Préparer un baptême</h3>
              <p className="mb-6 text-white/90">
                Prenez contact avec le curé pour organiser le baptême.
              </p>
              <Link
                href="/contact?sujet=Bapteme"
                className="block w-full bg-white text-paroisse-bleuRoi hover:bg-white/90 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Prendre contact
              </Link>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Baptême des nouveau-nés */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Baptême des nouveau-nés</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Merci aux parents qui présentent un nouveau-né au baptême de bien s&apos;adresser au curé suffisamment tôt afin de convenir d&apos;un rendez-vous pour la préparation.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-bleuRoi mt-8 mb-4">Rencontre de préparation</h3>
                <p className="leading-relaxed mb-6">
                  En règle générale, celle-ci se tiendra à la cure de Basse-Nendaz et sera fixée en fonction de vos disponibilités. Les deux éléments, qui constitueront cette rencontre sont la convivialité et approfondissement de notre foi.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-bleuRoi mt-8 mb-4">Lieu du baptême</h3>
                <p className="leading-relaxed mb-4">
                  Les baptêmes seront administrés le dimanche (ou le samedi) dans les églises paroissiales:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2 text-neutral-gris">
                  <li>Basse-Nendaz, Haute-Nendaz, Veysonnaz et Aproz après la messe dominicale</li>
                  <li>Plusieurs enfants pourront être baptisés au cours de la même célébration</li>
                  <li>En été, dans les mayens, à Planchouet ou aux Rairettes, après la messe dominicale</li>
                </ul>
              </div>
            </div>

            {/* Baptême enfants et adultes */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Baptême d&apos;enfants en âge de scolarité et baptême d&apos;adultes</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="leading-relaxed mb-6">
                  Le baptême d&apos;enfants en âge de scolarité et le baptême d&apos;adultes nécessite une préparation individuelle dans le cadre du catéchuménat des adultes. La démarche catéchuménale s&apos;inscrit dans la durée.
                </p>

                <p className="leading-relaxed mb-6">
                  Dans un monde où tout va très vite, le catéchuménat est une chance pour cheminer avec les personnes dans la foi. La préparation débute au moins de septembre et dure au minimum une année.
                </p>

                <p className="leading-relaxed mb-6">
                  Les candidats sont invités à se joindre à un groupe paroissial: La Foi est un Trésor, groupe de prière, groupe de jeunes…
                </p>

                <div className="bg-paroisse-bleuCommunaute/10 border-l-4 border-paroisse-bleuCommunaute p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-paroisse-bleuRoi">
                    Veuillez vous adresser au curé dès que possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation autres sacrements - en bas */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-12">
          <h3 className="text-sm font-semibold text-neutral-gris mb-4">Autres sacrements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <Link href="/sacrements/communion" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Communion
            </Link>
            <Link href="/sacrements/confirmation" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Confirmation
            </Link>
            <Link href="/sacrements/pardon" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Pardon/Réconciliation
            </Link>
            <Link href="/sacrements/mariage" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Mariage
            </Link>
            <Link href="/sacrements/onction-malades" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Onction des malades
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
