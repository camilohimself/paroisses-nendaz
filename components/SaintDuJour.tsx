/**
 * Composant Saint du Jour
 * Affiche automatiquement le saint du jour selon la date du navigateur
 *
 * 3 variantes disponibles :
 * - "discret" : Une ligne simple avec icône
 * - "carte" : Un encart stylisé
 * - "bandeau" : Pleine largeur, fond coloré
 */

'use client';

import { useState, useEffect } from 'react';
import { getSaintDuJour, getDateFormatee, SaintDuJour as SaintType } from '@/lib/saints-data';
import { Calendar, Sparkles, Church, Sun } from 'lucide-react';

interface SaintDuJourProps {
  variante?: 'discret' | 'carte' | 'bandeau';
}

export default function SaintDuJour({ variante = 'discret' }: SaintDuJourProps) {
  const [saint, setSaint] = useState<SaintType | null>(null);
  const [dateFormatee, setDateFormatee] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const today = new Date();
    setSaint(getSaintDuJour(today));
    setDateFormatee(getDateFormatee(today));
  }, []);

  // Évite le flash pendant l'hydratation
  if (!mounted || !saint) {
    return null;
  }

  switch (variante) {
    case 'discret':
      return <VarianteDiscret saint={saint} dateFormatee={dateFormatee} />;
    case 'carte':
      return <VarianteCarte saint={saint} dateFormatee={dateFormatee} />;
    case 'bandeau':
      return <VarianteBandeau saint={saint} dateFormatee={dateFormatee} />;
    default:
      return <VarianteDiscret saint={saint} dateFormatee={dateFormatee} />;
  }
}

// ============================================
// VARIANTE 1 : DISCRET (ligne simple)
// ============================================
function VarianteDiscret({ saint, dateFormatee }: { saint: SaintType; dateFormatee: string }) {
  return (
    <div className="py-4 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-stone-600">
          {saint.estDimanche
            ? <Sun className="w-4 h-4 text-amber-500" />
            : <Calendar className="w-4 h-4 text-amber-500" />
          }
          <span className="text-sm capitalize">{dateFormatee}</span>
          <span className="text-stone-300">|</span>
          <span className={`text-sm font-medium ${saint.estDimanche || saint.estFete ? 'text-amber-700' : 'text-stone-700'}`}>
            {saint.nom}
          </span>
          {!saint.estDimanche && saint.estFete && <Sparkles className="w-4 h-4 text-amber-500" />}
        </div>
      </div>
    </div>
  );
}

// ============================================
// VARIANTE 2 : CARTE (encart stylisé)
// ============================================
function VarianteCarte({ saint, dateFormatee }: { saint: SaintType; dateFormatee: string }) {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className={`
            relative overflow-hidden rounded-xl p-6
            ${saint.estFete
              ? 'bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200'
              : 'bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200'
            }
          `}>
            {/* Icône décorative */}
            <div className="absolute -top-4 -right-4 opacity-10">
              <Church className="w-24 h-24 text-stone-800" />
            </div>

            {/* Contenu */}
            <div className="relative z-10">
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${saint.estDimanche ? 'bg-amber-200' : saint.estFete ? 'bg-amber-200' : 'bg-stone-200'}`}>
                  {saint.estDimanche
                    ? <Sun className="w-4 h-4 text-amber-700" />
                    : <Calendar className={`w-4 h-4 ${saint.estFete ? 'text-amber-700' : 'text-stone-600'}`} />
                  }
                </div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  {saint.estDimanche ? 'Célébration du jour' : 'Saint du jour'}
                </span>
                {!saint.estDimanche && saint.estFete && (
                  <span className="ml-auto flex items-center gap-1 text-xs text-amber-600 font-medium">
                    <Sparkles className="w-3 h-3" />
                    Fête
                  </span>
                )}
              </div>

              {/* Saint */}
              <h3 className={`text-xl font-bold mb-2 ${saint.estFete ? 'text-amber-800' : 'text-stone-800'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                {saint.nom}
              </h3>

              {/* Date */}
              <p className="text-sm text-stone-500 capitalize">
                {dateFormatee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// VARIANTE 3 : BANDEAU (pleine largeur)
// ============================================
function VarianteBandeau({ saint, dateFormatee }: { saint: SaintType; dateFormatee: string }) {
  const isSpecial = saint.estDimanche || saint.estFete;
  return (
    <div className={`
      py-5
      ${isSpecial
        ? 'bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100'
        : 'bg-gradient-to-r from-stone-100 via-stone-50 to-stone-100'
      }
    `}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          {/* Date avec icône */}
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSpecial ? 'bg-amber-200' : 'bg-stone-200'}`}>
              {saint.estDimanche
                ? <Sun className={`w-4 h-4 text-amber-700`} />
                : <Calendar className={`w-4 h-4 ${saint.estFete ? 'text-amber-700' : 'text-stone-600'}`} />
              }
            </div>
            <span className="text-sm text-stone-600 capitalize">{dateFormatee}</span>
          </div>

          {/* Séparateur (desktop) */}
          <div className="hidden sm:block w-px h-6 bg-stone-300"></div>

          {/* Célébration / Saint */}
          <div className="flex items-center gap-2">
            <span className={`text-base sm:text-lg font-semibold ${isSpecial ? 'text-amber-800' : 'text-stone-800'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
              {saint.nom}
            </span>
            {saint.estDimanche && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-medium rounded-full">
                <Sun className="w-3 h-3" />
                Dimanche
              </span>
            )}
            {!saint.estDimanche && saint.estFete && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-medium rounded-full">
                <Sparkles className="w-3 h-3" />
                Fête
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
