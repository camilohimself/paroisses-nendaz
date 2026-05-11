/**
 * Composant Video Hero pour la page d'accueil
 * Vidéo drone en arrière-plan avec overlay gradient sur zone texte
 * Optimisé : 4.2MB desktop, 1.7MB mobile (vs 184MB source)
 *
 * TEMPORAIRE: Affiche le hero mémorial Crans-Montana du 6 au 10 janvier 2026
 * TEMPORAIRE: Affiche le hero sortie servants/lecteurs du 11 au 25 mai 2026
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, Download, Heart, Ship, Feather } from 'lucide-react';

// Vérifie si on est dans la période du mémorial (6-10 janvier 2026)
function isMemorialPeriod(): boolean {
  const now = new Date();
  const start = new Date('2026-01-06T00:00:00+01:00'); // 6 janvier minuit (heure suisse)
  const end = new Date('2026-01-11T00:00:00+01:00');   // 10 janvier 23h59 (= 11 janvier 00:00)
  return now >= start && now < end;
}

// Vérifie si on est dans la période d'annonce de la sortie servants/lecteurs (11-25 mai 2026)
function isSortieJeunesPeriod(): boolean {
  const now = new Date();
  const start = new Date('2026-05-11T00:00:00+02:00'); // 11 mai minuit (heure d'été suisse)
  const end = new Date('2026-05-26T00:00:00+02:00');   // 25 mai inclus (= 26 mai 00:00)
  return now >= start && now < end;
}

export default function VideoHero() {
  const [showMemorial, setShowMemorial] = useState(false);
  const [showSortieJeunes, setShowSortieJeunes] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setShowMemorial(isMemorialPeriod());
    setShowSortieJeunes(isSortieJeunesPeriod());
  }, []);

  // Évite le flash pendant l'hydratation - fond neutre
  if (!mounted) {
    return <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] bg-white" />;
  }

  // Période mémorial : affiche l'image statique
  if (showMemorial) {
    return <MemorialHero />;
  }

  // Période sortie jeunes : affiche l'annonce flash
  if (showSortieJeunes) {
    return <SortieJeunesHero />;
  }

  // Période normale : affiche la vidéo
  return <VideoHeroContent />;
}

// Hero Mémorial Crans-Montana (6-10 janvier 2026)
function MemorialHero() {
  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-white">
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

// Hero sortie servants de messe et jeunes lecteurs (11-25 mai 2026)
// Style : grammaire éditoriale "Saints du jour" — titre uppercase + méta date à droite + ligne + 3 cards
function SortieJeunesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-50">
      {/* Photo background : bateau Belle Époque sur Léman, lumière dorée */}
      <div className="absolute inset-0">
        <img
          src="/images/events/sortie-jeunes-2026-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-left"
          aria-hidden="true"
        />
        {/* Voile dorée : douce à gauche (bateau émerge) → plus opaque à droite (cards lisibles) */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/55 via-stone-50/70 to-stone-50/85"></div>
        {/* Légère vignette top pour adoucir le ciel saturé */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-50/40 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Header : titre + méta date */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold uppercase tracking-tight text-stone-900 leading-[1.05]"
              style={{ textShadow: '0 1px 2px rgba(250, 250, 249, 0.6)' }}
            >
              Sortie servants de messe<br />
              et jeunes lecteurs
            </h1>
            <div className="text-stone-700 text-sm md:text-base md:text-right shrink-0 md:pb-2 uppercase tracking-wider">
              <div>Lundi de Pentecôte</div>
              <div className="text-stone-900 font-semibold">25 mai 2026</div>
            </div>
          </div>

          {/* Ligne de séparation */}
          <div className="h-px bg-stone-300 mb-10 md:mb-12"></div>

          {/* 3 cards horizontales avec icônes créatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-10 md:mb-12">

            {/* Card 1 — Heart : remerciement */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-amber-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2 leading-snug">
                  Une journée pour vous remercier
                </h3>
                <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed">
                  Pour celles et ceux qui ont servi la messe ou lu au moins 4 fois durant l&apos;année 2025-2026.
                </p>
              </div>
            </div>

            {/* Card 2 — Ship : traversée Belle Époque */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center shrink-0">
                <Ship className="w-6 h-6 text-amber-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2 leading-snug">
                  Traversée Belle Époque
                </h3>
                <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed">
                  De Villeneuve à Sciez, en France. Une traversée du Léman en bateau d&apos;époque pour démarrer la journée.
                </p>
              </div>
            </div>

            {/* Card 3 — Feather : Les Aigles du Léman */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center shrink-0">
                <Feather className="w-6 h-6 text-amber-600" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-stone-800 mb-2 leading-snug">
                  Les Aigles du Léman
                </h3>
                <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed">
                  Exploration de la plus grande volière de rapaces du monde. Spectacles en vol libre, observation immersive.
                </p>
              </div>
            </div>

          </div>

          {/* CTA + info inscription */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-6 border-t border-stone-200">
            <a
              href="/documents/jeunes/sortie-servants-messe-lecteurs-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Télécharger le programme (PDF)
            </a>
            <div className="text-sm text-stone-600 leading-relaxed">
              <div>Inscriptions via Enoria.</div>
              <div>
                Contact : Martin Fendrych —{' '}
                <a
                  href="https://wa.me/41772111842"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-medium hover:underline"
                >
                  077 211 18 42
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bordure subtile en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
    </section>
  );
}

// Hero vidéo standard (contenu original)
function VideoHeroContent() {
  return (
    <div className="relative w-full h-[520px] md:h-[520px] lg:h-[600px] overflow-hidden bg-neutral-anthracite">
      {/* Vidéo background - Desktop (>768px) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        preload="metadata"
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
        preload="metadata"
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-8">
        <div className="text-center max-w-4xl">
          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-4 md:mb-6 leading-tight">
            Paroisses de Nendaz<br />et Veysonnaz
          </h1>

          {/* Citation biblique */}
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4 md:mb-8 italic">
            « Là où deux ou trois sont réunis en mon nom,<br />
            je suis au milieu d&apos;eux. »
          </p>

          <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8">
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
