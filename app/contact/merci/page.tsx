import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function MerciPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        {/* Icône de succès */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-neutral-anthracite mb-4">
          Merci !
        </h1>

        {/* Message */}
        <p className="text-lg text-neutral-gris mb-6">
          Votre message a été envoyé avec succès.
        </p>

        <p className="text-base text-neutral-gris mb-8">
          Notre équipe pastorale vous répondra dans les plus brefs délais, généralement sous 48 heures.
        </p>

        {/* Boutons d'action */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold shadow-lg hover:shadow-xl"
          >
            Retour à l'accueil
          </Link>

          <Link
            href="/contact"
            className="block w-full bg-neutral-grisClaire text-neutral-anthracite py-3 px-6 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Nouveau message
          </Link>
        </div>

        {/* Info supplémentaire */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-neutral-gris">
            <strong>Besoin d'aide urgente ?</strong><br />
            Appelez-nous au <a href="tel:+41272882250" className="text-blue-600 hover:underline font-semibold">+41 27 288 22 50</a>
          </p>
        </div>
      </div>
    </div>
  );
}
