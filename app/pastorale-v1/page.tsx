import Link from 'next/link'

export default function PastoraleV1() {
  return (
    <div className="min-h-screen bg-neutral-blanc">
      <div className="container mx-auto px-6 py-24">

        {/* En-tête sobre et institutionnel */}
        <div className="max-w-5xl mx-auto mb-24 text-center">
          <div className="mb-6">
            <div className="inline-block w-20 h-1 bg-neutral-anthracite"></div>
          </div>
          <h1 className="text-7xl font-bold text-neutral-anthracite mb-8 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}>
            La vie de chrétien et ses groupes
          </h1>
          <p className="text-2xl text-neutral-gris leading-relaxed max-w-3xl mx-auto">
            La vie chrétienne se vit en communauté. Nos paroisses proposent différents groupes et activités pour nourrir votre foi et tisser des liens fraternels.
          </p>
        </div>

        {/* Grille sobre - 2 colonnes */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">

          {/* 1. CHAPELET */}
          <div className="bg-white border-2 border-neutral-gris/20 p-8 hover:border-paroisse-bleuCiel transition-all duration-300">
            <div className="border-l-4 border-paroisse-bleuCiel pl-6 mb-6">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Groupe de prière du chapelet
              </h3>
              <p className="text-sm uppercase tracking-wider text-paroisse-bleuCiel font-semibold">
                Prière mariale
              </p>
            </div>

            <div className="space-y-3 mb-6 text-neutral-gris">
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Horaire :</strong> Mardi 18h00
              </p>
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Lieu :</strong> Église de Basse-Nendaz
              </p>
            </div>

            <p className="text-base text-neutral-gris leading-relaxed">
              Prière du chapelet en communauté pour confier nos intentions à la Vierge Marie.
            </p>
          </div>

          {/* 2. ADORATION */}
          <div className="bg-white border-2 border-neutral-gris/20 p-8 hover:border-paroisse-vert transition-all duration-300">
            <div className="border-l-4 border-paroisse-vert pl-6 mb-6">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Adoration eucharistique
              </h3>
              <p className="text-sm uppercase tracking-wider text-paroisse-vert font-semibold">
                Silence & recueillement
              </p>
            </div>

            <div className="space-y-3 mb-6 text-neutral-gris">
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Horaire :</strong> Jeudi 19h30
              </p>
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Lieu :</strong> Chapelle Saint-Michel
              </p>
            </div>

            <p className="text-base text-neutral-gris leading-relaxed">
              Temps de prière silencieuse devant le Saint-Sacrement exposé.
            </p>
          </div>

          {/* 3. VISITEURS */}
          <div className="bg-white border-2 border-neutral-gris/20 p-8 hover:border-paroisse-jaune transition-all duration-300">
            <div className="border-l-4 border-paroisse-jaune pl-6 mb-6">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Groupe des visiteurs
              </h3>
              <p className="text-sm uppercase tracking-wider text-paroisse-jaune font-semibold">
                Présence fraternelle
              </p>
            </div>

            <div className="space-y-3 mb-6 text-neutral-gris">
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Horaire :</strong> Sur rendez-vous
              </p>
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Public :</strong> Personnes âgées et malades
              </p>
            </div>

            <p className="text-base text-neutral-gris leading-relaxed">
              Visites régulières aux personnes isolées, malades ou en établissement médico-social.
            </p>
          </div>

          {/* 4. SERVANTS */}
          <div className="bg-white border-2 border-neutral-gris/20 p-8 hover:border-paroisse-bleuRoi transition-all duration-300">
            <div className="border-l-4 border-paroisse-bleuRoi pl-6 mb-6">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Servants de messe
              </h3>
              <p className="text-sm uppercase tracking-wider text-paroisse-bleuRoi font-semibold">
                Service liturgique
              </p>
            </div>

            <div className="space-y-3 mb-6 text-neutral-gris">
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Public :</strong> Enfants et jeunes (8-16 ans)
              </p>
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Formation :</strong> Accompagnement régulier
              </p>
            </div>

            <p className="text-base text-neutral-gris leading-relaxed">
              Les servants d'autel participent activement au déroulement de la liturgie eucharistique.
            </p>
          </div>

          {/* 5. CHORALE */}
          <div className="bg-white border-2 border-neutral-gris/20 p-8 hover:border-paroisse-vert transition-all duration-300">
            <div className="border-l-4 border-paroisse-vert pl-6 mb-6">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Chorale paroissiale
              </h3>
              <p className="text-sm uppercase tracking-wider text-paroisse-vert font-semibold">
                Louange et chant sacré
              </p>
            </div>

            <div className="space-y-3 mb-6 text-neutral-gris">
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Horaire :</strong> Vendredi 20h00
              </p>
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Lieu :</strong> Salle paroissiale
              </p>
            </div>

            <p className="text-base text-neutral-gris leading-relaxed">
              La chorale anime les célébrations liturgiques par le chant et la musique sacrée.
            </p>
          </div>

          {/* 6. CONSEIL */}
          <div className="bg-white border-2 border-neutral-gris/20 p-8 hover:border-paroisse-jaune transition-all duration-300">
            <div className="border-l-4 border-paroisse-jaune pl-6 mb-6">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Conseil pastoral paroissial
              </h3>
              <p className="text-sm uppercase tracking-wider text-paroisse-jaune font-semibold">
                Gouvernance et animation
              </p>
            </div>

            <div className="space-y-3 mb-6 text-neutral-gris">
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Fréquence :</strong> Trimestriel
              </p>
              <p className="text-lg">
                <strong className="text-neutral-anthracite">Rôle :</strong> Orientation pastorale
              </p>
            </div>

            <p className="text-base text-neutral-gris leading-relaxed">
              Instance consultative qui accompagne le curé dans l'animation de la vie paroissiale.
            </p>
          </div>

        </div>

        {/* Citation biblique sobre */}
        <div className="max-w-4xl mx-auto text-center border-t-2 border-b-2 border-neutral-gris/20 py-16">
          <p className="text-4xl font-bold text-neutral-anthracite mb-8 leading-relaxed"
             style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
            « Là où deux ou trois sont réunis en mon nom, je suis au milieu d'eux. »
          </p>
          <p className="text-lg text-neutral-gris uppercase tracking-wider">
            Matthieu 18, 20
          </p>
        </div>

        {/* CTA sobre */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <p className="text-xl text-neutral-gris mb-8">
            Pour rejoindre l'un de ces groupes ou obtenir plus d'informations, n'hésitez pas à nous contacter.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-neutral-anthracite text-white font-semibold uppercase tracking-wider hover:bg-paroisse-bleuRoi transition-colors duration-300"
          >
            Nous contacter
          </Link>
        </div>

      </div>
    </div>
  )
}
