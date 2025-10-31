import Image from 'next/image'
import Link from 'next/link'

export default function TestOptionA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation test */}
        <div className="mb-8 flex gap-4">
          <Link href="/test-hero-communion/option-a" className="px-4 py-2 bg-blue-600 text-white rounded">Option A - Actuelle</Link>
          <Link href="/test-hero-communion/option-b" className="px-4 py-2 bg-gray-200 rounded">Option B</Link>
          <Link href="/test-hero-communion/option-c" className="px-4 py-2 bg-gray-200 rounded">Option C</Link>
          <Link href="/sacrements/communion" className="px-4 py-2 bg-green-600 text-white rounded">Page Réelle</Link>
        </div>

        {/* OPTION A : Image ronde élégante à droite */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
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

            {/* Image ronde - 1/3 */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-amber-500/30">
                <Image
                  src="/images/sacrements/test/option-a-circle.jpg"
                  alt="Illustration Communion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg">
            <h3 className="font-bold text-neutral-anthracite mb-2">✨ Option A : Image ronde élégante</h3>
            <ul className="text-sm text-neutral-gris space-y-1">
              <li>• Style épuré et moderne</li>
              <li>• Image circulaire avec anneau doré</li>
              <li>• Focus sur le visage/émotion</li>
              <li>• Poids : 61 KB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
