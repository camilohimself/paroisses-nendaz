import { notFound } from 'next/navigation';
import HorairesMesse from '@/components/HorairesMesse';
import { CALENDARS_CONFIG, getCalendarById } from '@/lib/calendars-config';
import { getParoisseContent } from '@/lib/paroisses-content';
import { Metadata } from 'next';
import Link from 'next/link';

interface ParoissePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génération des routes statiques pour toutes les paroisses/chapelles
export async function generateStaticParams() {
  return CALENDARS_CONFIG.map((calendar) => ({
    slug: calendar.id,
  }));
}

// Génération des métadonnées
export async function generateMetadata({ params }: ParoissePageProps): Promise<Metadata> {
  const { slug } = await params;
  const calendar = getCalendarById(slug);
  const content = getParoisseContent(slug);

  if (!calendar) {
    return {
      title: 'Paroisse non trouvée - Paroisses de Nendaz',
    };
  }

  const description = content
    ? `${content.history.substring(0, 150)}... Horaires, histoire et informations pratiques.`
    : `Horaires des messes et célébrations à ${calendar.name}. Secteur ${calendar.sector}.`;

  return {
    title: `${calendar.name} - Paroisses de Nendaz`,
    description,
    openGraph: {
      title: `${calendar.name} - Paroisses de Nendaz`,
      description,
    },
  };
}

export default async function ParoissePage({ params }: ParoissePageProps) {
  const { slug } = await params;
  const calendar = getCalendarById(slug);
  const content = getParoisseContent(slug);

  if (!calendar) {
    notFound();
  }

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

  // Couleur d'accent selon le secteur avec nouvelle charte
  const getSectorAccent = (sector: string) => {
    switch (sector) {
      case 'nendaz': return 'text-paroisse-bleuRoi border-paroisse-bleuRoi/20 bg-paroisse-bleuRoi/10';
      case 'veysonnaz': return 'text-paroisse-violet border-paroisse-violet/20 bg-paroisse-violet/10';
      case 'autres': return 'text-paroisse-vert border-paroisse-vert/20 bg-paroisse-vert/10';
      case 'transversal': return 'text-paroisse-jaune border-paroisse-jaune/20 bg-paroisse-jaune/10';
      default: return 'text-neutral-gris border-neutral-gris/20 bg-neutral-grisClaire';
    }
  };

  // Fonction pour formater les horaires
  const formatHoraires = (horaires: any) => {
    const items = [];
    if (horaires.dominicale) items.push({ label: 'Messe dominicale', value: horaires.dominicale, icon: '⛪' });
    if (horaires.semaine) items.push({ label: 'Messe en semaine', value: horaires.semaine, icon: '🗓️' });
    if (horaires.adoration) items.push({ label: 'Adoration', value: horaires.adoration, icon: '🙏' });
    if (horaires.vepres) items.push({ label: 'Vêpres', value: horaires.vepres, icon: '🌅' });
    if (horaires.special) items.push({ label: 'Célébration spéciale', value: horaires.special, icon: '✨' });
    return items;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-bleuCommunaute/20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-paroisse-bleuRoi">Accueil</Link>
            <span>›</span>
            <Link href="/paroisses" className="hover:text-paroisse-bleuRoi">Paroisses</Link>
            <span>›</span>
            <span className="text-neutral-anthracite font-medium">{calendar.name}</span>
          </div>
        </nav>

        {/* Header enrichi */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6" style={{ borderTop: `4px solid ${calendar.color}` }}>
            <span className="text-4xl">{getTypeIcon(calendar.type)}</span>
          </div>
          <h1 className="text-5xl font-bold text-neutral-anthracite mb-4">
            {calendar.name}
          </h1>
          {content?.patron && (
            <p className="text-xl text-paroisse-bleuRoi font-medium mb-4">
              {content.patron}
            </p>
          )}
          <div className="flex items-center justify-center gap-4 text-sm mb-4 flex-wrap">
            <span className={`px-4 py-2 rounded-full border font-medium ${getSectorAccent(calendar.sector)}`}>
              Secteur {calendar.sector.charAt(0).toUpperCase() + calendar.sector.slice(1)}
            </span>
            <span className="px-4 py-2 rounded-full border border-neutral-gris/20 bg-neutral-grisClaire text-neutral-anthracite font-medium">
              {calendar.type.charAt(0).toUpperCase() + calendar.type.slice(1)}
            </span>
            {content?.dateConstruction && (
              <span className="px-4 py-2 rounded-full border border-paroisse-jaune/20 bg-paroisse-jaune/10 text-paroisse-jaune font-medium">
                {content.dateConstruction}
              </span>
            )}
          </div>
          {calendar.defaultLocation && (
            <p className="text-neutral-gris mt-2 flex items-center justify-center gap-2">
              <span>📍</span> {calendar.defaultLocation}
            </p>
          )}
        </div>

        {/* Contenu principal enrichi */}
        <div className="max-w-6xl mx-auto">
          {content && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Histoire et informations */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 border-l-4" style={{ borderLeftColor: calendar.color }}>
                  <h2 className="text-2xl font-bold text-neutral-anthracite mb-6 flex items-center gap-3">
                    <span>📜</span> Histoire et patrimoine
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-gris leading-relaxed mb-6">{content.history}</p>

                    {content.particularites && content.particularites.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-neutral-anthracite mb-3">✨ Particularités</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {content.particularites.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-neutral-gris bg-neutral-grisClaire p-2 rounded-lg">
                              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: calendar.color }}></span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Horaires fixes */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-bold text-neutral-anthracite mb-6 flex items-center gap-2">
                    <span>⏰</span> Horaires habituels
                  </h2>
                  {content.horaires && Object.keys(content.horaires).length > 0 ? (
                    <div className="space-y-4">
                      {formatHoraires(content.horaires).map((item, index) => (
                        <div key={index} className="border-l-4 pl-4 py-2" style={{ borderLeftColor: calendar.color }}>
                          <div className="flex items-center gap-2 mb-1">
                            <span>{item.icon}</span>
                            <span className="font-semibold text-neutral-anthracite text-sm">{item.label}</span>
                          </div>
                          <p className="text-neutral-gris text-sm">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-gris italic">Consulter les « Prochaines célébrations » ci-dessous pour les horaires actuels.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Section Prochaines célébrations - INTÉGRATION GOOGLE CALENDAR */}
          <div className="bg-gradient-to-br from-paroisse-bleuRoi/5 to-paroisse-turquoise/5 rounded-xl p-8 border border-paroisse-bleuRoi/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-anthracite mb-4 flex items-center justify-center gap-3">
                <span>🗓️</span> Prochaines célébrations
              </h2>
              <p className="text-lg text-neutral-gris">
                Calendrier en temps réel de {calendar.name}
              </p>
            </div>

            <HorairesMesse
              calendarId={calendar.id}
              showCalendarSelector={false}
              maxEvents={10}
            />
          </div>
        </div>

        {/* Navigation vers autres lieux */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-neutral-anthracite mb-4 text-center">
              Autres lieux du secteur {calendar.sector.charAt(0).toUpperCase() + calendar.sector.slice(1)}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {CALENDARS_CONFIG
                .filter(cal => cal.sector === calendar.sector && cal.id !== calendar.id)
                .slice(0, 6)
                .map(cal => (
                  <Link
                    key={cal.id}
                    href={`/paroisses/${cal.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border hover:shadow-md transition-all"
                    style={{
                      borderColor: cal.color + '40',
                      backgroundColor: cal.color + '10',
                      color: cal.color
                    }}
                  >
                    <span>{getTypeIcon(cal.type)}</span>
                    <span className="text-sm font-medium">{cal.name.replace('Église de ', '').replace('Chapelle de ', '').replace('Chapelle des ', '').replace('Chapelle ', '')}</span>
                  </Link>
                ))
              }
            </div>
            <div className="text-center mt-4">
              <Link
                href="/paroisses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-paroisse-bleuRoi to-paroisse-violet text-white rounded-lg hover:shadow-md transition font-medium"
              >
                <span>🗺️</span>
                Voir toutes les paroisses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}