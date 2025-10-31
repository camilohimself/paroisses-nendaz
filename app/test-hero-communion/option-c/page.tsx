import Image from 'next/image'
import Link from 'next/link'

export default function TestOptionC() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation test */}
        <div className="mb-8 flex gap-4">
          <Link href="/test-hero-communion/option-a" className="px-4 py-2 bg-gray-200 rounded">Option A</Link>
          <Link href="/test-hero-communion/option-b" className="px-4 py-2 bg-gray-200 rounded">Option B</Link>
          <Link href="/test-hero-communion/option-c" className="px-4 py-2 bg-blue-600 text-white rounded">Option C - Actuelle</Link>
          <Link href="/sacrements/communion" className="px-4 py-2 bg-green-600 text-white rounded">Page Réelle</Link>
        </div>

        {/* OPTION C : Image en fond subtil avec overlay */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/sacrements/test/option-c-background.jpg"
              alt="Illustration Communion"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

          {/* Contenu au-dessus */}
          <div className="relative p-8">
            <div className="max-w-2xl">
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
          </div>

          <div className="relative p-8 pt-4">
            <div className="p-4 bg-stone-50/90 backdrop-blur rounded-lg">
              <h3 className="font-bold text-neutral-anthracite mb-2">🎨 Option C : Image de fond subtile</h3>
              <ul className="text-sm text-neutral-gris space-y-1">
                <li>• Style moderne et atmosphérique</li>
                <li>• Image en arrière-plan avec overlay blanc</li>
                <li>• Texte parfaitement lisible</li>
                <li>• Effet de profondeur élégant</li>
                <li>• Poids : 108 KB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
