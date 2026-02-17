/**
 * Composant Saint du Jour
 * Affiche automatiquement le(s) saint(s) du jour selon la date du navigateur
 *
 * 2 modes :
 * - Enrichi (fév–déc 2026) : accordéon avec description + prière (SaintCard)
 * - Simple (jan 2026 ou fallback) : bandeau avec juste le nom
 *
 * 3 variantes disponibles :
 * - "discret" : Une ligne simple avec icône
 * - "carte" : Un encart stylisé
 * - "bandeau" : Pleine largeur, fond coloré (utilisé sur la homepage)
 */

'use client';

import { useState, useEffect } from 'react';
import {
  getSaintDuJour,
  getSaintsEnrichis,
  getDateFormatee,
  SaintDuJour as SaintType,
  SaintEnrichi,
} from '@/lib/saints-data';
import { Calendar, Sparkles, Church, Sun, Cross } from 'lucide-react';
import SaintCard from '@/components/SaintCard';

interface SaintDuJourProps {
  variante?: 'discret' | 'carte' | 'bandeau';
}

export default function SaintDuJour({ variante = 'discret' }: SaintDuJourProps) {
  const [saint, setSaint] = useState<SaintType | null>(null);
  const [saintsEnrichis, setSaintsEnrichis] = useState<SaintEnrichi[] | null>(null);
  const [dateFormatee, setDateFormatee] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const today = new Date();
    setSaint(getSaintDuJour(today));
    setSaintsEnrichis(getSaintsEnrichis(today));
    setDateFormatee(getDateFormatee(today));
  }, []);

  if (!mounted || !saint) {
    return null;
  }

  // Mode enrichi : accordéon avec descriptions et prières
  if (saintsEnrichis && saintsEnrichis.length > 0) {
    return (
      <SaintsEnrichisSection
        saints={saintsEnrichis}
        dateFormatee={dateFormatee}
      />
    );
  }

  // Mode simple (fallback) : juste le nom du saint
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
// MODE ENRICHI : ACCORDÉON SAINTS
// ============================================
function SaintsEnrichisSection({
  saints,
  dateFormatee,
}: {
  saints: SaintEnrichi[];
  dateFormatee: string;
}) {
  return (
    <section
      aria-label="Saints du jour"
      style={{
        background:
          'linear-gradient(170deg, #faf8f3 0%, #f5f0e8 30%, #f0ece3 60%, #ebe6db 100%)',
      }}
    >
      {/* Bandeau date */}
      <div className="relative overflow-hidden">
        <div
          className="py-4 px-4"
          style={{
            background:
              'linear-gradient(135deg, rgba(217,170,75,0.12) 0%, rgba(245,235,215,0.6) 50%, rgba(217,170,75,0.08) 100%)',
          }}
        >
          <div className="relative flex flex-col items-center gap-1">
            <Sun className="w-5 h-5 text-amber-500/80" />
            <p className="text-[0.95rem] text-stone-700 capitalize font-medium">
              {dateFormatee}
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium">
              Saints du jour
            </p>
          </div>
        </div>
      </div>

      {/* Cartes saints */}
      <div className="px-4 py-5 max-w-lg mx-auto">
        <div className="space-y-4">
          {saints.map((saint, index) => (
            <SaintCard
              key={index}
              saint={saint}
              isPrimary={saint.rang === 1}
              defaultOpen={saint.rang === 1}
            />
          ))}
        </div>
      </div>

      {/* Croix decorative */}
      <div className="flex justify-center pb-5">
        <div className="flex items-center gap-3 opacity-30">
          <div className="w-8 h-px bg-stone-400" />
          <Cross className="w-3 h-3 text-stone-400" />
          <div className="w-8 h-px bg-stone-400" />
        </div>
      </div>
    </section>
  );
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
            <div className="absolute -top-4 -right-4 opacity-10">
              <Church className="w-24 h-24 text-stone-800" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${saint.estDimanche ? 'bg-amber-200' : saint.estFete ? 'bg-amber-200' : 'bg-stone-200'}`}>
                  {saint.estDimanche
                    ? <Sun className="w-4 h-4 text-amber-700" />
                    : <Calendar className={`w-4 h-4 ${saint.estFete ? 'text-amber-700' : 'text-stone-600'}`} />
                  }
                </div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  {saint.estDimanche ? 'Celebration du jour' : 'Saint du jour'}
                </span>
                {!saint.estDimanche && saint.estFete && (
                  <span className="ml-auto flex items-center gap-1 text-xs text-amber-600 font-medium">
                    <Sparkles className="w-3 h-3" />
                    Fete
                  </span>
                )}
              </div>

              <h3 className={`text-xl font-bold mb-2 ${saint.estFete ? 'text-amber-800' : 'text-stone-800'}`}>
                {saint.nom}
              </h3>

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
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSpecial ? 'bg-amber-200' : 'bg-stone-200'}`}>
              {saint.estDimanche
                ? <Sun className={`w-4 h-4 text-amber-700`} />
                : <Calendar className={`w-4 h-4 ${saint.estFete ? 'text-amber-700' : 'text-stone-600'}`} />
              }
            </div>
            <span className="text-sm text-stone-600 capitalize">{dateFormatee}</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-stone-300"></div>

          <div className="flex items-center gap-2">
            <span className={`text-base sm:text-lg font-semibold ${isSpecial ? 'text-amber-800' : 'text-stone-800'}`}>
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
                Fete
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
