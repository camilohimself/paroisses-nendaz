import Link from 'next/link';
import { CALENDARS_CONFIG } from '@/lib/calendars-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos paroisses et chapelles - Paroisses de Nendaz',
  description: 'Découvrez toutes les églises, chapelles et lieux de culte des secteurs de Nendaz, Veysonnaz et environs.',
  openGraph: {
    title: 'Nos paroisses et chapelles - Paroisses de Nendaz',
    description: 'Découvrez toutes les églises, chapelles et lieux de culte des secteurs de Nendaz, Veysonnaz et environs.',
  },
};

export default function ParoissesIndexPage() {
  // Regrouper les calendriers par secteur
  const nendazCalendars = CALENDARS_CONFIG.filter(c => c.sector === 'nendaz');
  const veysonnazCalendars = CALENDARS_CONFIG.filter(c => c.sector === 'veysonnaz');
  const autresCalendars = CALENDARS_CONFIG.filter(c => c.sector === 'autres');

  // Fonction pour obtenir la couleur selon le type
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'eglise': return 'sky-500';
      case 'chapelle': return 'emerald-500';
      case 'ems': return 'amber-500';
      case 'oratoire': return 'rose-500';
      case 'equipe': return 'indigo-500';
      default: return 'neutral-gris';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'eglise': return 'Église';
      case 'chapelle': return 'Chapelle';
      case 'ems': return 'EMS';
      case 'oratoire': return 'Oratoire';
      case 'equipe': return 'Équipe';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Secteur de Nendaz et Veysonnaz
          </h1>
          <div className="w-24 h-0.5 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-neutral-gris italic max-w-2xl mx-auto text-lg">
            20+ lieux de culte vous accueillent dans nos vallées
          </p>
        </div>
      </div>

      {/* Section NENDAZ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Titre Section Nendaz */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Paroisses de Nendaz
              </h2>
              <div className="w-24 h-0.5 bg-sky-500 mx-auto mb-6"></div>
              <p className="text-neutral-gris max-w-2xl mx-auto">
                {nendazCalendars.length} lieux de culte • Basse-Nendaz • Haute-Nendaz • Chapelles de montagne
              </p>
            </div>

            {/* Liste VERSION 2 - Nendaz */}
            <div className="space-y-0">
              {nendazCalendars.map((calendar, index) => {
                const color = getTypeColor(calendar.type);
                const isLast = index === nendazCalendars.length - 1;

                return (
                  <div key={calendar.id} className={`group relative ${!isLast ? 'border-b-2 border-neutral-grisClaire' : ''}`}>
                    <Link
                      href={`/paroisses/${calendar.id}`}
                      className={`block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-${color}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-3">
                            <h3 className={`text-2xl font-bold text-neutral-anthracite group-hover:text-${color.replace('500', '600')} transition-colors mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                              {calendar.name}
                            </h3>
                            <p className={`text-sm text-${color.replace('500', '600')} font-semibold uppercase tracking-wide`}>
                              {getTypeLabel(calendar.type)}
                            </p>
                          </div>
                          {calendar.defaultLocation && (
                            <p className="text-neutral-gris leading-relaxed">
                              {calendar.defaultLocation}
                            </p>
                          )}
                        </div>
                        <svg className={`w-6 h-6 text-neutral-gris group-hover:text-${color} group-hover:translate-x-2 transition-all flex-shrink-0 ml-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Section VEYSONNAZ */}
      <section className="py-20 bg-neutral-grisClaire/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Titre Section Veysonnaz */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Paroisses de Veysonnaz
              </h2>
              <div className="w-24 h-0.5 bg-emerald-500 mx-auto mb-6"></div>
              <p className="text-neutral-gris max-w-2xl mx-auto">
                {veysonnazCalendars.length} lieux de culte • Église • Chapelles de montagne
              </p>
            </div>

            {/* Liste VERSION 2 - Veysonnaz */}
            <div className="space-y-0 bg-white rounded-lg overflow-hidden shadow-lg">
              {veysonnazCalendars.map((calendar, index) => {
                const color = getTypeColor(calendar.type);
                const isLast = index === veysonnazCalendars.length - 1;

                return (
                  <div key={calendar.id} className={`group relative ${!isLast ? 'border-b-2 border-neutral-grisClaire' : ''}`}>
                    <Link
                      href={`/paroisses/${calendar.id}`}
                      className={`block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-${color}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-3">
                            <h3 className={`text-2xl font-bold text-neutral-anthracite group-hover:text-${color.replace('500', '600')} transition-colors mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                              {calendar.name}
                            </h3>
                            <p className={`text-sm text-${color.replace('500', '600')} font-semibold uppercase tracking-wide`}>
                              {getTypeLabel(calendar.type)}
                            </p>
                          </div>
                          {calendar.defaultLocation && (
                            <p className="text-neutral-gris leading-relaxed">
                              {calendar.defaultLocation}
                            </p>
                          )}
                        </div>
                        <svg className={`w-6 h-6 text-neutral-gris group-hover:text-${color} group-hover:translate-x-2 transition-all flex-shrink-0 ml-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Section AUTRES */}
      {autresCalendars.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Titre Section Autres */}
              <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Autres secteurs
                </h2>
                <div className="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
                <p className="text-neutral-gris max-w-2xl mx-auto">
                  {autresCalendars.length} lieux de culte • Aproz • Fey • EMS
                </p>
              </div>

              {/* Liste VERSION 2 - Autres */}
              <div className="space-y-0">
                {autresCalendars.map((calendar, index) => {
                  const color = getTypeColor(calendar.type);
                  const isLast = index === autresCalendars.length - 1;

                  return (
                    <div key={calendar.id} className={`group relative ${!isLast ? 'border-b-2 border-neutral-grisClaire' : ''}`}>
                      <Link
                        href={`/paroisses/${calendar.id}`}
                        className={`block py-10 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-${color}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="mb-3">
                              <h3 className={`text-2xl font-bold text-neutral-anthracite group-hover:text-${color.replace('500', '600')} transition-colors mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                                {calendar.name}
                              </h3>
                              <p className={`text-sm text-${color.replace('500', '600')} font-semibold uppercase tracking-wide`}>
                                {getTypeLabel(calendar.type)}
                              </p>
                            </div>
                            {calendar.defaultLocation && (
                              <p className="text-neutral-gris leading-relaxed">
                                {calendar.defaultLocation}
                              </p>
                            )}
                          </div>
                          <svg className={`w-6 h-6 text-neutral-gris group-hover:text-${color} group-hover:translate-x-2 transition-all flex-shrink-0 ml-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Citation finale */}
      <section className="py-20 bg-neutral-grisClaire/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative py-12">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
              <p className="text-neutral-anthracite text-2xl leading-relaxed max-w-2xl mx-auto text-center" style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Là où deux ou trois sont réunis en mon nom, je suis au milieu d'eux. »
              </p>
              <p className="text-neutral-gris text-center mt-4">— Matthieu 18,20</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
