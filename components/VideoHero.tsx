/**
 * Composant Video Hero pour la page d'accueil
 * Vidéo drone en arrière-plan avec overlay gradient sur zone texte
 * Optimisé : 4.2MB desktop, 1.7MB mobile (vs 184MB source)
 */

export default function VideoHero() {
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
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
        {/* Fallback : image poster */}
        <img
          src="/videos/hero-poster.jpg"
          alt="Paroisses de Nendaz et Veysonnaz"
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
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        {/* Fallback : image poster */}
        <img
          src="/videos/hero-poster.jpg"
          alt="Paroisses de Nendaz et Veysonnaz"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Vignette gradient uniquement sur zone texte (bas de la vidéo) */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-emerald-800/90 via-emerald-700/60 to-transparent" />

      {/* Contenu textuel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-4xl relative z-10">
          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-2xl leading-tight">
            Paroisses de Nendaz<br />et Veysonnaz
          </h1>

          {/* Citation biblique */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-xl italic" style={{ fontFamily: 'Crimson Text, serif' }}>
            « Là où deux ou trois sont réunis en mon nom,<br />
            je suis au milieu d&apos;eux. »
          </p>

          <p className="text-lg md:text-xl mb-8 drop-shadow-lg">
            — Matthieu 18, 20
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/actualites"
              className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Actualités
            </a>
            <a
              href="/paroisses"
              className="inline-block px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Nos paroisses
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll (animation subtile) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
