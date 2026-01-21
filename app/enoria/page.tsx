import Link from 'next/link'
import { Metadata } from 'next'
import { AlertCircle, Play, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accéder à Enoria - Paroisses de Nendaz',
  description: 'Connectez-vous à Enoria pour gérer vos inscriptions paroissiales. Tutoriel disponible pour les nouveaux utilisateurs.',
}

export default function EnoriaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2A8B8C]/10 via-white to-stone-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-[#2A8B8C] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-neutral-anthracite font-medium">Enoria</span>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-anthracite mb-4">
              Accéder à Enoria
            </h1>
            <p className="text-lg text-neutral-gris">
              Plateforme de gestion des inscriptions paroissiales
            </p>
          </div>

          {/* Boutons CTA - Horizontal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2A8B8C] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#2A8B8C]/90 transition-colors shadow-lg text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Se connecter à Enoria
            </a>
            <a
              href="#tutoriel"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2A8B8C] font-bold py-4 px-8 rounded-xl border-2 border-[#2A8B8C] hover:bg-[#2A8B8C]/10 transition-colors text-lg"
            >
              <Play className="w-5 h-5" />
              Nouveau ? Voir le tutoriel
            </a>
          </div>

          {/* Encadré simple */}
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-10 text-center">
            <p className="text-amber-800 flex items-center justify-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span><strong>Connexion :</strong> email ou téléphone (pas les deux en même temps)</span>
            </p>
          </div>

          {/* Vidéo tutoriel */}
          <div id="tutoriel" className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-neutral-anthracite mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#2A8B8C]" />
              Tutoriel pour les nouveaux utilisateurs
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.youtube.com/embed/Sb1pV4ZboYM"
                title="Tutoriel inscription Enoria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Aide */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-gris">
              Besoin d&apos;aide ? Contactez le secrétariat au{' '}
              <a href="tel:+41772693529" className="text-[#2A8B8C] font-semibold hover:underline">
                +41 77 269 35 29
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
