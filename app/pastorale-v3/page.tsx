import Link from 'next/link'

export default function PastoraleV3() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">

        {/* En-tête classique avec croix latine */}
        <div className="max-w-6xl mx-auto mb-32 text-center">
          {/* Croix latine stylisée */}
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <div className="w-1 h-16 bg-neutral-anthracite mx-auto"></div>
              <div className="w-8 h-1 bg-neutral-anthracite absolute top-4 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <h1 className="text-7xl font-bold text-neutral-anthracite mb-12 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            La vie de chrétien et ses groupes
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-neutral-gris leading-relaxed mb-8">
              « Vous êtes le corps du Christ, et membres chacun pour sa part. »
            </p>
            <p className="text-sm uppercase tracking-widest text-neutral-gris/60 mb-10">
              1 Corinthiens 12, 27
            </p>
            <div className="w-24 h-px bg-neutral-anthracite mx-auto mb-10"></div>
            <p className="text-xl text-neutral-gris leading-relaxed">
              Nos paroisses proposent différentes formes d'engagement et de prière communautaire, pour vivre la foi au quotidien et servir l'Église locale.
            </p>
          </div>
        </div>

        {/* Grille 3 colonnes - Style traditionnel */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-px bg-neutral-gris/20">

            {/* 1. CHAPELET */}
            <div className="bg-white p-10">
              <div className="mb-6 pb-6 border-b-2 border-paroisse-bleuCiel/30">
                <div className="text-center mb-4">
                  <div className="inline-block w-12 h-12 border-2 border-paroisse-bleuCiel rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-paroisse-bleuCiel"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                      I
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-anthracite text-center mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  Groupe de prière<br />du chapelet
                </h3>
                <p className="text-xs uppercase tracking-widest text-center text-paroisse-bleuCiel font-semibold">
                  Prière mariale
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Horaire</p>
                  <p className="text-lg font-semibold text-neutral-anthracite">Mardi 18h00</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Lieu</p>
                  <p className="text-base text-neutral-anthracite">Église de Basse-Nendaz</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-neutral-gris leading-relaxed">
                    Méditation des mystères du rosaire en communion avec la Vierge Marie.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. ADORATION */}
            <div className="bg-white p-10">
              <div className="mb-6 pb-6 border-b-2 border-paroisse-vert/30">
                <div className="text-center mb-4">
                  <div className="inline-block w-12 h-12 border-2 border-paroisse-vert rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-paroisse-vert"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                      II
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-anthracite text-center mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  Adoration<br />eucharistique
                </h3>
                <p className="text-xs uppercase tracking-widest text-center text-paroisse-vert font-semibold">
                  Silence sacré
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Horaire</p>
                  <p className="text-lg font-semibold text-neutral-anthracite">Jeudi 19h30</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Lieu</p>
                  <p className="text-base text-neutral-anthracite">Chapelle Saint-Michel</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-neutral-gris leading-relaxed">
                    Prière silencieuse en présence du Saint-Sacrement exposé.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. VISITEURS */}
            <div className="bg-white p-10">
              <div className="mb-6 pb-6 border-b-2 border-paroisse-jaune/30">
                <div className="text-center mb-4">
                  <div className="inline-block w-12 h-12 border-2 border-paroisse-jaune rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-paroisse-jaune"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                      III
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-anthracite text-center mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  Groupe<br />des visiteurs
                </h3>
                <p className="text-xs uppercase tracking-widest text-center text-paroisse-jaune font-semibold">
                  Charité
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Fréquence</p>
                  <p className="text-lg font-semibold text-neutral-anthracite">Sur rendez-vous</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Public</p>
                  <p className="text-base text-neutral-anthracite">Personnes âgées et malades</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-neutral-gris leading-relaxed">
                    Service de visite et d'accompagnement fraternel.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. SERVANTS */}
            <div className="bg-white p-10">
              <div className="mb-6 pb-6 border-b-2 border-paroisse-bleuRoi/30">
                <div className="text-center mb-4">
                  <div className="inline-block w-12 h-12 border-2 border-paroisse-bleuRoi rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-paroisse-bleuRoi"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                      IV
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-anthracite text-center mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  Servants<br />de messe
                </h3>
                <p className="text-xs uppercase tracking-widest text-center text-paroisse-bleuRoi font-semibold">
                  Service liturgique
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Public</p>
                  <p className="text-lg font-semibold text-neutral-anthracite">8-16 ans</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Formation</p>
                  <p className="text-base text-neutral-anthracite">Accompagnement régulier</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-neutral-gris leading-relaxed">
                    Service de l'autel et participation à la liturgie.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. CHORALE */}
            <div className="bg-white p-10">
              <div className="mb-6 pb-6 border-b-2 border-paroisse-vert/30">
                <div className="text-center mb-4">
                  <div className="inline-block w-12 h-12 border-2 border-paroisse-vert rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-paroisse-vert"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                      V
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-anthracite text-center mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  Chorale<br />paroissiale
                </h3>
                <p className="text-xs uppercase tracking-widest text-center text-paroisse-vert font-semibold">
                  Chant sacré
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Horaire</p>
                  <p className="text-lg font-semibold text-neutral-anthracite">Vendredi 20h00</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Lieu</p>
                  <p className="text-base text-neutral-anthracite">Salle paroissiale</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-neutral-gris leading-relaxed">
                    Animation musicale des célébrations liturgiques.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. CONSEIL */}
            <div className="bg-white p-10">
              <div className="mb-6 pb-6 border-b-2 border-paroisse-jaune/30">
                <div className="text-center mb-4">
                  <div className="inline-block w-12 h-12 border-2 border-paroisse-jaune rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-paroisse-jaune"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                      VI
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-anthracite text-center mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  Conseil pastoral<br />paroissial
                </h3>
                <p className="text-xs uppercase tracking-widest text-center text-paroisse-jaune font-semibold">
                  Gouvernance
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Fréquence</p>
                  <p className="text-lg font-semibold text-neutral-anthracite">Trimestriel</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-gris mb-1">Mission</p>
                  <p className="text-base text-neutral-anthracite">Orientation pastorale</p>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-neutral-gris leading-relaxed">
                    Instance consultative de la vie paroissiale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Citation encadrée classique */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-neutral-gris/5 p-16 border-4 border-double border-neutral-anthracite/30">
            <div className="text-center">
              {/* Ornement supérieur */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-8 h-px bg-neutral-anthracite/30"></div>
                <div className="w-2 h-2 bg-neutral-anthracite/30 transform rotate-45"></div>
                <div className="w-8 h-px bg-neutral-anthracite/30"></div>
              </div>

              <p className="text-4xl font-bold text-neutral-anthracite mb-8 leading-relaxed"
                 style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Là où deux ou trois sont réunis en mon nom,<br />je suis au milieu d'eux. »
              </p>

              <div className="w-20 h-px bg-neutral-anthracite/30 mx-auto mb-4"></div>

              <p className="text-sm uppercase tracking-widest text-neutral-gris font-semibold">
                Matthieu 18, 20
              </p>

              {/* Ornement inférieur */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="w-8 h-px bg-neutral-anthracite/30"></div>
                <div className="w-2 h-2 bg-neutral-anthracite/30 transform rotate-45"></div>
                <div className="w-8 h-px bg-neutral-anthracite/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Appel final très sobre */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative">
              <div className="w-1 h-12 bg-neutral-anthracite/30 mx-auto mb-6"></div>
              <div className="w-6 h-1 bg-neutral-anthracite/30 absolute top-3 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>

          <p className="text-xl text-neutral-gris mb-10 leading-relaxed">
            Pour rejoindre l'un de ces groupes ou obtenir davantage d'informations,<br />
            veuillez prendre contact avec le secrétariat paroissial.
          </p>

          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-neutral-anthracite text-neutral-anthracite font-semibold uppercase tracking-widest text-sm hover:bg-neutral-anthracite hover:text-white transition-all duration-300"
          >
            Contact
          </Link>
        </div>

      </div>
    </div>
  )
}
