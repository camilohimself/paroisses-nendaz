import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pardon et Réconciliation - Sacrements - Paroisses de Nendaz',
  description: 'Le sacrement du pardon, également connu sous les noms de sacrement de réconciliation, de pénitence ou de confession.',
}

export default function PardonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-vert/10">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-vert transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-paroisse-vert transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Pardon/Réconciliation</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-paroisse-vert/10 px-4 py-2 rounded-full mb-4">
            <span className="text-paroisse-vertFonce font-semibold text-sm">Sacrement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
            Pardon et Réconciliation
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl">
            Le sacrement du pardon, également connu sous les noms de sacrement de réconciliation, de pénitence ou de confession.
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
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Une réalité de notre quotidien</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Le sacrement du pardon est une réalité qui s'inscrit dans notre quotidien.
                </p>

                <p className="leading-relaxed mb-6">
                  Depuis les débuts de l'humanité, l'homme est marqué par sa fragilité et son inclination au péché, qui n'est rien d'autre qu'un manque d'amour. Le pardon vient libérer l'âme de la culpabilité et de la faute, rétablissant ainsi les liens essentiels avec Dieu. Pour le croyant, l'amour de Dieu surpasse toutes les ruptures et faiblesses humaines.
                </p>

                <div className="bg-paroisse-vert/10 border-l-4 border-paroisse-vert p-6 rounded-r-lg my-8">
                  <p className="text-lg font-semibold text-paroisse-vertFonce">
                    Vous êtes toujours invité à solliciter un prêtre pour vivre cette expérience de réconciliation avec Dieu.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-paroisse-vertFonce mt-8 mb-4">Le sacrement du pardon pour les enfants</h3>
                <p className="leading-relaxed mb-4">
                  <strong>Chers parents,</strong>
                </p>
                <p className="leading-relaxed mb-6">
                  Nous sommes heureux d'accueillir vos enfants qui souhaitent se préparer à son premier Pardon. Cette préparation peut se faire à tout âge, dès que l'enfant est prêt à s'engager sur ce cheminement spirituel. Chez nous, ce parcours de préparation commence habituellement en 4H.
                </p>

                <p className="leading-relaxed">
                  Nous vous accompagnerons tout au long de ce chemin, pour que cette étape devienne un moment précieux dans la vie de foi de votre enfant.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact */}
            <div className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">Demander le sacrement</h3>
              <p className="mb-6 text-white">
                Contactez un prêtre pour recevoir le sacrement du pardon.
              </p>
              <Link
                href="/contact?sujet=Pardon"
                className="block w-full bg-white text-emerald-800 hover:bg-white/90 font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-md"
              >
                Prendre contact
              </Link>
            </div>

            {/* Infos pratiques */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🙏</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Autres noms</p>
                    <p className="text-neutral-gris">Réconciliation, Pénitence, Confession</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Pour les enfants</p>
                    <p className="text-neutral-gris">Préparation dès 4H</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Horaire des confessions</p>
                    <p className="text-neutral-gris mb-2">Le vendredi 18h-18h45 et le dimanche 9h-9h45 à Basse-Nendaz</p>
                    <p className="text-neutral-gris">Sur demande en appelant au secrétariat du secteur.</p>
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
