import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Church, Heart, Star, MapPin, Sparkles, Sun, Target, Mail } from 'lucide-react'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Vie pastorale',
  description: 'Découvrez la vie pastorale des paroisses de Nendaz et Veysonnaz : sacrements, catéchèse, prière, liturgie et service fraternel.',
  openGraph: {
    title: 'Vie pastorale - Paroisses de Nendaz',
    description: 'Sacrements, catéchèse, prière, liturgie et service fraternel dans nos paroisses.',
    url: 'https://www.paroisses-nendaz.ch/pastorale',
  },
}

export default function PastoralePage() {
  return (
    <>
    <BreadcrumbSchema
      items={[
        { name: 'Vie pastorale', url: 'https://www.paroisses-nendaz.ch/pastorale' },
      ]}
    />
    <div className="min-h-screen bg-stone-50">

      {/* ========================================= */}
      {/* HERO - PIERRE ET LUMIÈRE VERSION 1      */}
      {/* ========================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">

        {/* Texture pierre subtile */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzdG9uZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICA8cGF0aCBkPSJNMCwwIEwyMDAsMjAwIE0yMDAsMCBMMCwyMDAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0b25lKSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Petite croix minimaliste */}
            <div className="flex justify-center mb-8">
              <div className="relative w-12 h-16">
                <div className="absolute left-1/2 top-0 w-0.5 h-full bg-stone-400 transform -translate-x-1/2"></div>
                <div className="absolute left-0 top-4 w-full h-0.5 bg-stone-400"></div>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="mb-6">
              <span className="block text-6xl md:text-8xl font-light text-stone-700 mb-4 tracking-wide">
                Vie pastorale
              </span>
              <span className="block text-3xl md:text-4xl font-light text-amber-600 tracking-widest uppercase">
                Secteur de Nendaz-Veysonnaz
              </span>
            </h1>

            {/* Citation biblique */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="h-px w-24 bg-amber-300 mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed italic">
                « Je suis le chemin, la vérité et la vie. »
              </p>
              <p className="text-sm text-stone-400 mt-3 tracking-widest uppercase">Jean 14, 6</p>
              <div className="h-px w-24 bg-amber-300 mx-auto mt-6"></div>
            </div>

            {/* Trois piliers - navigation directe */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
              <a href="#sacrements" className="group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all duration-500 flex items-center justify-center border border-stone-300/30">
                    <span className="text-2xl text-stone-600 group-hover:text-amber-700 transition-colors">✟</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 mb-2 tracking-wider uppercase">Sacrements</h3>
                <p className="text-xs text-stone-500">Signes de grâce</p>
              </a>

              <a href="#catechese" className="group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all duration-500 flex items-center justify-center border border-stone-300/30">
                    <span className="text-2xl text-stone-600 group-hover:text-amber-700 transition-colors">♱</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 mb-2 tracking-wider uppercase">Catéchèse</h3>
                <p className="text-xs text-stone-500">Chemins de foi</p>
              </a>

              <a href="#communaute" className="group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all duration-500 flex items-center justify-center border border-stone-300/30">
                    <span className="text-2xl text-stone-600 group-hover:text-amber-700 transition-colors">❖</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 mb-2 tracking-wider uppercase">Communauté</h3>
                <p className="text-xs text-stone-500">Vivre ensemble</p>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================= */}
      {/* SACREMENTS - PALETTE PIERRE/OR           */}
      {/* Structure validée par le curé - conservée */}
      {/* ========================================= */}
      <section id="sacrements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-20">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl font-bold text-stone-800 mb-4">
                Les Sacrements
              </h2>
              <p className="text-stone-500 italic">Signes de la grâce divine</p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Liste sacrements - style Pierre et Lumière */}
            <div className="space-y-6">

              {/* Baptême */}
              <Link href="/sacrements/bapteme" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                      Baptême
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Premier sacrement de la vie chrétienne • 0-7 ans ou adultes
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Réconciliation */}
              <Link href="/sacrements/pardon" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                      Réconciliation
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Premier Pardon 4H • Confession sur rdv, vendredi & dimanche avant messe à Basse-Nendaz
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Première Communion */}
              <Link href="/sacrements/communion" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                      Première Communion
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Recevoir Jésus Pain de Vie • 5H
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Confirmation */}
              <Link href="/sacrements/confirmation" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                      Confirmation
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Don de l&apos;Esprit Saint • 7H-8H
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Onction des malades */}
              <Link href="/sacrements/onction-malades" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                      Onction des malades
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Grâce du Seigneur • Sur demande 24h/24
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Mariage */}
              <Link href="/sacrements/mariage" className="group block p-6 border-l-4 border-stone-200 hover:border-amber-400 hover:bg-stone-50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-stone-800 group-hover:text-amber-700 transition-colors mb-2">
                      Mariage
                    </h3>
                    <p className="text-stone-600 text-sm">
                      Alliance sacrée • Préparation 6 mois
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-50 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

            </div>

            {/* Citation finale */}
            <div className="mt-20 text-center">
              <div className="h-px w-24 bg-stone-300 mx-auto mb-6"></div>
              <p className="text-stone-600 italic text-lg max-w-2xl mx-auto">
                « Les sacrements sont les signes efficaces de la grâce,<br />institués par le Christ et confiés à l&apos;Église. »
              </p>
              <div className="h-px w-24 bg-stone-300 mx-auto mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CATÉCHÈSE - PALETTE MINÉRALE             */}
      {/* ========================================= */}
      <section id="catechese" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                Catéchèse
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Des parcours adaptés à chaque âge pour grandir dans la foi
              </p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Liste des parcours - Design joyeux et chaleureux */}
            <div className="space-y-8">

              {/* Éveil à la foi - SABLE CHAUD */}
              <div className="group bg-amber-50 p-8 md:p-10 rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-100 border-2 border-amber-300 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
                      Éveil à la foi
                    </h3>
                    <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider">
                      0 à 10 ans
                    </p>
                  </div>
                </div>

                <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                  Les premiers pas pour découvrir Jésus et son message d&apos;amour, à travers des activités ludiques et adaptées aux tout-petits.
                </p>

                <div className="bg-white p-6 rounded-xl border border-amber-200 mb-6">
                  <p className="text-sm text-stone-600 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" /> Prochaines rencontres
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                      <div>
                        <p className="font-semibold text-stone-800">Vendredi 3 avril 2026 • 15h</p>
                        <p className="text-stone-600 text-sm">Église de Basse-Nendaz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                      <div>
                        <p className="font-semibold text-stone-800">Dimanche 5 avril 2026 • 10h</p>
                        <p className="text-stone-600 text-sm">Église de Basse-Nendaz • Atelier de la Parole</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-stone-700 bg-amber-100 px-4 py-3 rounded-lg">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <p className="font-medium">Inscription via le secrétariat paroissial</p>
                </div>
              </div>

              {/* Grain de Soleil - TERRE CUITE DOUCE */}
              <div className="group bg-orange-50/50 p-8 md:p-10 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 border-2 border-orange-300 rounded-xl flex items-center justify-center">
                    <Sun className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
                      Grain de Soleil
                    </h3>
                    <p className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
                      7 à 15 ans
                    </p>
                  </div>
                </div>

                <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                  Grandir ensemble vers les sacrements de communion et confirmation, un chemin de foi accompagné.
                </p>

                <div className="bg-white p-6 rounded-xl border border-orange-200 mb-6">
                  <p className="text-sm text-stone-600 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Church className="w-4 h-4 text-orange-600" /> Messes Grain de Soleil
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50/50 rounded-lg border-l-4 border-orange-400">
                      <p className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" /> À Veysonnaz
                      </p>
                      <div className="space-y-1 text-sm text-stone-600 pl-6">
                        <p>• 10h à la Toussaint</p>
                        <p>• 10h à Noël</p>
                        <p>• 9h le jour de Pâques</p>
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50/50 rounded-lg border-l-4 border-orange-400">
                      <p className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-600" /> À Basse-Nendaz
                      </p>
                      <div className="space-y-1 text-sm text-stone-600 pl-6">
                        <p>• 10h à la fête paroissiale (1er dimanche d&apos;octobre)</p>
                        <p>• 10h à Pâques</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-stone-700 bg-orange-100 px-4 py-3 rounded-lg">
                  <Target className="w-5 h-5 text-orange-600" />
                  <p className="font-medium">Préparation aux sacrements</p>
                </div>
              </div>

              {/* Parcours Adultes - STONE SOBRE */}
              <div className="group bg-stone-50 p-8 md:p-10 rounded-2xl border-2 border-stone-300 hover:border-stone-500 hover:shadow-xl transition-all duration-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-stone-100 border-2 border-stone-400 rounded-xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-stone-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
                      Parcours Adultes
                    </h3>
                    <p className="text-sm font-semibold text-stone-600 uppercase tracking-wider">
                      Catéchuménat et formation
                    </p>
                  </div>
                </div>

                <p className="text-lg text-stone-700 leading-relaxed">
                  Approfondir sa foi, se préparer aux sacrements ou cheminer spirituellement à tout âge, à travers des formations, conférences et accompagnements personnalisés.
                </p>
              </div>

              {/* Messes des familles - ROSE PÂLE / GRÈGE */}
              <div className="group bg-rose-50/50 p-8 md:p-10 rounded-2xl border-2 border-rose-200 hover:border-rose-400 hover:shadow-xl transition-all duration-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-100 border-2 border-rose-300 rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
                      Messes des familles
                    </h3>
                    <p className="text-sm font-semibold text-rose-700 uppercase tracking-wider">
                      Activités catéchétiques
                    </p>
                  </div>
                </div>

                <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                  Des moments privilégiés pour célébrer en famille et vivre la foi ensemble avec toute la communauté paroissiale.
                </p>

                <div className="bg-white p-6 rounded-xl border border-rose-200 mb-6">
                  <p className="text-sm text-stone-600 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-rose-600" /> Prochaines dates
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-rose-50/50 rounded-lg border-l-4 border-rose-400">
                      <p className="font-semibold text-stone-800">Samedi 7 février 2026 • 19h</p>
                      <p className="text-stone-600 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Aproz
                      </p>
                    </div>
                    <div className="p-4 bg-rose-50/50 rounded-lg border-l-4 border-rose-400">
                      <p className="font-semibold text-stone-800">Samedi 21 mars 2026 • 19h</p>
                      <p className="text-stone-600 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Veysonnaz
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-stone-700 bg-rose-100 px-4 py-3 rounded-lg">
                  <Heart className="w-5 h-5 text-rose-600" />
                  <p className="font-medium">Toutes les familles sont les bienvenues</p>
                </div>
              </div>

            </div>

            {/* Citation finale Catéchèse */}
            <div className="mt-20 text-center">
              <div className="h-px w-24 bg-stone-300 mx-auto mb-6"></div>
              <p className="text-stone-700 italic text-xl max-w-2xl mx-auto leading-relaxed">
                « Laissez les enfants venir à moi,<br />car le royaume de Dieu est à ceux qui leur ressemblent. »
              </p>
              <p className="text-sm text-stone-500 mt-4 tracking-widest uppercase">Marc 10, 14</p>
              <div className="h-px w-24 bg-stone-300 mx-auto mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* VIE COMMUNAUTAIRE - 3 PILIERS           */}
      {/* ========================================= */}
      <section id="communaute" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Titre section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
                Vie communautaire
              </h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Notre vie paroissiale s&apos;articule autour de trois piliers : la Prière, la Liturgie et la Diaconie (service fraternel).
                Découvrez les groupes et services qui animent notre communauté.
              </p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Grille 3 piliers - Style Pierre et Lumière */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Pilier 1: Prière */}
              <Link href="/pastorale/priere" className="group">
                <div className="bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-16 bg-amber-400"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors">
                        Prière
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                        Vie spirituelle
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed mb-6">
                    Groupes de prière pour nourrir notre relation avec Dieu.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Adoration eucharistique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Chapelet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Vêpres</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">La Mère pèlerine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">La prière des Mères</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-300">
                    <span className="text-amber-700 font-semibold group-hover:underline text-sm">Découvrir</span>
                    <svg className="w-5 h-5 text-amber-700 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Pilier 2: Liturgie */}
              <Link href="/pastorale/liturgie" className="group">
                <div className="bg-stone-50 p-8 border-2 border-stone-200 hover:border-stone-500 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-16 bg-stone-500"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-stone-700 transition-colors">
                        Liturgie
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-stone-600 font-semibold">
                        Service liturgique
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed mb-6">
                    Ministères et services pour célébrer dignement notre foi.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Auxiliaires de l'Eucharistie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Chorales (12 ensembles)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Lecteurs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Sacristains</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Servants de messe</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Service audiovisuel</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-300">
                    <span className="text-stone-700 font-semibold group-hover:underline text-sm">Découvrir</span>
                    <svg className="w-5 h-5 text-stone-700 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Pilier 3: Diaconie */}
              <Link href="/pastorale/diaconie" className="group">
                <div className="bg-stone-50 p-8 border-2 border-stone-200 hover:border-amber-400 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1 h-16 bg-amber-400"></div>
                    <div>
                      <h3 className="text-2xl font-bold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors">
                        Diaconie
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                        Service fraternel
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-stone-600 leading-relaxed mb-6">
                    Services de charité et d'accompagnement du prochain.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Veillées de prières</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Hospitaliers de Lourdes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">MCR-Vie montante</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <span className="text-sm text-stone-700">Visiteurs des malades</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-300">
                    <span className="text-amber-700 font-semibold group-hover:underline text-sm">Découvrir</span>
                    <svg className="w-5 h-5 text-amber-700 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SECTION CONTACT - FINALE                */}
      {/* ========================================= */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Titre */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
              <h2 className="text-4xl font-bold text-stone-800 mb-4">
                Contact et Informations
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Pour toute demande de sacrement ou information sur la vie pastorale
              </p>
              <div className="flex justify-center mt-4">
                <div className="h-px w-16 bg-amber-300"></div>
              </div>
            </div>

            {/* Secrétariat */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white p-8 border-2 border-stone-300 shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">
                  Secrétariat paroissial
                </h3>
                <div className="space-y-4 text-stone-700">
                  <p className="text-lg font-semibold text-stone-800">Caroline Karlen</p>
                  <div className="space-y-2 text-sm">
                    <p>Route de Nendaz 355, 1996 Basse-Nendaz</p>
                    <p>paroisse_nendaz@bluemail.ch</p>
                    <p>+41 27 288 22 50</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-300">
                    <p className="font-semibold text-stone-800 mb-1">Horaires</p>
                    <p className="text-sm">Mardi et Vendredi</p>
                    <p className="text-sm">8h-11h30</p>
                    <p className="text-sm">14h-16h30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Liens */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-400 text-stone-700 hover:bg-stone-100 transition-colors font-semibold">
                Formulaire de contact
              </Link>
              <Link href="/paroisses" className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors font-semibold">
                Nos paroisses
              </Link>
              <a href="https://web.enoria.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border-2 border-stone-400 text-stone-700 hover:bg-stone-100 transition-colors font-semibold">
                Plateforme Enoria
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
    </>
  )
}
