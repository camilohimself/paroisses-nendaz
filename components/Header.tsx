'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md border-b-2 border-paroisse-bleuRoi">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-paroisses.png"
              alt="Paroisses de Nendaz"
              width={180}
              height={60}
              className="h-14 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-neutral-anthracite hover:text-paroisse-rouge font-medium transition-colors relative group"
            >
              <span>Accueil</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paroisse-rouge transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/actualites"
              className="text-neutral-anthracite hover:text-paroisse-bleuRoi font-medium transition-colors relative group"
            >
              <span>Actualités</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paroisse-bleuRoi transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/pastorale"
              className="text-neutral-anthracite hover:text-paroisse-vert font-medium transition-colors relative group"
            >
              <span>Pastorale</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paroisse-vert transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/paroisses"
              className="text-neutral-anthracite hover:text-paroisse-bleuRoi font-medium transition-colors relative group"
            >
              <span>Paroisses</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paroisse-bleuRoi transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-neutral-anthracite hover:text-paroisse-violet font-medium transition-colors relative group"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-paroisse-violet transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Quick Access Buttons */}
          <div className="hidden lg:flex space-x-2">
            <a
              href="https://www.youtube.com/@paroissesnendazetveysonnaz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paroisse-rouge text-white px-4 py-2 rounded-lg text-sm hover:bg-paroisse-rouge/90 transition-colors font-semibold flex items-center gap-2 shadow-lg"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Live
            </a>
            <a
              href="https://web.enoria.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-enoria text-white px-4 py-2 rounded-lg text-sm hover:bg-enoria/90 transition-colors font-semibold shadow-lg"
            >
              Enoria
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-neutral-grisClaire py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-neutral-anthracite hover:text-paroisse-rouge transition-colors font-medium py-2 border-l-4 border-transparent hover:border-paroisse-rouge pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/actualites"
                className="text-neutral-anthracite hover:text-paroisse-bleuRoi transition-colors font-medium py-2 border-l-4 border-transparent hover:border-paroisse-bleuRoi pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link
                href="/pastorale"
                className="text-neutral-anthracite hover:text-paroisse-vert transition-colors font-medium py-2 border-l-4 border-transparent hover:border-paroisse-vert pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Pastorale
              </Link>
              <Link
                href="/paroisses"
                className="text-neutral-anthracite hover:text-paroisse-bleuRoi transition-colors font-medium py-2 border-l-4 border-transparent hover:border-paroisse-bleuRoi pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Paroisses
              </Link>
              <Link
                href="/contact"
                className="text-neutral-anthracite hover:text-paroisse-violet transition-colors font-medium py-2 border-l-4 border-transparent hover:border-paroisse-violet pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-2 pt-4 border-t border-gray-200">
                <a
                  href="https://www.youtube.com/@paroissesnendazetveysonnaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-paroisse-rouge text-white px-3 py-2 rounded-lg text-sm hover:bg-paroisse-rouge/90 transition-colors font-semibold flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Live
                </a>
                <a
                  href="https://web.enoria.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-enoria text-white px-3 py-2 rounded-lg text-sm hover:bg-enoria/90 transition-colors font-semibold"
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