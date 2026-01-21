import Link from 'next/link'
import { Metadata } from 'next'
import {
  GraduationCap,
  Heart,
  Users,
  Calendar,
  Church,
  FileText,
  Play,
  Phone,
  Mail,
  Sparkles,
  BookOpen,
  HandHeart,
  Cross,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Activités catéchétiques pour les enfants - Paroisses de Nendaz',
  description: 'Les activités catéchétiques s\'adressent à tous les enfants qui le désirent. Découvrez le programme de 1H à 8H pour un cheminement de foi adapté à chaque âge.',
}

const degres = [
  {
    niveau: '1H',
    titre: 'Découvrir l\'Église et le baptême',
    description: 'Découvrir l\'église comme un lieu accueillant et comprendre le sens du baptême comme une entrée dans la famille chrétienne.',
    icon: Church,
    color: 'amber',
    lienSacrement: null,
  },
  {
    niveau: '2H',
    titre: 'Jésus, mon ami',
    description: 'Mieux connaître Jésus et découvrir une relation de confiance et d\'amitié à travers des récits bibliques et la prière.',
    icon: Heart,
    color: 'amber',
    lienSacrement: null,
  },
  {
    niveau: '3H',
    titre: 'Ouvre ton cœur à Jésus',
    description: 'Apprendre à écouter, à accueillir la Parole de Dieu et à faire le lien entre la foi et la vie quotidienne.',
    icon: BookOpen,
    color: 'amber',
    lienSacrement: null,
  },
  {
    niveau: '4H',
    titre: 'Le pardon',
    description: 'Découvrir le pardon comme un chemin de réconciliation et se préparer au sacrement du pardon.',
    icon: HandHeart,
    color: 'emerald',
    lienSacrement: '/sacrements/pardon',
    noteSacrement: 'Fait partie du parcours d\'initiation au pardon',
  },
  {
    niveau: '5H',
    titre: 'La communion',
    description: 'Comprendre le sens de la communion, de l\'Eucharistie et de la vie en communauté chrétienne.',
    icon: Cross,
    color: 'rose',
    lienSacrement: '/sacrements/communion',
    noteSacrement: 'Fait partie du parcours d\'initiation à la communion',
  },
  {
    niveau: '6H',
    titre: 'Ouverture missionnaire',
    description: 'Découvrir que la foi invite à la solidarité et au partage, notamment à travers une action solidaire.',
    icon: Sparkles,
    color: 'orange',
    lienSacrement: null,
  },
  {
    niveau: '7H',
    titre: 'La confirmation : dire « je crois »',
    description: 'Approfondir la foi, se poser des questions et se préparer librement au sacrement de la confirmation.',
    icon: Star,
    color: 'blue',
    lienSacrement: '/sacrements/confirmation',
    noteSacrement: 'Fait partie du parcours de préparation à la confirmation',
  },
  {
    niveau: '8H',
    titre: 'Approfondir et s\'engager',
    description: 'Découvrir le patrimoine religieux local à travers une approche ludique et approfondir le chemin de foi.',
    icon: GraduationCap,
    color: 'teal',
    lienSacrement: null,
  },
]

const flyers = [
  {
    niveau: '1-2H',
    titre: 'Flyer 1H-2H',
    description: 'Découvrir l\'Église et Jésus mon ami',
    disponible: false,
    href: '#',
  },
  {
    niveau: '3H',
    titre: 'Flyer 3H',
    description: 'Ouvre ton cœur à Jésus',
    disponible: false,
    href: '#',
  },
  {
    niveau: '6H',
    titre: 'Flyer 6H',
    description: 'Prends soin de ton prochain (Missio)',
    disponible: true,
    href: '/documents/activites-catechetiques/flyer-6h.pdf',
  },
  {
    niveau: '7H',
    titre: 'Flyer 7H',
    description: 'Accueillir la Lumière de Dieu',
    disponible: true,
    href: '/documents/activites-catechetiques/flyer-7h.pdf',
  },
  {
    niveau: '8H',
    titre: 'Flyer 8H',
    description: 'Game of Church - Chasse au trésor',
    disponible: true,
    href: '/documents/activites-catechetiques/flyer-8h.pdf',
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  amber: {
    bg: 'bg-gradient-to-br from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    badge: 'bg-amber-500',
  },
  emerald: {
    bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-600',
  },
  rose: {
    bg: 'bg-gradient-to-br from-rose-50 to-pink-50',
    border: 'border-rose-200',
    text: 'text-rose-700',
    badge: 'bg-rose-500',
  },
  orange: {
    bg: 'bg-gradient-to-br from-orange-50 to-amber-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    badge: 'bg-orange-500',
  },
  blue: {
    bg: 'bg-gradient-to-br from-blue-50 to-sky-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-600',
  },
  teal: {
    bg: 'bg-gradient-to-br from-teal-50 to-cyan-50',
    border: 'border-teal-200',
    text: 'text-teal-700',
    badge: 'bg-teal-600',
  },
}

export default function ActivitesCatechetiquesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/30 via-white to-stone-50/30">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-amber-700 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/pastorale" className="hover:text-amber-700 transition-colors">Pastorale</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Activités catéchétiques</span>
          </div>
        </nav>

        {/* Header sobre avec dégradé */}
        <div className="mb-12 bg-gradient-to-r from-amber-100 via-stone-100 to-amber-50 rounded-xl shadow-lg p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-amber-700" />
              <span className="text-amber-800 font-semibold text-sm">De la 1H à la 8H</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-6">
              Activités catéchétiques pour les enfants
            </h1>
            <p className="text-lg text-neutral-gris leading-relaxed">
              Les activités catéchétiques s&apos;adressent à tous les enfants qui le désirent, qu&apos;ils soient baptisés ou non.
              Elles offrent un espace pour découvrir la foi chrétienne, poser des questions, vivre des temps de partage,
              de prière et de célébration, dans un climat respectueux et bienveillant.
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale - 2/3 */}
          <div className="lg:col-span-2 space-y-8">

            {/* Une dimension spirituelle et humaine */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Une dimension spirituelle et humaine</h2>
              <p className="text-neutral-gris mb-6">Au fil des années, les enfants sont invités à :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-anthracite">Apprendre à écouter, à se questionner et à exprimer ce qu&apos;ils vivent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-anthracite">Découvrir que la foi peut être une source de joie, de sens et de confiance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-anthracite">Vivre des expériences concrètes de solidarité, notamment en lien avec des actions missionnaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-neutral-anthracite">Mieux connaître le patrimoine religieux local, de manière ludique et accessible</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-8">
                <h3 className="font-bold text-amber-900 mb-2">Un chemin accompagné</h3>
                <p className="text-amber-800">
                  Chaque étape est animée par une équipe engagée, composée de catéchistes et de responsables pastoraux,
                  attentifs aux enfants et à leurs familles.
                </p>
              </div>
            </div>

            {/* Les thèmes par degré */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-4">Les thèmes par degré</h2>
              <p className="text-neutral-gris mb-8">
                Un cheminement pas à pas, organisé par degré scolaire afin de respecter l&apos;âge et le rythme de chaque enfant.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {degres.map((degre) => {
                  const colors = colorClasses[degre.color]
                  const IconComponent = degre.icon
                  return (
                    <div
                      key={degre.niveau}
                      className={`${colors.bg} p-5 rounded-xl border-2 ${colors.border}`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${colors.badge} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-bold text-sm">{degre.niveau}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-neutral-anthracite text-base leading-tight">
                            {degre.titre}
                          </h3>
                        </div>
                        <IconComponent className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                      </div>
                      <p className="text-sm text-neutral-gris mb-2">
                        {degre.description}
                      </p>
                      {degre.lienSacrement && (
                        <Link
                          href={degre.lienSacrement}
                          className={`inline-flex items-center gap-1 text-xs ${colors.text} font-semibold hover:underline`}
                        >
                          {degre.noteSacrement}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Comment se déroulent les activités */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-4">Comment se déroulent les activités ?</h2>
              <p className="text-neutral-gris mb-8">
                Chaque activité catéchétique se vit en plusieurs temps :
              </p>

              <div className="space-y-6">
                {/* Temps 1 */}
                <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-6 rounded-xl border-2 border-stone-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg mb-2">Une demi-journée sur le temps de l&apos;école</h3>
                      <p className="text-neutral-gris">
                        Ce temps permet aux enfants de découvrir et de vivre le thème de l&apos;année.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Temps 2 */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <HandHeart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg mb-2">Le sacrement du pardon</h3>
                      <p className="text-neutral-gris mb-2">
                        Pour les enfants de 6H et 7H, un temps est proposé à ceux qui le souhaitent afin de recevoir le sacrement du pardon.
                      </p>
                      <p className="text-sm text-emerald-700 font-medium">
                        Cette démarche reste toujours libre et proposée, jamais imposée.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Temps 3 */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Church className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg mb-2">Une célébration avec la communauté</h3>
                      <p className="text-neutral-gris">
                        Les enfants ayant participé aux activités catéchétiques sont invités à vivre et animer une célébration lors d&apos;une messe dominicale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents et vidéo */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-4">Informations pratiques et inscriptions</h2>
              <p className="text-neutral-gris mb-8">
                Retrouvez les flyers remis aux enfants et un tutoriel pour vous accompagner dans l&apos;inscription sur Enoria.
              </p>

              {/* Flyers */}
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                Flyers par degré
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {flyers.map((flyer) => (
                  flyer.disponible ? (
                    <a
                      key={flyer.niveau}
                      href={flyer.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-amber-50 to-stone-50 p-4 rounded-lg border-2 border-amber-200 hover:border-amber-400 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="w-8 h-8 text-amber-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                        <div>
                          <span className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded mb-1">
                            {flyer.niveau}
                          </span>
                          <p className="text-sm text-neutral-gris">{flyer.description}</p>
                          <span className="text-xs text-amber-700 font-semibold">Télécharger PDF</span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={flyer.niveau}
                      className="bg-stone-100 p-4 rounded-lg border-2 border-stone-200 opacity-60"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="w-8 h-8 text-stone-400 flex-shrink-0" />
                        <div>
                          <span className="inline-block bg-stone-400 text-white text-xs font-bold px-2 py-0.5 rounded mb-1">
                            {flyer.niveau}
                          </span>
                          <p className="text-sm text-stone-500">{flyer.description}</p>
                          <span className="text-xs text-stone-500">Bientôt disponible</span>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Vidéo YouTube tutoriel Enoria */}
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-amber-600" />
                Tutoriel inscription Enoria
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/Sb1pV4ZboYM"
                  title="Tutoriel inscription Enoria"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Sidebar - 1/3 */}
          <div className="lg:col-span-1">
            {/* CTA Inscription Enoria */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-xl shadow-lg p-6 mb-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4 text-white">Inscrire mon enfant</h3>
              <p className="mb-6 text-amber-100">
                Toutes les inscriptions se font via la plateforme Enoria.
              </p>
              <a
                href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-amber-700 hover:bg-amber-50 font-bold py-3 px-4 rounded-lg text-center transition-colors shadow-md"
              >
                Accéder à Enoria
              </a>
            </div>

            {/* Contacts */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-600" />
                Contacts par degré
              </h3>

              <div className="space-y-4">
                {/* Anne-Lyse Métrailler */}
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-bold text-neutral-anthracite">Anne-Lyse Métrailler</h4>
                  <p className="text-sm text-amber-700 font-medium mb-2">1-2H, 3H</p>
                  <div className="space-y-1 text-sm">
                    <a href="tel:+41774153202" className="flex items-center gap-2 text-neutral-gris hover:text-amber-700">
                      <Phone className="w-4 h-4" />
                      077 415 32 02
                    </a>
                  </div>
                </div>

                {/* Jean-Philippe Glassey */}
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <h4 className="font-bold text-neutral-anthracite">Jean-Philippe Glassey</h4>
                  <p className="text-sm text-orange-700 font-medium mb-2">6H, 7H, 8H</p>
                  <div className="space-y-1 text-sm">
                    <a href="tel:+41272071318" className="flex items-center gap-2 text-neutral-gris hover:text-amber-700">
                      <Phone className="w-4 h-4" />
                      027 207 13 18
                    </a>
                    <a href="mailto:jpglassey@bluewin.ch" className="flex items-center gap-2 text-neutral-gris hover:text-amber-700">
                      <Mail className="w-4 h-4" />
                      jpglassey@bluewin.ch
                    </a>
                  </div>
                </div>

                {/* Martin Fendrych */}
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-neutral-anthracite">Martin Fendrych</h4>
                  <p className="text-sm text-blue-700 font-medium mb-2">7H, 8H</p>
                  <div className="space-y-1 text-sm">
                    <a href="tel:+41273460003" className="flex items-center gap-2 text-neutral-gris hover:text-amber-700">
                      <Phone className="w-4 h-4" />
                      027 346 00 03
                    </a>
                    <a href="mailto:martinbruno@netplus.ch" className="flex items-center gap-2 text-neutral-gris hover:text-amber-700">
                      <Mail className="w-4 h-4" />
                      martinbruno@netplus.ch
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-4 pt-4 border-t border-stone-200">
                <p className="text-sm text-neutral-gris">
                  En cas de difficulté, contactez le secrétariat au{' '}
                  <a href="tel:+41772693529" className="text-amber-700 font-semibold hover:underline">
                    077 269 35 29
                  </a>
                </p>
              </div>
            </div>

            {/* Liens rapides */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Parcours sacrements</h3>
              <div className="space-y-2">
                <Link
                  href="/sacrements/pardon"
                  className="block text-sm text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors"
                >
                  Pardon (4H)
                </Link>
                <Link
                  href="/sacrements/communion"
                  className="block text-sm text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors"
                >
                  Communion (5H)
                </Link>
                <Link
                  href="/sacrements/confirmation"
                  className="block text-sm text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors"
                >
                  Confirmation (7H)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
