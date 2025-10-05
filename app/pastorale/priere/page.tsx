import Link from 'next/link'

export default function PrierePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-gris/10">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">

        {/* En-tête élégant */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20 lg:mb-28 text-center">
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="w-16 md:w-32 h-px bg-gradient-to-r from-transparent via-sky-500 to-sky-500"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-sky-500 transform rotate-45"></div>
            <div className="w-16 md:w-32 h-px bg-gradient-to-l from-transparent via-sky-500 to-sky-500"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-neutral-anthracite mb-6 md:mb-10 tracking-tight leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Prière
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-gris leading-relaxed max-w-3xl mx-auto font-light">
            Groupes de prière et temps de recueillement pour nourrir notre vie spirituelle et grandir dans l'intimité avec le Seigneur.
          </p>
        </div>

        {/* Liste verticale élégante */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 mb-16 md:mb-28">

          {/* 1. ADORATION */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-sky-500/20 group-hover:text-sky-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  01
                </span>
              </div>

              <div className="flex-1 border-l-2 border-sky-500 pl-4 md:pl-8 py-2">
                <div className="mb-3 md:mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Adoration eucharistique
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30">
                    <p className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
                      Silence & recueillement
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Lundis</p>
                      <p className="text-base md:text-lg text-neutral-anthracite font-semibold">19h00-19h30 • Brignon</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">1er et 5ème mardis</p>
                      <p className="text-base md:text-lg text-neutral-anthracite font-semibold">18h00-18h45 • Veysonnaz</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">4ème mardi</p>
                      <p className="text-base md:text-lg text-neutral-anthracite font-semibold">18h15-18h45 • Haute-Nendaz</p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">4ème mardi</p>
                      <p className="text-base md:text-lg text-neutral-anthracite font-semibold">18h30-19h00 • Aproz</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Vendredis</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">18h00-18h45 • Basse-Nendaz</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed mb-2">
                  Temps de prière silencieuse en présence du Saint-Sacrement, source et sommet de la vie chrétienne.
                </p>
                <p className="text-sm text-amber-600 italic">
                  Veuillez consulter notre feuille d'annonce mise à jour régulièrement, en raison des funérailles qui peuvent avoir lieu dans notre secteur.
                </p>
              </div>
            </div>
          </div>

          {/* 2. CHAPELET */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  02
                </span>
              </div>

              <div className="flex-1 border-l-2 border-emerald-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Chapelet
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30">
                    <p className="text-xs uppercase tracking-widest text-emerald-600 font-semibold">
                      Prière mariale
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Dimanches 19h30</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Saclentse</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Méditation des mystères de la vie du Christ et de sa Mère. Durant le mois de mai, avec les hospitaliers de Lourdes.
                </p>
              </div>
            </div>
          </div>

          {/* 3. VÊPRES */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  03
                </span>
              </div>

              <div className="flex-1 border-l-2 border-amber-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Vêpres
                  </h3>
                  <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30">
                    <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
                      Prière du soir
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Office du soir de la liturgie des heures, prière de l'Église qui rythme la journée chrétienne.
                </p>
              </div>
            </div>
          </div>

          {/* 4. LA MÈRE PÈLERINE */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-sky-500/20 group-hover:text-sky-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  04
                </span>
              </div>

              <div className="flex-1 border-l-2 border-sky-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    La Mère pèlerine
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30">
                    <p className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
                      Schönstatt
                    </p>
                  </div>
                </div>

                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-neutral-anthracite mb-1">Responsable</p>
                  <p className="text-base text-neutral-anthracite">Chantal Fournier</p>
                  <p className="text-sm text-sky-700">+41 79 273 13 32</p>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Une image de Marie trois fois admirable de Schönstatt est accueillie une fois par mois pour trois mois, chez les personnes qui le désirent. Si vous voulez faire partie d'un groupe, n'hésitez pas à contacter la responsable.
                </p>
              </div>
            </div>
          </div>

          {/* 5. LA PRIÈRE DES MÈRES */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  05
                </span>
              </div>

              <div className="flex-1 border-l-2 border-emerald-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    La prière des Mères
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30">
                    <p className="text-xs uppercase tracking-widest text-emerald-600 font-semibold">
                      Intercession maternelle
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Mercredi 8h30-9h30</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-base md:text-lg text-neutral-anthracite font-semibold">Salle paroissiale Basse-Nendaz</p>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4">
                  <p className="text-sm font-semibold text-neutral-anthracite mb-1">Responsable</p>
                  <p className="text-base text-neutral-anthracite">Bénédicte Devènes</p>
                  <p className="text-sm text-emerald-700">+41 77 413 61 60</p>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Des mamans, des grands-mamans se réunissent pour un temps de prières pour leurs enfants, leurs petits-enfants, et tous les enfants de notre paroisse. Ouvert à toutes et soyez les bienvenues !
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Citation biblique */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative py-16 px-12 bg-white border-2 border-neutral-gris/20">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-sky-500"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-sky-500"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-sky-500"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-sky-500"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-neutral-anthracite mb-6 leading-relaxed"
                 style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Priez sans cesse,<br />en toute circonstance rendez grâce. »
              </p>
              <div className="w-16 h-px bg-sky-500 mx-auto mb-4"></div>
              <p className="text-sm text-neutral-gris uppercase tracking-widest font-semibold">
                1 Thessaloniciens 5, 17-18
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
