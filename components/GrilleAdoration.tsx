'use client';

// Données d'adoration eucharistique
const adorationData = [
  {
    day: 'LUNDIS',
    time: '19h00-19h30',
    lieu: 'Brignon',
    color: 'emerald',
    dayIndex: 1,
    frequency: 'all'
  },
  {
    day: '1ER ET 5ÈME MARDIS',
    time: '18h00-18h45',
    lieu: 'Veysonnaz',
    color: 'sky',
    dayIndex: 2,
    frequency: '1st-5th'
  },
  {
    day: '4ÈME MARDI',
    time: '18h15-18h45',
    lieu: 'Haute-Nendaz',
    color: 'violet',
    dayIndex: 2,
    frequency: '4th'
  },
  {
    day: '4ÈME MARDI',
    time: '18h30-19h00',
    lieu: 'Aproz',
    color: 'amber',
    dayIndex: 2,
    frequency: '4th'
  },
  {
    day: 'VENDREDIS',
    time: '18h00-18h45',
    lieu: 'Basse-Nendaz',
    color: 'rose',
    dayIndex: 5,
    frequency: 'all'
  }
];

export default function GrilleAdoration() {
  const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const joursComplet = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  const getAdorationsForDay = (dayIndex: number) => {
    return adorationData.filter(a => a.dayIndex === dayIndex);
  };

  // Filtrer pour n'afficher que les jours avec adorations
  const joursAvecAdoration = joursComplet
    .map((jour, idx) => ({
      jour,
      index: idx + 1,
      adorations: getAdorationsForDay(idx + 1)
    }))
    .filter(day => day.adorations.length > 0);

  return (
    <div>
      {/* VERSION DESKTOP : Grille adaptative (seulement jours avec adorations) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-4 mb-6">
        {joursAvecAdoration.map((day) => (
          <div
            key={day.jour}
            className="border-2 border-stone-200 bg-stone-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-center mb-4 pb-3 border-b-2 border-stone-300">
              <div className="text-base font-bold uppercase text-stone-800 tracking-wide">
                {day.jour}
              </div>
            </div>

            <div className="space-y-3">
              {day.adorations.map((adoration, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg bg-${adoration.color}-100 border-2 border-${adoration.color}-300 hover:border-${adoration.color}-400 transition-all`}
                >
                  <div className={`text-base font-bold text-${adoration.color}-800 mb-2`}>
                    {adoration.time}
                  </div>
                  <div className="text-sm text-stone-800 font-semibold mb-1">
                    📍 {adoration.lieu}
                  </div>
                  {adoration.frequency !== 'all' && (
                    <div className="text-xs text-stone-600 mt-2 bg-white/70 px-2 py-1 rounded inline-block font-medium">
                      {adoration.frequency === '1st-5th' ? '1er et 5ème du mois' : '4ème du mois'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* VERSION MOBILE : Liste compacte "Less is More" */}
      <div className="lg:hidden space-y-3">
        {joursComplet.map((jour, idx) => {
          const adorations = getAdorationsForDay(idx + 1);
          if (adorations.length === 0) return null;

          return (
            <div key={jour} className="border-l-4 border-stone-300 bg-stone-50 rounded-r-lg p-4">
              <div className="text-sm font-bold text-stone-700 uppercase mb-3 tracking-wide">
                {jour}
              </div>

              <div className="space-y-2">
                {adorations.map((adoration, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div className="flex-1">
                      <div className="text-base font-semibold text-stone-800">
                        {adoration.lieu}
                      </div>
                      {adoration.frequency !== 'all' && (
                        <div className="text-xs text-stone-500">
                          {adoration.frequency === '1st-5th' ? '1er et 5ème du mois' : '4ème du mois'}
                        </div>
                      )}
                    </div>
                    <div className="text-sm font-bold text-stone-700 ml-4">
                      {adoration.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Note importante */}
      <p className="text-sm text-amber-700 italic mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
        Veuillez consulter notre feuille d'annonce mise à jour régulièrement, en raison des funérailles qui peuvent avoir lieu dans notre secteur.
      </p>
    </div>
  );
}
