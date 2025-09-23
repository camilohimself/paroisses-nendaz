import { CALENDARS_CONFIG, getCalendarsBySector } from '@/lib/calendars-config';
import { getParoisseContent, getParoisseExtract } from '@/lib/paroisses-content';
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
  // Grouper les calendriers par secteur
  const secteurs = {
    nendaz: getCalendarsBySector('nendaz'),
    veysonnaz: getCalendarsBySector('veysonnaz'),
    autres: getCalendarsBySector('autres'),
    transversal: getCalendarsBySector('transversal')
  };

  // Icône selon le type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'eglise': return '⛪';
      case 'chapelle': return '🏛️';
      case 'ems': return '🏠';
      case 'oratoire': return '🕯️';
      case 'equipe': return '👥';
      default: return '📍';
    }
  };

  // Couleur d'accent selon le secteur - Nouvelle charte graphique
  const getSectorColor = (sector: string) => {
    switch (sector) {
      case 'nendaz': return 'from-paroisse-bleuRoi to-paroisse-bleuMarine';
      case 'veysonnaz': return 'from-paroisse-violet to-paroisse-rouge';
      case 'autres': return 'from-paroisse-vert to-paroisse-turquoise';
      case 'transversal': return 'from-paroisse-jaune to-paroisse-rouge';
      default: return 'from-neutral-gris to-neutral-anthracite';
    }
  };

  const getSectorTitle = (sector: string) => {
    switch (sector) {
      case 'nendaz': return 'Secteur de Nendaz';
      case 'veysonnaz': return 'Secteur de Veysonnaz';
      case 'autres': return 'Autres secteurs';
      case 'transversal': return 'Équipe pastorale';
      default: return sector;
    }
  };

  const getSectorDescription = (sector: string) => {
    switch (sector) {
      case 'nendaz':
        return 'Églises et chapelles du secteur de Nendaz, comprenant Basse-Nendaz, Haute-Nendaz et leurs chapelles environnantes.';
      case 'veysonnaz':
        return 'Lieux de culte du secteur de Veysonnaz, incluant l\'église principale et les chapelles de montagne.';
      case 'autres':
        return 'Églises, EMS et oratoires des secteurs voisins en lien avec notre communauté paroissiale.';
      case 'transversal':
        return 'Équipe pastorale et services communs à l\'ensemble des paroisses du diocèse.';
      default:
        return '';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-bleuCiel/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-neutral-anthracite mb-4">
            Nos paroisses et chapelles
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl mx-auto">
            Découvrez tous les lieux de culte de notre communauté paroissiale,
            répartis dans les magnifiques vallées de Nendaz et Veysonnaz.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-lg text-neutral-anthracite bg-paroisse-jaune/10 border-l-4 border-paroisse-jaune p-4 rounded-r-lg">
              <strong>20+ lieux de culte</strong> vous accueillent pour la prière,
              les célébrations et les moments de recueillement dans un cadre alpin exceptionnel.
            </p>
          </div>
        </div>

        {/* Statistiques avec nouvelle charte */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-paroisse-bleuRoi">
            <div className="text-3xl font-bold text-paroisse-bleuRoi mb-2">
              {CALENDARS_CONFIG.filter(c => c.type === 'eglise').length}
            </div>
            <div className="text-neutral-gris text-sm font-medium">Églises</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-paroisse-violet">
            <div className="text-3xl font-bold text-paroisse-violet mb-2">
              {CALENDARS_CONFIG.filter(c => c.type === 'chapelle').length}
            </div>
            <div className="text-neutral-gris text-sm font-medium">Chapelles</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-paroisse-vert">
            <div className="text-3xl font-bold text-paroisse-vert mb-2">
              {CALENDARS_CONFIG.filter(c => c.type === 'ems').length}
            </div>
            <div className="text-neutral-gris text-sm font-medium">EMS & Oratoires</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-paroisse-rouge">
            <div className="text-3xl font-bold text-paroisse-rouge mb-2">
              {CALENDARS_CONFIG.length}
            </div>
            <div className="text-neutral-gris text-sm font-medium">Total lieux</div>
          </div>
        </div>

        {/* Secteurs */}
        <div className="space-y-16">
          {Object.entries(secteurs).map(([sector, calendars]) => (
            <div key={sector} className="max-w-6xl mx-auto">
              {/* Header du secteur */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${getSectorColor(sector)} text-white shadow-lg mb-4`}
                >
                  <span className="text-2xl">
                    {sector === 'nendaz' && '⛰️'}
                    {sector === 'veysonnaz' && '🏔️'}
                    {sector === 'autres' && '🌄'}
                    {sector === 'transversal' && '👥'}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-neutral-anthracite mb-2">
                  {getSectorTitle(sector)}
                </h2>
                <p className="text-neutral-gris max-w-2xl mx-auto">
                  {getSectorDescription(sector)}
                </p>
              </div>

              {/* Grid des lieux enrichi avec extraits */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {calendars.map((calendar) => {
                  const content = getParoisseContent(calendar.id);
                  return (
                    <a
                      key={calendar.id}
                      href={`/paroisses/${calendar.id}`}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-paroisse-bleuRoi/30"
                    >
                      {/* Header coloré */}
                      <div
                        className="h-3"
                        style={{ backgroundColor: calendar.color }}
                      />

                      <div className="p-6">
                        {/* Icône et nom */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition">
                              <span className="text-2xl">
                                {getTypeIcon(calendar.type)}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-neutral-anthracite group-hover:text-paroisse-bleuRoi transition">
                              {calendar.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-sm text-neutral-gris capitalize">
                                {calendar.type}
                              </p>
                              {content?.dateConstruction && (
                                <span className="text-xs px-2 py-1 bg-paroisse-jaune/10 text-paroisse-jaune rounded-full">
                                  {content.dateConstruction.length > 15
                                    ? content.dateConstruction.substring(0, 15) + '...'
                                    : content.dateConstruction
                                  }
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Patron */}
                        {content?.patron && (
                          <div className="mb-3">
                            <span className="text-sm font-medium text-paroisse-bleuRoi">
                              {content.patron}
                            </span>
                          </div>
                        )}

                        {/* Extrait historique */}
                        {content && (
                          <div className="mb-4">
                            <p className="text-sm text-neutral-gris leading-relaxed">
                              {getParoisseExtract(content)}
                            </p>
                          </div>
                        )}

                        {/* Localisation */}
                        {calendar.defaultLocation && (
                          <div className="flex items-center gap-2 text-sm text-neutral-gris mb-4">
                            <span className="text-neutral-gris">📍</span>
                            <span className="truncate">{calendar.defaultLocation}</span>
                          </div>
                        )}

                        {/* Horaires principaux */}
                        {content?.horaires.dominicale && (
                          <div className="mb-4 p-3 bg-neutral-grisClaire rounded-lg">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-paroisse-rouge">⛪</span>
                              <span className="font-medium text-neutral-anthracite">Messe dominicale:</span>
                            </div>
                            <p className="text-xs text-neutral-gris mt-1">{content.horaires.dominicale}</p>
                          </div>
                        )}

                        {/* Footer avec secteur et lien */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: calendar.color }}
                          >
                            {getSectorTitle(calendar.sector).replace('Secteur de ', '').replace('Secteur ', '')}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-paroisse-bleuRoi group-hover:text-paroisse-rouge transition">
                            <span>Découvrir</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Section informative enrichie */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-paroisse-bleuRoi">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-neutral-anthracite mb-4">
                Une communauté, plusieurs lieux
              </h3>
              <p className="text-neutral-gris leading-relaxed mb-6 text-lg">
                Chaque église, chapelle et lieu de culte a sa propre identité et son histoire,
                tout en faisant partie de notre grande famille paroissiale. Découvrez les horaires
                spécifiques de chaque lieu et participez à la vie spirituelle de votre secteur.
              </p>
            </div>

            {/* Informations pratiques */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-paroisse-bleuCiel/10 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-paroisse-bleuRoi mb-3 flex items-center">
                  <span className="mr-2">⏰</span> Horaires des messes
                </h4>
                <p className="text-neutral-gris text-sm leading-relaxed">
                  Chaque lieu a ses horaires spécifiques. Consultez le calendrier de votre paroisse
                  pour connaître les célébrations à venir et les événements particuliers.
                </p>
              </div>
              <div className="bg-paroisse-vert/10 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-paroisse-vert mb-3 flex items-center">
                  <span className="mr-2">🎯</span> Services pastoraux
                </h4>
                <p className="text-neutral-gris text-sm leading-relaxed">
                  Baptêmes, mariages, funérailles, confessions... Nos équipes pastorales
                  vous accompagnent dans tous les moments importants de la vie.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-paroisse-bleuRoi to-paroisse-violet text-white rounded-lg hover:shadow-md transition font-medium"
              >
                <span className="mr-2">📞</span>
                Nous contacter
              </a>
              <a
                href="https://web.enoria.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-enoria to-enoria/80 text-white rounded-lg hover:shadow-md transition font-medium"
              >
                <span className="mr-2">🔗</span>
                Plateforme Enoria
              </a>
              <a
                href="/pastorale"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-paroisse-vert to-paroisse-turquoise text-white rounded-lg hover:shadow-md transition font-medium"
              >
                <span className="mr-2">⛪</span>
                Services pastoraux
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}