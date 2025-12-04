'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPastoraleOpen, setIsPastoraleOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const [contactTimeoutId, setContactTimeoutId] = useState<NodeJS.Timeout | null>(null)

  return (
    <header className="bg-white shadow-sm border-b border-stone-200">
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
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors relative group"
            >
              <span>Accueil</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/actualites"
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors relative group"
            >
              <span>Actualités</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
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
                className="text-stone-600 hover:text-stone-900 font-medium transition-colors relative group flex items-center gap-1"
              >
                <span>Pastorale</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Sous-menu dropdown - Version sobre */}
              {isPastoraleOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-lg border border-stone-200 rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/pastorale"
                    className="block px-5 py-3 text-stone-800 hover:bg-stone-50 transition-all font-semibold border-b border-stone-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-base">Sacrements</div>
                        <div className="text-xs text-stone-500">Découvrir la pastorale</div>
                      </div>
                    </div>
                  </Link>

                  <div className="py-1">
                    <Link
                      href="/pastorale/priere"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Prière</div>
                          <div className="text-xs text-stone-500">Vie spirituelle</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/pastorale/liturgie"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Liturgie</div>
                          <div className="text-xs text-stone-500">Service liturgique</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/pastorale/diaconie"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Diaconie</div>
                          <div className="text-xs text-stone-500">Service fraternel</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/paroisses"
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors relative group"
            >
              <span>Paroisses</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Contact avec sous-menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (contactTimeoutId) clearTimeout(contactTimeoutId)
                setIsContactOpen(true)
              }}
              onMouseLeave={() => {
                const id = setTimeout(() => setIsContactOpen(false), 300)
                setContactTimeoutId(id)
              }}
            >
              <Link
                href="/contact"
                className="text-stone-600 hover:text-stone-900 font-medium transition-colors relative group flex items-center gap-1"
              >
                <span>Contact</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Sous-menu dropdown Contact */}
              {isContactOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg border border-stone-200 rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-1">
                    <Link
                      href="/contact"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Nous contacter</div>
                          <div className="text-xs text-stone-500">Formulaire & infos</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/dons"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Faire un don</div>
                          <div className="text-xs text-stone-500">Soutenir la paroisse</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/contact#formulaire"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Demande d'intentions</div>
                          <div className="text-xs text-stone-500">Messes & prières</div>
                        </div>
                      </div>
                    </Link>

                    <a
                      href="https://www.davidica.ch/location-salle.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3 hover:bg-stone-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-stone-100 flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Réservation salle</div>
                          <div className="text-xs text-stone-500">Salle paroissiale</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Access Buttons - Pierre et Lumière */}
          <div className="hidden md:flex space-x-2">
            <a
              href="https://www.youtube.com/@paroissesnendazetveysonnaz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF0000] text-white border-2 border-[#FF0000] px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm hover:bg-[#CC0000] transition-colors font-semibold flex items-center gap-2 shadow-sm"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
                className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-stone-700 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/actualites"
                className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-stone-700 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Actualités
              </Link>

              {/* Pastorale mobile avec sous-menu */}
              <div>
                <button
                  onClick={() => setIsPastoraleOpen(!isPastoraleOpen)}
                  className="w-full text-left text-stone-700 hover:text-stone-900 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-stone-700 pl-4 flex items-center justify-between"
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
                className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-stone-700 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Paroisses
              </Link>

              {/* Contact mobile avec sous-menu */}
              <div>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="w-full text-left text-stone-700 hover:text-stone-900 transition-colors font-medium py-2 border-l-4 border-transparent hover:border-stone-700 pl-4 flex items-center justify-between"
                >
                  <span>Contact</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isContactOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isContactOpen && (
                  <div className="ml-8 mt-2 space-y-2">
                    <Link
                      href="/contact"
                      className="block text-stone-700 hover:text-amber-700 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsContactOpen(false); }}
                    >
                      Nous contacter
                    </Link>
                    <Link
                      href="/dons"
                      className="block text-stone-600 hover:text-amber-600 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsContactOpen(false); }}
                    >
                      Faire un don
                    </Link>
                    <Link
                      href="/contact#formulaire"
                      className="block text-stone-600 hover:text-amber-600 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsContactOpen(false); }}
                    >
                      Demande d'intentions
                    </Link>
                    <a
                      href="https://www.davidica.ch/location-salle.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-stone-600 hover:text-amber-600 transition-colors py-1 text-sm"
                      onClick={() => { setIsMenuOpen(false); setIsContactOpen(false); }}
                    >
                      Réservation salle
                    </a>
                  </div>
                )}
              </div>

              <div className="flex space-x-2 pt-4 border-t border-stone-300">
                <a
                  href="https://www.youtube.com/@paroissesnendazetveysonnaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF0000] text-white border-2 border-[#FF0000] px-3 py-2 rounded-lg text-sm hover:bg-[#CC0000] transition-colors font-semibold flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
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
