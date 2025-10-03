import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onction des malades - Sacrements - Paroisses de Nendaz',
  description: 'Le sacrement de l\'onction des malades pour confier la souffrance à la compassion du Christ.',
}

export default function OnctionMaladesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-turquoise/10">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-turquoise transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-paroisse-turquoise transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Onction des malades</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-paroisse-turquoise/10 px-4 py-2 rounded-full mb-4">
            <span className="text-paroisse-bleuRoi font-semibold text-sm">Sacrement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
            Onction des malades
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl">
            Confier la souffrance à la compassion du Christ par l'onction avec l'huile bénite.
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
            <Link href="/sacrements/mariage" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Mariage
            </Link>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Texte principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Un sacrement de réconfort</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  L'onction des malades est un sacrement par lequel celui qui souffre est confié à la compassion du Christ. L'onction est faite avec une huile bénite.
                </p>

                <div className="bg-paroisse-turquoise/10 border-l-4 border-paroisse-turquoise p-6 rounded-r-lg my-8">
                  <p className="text-lg font-semibold text-paroisse-bleuRoi">
                    N'hésitez pas à contacter un prêtre pour célébrer le sacrement de l'onction des malades.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-paroisse-bleuRoi mt-8 mb-4">Le bon moment pour recevoir l'onction</h3>
                <p className="leading-relaxed mb-6">
                  Dans la mesure du possible, il est préférable de célébrer le sacrement des malades, quand la personne parle encore. Car ce sacrement réconforte, rassure, console, fait dissiper angoisses et peurs.
                </p>

                <div className="bg-paroisse-vert/10 border-l-4 border-paroisse-vert p-6 rounded-r-lg my-8">
                  <p className="text-lg font-semibold text-paroisse-vertFonce">
                    Le plus tôt, c'est le mieux !
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-paroisse-bleuRoi mt-8 mb-4">Le dimanche des malades</h3>
                <p className="leading-relaxed mb-6">
                  Le dimanche des malades offre aussi l'occasion de recevoir ce sacrement au cours d'une messe dominicale.
                </p>

                <p className="text-lg font-semibold text-neutral-anthracite mt-8">
                  Merci pour votre précieuse collaboration !
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact urgence */}
            <div className="bg-gradient-to-br from-paroisse-rouge to-paroisse-bleuRoi text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Contacter un prêtre</h3>
              <p className="mb-4 text-white/90 text-sm">
                N'hésitez pas à appeler directement :
              </p>
              <div className="space-y-3 mb-6">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Du dimanche midi au lundi soir</p>
                  <a href="tel:0767123844" className="text-lg font-bold hover:underline">
                    Frère Satish: 076 712 38 44
                  </a>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-1">Du mardi matin au dimanche matin</p>
                  <a href="tel:0795735780" className="text-lg font-bold hover:underline">
                    Félicien: 079 573 57 80
                  </a>
                </div>
              </div>
              <Link
                href="/contact?sujet=Onction%20des%20malades"
                className="block w-full bg-white text-paroisse-bleuRoi hover:bg-white/90 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Formulaire de contact
              </Link>
            </div>

            {/* Infos pratiques */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🙏</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Sacrement</p>
                    <p className="text-neutral-gris">Onction avec huile bénite</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Quand ?</p>
                    <p className="text-neutral-gris">Le plus tôt possible, tant que la personne parle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕊️</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Bienfaits</p>
                    <p className="text-neutral-gris">Réconfort, apaisement, consolation</p>
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
