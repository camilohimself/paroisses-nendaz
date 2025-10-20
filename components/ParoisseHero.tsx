/**
 * Composant Hero pour les pages individuelles de paroisses
 * Affiche une bannière immersive avec image optimisée responsive
 * Optimisé avec Next.js Image pour performance mobile maximale
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

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-neutral-grisClaire">
      {/* Image Hero - Desktop (masquée sur mobile) */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={`${basePath}/hero-desktop.jpg`}
          alt={name}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Image Hero - Mobile (masquée sur desktop) */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src={`${basePath}/hero-mobile.jpg`}
          alt={name}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>


      {/* Contenu textuel - CENTRÉ SANS BOX */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-4xl">
          {/* Nom de la paroisse */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            {name}
          </h1>

          {/* Badge secteur */}
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm md:text-base font-medium">
            Secteur {sector === 'nendaz' ? 'Nendaz' : 'Veysonnaz'}
          </div>
        </div>
      </div>
    </div>
  );
}
