import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { FileText, Users, Phone, Mail, MapPin, BookOpen, UsersRound, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pardon et Réconciliation - Sacrements - Paroisses de Nendaz',
  description: 'Le sacrement du pardon, également connu sous les noms de sacrement de réconciliation, de pénitence ou de confession.',
}

export default function PardonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-emerald-50/20">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-emerald-700 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-emerald-700 transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Pardon/Réconciliation</span>
          </div>
        </nav>

        {/* Header avec image - Option B rectangulaire */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Texte - 2/3 */}
            <div className="lg:w-2/3">
              <div className="inline-block bg-emerald-700/10 px-4 py-2 rounded-full mb-4">
                <span className="text-emerald-800 font-semibold text-sm">Sacrement</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
                Pardon et Réconciliation
              </h1>
              <p className="text-xl text-neutral-gris">
                Le sacrement du pardon, également connu sous les noms de sacrement de réconciliation, de pénitence ou de confession.
              </p>
            </div>

            {/* Image rectangulaire - 1/3 */}
            <div className="lg:w-1/3 w-full">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-emerald-200">
                <Image
                  src="/images/sacrements/pardon-hero.jpg"
                  alt="Collage Pardon - Communauté paroissiale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
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
          {/* Colonne principale - 2/3 */}
          <div className="lg:col-span-2 space-y-8">

            {/* Texte principal */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Une réalité de notre quotidien</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Le sacrement du pardon est une réalité qui s'inscrit dans notre quotidien.
                </p>

                <p className="leading-relaxed mb-6">
                  Depuis les débuts de l'humanité, l'homme est marqué par sa fragilité et son inclination au péché, qui n'est rien d'autre qu'un manque d'amour. Le pardon vient libérer l'âme de la culpabilité et de la faute, rétablissant ainsi les liens essentiels avec Dieu. Pour le croyant, l'amour de Dieu surpasse toutes les ruptures et faiblesses humaines.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-r-lg my-8">
                  <p className="text-lg font-semibold text-emerald-900">
                    Vous êtes toujours invité à solliciter un prêtre pour vivre cette expérience de réconciliation avec Dieu.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-emerald-800 mt-8 mb-4">Le sacrement du pardon pour les enfants</h3>
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

            {/* Vidéo YouTube */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Vidéo : Comprendre le sacrement</h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/8AaGadHv55E"
                  title="Le sacrement du pardon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Document téléchargeable */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Document pour les parents</h2>
              <a
                href="/documents/pardon/deplent-info-parents-2025-26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-emerald-700 group flex items-start gap-4"
              >
                <FileText className="w-10 h-10 text-emerald-700 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-emerald-700 transition-colors">
                    Dépliant Info Parents 2025-2026
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Toutes les informations pour accompagner votre enfant
                  </p>
                  <span className="inline-flex items-center gap-2 text-emerald-700 text-sm font-semibold">
                    Télécharger (PDF)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>

            {/* Responsables et catéchistes */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-emerald-700" />
                Responsables et catéchistes
              </h2>
              <p className="text-sm text-neutral-gris mb-6">L'équipe du pardon</p>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Martin Fendrych */}
                <div className="border-l-4 border-emerald-700 pl-4 bg-emerald-50 p-4 rounded-r-lg">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Martin Fendrych</h3>
                  <p className="text-sm text-emerald-800 font-semibold mb-3">Coordinateur secteur et catéchiste</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-gris">Chemin du Fio 15<br />1991 Salins</span>
                    </div>
                    <a href="tel:+41273460003" className="flex items-center gap-2 text-emerald-700 hover:underline">
                      <Phone className="w-4 h-4" />
                      +41 27 346 00 03
                    </a>
                    <a href="mailto:martinbruno@netplus.ch" className="flex items-center gap-2 text-emerald-700 hover:underline">
                      <Mail className="w-4 h-4" />
                      martinbruno@netplus.ch
                    </a>
                  </div>
                </div>

                {/* Anne-Lyse Métrailler */}
                <div className="border-l-4 border-teal-600 pl-4 bg-teal-50 p-4 rounded-r-lg">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Anne-Lyse Métrailler</h3>
                  <p className="text-sm text-teal-800 font-semibold mb-3">Catéchiste</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-gris">Sornard<br />1997 Haute-Nendaz</span>
                    </div>
                    <a href="tel:+41774153202" className="flex items-center gap-2 text-teal-700 hover:underline">
                      <Phone className="w-4 h-4" />
                      +41 77 415 32 02
                    </a>
                    <a href="mailto:annelysemetrailler6@gmail.com" className="flex items-center gap-2 text-teal-700 hover:underline">
                      <Mail className="w-4 h-4" />
                      annelysemetrailler6@gmail.com
                    </a>
                  </div>
                </div>

                {/* Nadia Fendrych */}
                <div className="border-l-4 border-emerald-600 pl-4 bg-emerald-50 p-4 rounded-r-lg">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Nadia Fendrych</h3>
                  <p className="text-sm text-emerald-800 font-semibold mb-3">Catéchiste</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-gris">Chemin du Fio 15<br />1991 Salins</span>
                    </div>
                    <a href="tel:+41273460003" className="flex items-center gap-2 text-emerald-700 hover:underline">
                      <Phone className="w-4 h-4" />
                      +41 27 346 00 03
                    </a>
                    <a href="mailto:nadia.fendrych@gmail.com" className="flex items-center gap-2 text-emerald-700 hover:underline">
                      <Mail className="w-4 h-4" />
                      nadia.fendrych@gmail.com
                    </a>
                  </div>
                </div>

                {/* Abbé Félicien Roux */}
                <div className="border-l-4 border-slate-600 pl-4 bg-slate-50 p-4 rounded-r-lg">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Abbé Félicien Roux</h3>
                  <p className="text-sm text-slate-800 font-semibold mb-3">Prêtre</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-gris">Basse-Nendaz</span>
                    </div>
                    <a href="tel:+41272882250" className="flex items-center gap-2 text-slate-700 hover:underline">
                      <Phone className="w-4 h-4" />
                      +41 27 288 22 50
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Sidebar - 1/3 */}
          <div className="lg:col-span-1">
            {/* Contact */}
            <div className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white rounded-xl shadow-lg p-6 mb-6 sticky top-6">
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
                  <BookOpen className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Autres noms</p>
                    <p className="text-neutral-gris">Réconciliation, Pénitence, Confession</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <UsersRound className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Pour les enfants</p>
                    <p className="text-neutral-gris">Préparation dès 4H</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Horaire des confessions</p>
                    <p className="text-neutral-gris mb-2">Vendredis 18h-18h45 et dimanches 9h-9h45 à Basse-Nendaz</p>
                    <p className="text-neutral-gris">Sur demande au secrétariat.</p>
                  </div>
                </div>
              </div>

              {/* CTA Enoria */}
              <div className="mt-6 pt-6 border-t border-neutral-grisClaire">
                <a
                  href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-lg font-semibold text-white transition-all shadow-md hover:shadow-lg"
                  style={{backgroundColor: '#2A8B8C'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#236f70'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2A8B8C'}
                >
                  Enoria - Mon Foyer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
