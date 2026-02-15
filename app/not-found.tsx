'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Home, Church, CalendarDays, Mail, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  // Track 404 dans GA4 avec l'URL tentée
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_not_found', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_referrer: document.referrer || 'direct'
      })
    }
  }, [])

  return (
    <div className="min-h-[70vh] bg-stone-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">

        {/* Croix stylisée */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-1 h-16 bg-amber-400"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-amber-400"></div>
          </div>
        </div>

        {/* Numéro 404 */}
        <div className="mb-6">
          <span className="text-8xl md:text-9xl font-bold text-stone-200 font-serif">
            404
          </span>
        </div>

        {/* Message principal */}
        <h1
          className="text-2xl md:text-3xl font-bold text-stone-800 mb-4"
                 >
          Page introuvable
        </h1>

        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Notre site a été entièrement renouvelé, certaines anciennes adresses ne fonctionnent plus.
        </p>

        {/* Bouton retour */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Séparateur */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-stone-300"></div>
          <span className="text-stone-400 text-sm">Pages utiles</span>
          <div className="h-px w-16 bg-stone-300"></div>
        </div>

        {/* Liens utiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Link
            href="/"
            className="group flex flex-col items-center p-4 bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all"
          >
            <Home className="w-6 h-6 text-stone-400 group-hover:text-amber-600 mb-2 transition-colors" />
            <span className="text-sm text-stone-700 group-hover:text-amber-700 transition-colors">Accueil</span>
          </Link>

          <Link
            href="/paroisses"
            className="group flex flex-col items-center p-4 bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all"
          >
            <Church className="w-6 h-6 text-stone-400 group-hover:text-amber-600 mb-2 transition-colors" />
            <span className="text-sm text-stone-700 group-hover:text-amber-700 transition-colors">Paroisses</span>
          </Link>

          <Link
            href="/actualites"
            className="group flex flex-col items-center p-4 bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all"
          >
            <CalendarDays className="w-6 h-6 text-stone-400 group-hover:text-amber-600 mb-2 transition-colors" />
            <span className="text-sm text-stone-700 group-hover:text-amber-700 transition-colors">Actualités</span>
          </Link>

          <Link
            href="/contact"
            className="group flex flex-col items-center p-4 bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all"
          >
            <Mail className="w-6 h-6 text-stone-400 group-hover:text-amber-600 mb-2 transition-colors" />
            <span className="text-sm text-stone-700 group-hover:text-amber-700 transition-colors">Contact</span>
          </Link>

        </div>

        {/* Note de sécurité - invisible pour les utilisateurs mais utile pour le debug */}
        <p className="mt-12 text-xs text-stone-400">
          Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à nous contacter.
        </p>

      </div>
    </div>
  )
}
