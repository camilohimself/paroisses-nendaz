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
  // Regrouper TOUS les bâtiments sauf Veysonnaz dans "NENDAZ"
  const allCalendars = CALENDARS_CONFIG;
  const veysonnazBuildings = allCalendars.filter(c =>
    c.name === 'Église de Veysonnaz' ||
    c.name === 'Chapelle de Clèbes (Veysonnaz)' ||
    c.name === 'Chapelle St-Barthélémy (Clèbes)'
  );
  const nendazBuildings = allCalendars.filter(c =>
    !veysonnazBuildings.includes(c) &&
    c.sector !== 'transversal'
  );

  // Données des 2 secteurs principaux
  const mainSectors = {
    nendaz: {
      buildings: nendazBuildings,
      count: nendazBuildings.length,
      color: 'from-paroisse-bleuRoi to-paroisse-bleuMarine',
      emoji: '⛰️'
    },
    veysonnaz: {
      buildings: veysonnazBuildings,
      count: veysonnazBuildings.length,
      color: 'from-paroisse-violet to-paroisse-rouge',
      emoji: '🏔️'
    }
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
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-bleuCommunaute/20">
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

        {/* 2 Cartes principales - Nendaz et Veysonnaz */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Carte NENDAZ */}
          <a
            href="/paroisses/nendaz"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-paroisse-bleuRoi/50 transform hover:scale-105"
          >
            <div className={`h-4 bg-gradient-to-r ${mainSectors.nendaz.color}`} />
            <div className="p-8 text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${mainSectors.nendaz.color} text-white shadow-lg mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                {mainSectors.nendaz.emoji}
              </div>
              <h2 className="text-3xl font-bold text-neutral-anthracite mb-4 group-hover:text-paroisse-bleuRoi transition">
                Nendaz
              </h2>
              <div className="mb-6">
                <div className="text-4xl font-bold text-paroisse-bleuRoi mb-2">
                  {mainSectors.nendaz.count}
                </div>
                <div className="text-neutral-gris uppercase font-medium">ÉGLISES ET CHAPELLES</div>
              </div>
              <p className="text-neutral-gris leading-relaxed mb-6">
                Découvrez toutes les églises et chapelles du secteur de Nendaz,
                de Basse-Nendaz à Haute-Nendaz et leurs chapelles environnantes.
              </p>
              <div className="flex items-center justify-center gap-2 text-paroisse-bleuRoi group-hover:text-paroisse-rouge transition font-medium">
                <span>Explorer Nendaz</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          {/* Carte VEYSONNAZ */}
          <a
            href="/paroisses/veysonnaz"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-paroisse-violet/50 transform hover:scale-105"
          >
            <div className={`h-4 bg-gradient-to-r ${mainSectors.veysonnaz.color}`} />
            <div className="p-8 text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${mainSectors.veysonnaz.color} text-white shadow-lg mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                {mainSectors.veysonnaz.emoji}
              </div>
              <h2 className="text-3xl font-bold text-neutral-anthracite mb-4 group-hover:text-paroisse-violet transition">
                Veysonnaz
              </h2>
              <div className="mb-6">
                <div className="text-4xl font-bold text-paroisse-violet mb-2">
                  {mainSectors.veysonnaz.count}
                </div>
                <div className="text-neutral-gris uppercase font-medium">LIEUX DE CULTE</div>
              </div>
              <p className="text-neutral-gris leading-relaxed mb-6">
                Explorez l'église de Veysonnaz et ses chapelles de montagne,
                lieux de spiritualité dans un cadre alpin exceptionnel.
              </p>
              <div className="flex items-center justify-center gap-2 text-paroisse-violet group-hover:text-paroisse-rouge transition font-medium">
                <span>Explorer Veysonnaz</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
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
              <div className="bg-paroisse-bleuCommunaute/10 p-6 rounded-xl">
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