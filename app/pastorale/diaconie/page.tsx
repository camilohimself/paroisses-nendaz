import Link from 'next/link'

export default function DiaconiePage() {
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
            Diaconie
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-light">
            Services de charité fraternelle et d'accompagnement pour vivre concrètement l'amour du prochain.
          </p>
        </div>

        {/* Liste verticale élégante */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 mb-16 md:mb-28">

          {/* 1. DAMES DES VEILLÉES DE PRIÈRES */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  01
                </span>
              </div>

              <div className="flex-1 border-l-2 border-amber-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Dames des veillées de prières
                  </h3>
                  <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                      Accompagnement des défunts
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Horaire</p>
                  <p className="text-base md:text-lg text-stone-800 font-semibold">Veille des obsèques • 19h30</p>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Organisation et animation des veillées de prière la veille des funérailles, pour accompagner le défunt et soutenir sa famille dans la prière et le recueillement.
                </p>
              </div>
            </div>
          </div>

          {/* 2. HOSPITALIERS DE LOURDES */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-sky-500/20 group-hover:text-sky-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  02
                </span>
              </div>

              <div className="flex-1 border-l-2 border-sky-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Hospitaliers de Lourdes
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-sky-700 font-semibold">
                      Service des pèlerinages
                    </p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed mb-4">
                  Accompagnement et assistance bénévole des personnes malades, handicapées ou âgées lors des pèlerinages diocésains, notamment à Lourdes. Service de présence, d'écoute et d'aide pratique durant tout le pèlerinage.
                </p>

                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded">
                  <p className="text-sm text-sky-800">
                    <strong>À noter :</strong> Pendant le mois de mai, les hospitaliers animent le chapelet dans les différentes chapelles de la paroisse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. MCR-VIE MONTANTE */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  03
                </span>
              </div>

              <div className="flex-1 border-l-2 border-emerald-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Mouvement Chrétien des Retraités
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                      MCR - Vie montante
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Public</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Personnes retraitées</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Activités</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Rencontres, partages, sorties</p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Mouvement pour les personnes retraitées qui favorise la réflexion chrétienne, le partage fraternel et les questionnements sur le sens de la vie, des engagements et du vieillissement dans la foi.
                </p>
              </div>
            </div>
          </div>

          {/* 4. VISITEUSES ET VISITEURS */}
          <div className="group relative">
            <div className="flex items-start gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 md:w-24 text-right">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  04
                </span>
              </div>

              <div className="flex-1 border-l-2 border-amber-500 pl-4 md:pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Visiteuses et visiteurs des malades
                  </h3>
                  <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                      Présence et réconfort
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Service</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Visites régulières</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-stone-600 uppercase tracking-wider mb-1">Public</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Personnes isolées, malades, EMS</p>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 rounded">
                  <p className="text-sm font-semibold text-stone-800 mb-1">Responsable</p>
                  <p className="text-base text-stone-800">Marie-Noëlle Délèze</p>
                  <p className="text-sm text-amber-700">+41 79 542 49 55</p>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Service bénévole de visite régulière auprès des personnes isolées, malades ou en établissement médico-social. Présence, écoute, réconfort et lien avec la communauté paroissiale.
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
                « Ce que vous avez fait au plus petit d'entre les miens,<br />c'est à moi que vous l'avez fait. »
              </p>
              <div className="w-16 h-px bg-amber-500 mx-auto mb-4"></div>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">
                Évangile selon Saint Matthieu 25, 40
              </p>
            </div>
          </div>
        </div>

        {/* Appel sobre */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Pour rejoindre l'un de ces services ou obtenir davantage d'informations,<br />nous vous invitons à prendre contact avec le secrétariat paroissial.
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
