'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPastoraleOpen, setIsPastoraleOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  return (
    <header className="bg-white shadow-sm border-b-2 border-amber-300">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo temporairement supprimé - en attente nouveau logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl md:text-2xl font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
              Secteur de Nendaz
            </span>
          </Link>

          {/* Desktop Navigation - Pierre et Lumière */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-stone-700 hover:text-amber-700 font-medium transition-colors relative group"
            >
              <span>Accueil</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/actualites"
              className="text-stone-700 hover:text-amber-700 font-medium transition-colors relative group"
            >
              <span>Actualités</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Pastorale avec sous-menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (timeoutId) clearTimeout(timeoutId)
                setIsPastoraleOpen(true)
              }}
              onMouseLeave={() => {
                const id = setTimeout(() => setIsPastoraleOpen(false), 300)
                setTimeoutId(id)
              }}
            >
              <Link
                href="/pastorale"
                className="text-stone-700 hover:text-amber-700 font-medium transition-colors relative group flex items-center gap-1"
              >
                <span>Pastorale</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Sous-menu dropdown - Pierre et Lumière */}
              {isPastoraleOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl border-2 border-amber-300 rounded-lg py-2 z-50">
                  <Link
                    href="/pastorale"
                    className="block px-4 py-2 text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors font-medium"
                  >
                    Vue d&apos;ensemble
                  </Link>
                  <div className="border-t border-stone-200 my-1"></div>
                  <Link
                    href="/pastorale/priere"
                    className="block px-4 py-2 text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Prière
                  </Link>
                  <Link
                    href="/pastorale/liturgie"
                    className="block px-4 py-2 text-stone-600 hover:bg-stone-100 hover:text-stone-800 transition-colors"
                  >
                    Liturgie
                  </Link>
                  <Link
                    href="/pastorale/diaconie"
                    className="block px-4 py-2 text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    Diaconie
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/paroisses"
              className="text-stone-700 hover:text-amber-700 font-medium transition-colors relative group"
            >
              <span>Paroisses</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-stone-700 hover:text-amber-700 font-medium transition-colors relative group"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Quick Access Buttons - Pierre et Lumière */}
          <div className="hidden md:flex space-x-2">
            <a
              href="/#messe-direct"
              className="bg-white text-stone-700 border-2 border-amber-500 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:bg-amber-500 hover:text-white transition-colors font-semibold flex items-center gap-2 shadow-sm"
            >
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
              Messe & YouTube
            </a>
            <a
              href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A8B8C] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:bg-[#2A8B8C]/90 transition-colors font-semibold shadow-sm"
            >
              Enoria
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-stone-100 text-stone-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Pierre et Lumière */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-stone-50 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-stone-700 hover:text-amber-700 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-amber-500 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/actualites"
                className="text-stone-700 hover:text-amber-700 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-amber-500 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Actualités
              </Link>

              {/* Pastorale mobile avec sous-menu */}
              <div>
                <button
                  onClick={() => setIsPastoraleOpen(!isPastoraleOpen)}
                  className="w-full text-left text-stone-700 hover:text-amber-700 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-amber-500 pl-4 flex items-center justify-between"
                >
                  <span>Pastorale</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isPastoraleOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isPastoraleOpen && (
                  <div className="ml-8 mt-2 space-y-2">
                    <Link
                      href="/pastorale"
                      className="block text-stone-700 hover:text-amber-700 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsPastoraleOpen(false); }}
                    >
                      Vue d&apos;ensemble
                    </Link>
                    <Link
                      href="/pastorale/priere"
                      className="block text-stone-600 hover:text-amber-600 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsPastoraleOpen(false); }}
                    >
                      Prière
                    </Link>
                    <Link
                      href="/pastorale/liturgie"
                      className="block text-stone-600 hover:text-stone-800 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsPastoraleOpen(false); }}
                    >
                      Liturgie
                    </Link>
                    <Link
                      href="/pastorale/diaconie"
                      className="block text-stone-600 hover:text-amber-600 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsPastoraleOpen(false); }}
                    >
                      Diaconie
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/paroisses"
                className="text-stone-700 hover:text-amber-700 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-amber-500 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Paroisses
              </Link>
              <Link
                href="/contact"
                className="text-stone-700 hover:text-amber-700 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-amber-500 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="flex space-x-2 pt-4 border-t border-stone-300">
                <a
                  href="/#messe-direct"
                  className="bg-white text-stone-700 border-2 border-amber-500 px-3 py-2 rounded-lg text-sm hover:bg-amber-500 hover:text-white transition-colors font-semibold flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
                  Messe & YouTube
                </a>
                <a
                  href="https://public.enoria.app/pubinsc/auth?type=foyer&p=598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2A8B8C] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#2A8B8C]/90 transition-colors font-semibold"
                >
                  Enoria
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
