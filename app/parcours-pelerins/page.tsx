import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { MapPin, Footprints, Search, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Parcours des pèlerins - 4 missions dans nos églises - Paroisses de Nendaz',
  description: 'Partez à la découverte de 4 trésors cachés dans les églises de Nendaz. Un parcours interactif pour les familles avec Luce, Fe, Xin et Sky.',
}

const missions = [
  {
    slug: 'luce',
    name: 'Luce',
    theme: 'Lumière',
    church: 'Basse-Nendaz',
    bgGradient: 'from-amber-50 to-yellow-50',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-700',
    image: '/images/avent/personnages/Luce.png',
  },
  {
    slug: 'fe',
    name: 'Fe',
    theme: 'Foi',
    church: 'Fey',
    bgGradient: 'from-red-50 to-rose-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-700',
    image: '/images/avent/personnages/Fe.png',
  },
  {
    slug: 'xin',
    name: 'Xin',
    theme: 'Espérance',
    church: 'Veysonnaz',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-700',
    image: '/images/avent/personnages/Xin.png',
  },
  {
    slug: 'sky',
    name: 'Sky',
    theme: 'Joie',
    church: 'Aproz',
    bgGradient: 'from-blue-50 to-sky-50',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    image: '/images/avent/personnages/Sky.png',
  },
]

const steps = [
  {
    icon: MapPin,
    title: 'Rendez-vous dans une église',
    description: 'Choisissez l\'une des 4 églises participantes autour de Nendaz',
  },
  {
    icon: Search,
    title: 'Scannez le QR code sur place',
    description: 'Trouvez le panneau et scannez pour lancer l\'aventure',
  },
  {
    icon: Sparkles,
    title: 'Trouvez le trésor !',
    description: 'Suivez les indices et découvrez l\'objet caché dans l\'église',
  },
]

export default function ParcoursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-amber-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
              <Footprints className="w-5 h-5 text-amber-700" />
              <span className="text-amber-800 font-semibold text-sm">Parcours interactif pour les familles</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-anthracite mb-6">
              Parcours des pèlerins
            </h1>
            <p className="text-xl text-neutral-gris leading-relaxed">
              Partez à la découverte de <strong>4 trésors cachés</strong> dans les églises de Nendaz et Veysonnaz.
              Accompagnés de Luce, Fe, Xin et Sky, vivez une aventure spirituelle en famille !
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-4xl mx-auto h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-parcours-pelerins.jpg"
              alt="Luce, Fe, Xin et Sky - Les 4 pèlerins"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Les 4 Missions */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-anthracite mb-4">
              Les 4 missions
            </h2>
            <p className="text-neutral-gris text-lg max-w-2xl mx-auto">
              Chaque mission vous emmène dans une église différente, à la rencontre d&apos;un personnage et d&apos;un thème unique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missions.map((mission) => (
              <div
                key={mission.slug}
                className={`bg-gradient-to-br ${mission.bgGradient} p-6 rounded-2xl border-2 ${mission.borderColor} shadow-md`}
              >
                <div className="flex items-center gap-4">
                  {/* Image personnage */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={mission.image}
                      alt={mission.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Infos */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-anthracite mb-1">
                      {mission.name}
                    </h3>
                    <p className={`font-semibold ${mission.textColor} mb-2`}>
                      {mission.theme}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-neutral-gris">
                      <MapPin className="w-4 h-4" />
                      <span>Église de {mission.church}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-anthracite mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-amber-700" />
                </div>
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto -mt-6 mb-4 text-sm font-bold border-4 border-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-anthracite mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-gris text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêts pour l&apos;aventure ?
            </h2>
            <p className="text-amber-100 mb-6">
              Rendez-vous dans l&apos;une de nos églises et scannez le QR code pour commencer !
            </p>
            <Link
              href="/paroisses"
              className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Voir les églises
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
