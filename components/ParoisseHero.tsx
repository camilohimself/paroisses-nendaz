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

      {/* Overlay gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${sectorColors[sector]} opacity-60`} />

      {/* Contenu textuel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-4xl">
          {/* Nom de la paroisse */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 drop-shadow-2xl">
            {name}
          </h1>

          {/* Badge secteur */}
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-medium">
            Secteur {sector === 'nendaz' ? 'Nendaz' : 'Veysonnaz'}
          </div>
        </div>
      </div>

      {/* Effet vignette subtil */}
      <div className="absolute inset-0 shadow-inner pointer-events-none"
           style={{
             boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)'
           }} />
    </div>
  );
}
