'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { useState } from 'react'
import {
  BookOpen,
  Target,
  Package,
  AlertTriangle,
  Cross,
  Heart,
  Calendar,
  Church,
  Sparkles,
  Cake,
  FileText,
  Video,
  Clock,
  Users
} from 'lucide-react'

export default function CommunionPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

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

        {/* Header avec image - Option B rectangulaire */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Texte - 2/3 */}
            <div className="lg:w-2/3">
              <div className="inline-block bg-paroisse-jaune/20 px-4 py-2 rounded-full mb-4">
                <span className="text-neutral-anthracite font-semibold text-sm">Sacrement</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-anthracite mb-4">
                Sacrement de la 1ère communion
              </h1>
              <p className="text-xl text-neutral-gris">
                Recevoir Jésus Pain de Vie, nourriture pour la route.
              </p>
            </div>

            {/* Image rectangulaire - 1/3 */}
            <div className="lg:w-1/3 w-full">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-stone-200">
                <Image
                  src="/images/sacrements/communion-hero.jpg"
                  alt="Illustration Communion - Le Père accueillant"
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
          {/* Colonne principale (2/3) */}
          <div className="lg:col-span-2 space-y-8">

            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Le Pain de Vie</h2>

              <div className="prose prose-lg max-w-none text-neutral-anthracite">
                <p className="text-lg leading-relaxed mb-6">
                  Par le baptême, l&apos;enfant reçoit la lumière, la Vie de Dieu. Il devient enfant bien-aimé de Dieu-Père. Par le sacrement de l&apos;Eucharistie, l&apos;enfant reçoit Jésus Pain de Vie, nourriture pour la route.
                </p>

                <p className="leading-relaxed mb-6">
                  Dieu Notre Père ne nous laisse pas seul sur le chemin de la vie. Ainsi, quand l&apos;enfant est d&apos;accord de mettre ses pas dans ceux de Jésus-Christ, il a la possibilité de s&apos;inscrire pour le parcours de préparation à la communion.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-6 mb-6">
                  <p className="text-base font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Texte biblique : Marc 10, 13-16
                  </p>
                  <p className="text-sm italic text-amber-800 leading-relaxed">
                    « Des gens amènent des enfants à Jésus pour qu&apos;il les touche. Mais les disciples font des reproches aux gens. En voyant cela, Jésus se met en colère et il dit à ses disciples : <strong>Laissez les enfants venir à moi. Ne les empêchez pas. En effet, le Royaume de Dieu appartient à ceux qui sont comme les enfants.</strong> »
                  </p>
                </div>

                <div className="bg-paroisse-jaune/20 border-l-4 border-paroisse-jaune p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-neutral-anthracite">
                    Un cheminement spirituel adapté à chaque enfant
                  </p>
                  <p className="text-sm text-neutral-gris mt-2">
                    Cette préparation peut se faire à n&apos;importe quel âge, à partir de l&apos;âge de raison (habituellement, à partir de 9 ans), pourvu que l&apos;enfant soit prêt à cheminer.
                  </p>
                </div>
              </div>
            </div>

            {/* Le Parcours - 4 temps */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Le parcours de préparation</h2>
              <p className="text-neutral-gris mb-8">
                La préparation se déroule en <strong>4 temps complémentaires</strong>, suivis d&apos;une retraite et des célébrations.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Temps 1 - Ton pierre montagne */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-2 border-slate-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg">Temps en groupe</h3>
                      <p className="text-sm text-slate-700">Avec les parents</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-anthracite">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-600 mt-1">✓</span>
                      <span>Découvrir qui est Jésus (DVD + bougie)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-600 mt-1">✓</span>
                      <span>Rencontrer Jésus (dossier communion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-600 mt-1">✓</span>
                      <span>Confection des croix + sacrement du pardon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-600 mt-1">✓</span>
                      <span>Action de solidarité : vivre d&apos;amour !</span>
                    </li>
                  </ul>
                </div>

                {/* Temps 2 - Ton forêt alpine */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg">Catéchèse hors école</h3>
                      <p className="text-sm text-emerald-700">Pour le secteur</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-anthracite">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Apprendre à prier à Basse-Nendaz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Avec le prêtre et les catéchistes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">✓</span>
                      <span>Animer la messe des activités catéchétiques dans son village</span>
                    </li>
                  </ul>
                </div>

                {/* Temps 3 - Ton terre chaude */}
                <div className="bg-gradient-to-br from-stone-50 to-amber-50 p-6 rounded-xl border-2 border-stone-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg">Catéchèse à l&apos;école</h3>
                      <p className="text-sm text-stone-700">Par les catéchistes</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-anthracite">
                    <li className="flex items-start gap-2">
                      <span className="text-stone-600 mt-1">✓</span>
                      <span>3 rencontres prises sur le temps d&apos;école</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-stone-600 mt-1">✓</span>
                      <span>Thématique : « La Parole et l&apos;Eucharistie »</span>
                    </li>
                  </ul>
                </div>

                {/* Temps 4 - Ton soleil alpin */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-anthracite text-lg">Temps en paroisse</h3>
                      <p className="text-sm text-amber-700">La Montée vers Pâques</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-anthracite">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span>Le Jeudi Saint à Basse-Nendaz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span>Ateliers + bénédiction des croix</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">✓</span>
                      <span>Participation à la messe</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Retraite + Célébrations - Palette Valais */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border-2 border-slate-200">
                  <h4 className="font-bold text-neutral-anthracite mb-2 flex items-center gap-2">
                    <Church className="w-6 h-6 text-slate-600" />
                    Retraite
                  </h4>
                  <p className="text-sm text-neutral-anthracite">Une journée de retraite pour se préparer spirituellement</p>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
                  <h4 className="font-bold text-neutral-anthracite mb-2 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                    Célébrations
                  </h4>
                  <p className="text-sm text-neutral-anthracite">1ère des communions et Fête-Dieu</p>
                </div>
              </div>
            </div>

            {/* Les 3 Rencontres détaillées - Accordéons */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Les rencontres en détail</h2>
              <p className="text-neutral-gris mb-6">
                Découvrez le déroulement des 3 rencontres principales avec les parents et les enfants.
              </p>

              <div className="space-y-4">
                {/* Rencontre 1 - Ton pierre montagne */}
                <div className="border-2 border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(1)}
                    className="w-full bg-slate-50 hover:bg-slate-100 p-6 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-neutral-anthracite text-lg">Communier, c&apos;est découvrir qui est Jésus</h3>
                        <p className="text-sm text-slate-700">DVD + Bougie du groupe</p>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 text-slate-700 transition-transform ${openAccordion === 1 ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openAccordion === 1 && (
                    <div className="p-6 bg-white border-t-2 border-slate-100">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-neutral-anthracite mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-slate-600" /> Déroulement
                          </h4>
                          <ol className="space-y-3 text-sm text-neutral-anthracite">
                            <li className="flex items-start gap-3">
                              <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                              <div>
                                <strong>Accueil et goûter</strong>
                                <p className="text-neutral-gris mt-1">Prendre un temps d&apos;accueil chaleureux. Photo de groupe à coller dans le mini-livre souvenir.</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                              <div>
                                <strong>Jésus, qui es-tu ?</strong>
                                <p className="text-neutral-gris mt-1">Discussion : Connaissez-vous Jésus ? Qu&apos;a-t-il fait ou dit ? Pourquoi voulez-vous mieux le connaître ?</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                              <div>
                                <strong>Visionner le DVD</strong>
                                <p className="text-neutral-gris mt-1">Sur la vie de Jésus (à rendre après à la catéchiste)</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                              <div>
                                <strong>Confectionner la bougie du groupe</strong>
                                <p className="text-neutral-gris mt-1">Chaque enfant écrit son prénom sur la bougie avec un stylo indélébile. « Jésus connaît chacun par son nom »</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
                              <div>
                                <strong>Apprendre le signe de croix et le Notre Père</strong>
                                <p className="text-neutral-gris mt-1">Répéter ou apprendre ces prières fondamentales</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="font-bold text-blue-600 flex-shrink-0">6.</span>
                              <div>
                                <strong>Temps de prière</strong>
                                <p className="text-neutral-gris mt-1">Signe de croix, prière du livre, Notre Père ensemble, chant de communion</p>
                              </div>
                            </li>
                          </ol>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-neutral-anthracite mb-2 flex items-center gap-2">
                            <Package className="w-5 h-5 text-slate-600" /> Matériel requis
                          </h4>
                          <p className="text-sm text-neutral-anthracite">
                            Goûter, DVD, trousses + colle, bougie du groupe, stylos indélébiles, dossier 1ère communion, ordi/MP3 pour chants
                          </p>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                          <p className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Remarques importantes
                          </p>
                          <ul className="text-sm text-amber-800 space-y-1">
                            <li>• Vérifier que chaque enfant a écrit son prénom sur le dossier et le mini-livre</li>
                            <li>• Imprimer une photo du groupe (max 10,5 cm x 8 cm) pour la prochaine rencontre</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rencontre 2 - Ton forêt alpine */}
                <div className="border-2 border-emerald-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="w-full bg-emerald-50 hover:bg-emerald-100 p-6 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-neutral-anthracite text-lg">Communier, c&apos;est rencontrer Jésus</h3>
                        <p className="text-sm text-emerald-700">Dossier communion + Confection des croix</p>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 text-emerald-700 transition-transform ${openAccordion === 2 ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openAccordion === 2 && (
                    <div className="p-6 bg-white border-t-2 border-emerald-100">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-neutral-anthracite mb-3 flex items-center gap-2">
                            <span className="text-xl">🎯</span> Objectifs
                          </h4>
                          <ul className="space-y-3 text-sm text-neutral-anthracite">
                            <li className="flex items-start gap-3">
                              <span className="text-emerald-500">✓</span>
                              <span>Remplir une partie du dossier communion avec les enfants</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-emerald-500">✓</span>
                              <span>Confection des croix personnelles</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-emerald-500">✓</span>
                              <span>Préparation au sacrement du pardon</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-emerald-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-neutral-anthracite mb-2 flex items-center gap-2">
                            <Cross className="w-5 h-5 text-emerald-700" /> Sacrement du pardon
                          </h4>
                          <p className="text-sm text-neutral-anthracite mb-3">
                            <strong>Pour les parents :</strong>
                          </p>
                          <ul className="text-sm text-neutral-anthracite space-y-1 mb-3">
                            <li>• Prendre rendez-vous avec le curé</li>
                            <li>• Surveiller les enfants pendant que tous reçoivent le sacrement</li>
                          </ul>
                          <p className="text-sm text-neutral-anthracite mb-2">
                            <strong>Pour les enfants :</strong>
                          </p>
                          <ul className="text-sm text-neutral-anthracite space-y-1">
                            <li>• Visite de l&apos;église + découverte des 7 sacrements avec le curé</li>
                            <li>• Se préparer et recevoir le sacrement du pardon</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rencontre 3 - Ton terre chaude */}
                <div className="border-2 border-stone-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(3)}
                    className="w-full bg-stone-50 hover:bg-stone-100 p-6 flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-stone-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-neutral-anthracite text-lg">Communier, c&apos;est se savoir aimé comme on est</h3>
                        <p className="text-sm text-stone-700">Action de solidarité</p>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 text-stone-700 transition-transform ${openAccordion === 3 ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openAccordion === 3 && (
                    <div className="p-6 bg-white border-t-2 border-stone-100">
                      <div className="space-y-6">
                        <div className="bg-stone-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-neutral-anthracite mb-3 flex items-center gap-2">
                            <Heart className="w-6 h-6 text-stone-600" /> Vivre une action de solidarité
                          </h4>
                          <p className="text-neutral-anthracite mb-4">
                            <strong>Communier, c&apos;est aimer !</strong> Partager ce que l&apos;on a, partager ce que l&apos;on est.
                          </p>
                          <p className="text-sm text-neutral-gris mb-4">
                            La solidarité vient du cœur. C&apos;est apprendre à regarder l&apos;autre avec bienveillance et à tendre la main.
                          </p>
                          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                            <p className="text-sm italic text-neutral-anthracite">
                              « Seuls, nous pouvons faire si peu ; ensemble, nous pouvons faire beaucoup. »
                            </p>
                            <p className="text-xs text-neutral-gris mt-2">— Helen Keller</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-neutral-anthracite mb-2">Exemples d&apos;actions possibles :</h4>
                          <ul className="space-y-2 text-sm text-neutral-anthracite">
                            <li className="flex items-start gap-2">
                              <span className="text-purple-500">•</span>
                              <span>Collecte pour une œuvre caritative</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-500">•</span>
                              <span>Visite aux personnes âgées</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-500">•</span>
                              <span>Geste de partage en famille</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section Catéchistes */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Catéchistes et Responsables</h2>
              <div className="grid md:grid-cols-2 gap-6">

                {/* Abbé Félicien Roux */}
                <div className="border-l-4 border-paroisse-bleuRoi pl-4">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Abbé Félicien Roux</h3>
                  <p className="text-sm text-neutral-gris mb-2">Coordinateur - Basse-Nendaz</p>
                  <a href="tel:0272882250" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 027 288 22 50
                  </a>
                </div>

                {/* Blandine Bornet */}
                <div className="border-l-4 border-paroisse-vert pl-4">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Blandine Bornet</h3>
                  <p className="text-sm text-neutral-gris mb-2">Coordinatrice secteur / Basse-Nendaz</p>
                  <a href="tel:0272885159" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 027 288 51 59
                  </a>
                  <a href="tel:0795318876" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 079 531 88 76
                  </a>
                </div>

                {/* Marie-Noëlle Délèze */}
                <div className="border-l-4 border-paroisse-jaune pl-4">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Marie-Noëlle Délèze</h3>
                  <p className="text-sm text-neutral-gris mb-2">Aproz</p>
                  <a href="tel:0795424955" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 079 542 49 55
                  </a>
                  <a href="mailto:mndeleze@gmail.com" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Mail className="w-4 h-4" /> mndeleze@gmail.com
                  </a>
                </div>

                {/* Zuzana Michaud */}
                <div className="border-l-4 border-paroisse-violet pl-4">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Zuzana Michaud</h3>
                  <p className="text-sm text-neutral-gris mb-2">Veysonnaz / Vex</p>
                  <a href="mailto:zuzana.u@outlook.fr" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Mail className="w-4 h-4" /> zuzana.u@outlook.fr
                  </a>
                </div>

                {/* Anne-Lyse Métrailler */}
                <div className="border-l-4 border-paroisse-rouge pl-4">
                  <h3 className="font-bold text-neutral-anthracite mb-2">Anne-Lyse Métrailler</h3>
                  <p className="text-sm text-neutral-gris mb-2">Haute Nendaz / Sornard</p>
                  <a href="tel:0774153202" className="text-paroisse-bleuRoi text-sm hover:underline flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 077 415 32 02
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Sidebar (1/3) */}
          <div className="lg:col-span-1">
            {/* Contact */}
            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-xl shadow-lg p-6 mb-6 sticky top-6">
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
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-neutral-anthracite mb-4">Informations pratiques</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Cake className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Âge</p>
                    <p className="text-neutral-gris">À partir de 9 ans (âge de raison)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Parcours</p>
                    <p className="text-neutral-gris">4 temps + retraite + célébrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-anthracite">Eucharistie</p>
                    <p className="text-neutral-gris">Jésus Pain de Vie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Documents téléchargeables */}
        <div className="bg-gradient-to-br from-paroisse-jaune/10 to-paroisse-jaune/5 rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-neutral-anthracite mb-6">Documents et Ressources</h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Dossier parents */}
            <a
              href="/documents/communion/dossier-parents-communion-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-paroisse-jaune group"
            >
              <div className="flex items-start gap-4">
                <FileText className="w-10 h-10 text-amber-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-jaune transition-colors">
                    Dossier parents 2025
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Guide complet pour accompagner votre enfant
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

            {/* Agenda 2025-2026 */}
            <a
              href="/documents/communion/agenda-communion-2025-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-paroisse-jaune group"
            >
              <div className="flex items-start gap-4">
                <Calendar className="w-10 h-10 text-amber-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-jaune transition-colors">
                    Agenda 2025-2026
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Programme complet de la préparation
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
                <Sparkles className="w-10 h-10 text-amber-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-neutral-anthracite mb-2 group-hover:text-paroisse-jaune transition-colors">
                    Feuille de chants 2025-2026
                  </h3>
                  <p className="text-sm text-neutral-gris mb-3">
                    Chants pour la célébration
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
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
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

          {/* Vidéos des activités du parcours */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-neutral-anthracite mb-6 flex items-center gap-2">
              <Video className="w-6 h-6 text-slate-600" />
              Vidéos des activités
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vidéo 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-slate-200">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/3cmnN7dfDtQ"
                    title="Activité Communion - Partie 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-neutral-anthracite mb-1">Activité du parcours - Partie 1</h4>
                  <p className="text-sm text-neutral-gris">Découvrez les moments forts du cheminement</p>
                </div>
              </div>

              {/* Vidéo 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-slate-200">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/TpjT6kw-dJ0"
                    title="Activité Communion - Partie 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-neutral-anthracite mb-1">Activité du parcours - Partie 2</h4>
                  <p className="text-sm text-neutral-gris">Suite des activités et témoignages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
