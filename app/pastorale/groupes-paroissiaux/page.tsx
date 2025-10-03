import Link from 'next/link'

export default function GroupesParoissiaux() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-gris/10">
      <div className="container mx-auto px-6 py-24">

        {/* En-tête élégant */}
        <div className="max-w-5xl mx-auto mb-28 text-center">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-paroisse-jaune to-paroisse-jaune"></div>
            <div className="w-3 h-3 bg-paroisse-jaune transform rotate-45"></div>
            <div className="w-32 h-px bg-gradient-to-l from-transparent via-paroisse-jaune to-paroisse-jaune"></div>
          </div>

          <h1 className="text-8xl font-bold text-neutral-anthracite mb-10 tracking-tight leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            Groupes paroissiaux
          </h1>

          <p className="text-2xl text-neutral-gris leading-relaxed max-w-3xl mx-auto font-light">
            Nos paroisses proposent de multiples groupes et mouvements pour vivre la foi ensemble, servir et grandir dans la charité fraternelle.
          </p>
        </div>

        {/* Liste verticale élégante avec numérotation */}
        <div className="max-w-5xl mx-auto space-y-12 mb-28">

          {/* 1. SERVANTS & LECTEURS */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-bleuCiel/20 group-hover:text-paroisse-bleuCiel/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  01
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-bleuCiel pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Servants de Messe, Jeunes Lecteurs, Service Technique
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-bleuCiel/10 border border-paroisse-bleuCiel/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-bleuCiel font-semibold">
                      S&apos;engager au service de l&apos;autel
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Les jeunes sont invités à servir la liturgie dans différentes fonctions : servants d&apos;autel, lecteurs ou service technique (sonorisation, projection).
                </p>
              </div>
            </div>
          </div>

          {/* 2. RENOUVEAU CHARISMATIQUE */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-vert/20 group-hover:text-paroisse-vert/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  02
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-vert pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Prière du Renouveau Charismatique
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-vert/10 border border-paroisse-vert/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-vert font-semibold">
                      Groupe de prière en communion fraternelle
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Mercredi 20h00</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Chapelle de Brignon</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Temps de prière charismatique, de louange et de partage dans la puissance de l&apos;Esprit Saint.
                </p>
              </div>
            </div>
          </div>

          {/* 3. VIE MONTANTE */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-jaune/20 group-hover:text-paroisse-jaune/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  03
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-jaune pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Mouvement Chrétien des Retraités (Vie Montante)
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-jaune/10 border border-paroisse-jaune/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-jaune font-semibold">
                      Réflexion chrétienne et partage fraternel
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Public</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Personnes retraitées</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Thèmes</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Sens de la vie, engagements</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Mouvement pour les retraités qui favorise la réflexion chrétienne, le partage fraternel et les questionnements sur le sens de la vie et des engagements.
                </p>
              </div>
            </div>
          </div>

          {/* 4. VEILLÉES DE PRIÈRE */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-bleuRoi/20 group-hover:text-paroisse-bleuRoi/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  04
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-bleuRoi pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Veillées de Prière
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-bleuRoi/10 border border-paroisse-bleuRoi/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-bleuRoi font-semibold">
                      Prière pour les défunts
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Veille des obsèques à 20h00</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Aproz</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">19h30</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Veillée de prière organisée la veille des funérailles pour accompagner le défunt et soutenir sa famille dans la prière.
                </p>
              </div>
            </div>
          </div>

          {/* 5. MÈRE PÈLERINE */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-vert/20 group-hover:text-paroisse-vert/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  05
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-vert pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Mère Pèlerine de Schönstatt
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-vert/10 border border-paroisse-vert/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-vert font-semibold">
                      Icône mariale itinérante
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Une icône de Marie voyage de famille en famille, permettant à chacun d&apos;accueillir la présence de la Mère de Dieu dans son foyer pour un temps de prière personnelle ou familiale.
                </p>
              </div>
            </div>
          </div>

          {/* 6. CHŒURS */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-jaune/20 group-hover:text-paroisse-jaune/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  06
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-jaune pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Chœurs paroissiaux
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-jaune/10 border border-paroisse-jaune/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-jaune font-semibold">
                      Louange musicale
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Plusieurs chœurs et ensembles musicaux animent les célébrations liturgiques dans nos différentes églises et chapelles. Contactez le secrétariat paroissial pour plus d&apos;informations.
                </p>
              </div>
            </div>
          </div>

          {/* 7. VISITEURS DE MALADES */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-bleuCiel/20 group-hover:text-paroisse-bleuCiel/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  07
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-bleuCiel pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Visiteurs et Visiteuses de Malades
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-bleuCiel/10 border border-paroisse-bleuCiel/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-bleuCiel font-semibold">
                      Service de visite bénévole
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Bénévoles qui rendent visite aux personnes malades ou isolées pour leur apporter présence, écoute et réconfort.
                </p>
              </div>
            </div>
          </div>

          {/* 8. HOSPITALIERS DE LOURDES */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-vert/20 group-hover:text-paroisse-vert/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  08
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-vert pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Hospitaliers(ères) Notre-Dame de Lourdes
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-vert/10 border border-paroisse-vert/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-vert font-semibold">
                      Service des pèlerinages
                    </p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Accompagnement et assistance des personnes malades ou handicapées lors des pèlerinages diocésains, notamment à Lourdes.
                </p>
              </div>
            </div>
          </div>

          {/* 9. EQUIPES NOTRE-DAME */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-jaune/20 group-hover:text-paroisse-jaune/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  09
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-jaune pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Équipes Notre-Dame
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-jaune/10 border border-paroisse-jaune/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-jaune font-semibold">
                      Spiritualité conjugale
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Public</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Couples mariés</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Fréquence</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Mensuel avec prêtre</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Mouvement international de couples qui se réunissent mensuellement pour approfondir leur vie spirituelle et conjugale, accompagnés par un prêtre.
                </p>
              </div>
            </div>
          </div>

          {/* 10. PRIÈRE DES MÈRES */}
          <div className="group relative">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-6xl font-bold text-paroisse-bleuRoi/20 group-hover:text-paroisse-bleuRoi/40 transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                  10
                </span>
              </div>

              <div className="flex-1 border-l-2 border-paroisse-bleuRoi pl-8 py-2">
                <div className="mb-4">
                  <h3 className="text-4xl font-bold text-neutral-anthracite mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Prière des Mères
                  </h3>
                  <div className="inline-block px-4 py-1 bg-paroisse-bleuRoi/10 border border-paroisse-bleuRoi/30">
                    <p className="text-xs uppercase tracking-widest text-paroisse-bleuRoi font-semibold">
                      Intercession maternelle
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Mercredi 8h30</p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-gris uppercase tracking-wider mb-1">Lieu (été)</p>
                    <p className="text-lg text-neutral-anthracite font-semibold">Chapelle Saint-Michel</p>
                  </div>
                </div>

                <p className="text-base text-neutral-gris leading-relaxed">
                  Groupe de prière de mères qui se retrouvent pour confier leurs enfants au Seigneur et intercéder pour leurs besoins.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Citation biblique avec cadre élégant */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative py-16 px-12 bg-white border-2 border-neutral-gris/20">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-paroisse-jaune"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-paroisse-jaune"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-paroisse-jaune"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-paroisse-jaune"></div>

            <div className="text-center">
              <p className="text-4xl font-bold text-neutral-anthracite mb-6 leading-relaxed"
                 style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Vous êtes le corps du Christ,<br />et membres chacun pour sa part. »
              </p>
              <div className="w-16 h-px bg-paroisse-jaune mx-auto mb-4"></div>
              <p className="text-sm text-neutral-gris uppercase tracking-widest font-semibold">
                1 Corinthiens 12, 27
              </p>
            </div>
          </div>
        </div>

        {/* Appel sobre */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-neutral-gris mb-8 leading-relaxed">
            Pour rejoindre l&apos;un de ces groupes ou obtenir davantage d&apos;informations,<br />nous vous invitons à prendre contact avec le secrétariat paroissial.
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
