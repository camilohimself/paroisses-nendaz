import Link from 'next/link'
import { Metadata } from 'next'
import { AlertCircle, Play, ExternalLink, Mail, Phone } from 'lucide-react'

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

          {/* Encadré important */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-900 mb-2">
                  Important pour la connexion
                </h2>
                <p className="text-amber-800 mb-4">
                  Pour vous connecter à Enoria, utilisez <strong>uniquement</strong> :
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5 text-amber-600" />
                      <span className="font-semibold text-amber-900">Votre email</span>
                    </div>
                    <p className="text-sm text-amber-700">Laissez le champ téléphone vide</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5 text-amber-600" />
                      <span className="font-semibold text-amber-900">Votre téléphone</span>
                    </div>
                    <p className="text-sm text-amber-700">Laissez le champ email vide</p>
                  </div>
                </div>
                <p className="text-sm text-amber-700 mt-4 font-medium">
                  Ne remplissez pas les deux champs en même temps, sinon la connexion échouera.
                </p>
              </div>
            </div>
          </div>

          {/* Vidéo tutoriel */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-neutral-anthracite mb-4 flex items-center gap-2">
              <Play className="w-5 h-5 text-[#2A8B8C]" />
              Tutoriel pour les nouveaux utilisateurs
            </h2>
            <p className="text-neutral-gris mb-4">
              Découvrez comment créer votre compte et inscrire votre famille sur Enoria.
            </p>
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

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2A8B8C] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#2A8B8C]/90 transition-colors shadow-lg text-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Se connecter à Enoria
            </a>
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
