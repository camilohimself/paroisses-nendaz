import Link from 'next/link'

export default function LiturgiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">

        {/* En-tête Pierre et Lumière */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20 lg:mb-28 text-center">
          {/* Petite croix minimaliste */}
          <div className="flex justify-center mb-8">
            <div className="relative w-10 h-14">
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-stone-400 transform -translate-x-1/2"></div>
              <div className="absolute left-0 top-3 w-full h-0.5 bg-stone-400"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-stone-800 mb-6 md:mb-10 tracking-tight leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Liturgie
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-light">
            Services et ministères liturgiques pour célébrer dignement et avec beauté les mystères de notre foi.
          </p>
        </div>

        {/* Liste verticale élégante */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 mb-16 md:mb-28">

          {/* 1. AUXILIAIRES DE L'EUCHARISTIE */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  01
                </span>
              </div>

              <div className="flex-1 border-l-2 border-emerald-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Auxiliaires de l'Eucharistie
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                      Service de communion
                    </p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Laïcs mandatés pour distribuer la communion lors des célébrations eucharistiques et porter la communion aux personnes malades ou empêchées.
                </p>
              </div>
            </div>
          </div>

          {/* 2. CHORALES */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  02
                </span>
              </div>

              <div className="flex-1 border-l-2 border-amber-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Chorales
                  </h3>
                  <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                      Louange et chant sacré
                    </p>
                  </div>
                </div>

                {/* Chorales adultes */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-stone-800 mb-3">Chœurs adultes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Le Muguet</p>
                      <p className="text-sm text-stone-600">Aproz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">La Caecilia</p>
                      <p className="text-sm text-stone-600">Fey</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">La Davidica</p>
                      <p className="text-sm text-stone-600">Basse-Nendaz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Le chœur St-Michel</p>
                      <p className="text-sm text-stone-600">Haute-Nendaz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">L'ensemble Inter'Val</p>
                      <p className="text-sm text-stone-600">Multi-paroisses</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Groupe Pop-Louange</p>
                      <p className="text-sm text-stone-600">Jeunes</p>
                    </div>
                  </div>
                </div>

                {/* Chorales enfants */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-stone-800 mb-3">Chœurs d'enfants</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Little Muguet</p>
                      <p className="text-sm text-stone-600">Aproz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Méli-mélo</p>
                      <p className="text-sm text-stone-600">Basse-Nendaz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Méli-mélo Académie</p>
                      <p className="text-sm text-stone-600">Basse-Nendaz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">La Barlouka Kadémie</p>
                      <p className="text-sm text-stone-600">Veysonnaz</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold text-stone-800">Le Cöbla di Dju</p>
                      <p className="text-sm text-stone-600">L'équipe du Bon Dieu</p>
                    </div>
                  </div>
                </div>

                {/* Autres ensembles */}
                <div>
                  <h4 className="text-lg font-semibold text-stone-800 mb-3">Autres ensembles</h4>
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="font-semibold text-stone-800">Spirit-Brass</p>
                    <p className="text-sm text-stone-600">Ensemble de jeunes musiciens de cuivre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. LECTEURS */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-sky-500/20 group-hover:text-sky-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  03
                </span>
              </div>

              <div className="flex-1 border-l-2 border-sky-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Lecteurs
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-sky-700 font-semibold">
                      Proclamation de la Parole
                    </p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Service de proclamation des lectures bibliques lors des célébrations liturgiques. Formation et accompagnement proposés pour ce ministère.
                </p>
              </div>
            </div>
          </div>

          {/* 4. SACRISTAINS */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  04
                </span>
              </div>

              <div className="flex-1 border-l-2 border-emerald-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Sacristains
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                      Service discret et essentiel
                    </p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Préparation et entretien des lieux de culte, des vases sacrés et des ornements liturgiques. Service indispensable à la beauté des célébrations.
                </p>
              </div>
            </div>
          </div>

          {/* 5. SERVANTS DE MESSE */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  05
                </span>
              </div>

              <div className="flex-1 border-l-2 border-amber-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Servants de messe
                  </h3>
                  <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                      Service de l'autel
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Public</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Enfants et jeunes (8-18 ans)</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Formation</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Accompagnement régulier</p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Service de l'autel et participation active aux célébrations eucharistiques. Formation proposée aux enfants dès la 3H.
                </p>
              </div>
            </div>
          </div>

          {/* 6. SERVICE AUDIOVISUEL */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-sky-500/20 group-hover:text-sky-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  06
                </span>
              </div>

              <div className="flex-1 border-l-2 border-sky-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Service audiovisuel
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-sky-700 font-semibold">
                      Technique au service de la liturgie
                    </p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Gestion de la sonorisation, projection des chants et diffusion des messes en direct sur YouTube. Service technique discret mais essentiel pour permettre à tous de participer pleinement aux célébrations.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Citation biblique Pierre et Lumière */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative py-16 px-12 bg-gradient-to-br from-white to-stone-50 border-2 border-stone-200 rounded-2xl shadow-lg">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-amber-400 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-amber-400 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-amber-400 rounded-br-2xl"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-stone-800 mb-6 leading-relaxed"
                 style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Que tout se fasse décemment et avec ordre<br />pour l'édification de tous. »
              </p>
              <div className="w-16 h-px bg-amber-500 mx-auto mb-4"></div>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">
                1 Corinthiens 14, 40
              </p>
            </div>
          </div>
        </div>

        {/* Appel sobre */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Pour rejoindre l'un de ces services liturgiques ou obtenir davantage d'informations,<br />nous vous invitons à prendre contact avec le secrétariat paroissial.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border-2 border-stone-700 text-stone-700 font-semibold uppercase tracking-widest hover:bg-stone-700 hover:text-white transition-all duration-300 rounded"
          >
            Nous contacter
          </Link>
        </div>

      </div>
    </div>
  )
}
