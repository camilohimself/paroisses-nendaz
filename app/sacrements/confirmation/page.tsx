import Link from 'next/link'
import { Metadata } from 'next'
import { Calendar, GraduationCap, MapPin, FileText } from 'lucide-react'
import PageTracker from '@/components/PageTracker'

export const metadata: Metadata = {
  title: 'Confirmation - Sacrements - Paroisses de Nendaz',
  description: 'Parcours de préparation à la confirmation pour les jeunes de notre communauté paroissiale de Nendaz et Veysonnaz.',
  openGraph: {
    title: 'Confirmation | Paroisses de Nendaz',
    description: 'Parcours de préparation à la confirmation pour les jeunes.',
    url: 'https://www.paroisses-nendaz.ch/sacrements/confirmation',
    images: [{ url: '/logo-paroisses.png', width: 1080, height: 1350 }],
  },
}

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-violet/10">
      <PageTracker type="sacrement" sacrement="confirmation" />
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-violet transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-paroisse-violet transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Confirmation</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-paroisse-violet/10 px-4 py-2 rounded-full mb-4">
            <span className="text-paroisse-violetFonce font-semibold text-sm">Sacrement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
            Confirmation
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl">
            Une aventure enrichissante de foi et de croissance personnelle
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
                  <GraduationCap className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Âge</p>
                    <p className="text-neutral-gris">7-8H généralement (ouvert à tous)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Durée</p>
                    <p className="text-neutral-gris">Une année pastorale environ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Célébration</p>
                    <p className="text-neutral-gris">Octobre - Église de Basse-Nendaz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 text-white rounded-xl shadow-lg p-6 lg:sticky lg:top-6">
              <h3 className="text-xl font-bold mb-4 text-white">Vous souhaitez vous inscrire ?</h3>
              <p className="mb-6 text-white">
                Prenez contact avec nous pour commencer votre parcours de confirmation.
              </p>
              <Link
                href="/contact?sujet=Confirmation"
                className="block w-full bg-white text-slate-700 hover:bg-white/90 font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-md"
              >
                Prendre contact
              </Link>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Notre parcours de préparation</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Bienvenue dans parcours de préparation à la confirmation du secteur Nendaz-Veysonnaz !
                  Nous croyons que ce temps n&apos;est pas un défi à relever ou un « parcours du combattant »
                  sélectif, mais plutôt une occasion toute particulière de rencontrer Dieu dans sa vie.
                </p>

                <p className="leading-relaxed mb-6">
                  Généralement, le parcours se vit à l&apos;âge scolaire 7-8H, mais nous accueillons avec joie toutes
                  les demandes des personnes plus âgées qui souhaitent renouer avec la vie de foi. Le cas
                  échéant, la préparation et la confirmation des adultes se fait en lien avec le diocèse de Sion.
                </p>

                <p className="leading-relaxed mb-6">
                  Notre objectif est de partager avec les candidats à la confirmation les différentes facettes de la
                  vie chrétienne, notamment la prière, l&apos;écoute de la Parole, la participation à l&apos;Eucharistie et
                  l&apos;engagement envers la solidarité et la vie en communauté. Le parcours vers la confirmation
                  dure une année pastorale environ et se termine avec la confirmation en octobre. De
                  nombreuses activités à choix sont organisées dans le cadre de ce parcours alors que certains
                  rendez-vous sont obligatoires pour une bonne préparation. Vous pourrez retrouver les
                  informations précises sur le flyer mis en ligne et en participant à la rencontre de présentation
                  du parcours.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
                  <p className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5" /> Prochaine rencontre de présentation
                  </p>
                  <p className="text-amber-800">
                    Le dimanche 9 novembre à 10h50 à l&apos;église de Basse-Nendaz.<br />
                    Durée : 1 heure environ.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-paroisse-violetFonce mt-8 mb-4">La célébration</h3>
                <p className="leading-relaxed mb-6">
                  Le point culminant de ce parcours est bien sûr la célébration de la confirmation, organisée
                  dans notre secteur à l&apos;église de Basse-Nendaz un samedi ou dimanche du mois d&apos;octobre.
                  Animée par les confirmands, cette célébration marque le sommet de la préparation mais
                  surtout le début du cheminement personnel de chaque confirmé, l&apos;encourageant à assumer la
                  responsabilité de sa relation avec Dieu. C&apos;est aussi une fête communautaire pour les familles
                  et nos paroisses toutes entières.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-violetFonce mt-8 mb-4">Après la confirmation</h3>
                <p className="leading-relaxed mb-6">
                  Les confirmés sont ensuite invités à poursuivre leur engagement de foi dans la vie paroissiale
                  et à travers diverses activités telles que des groupes de jeunes, des pèlerinages, des week-ends,
                  etc. Nous nous efforçons, dans la mesure de nos moyens, de proposer ces opportunités aux
                  plus grands.
                </p>

                <p className="leading-relaxed mb-6">
                  Il est également important de mentionner que le Service Diocésain de la Jeunesse (SDJ) offre
                  une gamme complète d&apos;activités, où les confirmés peuvent trouver ce qui correspond le mieux
                  à leurs aspirations spirituelles et des compagnons de leur âge.
                </p>

                <div className="bg-paroisse-violet/10 border-l-4 border-paroisse-violet p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-semibold text-paroisse-violetFonce">
                    Rejoignez-nous dans cette aventure enrichissante de foi et de croissance personnelle !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Document téléchargeable */}
        <div className="bg-gradient-to-br from-paroisse-violet/10 to-paroisse-violet/5 rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Document d&apos;information</h2>
          <div className="max-w-2xl">
            <a
              href="/documents/confirmation/info-parents-confirmation-2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-paroisse-violet group block"
            >
              <div className="flex items-start gap-4">
                <FileText className="w-10 h-10 text-paroisse-violet group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-violet transition-colors text-lg">
                    Flyer d&apos;information pour les parents 2025-2026
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Toutes les informations détaillées sur le parcours de confirmation : programme, dates, activités obligatoires et à choix
                  </p>
                  <span className="inline-flex items-center gap-2 text-paroisse-bleuRoi text-sm font-semibold">
                    Télécharger le flyer (PDF)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Navigation autres sacrements - en bas */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h3 className="text-sm font-semibold text-neutral-gris mb-4">Autres sacrements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <Link href="/sacrements/bapteme" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Baptême
            </Link>
            <Link href="/sacrements/communion" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Communion
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
