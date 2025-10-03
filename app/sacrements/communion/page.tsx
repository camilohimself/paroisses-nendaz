import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1ère Communion - Sacrements - Paroisses de Nendaz',
  description: 'Préparez votre enfant à recevoir Jésus Pain de Vie pour la première fois.',
}

export default function CommunionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-jaune/10">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-jaune transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-paroisse-jaune transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">1ère Communion</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-paroisse-jaune/20 px-4 py-2 rounded-full mb-4">
            <span className="text-neutral-anthracite font-semibold text-sm">Sacrement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
            Sacrement de la 1ère communion
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl">
            Recevoir Jésus Pain de Vie, nourriture pour la route.
          </p>
        </div>

        {/* Navigation sacrements */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h3 className="text-sm font-semibold text-neutral-gris mb-4">Autres sacrements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <Link href="/sacrements/bapteme" className="text-sm text-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/10 px-3 py-2 rounded-lg transition-colors">
              Baptême
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

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Texte principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Le Pain de Vie</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Par le baptême, l'enfant reçoit la lumière, la Vie de Dieu. Il devient enfant bien-aimé de Dieu-Père. Par le sacrement de l'Eucharistie, l'enfant reçoit Jésus Pain de Vie, nourriture pour la route.
                </p>

                <p className="leading-relaxed mb-6">
                  Dieu Notre Père ne nous laisse pas seul sur le chemin de la vie. Ainsi, quand l'enfant est d'accord de mettre ses pas dans ceux de Jésus-Christ, il a la possibilité de s'inscrire pour le parcours de préparation à la communion.
                </p>

                <h3 className="text-xl font-semibold text-neutral-anthracite mt-8 mb-4">Quand s'inscrire ?</h3>
                <p className="leading-relaxed mb-6">
                  Cette préparation peut se faire à n'importe quel âge, à partir de l'âge de raison, (habituellement, à partir de 9 ans), pourvu que l'enfant soit prêt à cheminer.
                </p>

                <div className="bg-paroisse-jaune/20 border-l-4 border-paroisse-jaune p-6 rounded-r-lg mt-8">
                  <p className="text-lg font-semibold text-neutral-anthracite">
                    Un cheminement spirituel adapté à chaque enfant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact */}
            <div className="bg-gradient-to-br from-paroisse-rougeFonce to-paroisse-rouge text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Inscrire votre enfant</h3>
              <p className="mb-6 text-white/90">
                Prenez contact avec nous pour inscrire votre enfant au parcours de préparation.
              </p>
              <Link
                href="/contact?sujet=Communion"
                className="block w-full bg-white text-neutral-anthracite hover:bg-white/90 font-semibold py-3 px-4 rounded-lg text-center transition-colors"
              >
                Prendre contact
              </Link>
            </div>

            {/* Infos pratiques */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎂</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Âge</p>
                    <p className="text-neutral-gris">À partir de 9 ans (âge de raison)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Parcours</p>
                    <p className="text-neutral-gris">Préparation adaptée à chaque enfant</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍞</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Eucharistie</p>
                    <p className="text-neutral-gris">Jésus Pain de Vie</p>
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
