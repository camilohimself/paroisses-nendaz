/**
 * Composant Hero pour les pages individuelles de paroisses
 * Affiche une bannière immersive avec image optimisée responsive
 * Support WebP + JPEG fallback, desktop/mobile
 */

import Image from 'next/image';

interface ParoisseHeroProps {
  paroisseId: string;
  name: string;
  type: 'eglise' | 'chapelle' | 'ems';
  sector: 'nendaz' | 'veysonnaz';
}

export default function ParoisseHero({ paroisseId, name, type, sector }: ParoisseHeroProps) {
  // Chemins des images optimisées
  const basePath = `/images/paroisses/${paroisseId}`;

  // Couleurs selon secteur (cohérent avec charte graphique)
  const sectorColors = {
    nendaz: 'from-emerald-600/90 to-emerald-800/90',
    veysonnaz: 'from-sky-600/90 to-sky-800/90'
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Image Hero - Desktop */}
      <picture className="hidden md:block">
        <source
          srcSet={`${basePath}/hero-desktop.webp`}
          type="image/webp"
        />
        <img
          src={`${basePath}/hero-desktop.jpg`}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </picture>

      {/* Image Hero - Mobile */}
      <picture className="block md:hidden">
        <source
          srcSet={`${basePath}/hero-mobile.webp`}
          type="image/webp"
        />
        <img
          src={`${basePath}/hero-mobile.jpg`}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </picture>


      {/* Contenu textuel - TOUT EN BAS */}
      <div className="absolute bottom-0 left-0 right-0 text-white px-4 pb-12 md:pb-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-black/40 p-6 md:p-8 rounded-lg text-center">
            {/* Nom de la paroisse */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3">
              {name}
            </h1>

            {/* Badge secteur */}
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-medium">
              Secteur {sector === 'nendaz' ? 'Nendaz' : 'Veysonnaz'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
