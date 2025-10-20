import Link from 'next/link'
import GrilleAdoration from '@/components/GrilleAdoration'

export default function PrierePage() {
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
            Prière
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-light">
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Adoration eucharistique
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-sky-700 font-semibold">
                      Silence & recueillement
                    </p>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed mb-6">
                  Temps de prière silencieuse en présence du Saint-Sacrement, source et sommet de la vie chrétienne.
                </p>

                {/* Grille responsive des horaires */}
                <GrilleAdoration />
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Chapelet
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                      Prière mariale
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Dimanches 19h30</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider mb-1">Lieu</p>
                    <Link href="/paroisses/saclentse" className="inline-flex items-center gap-1 text-base md:text-lg text-stone-800 font-semibold hover:text-emerald-700 transition-colors group">
                      Saclentse
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    Vêpres
                  </h3>
                  <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                      Prière du soir
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">1ers vendredis du mois • 18h30</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider mb-1">Lieu</p>
                    <Link href="/paroisses/basse-nendaz" className="inline-flex items-center gap-1 text-base md:text-lg text-stone-800 font-semibold hover:text-amber-700 transition-colors group">
                      Basse-Nendaz
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    La Mère pèlerine
                  </h3>
                  <div className="inline-block px-4 py-1 bg-sky-500/10 border border-sky-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-sky-700 font-semibold">
                      Schönstatt
                    </p>
                  </div>
                </div>

                <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4 rounded">
                  <p className="text-sm font-semibold text-stone-800 mb-1">Responsable</p>
                  <p className="text-base text-stone-800">Chantal Fournier</p>
                  <p className="text-sm text-sky-700">+41 79 273 13 32</p>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
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
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>
                    La prière des Mères
                  </h3>
                  <div className="inline-block px-4 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded">
                    <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">
                      Intercession maternelle
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
                  <div>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider mb-1">Horaire</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">Mercredi 8h30-9h30</p>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-stone-500 uppercase tracking-wider mb-1">Lieu</p>
                    <p className="text-base md:text-lg text-stone-800 font-semibold">
                      Salle paroissiale{' '}
                      <Link href="/paroisses/basse-nendaz" className="inline-flex items-center gap-1 hover:text-emerald-700 transition-colors group">
                        Basse-Nendaz
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4 rounded">
                  <p className="text-sm font-semibold text-stone-800 mb-1">Responsable</p>
                  <p className="text-base text-stone-800">Bénédicte Devènes</p>
                  <p className="text-sm text-emerald-700">+41 77 413 61 60</p>
                </div>

                <p className="text-base text-stone-600 leading-relaxed">
                  Des mamans, des grands-mamans se réunissent pour un temps de prières pour leurs enfants, leurs petits-enfants, et tous les enfants de notre paroisse. Ouvert à toutes et soyez les bienvenues !
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
                « Priez sans cesse,<br />en toute circonstance rendez grâce. »
              </p>
              <div className="w-16 h-px bg-amber-500 mx-auto mb-4"></div>
              <p className="text-sm text-stone-500 uppercase tracking-widest font-semibold">
                1 Thessaloniciens 5, 17-18
              </p>
            </div>
          </div>
        </div>

        {/* Appel sobre */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-stone-600 mb-8 leading-relaxed">
            Pour rejoindre l'un de ces groupes ou obtenir davantage d'informations,<br />nous vous invitons à prendre contact avec le secrétariat paroissial.
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
