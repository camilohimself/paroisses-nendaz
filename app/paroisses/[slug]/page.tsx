import { notFound } from 'next/navigation';
import HorairesMesse from '@/components/HorairesMesse';
import ParoisseHero from '@/components/ParoisseHero';
import ImageGallery from '@/components/ImageGallery';
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

  // Couleur selon le type pour VERSION 2
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

  const getSectorLabel = (sector: string) => {
    switch (sector) {
      case 'nendaz': return 'Nendaz';
      case 'veysonnaz': return 'Veysonnaz';
      case 'autres': return 'Autres secteurs';
      case 'transversal': return 'Transversal';
      default: return sector;
    }
  };

  // Fonction pour formater les horaires
  const formatHoraires = (horaires: any) => {
    const items = [];
    if (horaires.dominicale) items.push({ label: 'Messe dominicale', value: horaires.dominicale });
    if (horaires.semaine) items.push({ label: 'Messe en semaine', value: horaires.semaine });
    if (horaires.adoration) items.push({ label: 'Adoration', value: horaires.adoration });
    if (horaires.vepres) items.push({ label: 'Vêpres', value: horaires.vepres });
    if (horaires.special) items.push({ label: 'Célébration spéciale', value: horaires.special });
    return items;
  };

  const typeColor = getTypeColor(calendar.type);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero avec image immersive */}
      {content && (
        <ParoisseHero
          paroisseId={calendar.id}
          name={calendar.name}
          type={calendar.type as 'eglise' | 'chapelle' | 'ems'}
          sector={calendar.sector as 'nendaz' | 'veysonnaz'}
        />
      )}

      {/* Breadcrumb */}
      <div className="py-4 border-b bg-neutral-grisClaire/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-neutral-gris">
            <Link href="/" className="hover:text-sky-600 transition">Accueil</Link>
            <span>›</span>
            <Link href="/paroisses" className="hover:text-sky-600 transition">Paroisses</Link>
            <span>›</span>
            <span className="text-neutral-anthracite font-medium">{calendar.name}</span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Histoire */}
            {content && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Histoire & Patrimoine
                  </h2>
                  <div className={`w-24 h-0.5 bg-${typeColor} mx-auto`}></div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-10 border-l-4" style={{ borderLeftColor: calendar.color }}>
                  <p className="text-neutral-gris leading-relaxed text-lg mb-8">
                    {content.history}
                  </p>

                  {content.particularites && content.particularites.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-neutral-grisClaire">
                      <h3 className="text-2xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Particularités
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {content.particularites.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-grisClaire/50 transition">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: calendar.color }}></div>
                            <span className="text-neutral-gris">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Galerie d'images */}
            {content && calendar.type !== 'ems' && (
              <div className="mb-20">
                <ImageGallery
                  paroisseId={calendar.id}
                  paroisseName={calendar.name}
                  galleryCount={content.galleryCount}
                />
              </div>
            )}

            {/* Horaires habituels */}
            {content?.horaires && Object.keys(content.horaires).length > 0 && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Horaires habituels
                  </h2>
                  <div className={`w-24 h-0.5 bg-${typeColor} mx-auto mb-6`}></div>
                  <p className="text-neutral-gris italic">
                    Horaires réguliers de {calendar.name}
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-0">
                  {formatHoraires(content.horaires).map((item, index) => {
                    const isLast = index === formatHoraires(content.horaires).length - 1;
                    return (
                      <div key={index} className={`group relative ${!isLast ? 'border-b-2 border-neutral-grisClaire' : ''}`}>
                        <div className={`block py-8 px-8 hover:bg-neutral-grisClaire/50 transition-all duration-300 border-l-4 border-transparent hover:border-${typeColor}`}>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className={`text-xl font-bold text-neutral-anthracite group-hover:text-${typeColor.replace('500', '600')} transition-colors mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                                {item.label}
                              </h3>
                              <p className="text-neutral-gris leading-relaxed">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Prochaines célébrations - CALENDRIER FILTRÉ */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Prochaines célébrations
                </h2>
                <div className={`w-24 h-0.5 bg-${typeColor} mx-auto mb-6`}></div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <HorairesMesse
                  calendarId={calendar.id}
                  showCalendarSelector={false}
                  maxEvents={10}
                />
              </div>
            </div>

            {/* Navigation vers autres lieux */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-anthracite mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Autres lieux du secteur
                </h2>
                <div className={`w-24 h-0.5 bg-${typeColor} mx-auto mb-6`}></div>
                <p className="text-neutral-gris italic">
                  Découvrez les autres paroisses et chapelles de {getSectorLabel(calendar.sector)}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {CALENDARS_CONFIG
                  .filter(cal => cal.sector === calendar.sector && cal.id !== calendar.id)
                  .slice(0, 8)
                  .map(cal => {
                    const calColor = getTypeColor(cal.type);
                    return (
                      <Link
                        key={cal.id}
                        href={`/paroisses/${cal.id}`}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-${calColor}/10 border border-${calColor}/20 text-${calColor.replace('500', '600')} hover:bg-${calColor}/20 transition-all font-medium`}
                      >
                        <span className="text-xs">{cal.name.replace('Église de ', '').replace('Chapelle de ', '').replace('Chapelle des ', '').replace('Chapelle ', '')}</span>
                      </Link>
                    );
                  })
                }
              </div>

              <div className="text-center">
                <Link
                  href="/paroisses"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all font-semibold shadow-lg hover:shadow-xl"
                >
                  Voir toutes les paroisses
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Citation finale */}
            <div className="relative py-12">
              <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-${typeColor} to-transparent`}></div>
              <p className="text-neutral-anthracite text-2xl leading-relaxed max-w-2xl mx-auto text-center" style={{ fontFamily: 'Crimson Text, serif', fontStyle: 'italic' }}>
                « Venez à moi, vous tous qui peinez et ployez sous le fardeau,<br />et moi je vous soulagerai. »
              </p>
              <p className="text-neutral-gris text-center mt-4">— Matthieu 11, 28</p>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-${typeColor} to-transparent`}></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
