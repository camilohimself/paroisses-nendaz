import Link from 'next/link'

export default function GroupesProches() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-gris/10">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">

        {/* En-tête élégant avec lignes dorées */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20 lg:mb-28 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-paroisse-jaune to-paroisse-jaune"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-paroisse-jaune transform rotate-45"></div>
            <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent via-paroisse-jaune to-paroisse-jaune"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-anthracite mb-6 md:mb-10 tracking-tight leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Groupes proches
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-gris leading-relaxed max-w-3xl mx-auto font-light">
            Ces groupes de prière et de service favorisent une vie spirituelle profonde et un engagement au cœur de la communauté paroissiale.
          </p>
        </div>

        {/* Liste verticale élégante avec numérotation */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 mb-16 md:mb-28">

          {/* 1. CHAPELET */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              {/* Numéro élégant */}
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-paroisse-bleuCiel/20 group-hover:text-paroisse-bleuCiel/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  01
                </span>
              </div>

              {/* Contenu */}
              <div className="flex-1 border-l-2 border-paroisse-bleuCiel pl-4 md:pl-8 py-2">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Groupe de prière du chapelet
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-bleuCiel/10 border border-paroisse-bleuCiel/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-bleuCiel font-semibold">
                      Prière mariale
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Mardi 18h00</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Église de Basse-Nendaz</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Méditation des mystères de la vie du Christ et de sa Mère, dans la tradition séculaire de la prière du rosaire.
                </p>
              </div>
            </div>
          </div>

          {/* 2. ADORATION */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-paroisse-vert/20 group-hover:text-paroisse-vert/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  02
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-vert pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Adoration eucharistique
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-vert/10 border border-paroisse-vert/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-vert font-semibold">
                      Silence & recueillement
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Jeudi 19h30</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Chapelle Saint-Michel</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Temps de prière silencieuse en présence du Saint-Sacrement, source et sommet de la vie chrétienne.
                </p>
              </div>
            </div>
          </div>

          {/* 3. VISITEURS */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-paroisse-jaune/20 group-hover:text-paroisse-jaune/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  03
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-jaune pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Groupe des visiteurs
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-jaune/10 border border-paroisse-jaune/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-jaune font-semibold">
                      Charité fraternelle
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Fréquence</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Sur rendez-vous</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Public</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Personnes âgées et malades</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Service de visite régulière auprès des personnes isolées, malades ou en établissement médico-social.
                </p>
              </div>
            </div>
          </div>

          {/* 4. SERVANTS */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-paroisse-bleuRoi/20 group-hover:text-paroisse-bleuRoi/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  04
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-bleuRoi pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Servants de messe
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-bleuRoi/10 border border-paroisse-bleuRoi/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-bleuRoi font-semibold">
                      Service liturgique
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Public</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Enfants et jeunes (8-16 ans)</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Formation</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Accompagnement régulier</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Formation au service de l'autel et participation active à la célébration eucharistique.
                </p>
              </div>
            </div>
          </div>

          {/* 5. CHORALE */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-paroisse-vert/20 group-hover:text-paroisse-vert/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  05
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-vert pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Chorale paroissiale
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-vert/10 border border-paroisse-vert/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-vert font-semibold">
                      Louange et chant sacré
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Vendredi 20h00</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Salle paroissiale</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Animation des célébrations liturgiques par le répertoire de chant sacré et de musique religieuse.
                </p>
              </div>
            </div>
          </div>

          {/* 6. CONSEIL */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-paroisse-jaune/20 group-hover:text-paroisse-jaune/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  06
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-jaune pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Conseil pastoral paroissial
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-jaune/10 border border-paroisse-jaune/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-jaune font-semibold">
                      Gouvernance pastorale
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-3 md:mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Fréquence</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Réunions trimestrielles</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Mission</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Orientation et conseil</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Instance consultative qui accompagne le curé dans le discernement et l'animation de la vie paroissiale.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Citation biblique avec cadre élégant */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative py-16 px-12 bg-white border-2 border-neutral-gris/20">
            {/* Ornements d'angle */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-paroisse-jaune"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-paroisse-jaune"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-paroisse-jaune"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-paroisse-jaune"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-neutral-anthracite mb-6 leading-relaxed"
                 style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Là où deux ou trois sont réunis en mon nom,<br />je suis au milieu d'eux. »
              </p>
              <div className="w-16 h-px bg-paroisse-jaune mx-auto mb-4"></div>
              <p className="text-sm text-neutral-gris uppercase tracking-widest font-semibold">
                Évangile selon Saint Matthieu 18, 20
              </p>
            </div>
          </div>
        </div>

        {/* Appel sobre */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-neutral-gris mb-8 leading-relaxed">
            Pour rejoindre l'un de ces groupes ou obtenir davantage d'informations,<br />nous vous invitons à prendre contact avec le secrétariat paroissial.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border-2 border-neutral-anthracite text-neutral-anthracite font-semibold uppercase tracking-widest hover:bg-neutral-anthracite hover:text-white transition-all duration-300"
          >
            Nous contacter
          </Link>
        </div>

      </div>
    </div>
  )
}
