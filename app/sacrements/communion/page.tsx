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
            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">Inscrire votre enfant</h3>
              <p className="mb-6 text-white">
                Prenez contact avec nous pour inscrire votre enfant au parcours de préparation.
              </p>
              <Link
                href="/contact?sujet=Communion"
                className="block w-full bg-white text-amber-700 hover:bg-white/90 font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-md"
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

        {/* Section Catéchistes */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Catéchistes et Responsables</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Abbé Félicien Roux */}
            <div className="border-l-4 border-paroisse-bleuRoi pl-4">
              <h3 className="font-bold text-neutral-anthracite mb-2">Abbé Félicien Roux</h3>
              <p className="text-sm text-neutral-gris mb-2">Coordinateur - Basse-Nendaz</p>
              <a href="tel:0272882250" className="text-paroisse-bleuRoi text-sm hover:underline">📞 027 288 22 50</a>
            </div>

            {/* Blandine Bornet */}
            <div className="border-l-4 border-paroisse-vert pl-4">
              <h3 className="font-bold text-neutral-anthracite mb-2">Blandine Bornet</h3>
              <p className="text-sm text-neutral-gris mb-2">Coordinatrice secteur / Veysonnaz</p>
              <a href="tel:0272885159" className="text-paroisse-bleuRoi text-sm hover:underline block">📞 027 288 51 59</a>
              <a href="tel:0795318876" className="text-paroisse-bleuRoi text-sm hover:underline block">📞 079 531 88 76</a>
            </div>

            {/* Marie-Noëlle Délèze */}
            <div className="border-l-4 border-paroisse-jaune pl-4">
              <h3 className="font-bold text-neutral-anthracite mb-2">Marie-Noëlle Délèze</h3>
              <p className="text-sm text-neutral-gris mb-2">Aproz</p>
              <a href="tel:0795424955" className="text-paroisse-bleuRoi text-sm hover:underline block">📞 079 542 49 55</a>
              <a href="mailto:mndeleze@gmail.com" className="text-paroisse-bleuRoi text-sm hover:underline block">✉️ mndeleze@gmail.com</a>
            </div>

            {/* Zuzana Michaud */}
            <div className="border-l-4 border-paroisse-violet pl-4">
              <h3 className="font-bold text-neutral-anthracite mb-2">Zuzana Michaud</h3>
              <p className="text-sm text-neutral-gris mb-2">Basse Nendaz / Vex</p>
              <a href="mailto:zuzana.u@outlook.fr" className="text-paroisse-bleuRoi text-sm hover:underline">✉️ zuzana.u@outlook.fr</a>
            </div>

            {/* Anne-Lyse Métrailler */}
            <div className="border-l-4 border-paroisse-rouge pl-4">
              <h3 className="font-bold text-neutral-anthracite mb-2">Anne-Lyse Métrailler</h3>
              <p className="text-sm text-neutral-gris mb-2">Haute Nendaz / Sornard</p>
              <a href="tel:0774153202" className="text-paroisse-bleuRoi text-sm hover:underline">📞 077 415 32 02</a>
            </div>

          </div>
        </div>

        {/* Section Documents téléchargeables */}
        <div className="bg-gradient-to-br from-paroisse-jaune/10 to-paroisse-jaune/5 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Documents et Ressources</h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Agenda 2025-2026 */}
            <a
              href="/documents/communion/agenda-communion-2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-paroisse-jaune group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">📅</span>
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-jaune transition-colors">
                    Agenda 2025-2026
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Programme complet de la préparation à la 1ère communion
                  </p>
                  <span className="inline-flex items-center gap-2 text-paroisse-bleuRoi text-sm font-semibold">
                    Télécharger (PDF)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Chants 2025-2026 */}
            <a
              href="/documents/communion/chants-communion-2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-paroisse-jaune group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">🎵</span>
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-jaune transition-colors">
                    Feuille de chants 2025-2026
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Chants pour la célébration de la 1ère communion
                  </p>
                  <span className="inline-flex items-center gap-2 text-paroisse-bleuRoi text-sm font-semibold">
                    Télécharger (PDF)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Section Chants YouTube avec Embeds */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Chants sur YouTube</h2>
          <p className="text-neutral-gris mb-6">
            Écoutez et apprenez les chants de la communion 2025-2026 directement ici
          </p>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Chant 1 - Embed */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-lg border-2 border-red-200">
              <h3 className="font-bold text-neutral-anthracite mb-4 text-lg flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Chant 1
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/pbFBVFv-L6c"
                  title="Chant 1 - Communion 2025-2026"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Chant 2 - Embed */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-lg border-2 border-red-200">
              <h3 className="font-bold text-neutral-anthracite mb-4 text-lg flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Chant 2
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VECujpaPWXY"
                  title="Chant 2 - Communion 2025-2026"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
