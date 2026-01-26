'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw, Mail, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Track error dans GA4
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        error_digest: error.digest || 'unknown'
      })
    }
  }, [error])

  return (
    <div className="min-h-[70vh] bg-stone-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">

        {/* Icone alerte */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-amber-600" />
          </div>
        </div>

        {/* Message principal */}
        <h1
          className="text-2xl md:text-3xl font-bold text-stone-800 mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Une erreur est survenue
        </h1>

        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          Nous sommes désolés, quelque chose s'est mal passé.
          Vous pouvez réessayer ou revenir à l'accueil.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-stone-400 text-stone-700 font-semibold px-6 py-3 transition-colors"
          >
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Séparateur */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-stone-300"></div>
          <span className="text-stone-400 text-sm">Besoin d'aide ?</span>
          <div className="h-px w-16 bg-stone-300"></div>
        </div>

        {/* Lien contact */}
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>Nous contacter</span>
        </Link>

      </div>
    </div>
  )
}
