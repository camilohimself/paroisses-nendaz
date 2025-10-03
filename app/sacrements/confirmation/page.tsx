import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Confirmation - Sacrements - Paroisses de Nendaz',
  description: 'Parcours de préparation à la confirmation pour les jeunes de notre communauté paroissiale.',
}

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-violet/10">
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
            Le sacrement de confirmation est accessible à tout baptisé catholique.
          </p>
        </div>

        {/* Navigation sacrements */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
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

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Texte principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Notre parcours de préparation</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Bienvenue sur notre parcours de préparation à la confirmation ! Nous croyons que ce temps n'est pas un défi à relever, mais une occasion spéciale de rencontre avec Dieu.
                </p>

                <p className="leading-relaxed mb-6">
                  Notre objectif est de partager avec les candidats à la confirmation les différentes facettes de la vie chrétienne, notamment la prière, l'écoute de la Parole, la participation à l'Eucharistie et l'engagement envers la solidarité.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-violetFonce mt-8 mb-4">La célébration</h3>
                <p className="leading-relaxed mb-6">
                  Le point culminant de ce parcours est la célébration de la confirmation, organisée dans notre secteur à l'église de Basse-Nendaz. Animée par les confirmands, cette célébration marque le sommet de la préparation et, surtout, le début du cheminement personnel de chaque confirmé, les encourageant à assumer la responsabilité de leur relation avec Dieu.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-violetFonce mt-8 mb-4">Après la confirmation</h3>
                <p className="leading-relaxed mb-6">
                  Les jeunes confirmés sont ensuite invités à poursuivre leur engagement de foi à travers diverses activités telles que des groupes de jeunes, des pèlerinages, des week-ends, etc. Nous nous efforçons, dans la mesure de nos moyens, de proposer ces opportunités aux plus grands.
                </p>

                <p className="leading-relaxed mb-6">
                  Il est également important de mentionner que le Service Diocésain de la Jeunesse (SDJ) offre une gamme complète d'activités, où les confirmés peuvent trouver ce qui correspond le mieux à leurs aspirations spirituelles.
                </p>

                <div className="bg-paroisse-violet/10 border-l-4 border-paroisse-violet p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-semibold text-paroisse-violetFonce">
                    Rejoignez-nous dans cette aventure enrichissante de foi et de croissance personnelle !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact */}
            <div className="bg-paroisse-violet text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Vous souhaitez vous inscrire ?</h3>
              <p className="mb-6 text-white/90">
                Prenez contact avec nous pour commencer votre parcours de confirmation.
              </p>
              <Link
                href="/contact?sujet=Confirmation"
                className="block w-full bg-white text-paroisse-violet hover:bg-white/90 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Prendre contact
              </Link>
            </div>

            {/* Infos pratiques */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Lieu de célébration</p>
                    <p className="text-neutral-gris">Église de Basse-Nendaz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Pour qui ?</p>
                    <p className="text-neutral-gris">Tout baptisé catholique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Durée</p>
                    <p className="text-neutral-gris">Parcours de préparation adapté</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
