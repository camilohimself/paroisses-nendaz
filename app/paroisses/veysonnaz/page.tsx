import { CALENDARS_CONFIG } from '@/lib/calendars-config';
import { getParoisseContent, getParoisseExtract } from '@/lib/paroisses-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secteur de Veysonnaz - Paroisses de Nendaz',
  description: 'Découvrez l\'église de Veysonnaz et ses chapelles de montagne, lieux de spiritualité dans un cadre alpin exceptionnel.',
};

export default function VeysonnazSectorPage() {
  // Uniquement les 3 bâtiments de Veysonnaz
  const veysonnazBuildings = CALENDARS_CONFIG.filter(c =>
    c.name === 'Église de Veysonnaz' ||
    c.name === 'Chapelle de Clèbes (Veysonnaz)' ||
    c.name === 'Chapelle St-Barthélémy (Clèbes)'
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'eglise': return '⛪';
      case 'chapelle': return '🏛️';
      default: return '📍';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-grisClaire/30 via-white to-paroisse-violet/10">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-neutral-gris">
            <a href="/paroisses" className="hover:text-paroisse-violet transition">Paroisses</a>
            <span>›</span>
            <span className="text-neutral-anthracite font-medium">Veysonnaz</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-paroisse-violet to-paroisse-rouge text-white shadow-lg mb-6 text-3xl">
            🏔️
          </div>
          <h1 className="text-5xl font-bold text-neutral-anthracite mb-4">
            Secteur de Veysonnaz
          </h1>
          <p className="text-xl text-neutral-gris max-w-3xl mx-auto">
            Explorez l'église de Veysonnaz et ses chapelles de montagne,
            lieux de spiritualité dans un cadre alpin exceptionnel.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center gap-4 bg-paroisse-violet/10 border border-paroisse-violet/20 px-6 py-3 rounded-lg">
              <span className="text-3xl font-bold text-paroisse-violet">{veysonnazBuildings.length}</span>
              <span className="text-neutral-anthracite font-medium">lieux de culte</span>
            </div>
          </div>
        </div>

        {/* Grid des lieux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {veysonnazBuildings.map((calendar) => {
            const content = getParoisseContent(calendar.id);
            return (
              <a
                key={calendar.id}
                href={`/paroisses/${calendar.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-paroisse-violet/30"
              >
                <div className="h-3" style={{ backgroundColor: calendar.color }} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition">
                        <span className="text-2xl">{getTypeIcon(calendar.type)}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-anthracite group-hover:text-paroisse-violet transition">
                        {calendar.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-neutral-gris capitalize">{calendar.type}</p>
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

                  {content?.patron && (
                    <div className="mb-3">
                      <span className="text-sm font-medium text-paroisse-violet">{content.patron}</span>
                    </div>
                  )}

                  {content && (
                    <div className="mb-4">
                      <p className="text-sm text-neutral-gris leading-relaxed">
                        {getParoisseExtract(content)}
                      </p>
                    </div>
                  )}

                  {calendar.defaultLocation && (
                    <div className="flex items-center gap-2 text-sm text-neutral-gris mb-4">
                      <span>📍</span>
                      <span className="truncate">{calendar.defaultLocation}</span>
                    </div>
                  )}

                  {content?.horaires.dominicale && (
                    <div className="mb-4 p-3 bg-neutral-grisClaire rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-paroisse-rouge">⛪</span>
                        <span className="font-medium text-neutral-anthracite">Messe dominicale:</span>
                      </div>
                      <p className="text-xs text-neutral-gris mt-1">{content.horaires.dominicale}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: calendar.color }}
                    >
                      {calendar.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-paroisse-violet group-hover:text-paroisse-rouge transition">
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

        {/* Information spécifique Veysonnaz */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-paroisse-violet">
            <h3 className="text-2xl font-bold text-neutral-anthracite mb-4 text-center">
              Spiritualité alpine
            </h3>
            <p className="text-neutral-gris leading-relaxed text-center">
              Les lieux de culte de Veysonnaz offrent un cadre unique pour la prière et la méditation,
              nichés dans les hauteurs valaisannes. Chaque chapelle raconte une histoire particulière
              de foi et de tradition montagnarde.
            </p>
          </div>
        </div>

        {/* Retour vers paroisses */}
        <div className="text-center mt-12">
          <a
            href="/paroisses"
            className="inline-flex items-center gap-2 text-paroisse-violet hover:text-paroisse-rouge transition font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux paroisses
          </a>
        </div>
      </div>
    </main>
  );
}