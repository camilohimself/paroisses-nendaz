import Image from 'next/image'
import Link from 'next/link'

export default function TestOptionB() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation test */}
        <div className="mb-8 flex gap-4">
          <Link href="/test-hero-communion/option-a" className="px-4 py-2 bg-gray-200 rounded">Option A</Link>
          <Link href="/test-hero-communion/option-b" className="px-4 py-2 bg-blue-600 text-white rounded">Option B - Actuelle</Link>
          <Link href="/test-hero-communion/option-c" className="px-4 py-2 bg-gray-200 rounded">Option C</Link>
          <Link href="/sacrements/communion" className="px-4 py-2 bg-green-600 text-white rounded">Page Réelle</Link>
        </div>

        {/* OPTION B : Image rectangulaire avec coins arrondis */}
        <div className="bg-white rounded-xl shadow-lg p-8">
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
            <div className="lg:w-1/3">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-stone-200">
                <Image
                  src="/images/sacrements/test/option-b-rect.jpg"
                  alt="Illustration Communion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
            <h3 className="font-bold text-neutral-anthracite mb-2">🖼️ Option B : Image rectangulaire classique</h3>
            <ul className="text-sm text-neutral-gris space-y-1">
              <li>• Style traditionnel et sobre</li>
              <li>• Coins arrondis élégants</li>
              <li>• Bordure pierre subtile</li>
              <li>• Montre plus de détails de l'illustration</li>
              <li>• Poids : 71 KB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
