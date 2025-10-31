import Image from 'next/image'
import Link from 'next/link'

export default function TestOptionA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50/30 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Navigation test */}
        <div className="mb-8 flex gap-4">
          <Link href="/test-hero-pardon/option-a" className="px-4 py-2 bg-blue-600 text-white rounded">Option A - Actuelle</Link>
          <Link href="/test-hero-pardon/option-b" className="px-4 py-2 bg-gray-200 rounded">Option B</Link>
          <Link href="/test-hero-pardon/option-c" className="px-4 py-2 bg-gray-200 rounded">Option C</Link>
          <Link href="/sacrements/pardon" className="px-4 py-2 bg-green-600 text-white rounded">Page Réelle</Link>
        </div>

        {/* OPTION A : Image circulaire à droite */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
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

            {/* Image circulaire - 1/3 */}
            <div className="lg:w-1/3 w-full flex justify-center">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-emerald-200">
                <Image
                  src="/images/sacrements/test/option-a-circle.jpg"
                  alt="Collage Pardon - Communauté paroissiale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
            <h3 className="font-bold text-neutral-anthracite mb-2">🔵 Option A : Image circulaire</h3>
            <ul className="text-sm text-neutral-gris space-y-1">
              <li>• Style épuré et moderne</li>
              <li>• Cercle de 400x400px avec bordure emerald</li>
              <li>• Focus central sur le collage</li>
              <li>• Effet élégant et sobre</li>
              <li>• Poids : 35 KB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
