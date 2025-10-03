import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mariage - Sacrements - Paroisses de Nendaz',
  description: 'Préparez votre mariage religieux dans notre communauté paroissiale.',
}

export default function MariagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-rouge/10">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-rouge transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-paroisse-rouge transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Mariage</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-paroisse-rouge/10 px-4 py-2 rounded-full mb-4">
            <span className="text-paroisse-rougeFonce font-semibold text-sm">Sacrement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
            Mariage
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl">
            Préparez votre union bénie par l'Église dans la sérénité et sans précipitation.
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
            <Link href="/sacrements/confirmation" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Confirmation
            </Link>
            <Link href="/sacrements/pardon" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Pardon/Réconciliation
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
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Préparer votre mariage</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <div className="bg-paroisse-rouge/10 border-l-4 border-paroisse-rouge p-6 rounded-r-lg mb-8">
                  <p className="text-lg font-semibold text-paroisse-rougeFonce">
                    Pour assurer une bonne préparation, veuillez prendre contact avec le prêtre qui bénira votre union au moins 6 mois, voir un an avant la date choisie.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-6">
                  Ce temps vous permettra de réserver le célébrant et l'église de votre mariage dans les meilleures conditions, ainsi que de vous préparer sans stress et sans précipitation.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-rougeFonce mt-8 mb-4">Rencontre de préparation</h3>
                <p className="leading-relaxed mb-6">
                  La préparation du mariage comporte un minimum de 4 rencontres avec le curé et une soirée d'information organisée par le diocèse. Pour cette dernière, veuillez visitez le site de la pastorale de la famille. Vous y trouverez plus d'informations.
                </p>

                <h3 className="text-xl font-semibold text-paroisse-rougeFonce mt-8 mb-4">Lieu</h3>
                <p className="leading-relaxed">
                  Le jour, le lieu et l'horaire du mariage sont fixés de concert par les futurs époux, selon la disponibilité du célébrant et des églises ou chapelles disponibles.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact */}
            <div className="bg-paroisse-rougeFonce text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Organiser votre mariage</h3>
              <p className="mb-6 text-white/90">
                Contactez-nous 6 mois à 1 an avant la date souhaitée.
              </p>
              <Link
                href="/contact?sujet=Mariage"
                className="block w-full bg-white text-paroisse-rougeFonce hover:bg-white/90 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Prendre contact
              </Link>
            </div>

            {/* Infos pratiques */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Délai</p>
                    <p className="text-neutral-gris">6 mois à 1 an avant la date</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Préparation</p>
                    <p className="text-neutral-gris">4 rencontres + soirée diocèse</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⛪</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Lieux disponibles</p>
                    <p className="text-neutral-gris">Églises et chapelles de nos paroisses</p>
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
