'use client';

import { useState } from 'react';

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

// OPTION 1 : GRILLE HEBDOMADAIRE
function Option1_GrilleHebdo() {
  const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  const getAdorationsForDay = (dayIndex: number) => {
    return adorationData.filter(a => a.dayIndex === dayIndex);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
        Option 1 : Grille hebdomadaire
      </h3>

      <div className="grid grid-cols-7 gap-2">
        {jours.map((jour, idx) => {
          const adorations = getAdorationsForDay(idx + 1);
          const hasAdoration = adorations.length > 0;

          return (
            <div key={jour} className={`border rounded-lg p-3 min-h-[180px] ${hasAdoration ? 'bg-stone-50' : 'bg-gray-50'}`}>
              <div className="text-center mb-3">
                <div className="text-xs font-bold uppercase text-stone-600 mb-1">{jour}</div>
              </div>

              {adorations.map((adoration, i) => (
                <div key={i} className={`mb-3 p-2 rounded bg-${adoration.color}-100 border border-${adoration.color}-200`}>
                  <div className={`text-xs font-bold text-${adoration.color}-700 mb-1`}>
                    {adoration.time}
                  </div>
                  <div className="text-xs text-stone-700 font-semibold">
                    {adoration.lieu}
                  </div>
                  {adoration.frequency !== 'all' && (
                    <div className="text-[10px] text-stone-500 mt-1">
                      {adoration.frequency === '1st-5th' ? '[1er/5e]' : '[4e]'}
                    </div>
                  )}
                </div>
              ))}

              {!hasAdoration && (
                <div className="text-center text-gray-400 text-xs mt-8">—</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center text-sm text-stone-500 italic">
        ✅ Vision d&apos;ensemble • ✅ Facile à scanner • ✅ Comparaison rapide
      </div>
    </div>
  );
}

// OPTION 2 : CARTES PAR LIEU
function Option2_CartesLieu() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
        Option 2 : Cartes par lieu
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {adorationData.map((adoration, idx) => (
          <div
            key={idx}
            className={`border-2 border-${adoration.color}-300 rounded-lg p-6 bg-${adoration.color}-50 hover:shadow-lg transition-all`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className={`text-xl font-bold text-${adoration.color}-900 mb-1`} style={{ fontFamily: 'Playfair Display, serif' }}>
                  {adoration.lieu}
                </h4>
                <div className="text-sm text-stone-600 uppercase tracking-wide">
                  {adoration.day}
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full bg-${adoration.color}-500`}></div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className={`text-lg font-semibold text-${adoration.color}-800`}>
                {adoration.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-stone-500 italic">
        ✅ Focus sur le lieu • ✅ Simple et clair • ✅ Bon pour mobile
      </div>
    </div>
  );
}

// OPTION 3 : TIMELINE "OÙ MAINTENANT ?"
function Option3_Timeline() {
  const [selectedDay, setSelectedDay] = useState(2); // Mardi par défaut pour montrer le plus de données
  const jours = [
    { label: 'Lundi', value: 1 },
    { label: 'Mardi', value: 2 },
    { label: 'Mercredi', value: 3 },
    { label: 'Jeudi', value: 4 },
    { label: 'Vendredi', value: 5 },
    { label: 'Samedi', value: 6 },
    { label: 'Dimanche', value: 7 }
  ];

  const todayAdorations = adorationData.filter(a => a.dayIndex === selectedDay);
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  const isNow = (timeRange: string) => {
    const [start] = timeRange.split('-');
    const [startH, startM] = start.replace('h', ':').split(':').map(Number);
    const startTime = startH * 60 + startM;
    const currentTime = currentHour * 60 + currentMinutes;
    return Math.abs(currentTime - startTime) < 120; // Dans les 2h
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
        Option 3 : Timeline &quot;Où maintenant ?&quot;
      </h3>

      {/* Sélecteur de jour */}
      <div className="mb-8">
        <div className="flex gap-2 justify-center flex-wrap">
          {jours.map(jour => (
            <button
              key={jour.value}
              onClick={() => setSelectedDay(jour.value)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedDay === jour.value
                  ? 'bg-amber-500 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {jour.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline des adorations */}
      <div className="space-y-4">
        {todayAdorations.length > 0 ? (
          todayAdorations.map((adoration, idx) => {
            const isActiveNow = isNow(adoration.time);
            return (
              <div
                key={idx}
                className={`relative border-l-4 border-${adoration.color}-500 pl-6 py-4 ${
                  isActiveNow ? `bg-${adoration.color}-50 rounded-r-lg` : ''
                }`}
              >
                <div className={`absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-${adoration.color}-500 border-2 border-white`}></div>

                <div className="flex items-center justify-between mb-2">
                  <div className={`text-2xl font-bold text-${adoration.color}-700`}>
                    {adoration.time}
                  </div>
                  {isActiveNow && (
                    <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                      BIENTÔT
                    </span>
                  )}
                </div>

                <div className="text-lg font-semibold text-stone-800">
                  📍 {adoration.lieu}
                </div>

                {adoration.frequency !== 'all' && (
                  <div className="text-sm text-stone-500 mt-1">
                    {adoration.frequency === '1st-5th' ? '1er et 5ème du mois' : '4ème du mois'}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-stone-400">
            <div className="text-4xl mb-4">🕊️</div>
            <p className="text-lg">Pas d&apos;adoration ce jour</p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-sm text-stone-500 italic">
        ✅ Contextuel • ✅ &quot;Smart&quot; (détecte le jour) • ✅ Indique &quot;Bientôt&quot;
      </div>
    </div>
  );
}

// PAGE PRINCIPALE
export default function TestAdorationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30 py-12">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            🎨 Laboratoire UX/UI
          </h1>
          <p className="text-xl text-stone-600 mb-2">
            Adoration eucharistique • 3 concepts de visualisation
          </p>
          <div className="inline-block px-6 py-2 bg-amber-500 text-white rounded-full text-sm font-bold">
            SILENCE & RECUEILLEMENT
          </div>
        </div>

        {/* Les 3 options */}
        <div className="space-y-12">
          <Option1_GrilleHebdo />
          <Option2_CartesLieu />
          <Option3_Timeline />
        </div>

        {/* Footer analyse */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            📊 Analyse comparative
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-emerald-700 mb-3">Option 1 : Grille</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>✅ Vue d&apos;ensemble complète</li>
                <li>✅ Comparaison rapide des jours</li>
                <li>⚠️ Beaucoup d&apos;espace vide (mer/jeu/sam/dim)</li>
                <li>⚠️ Moins lisible sur mobile</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sky-700 mb-3">Option 2 : Cartes</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>✅ Focus sur les lieux</li>
                <li>✅ Excellent sur mobile</li>
                <li>✅ Design moderne et propre</li>
                <li>⚠️ Pas de vue temporelle</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-violet-700 mb-3">Option 3 : Timeline</h4>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>✅ Contextuel (jour actuel)</li>
                <li>✅ Indique &quot;BIENTÔT&quot;</li>
                <li>✅ Interactif (sélection jour)</li>
                <li>⚠️ Nécessite une action utilisateur</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Retour */}
        <div className="mt-8 text-center">
          <a
            href="/pastorale/priere"
            className="inline-block px-8 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            ← Retour à la page Prière
          </a>
        </div>

      </div>
    </div>
  );
}
