/**
 * Composant Video Hero pour la page d'accueil
 * Vidéo drone en arrière-plan avec overlay gradient sur zone texte
 * Optimisé : 4.2MB desktop, 1.7MB mobile (vs 184MB source)
 *
 * TEMPORAIRE: Affiche le hero mémorial Crans-Montana du 6 au 10 janvier 2026
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

// Vérifie si on est dans la période du mémorial (6-10 janvier 2026)
function isMemorialPeriod(): boolean {
  const now = new Date();
  const start = new Date('2026-01-06T00:00:00+01:00'); // 6 janvier minuit (heure suisse)
  const end = new Date('2026-01-11T00:00:00+01:00');   // 10 janvier 23h59 (= 11 janvier 00:00)
  return now >= start && now < end;
}

export default function VideoHero() {
  const [showMemorial, setShowMemorial] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShowMemorial(isMemorialPeriod());
  }, []);

  // Évite le flash pendant l'hydratation - fond neutre
  if (!mounted) {
    return <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-white" />;
  }

  // Période mémorial : affiche l'image statique
  if (showMemorial) {
    return <MemorialHero />;
  }

  // Période normale : affiche la vidéo
  return <VideoHeroContent />;
}

// Hero Mémorial Crans-Montana (6-10 janvier 2026)
function MemorialHero() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-white">
      {/* Image mémorial - version mobile (portrait) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:hidden">
        <img
          src="/images/events/hero-memorial-mobile-2026.jpg"
          alt="En mémoire des victimes de Crans-Montana - Vendredi 9 janvier 2026 - Église Saint-Léger, Basse-Nendaz"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Image mémorial - version desktop (paysage) */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center p-8">
        <img
          src="/images/events/hero-memorial-2026.jpg"
          alt="En mémoire des victimes de Crans-Montana - Vendredi 9 janvier 2026 - Église Saint-Léger, Basse-Nendaz"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Bordure subtile en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </div>
  );
}

// Hero vidéo standard (contenu original)
function VideoHeroContent() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-neutral-anthracite">
      {/* Vidéo background - Desktop (>768px) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        <img
          src="/videos/hero-poster.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </video>

      {/* Vidéo background - Mobile (<768px) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        <img
          src="/videos/hero-poster.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </video>


      {/* Contenu textuel - CENTRÉ SANS BOX */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-4xl">
          {/* Titre principal */}
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 leading-tight">
            Paroisses de Nendaz<br />et Veysonnaz
          </h1>

          {/* Citation biblique */}
          <p className="text-2xl md:text-3xl lg:text-4xl mb-8 italic">
            « Là où deux ou trois sont réunis en mon nom,<br />
            je suis au milieu d&apos;eux. »
          </p>

          <p className="text-xl md:text-2xl mb-8">
            — Matthieu 18, 20
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/paroisses"
              className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Nos paroisses
            </Link>
            <Link
              href="/actualites"
              className="inline-block px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Actualités
            </Link>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll (animation subtile) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block" aria-hidden="true">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </div>
  );
}
