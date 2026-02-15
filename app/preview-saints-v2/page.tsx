'use client';

import { useState } from 'react';
import { Sun, Cross, BookOpen, Sparkles, ChevronDown } from 'lucide-react';

/**
 * Preview Saints du jour — Version 2 "Pain Quotidien"
 * Accordéon : nom visible, clic pour déplier description + prière
 * Aesthetic: Sacred manuscript meets warm morning light
 */

const MOCK_DATA = {
  date: 'mardi 17 février',
  saints: [
    {
      rang: 1,
      nom: 'Les Sept Saints Fondateurs des Servites',
      description:
        "Sept amis florentins du XIIIe siècle qui ont tout quitté ensemble pour vivre l'Évangile dans la simplicité. Leur histoire prouve que l'amitié véritable peut devenir chemin de sainteté.",
      priere:
        "Saints Fondateurs des Servites, vous qui avez marché ensemble vers Dieu, apprenez-nous la force de l'amitié spirituelle et du soutien mutuel.",
    },
    {
      rang: 2,
      nom: 'Sainte Alexia Le Clerc',
      description:
        "Fondatrice lorraine des Chanoinesses de Notre-Dame au XVIIe siècle, Alexia a consacré sa vie à l'éducation des jeunes filles pauvres. Elle croyait que le savoir est un droit, pas un privilège.",
      priere:
        "Sainte Alexia, toi qui as ouvert les portes du savoir aux plus petits, inspire tous ceux qui enseignent et accompagnent la jeunesse aujourd'hui.",
    },
  ],
};

function SaintCard({
  saint,
  isPrimary,
  defaultOpen = false,
}: {
  saint: (typeof MOCK_DATA.saints)[0];
  isPrimary: boolean;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="relative">
      {/* Soft halo glow behind primary card */}
      {isPrimary && (
        <div
          className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(217,170,75,0.3) 0%, transparent 70%)',
          }}
        />
      )}

      <div
        className={`
          relative overflow-hidden
          ${isPrimary
            ? 'rounded-[1.5rem] bg-white/90 shadow-[0_4px_30px_rgba(120,90,30,0.08)]'
            : 'rounded-[1.25rem] bg-white/70 shadow-[0_2px_20px_rgba(120,90,30,0.05)]'
          }
        `}
        style={{ backdropFilter: 'blur(10px)' }}
      >
        {/* Top decorative arc */}
        <div
          className={isPrimary ? 'h-2' : 'h-1.5'}
          style={{
            background: isPrimary
              ? 'linear-gradient(90deg, transparent 0%, #d4a843 20%, #c9993a 50%, #d4a843 80%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, #c8b88a 30%, #c8b88a 70%, transparent 100%)',
            borderRadius: '0 0 50% 50% / 0 0 100% 100%',
          }}
        />

        {/* Clickable header — always visible */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full text-left flex items-center gap-3 transition-colors
            ${isPrimary ? 'px-5 py-4' : 'px-4 py-3.5'}
            ${isOpen ? '' : 'active:bg-stone-50/50'}
          `}
        >
          <div
            className={`
              flex-shrink-0 rounded-full flex items-center justify-center
              ${isPrimary
                ? 'w-9 h-9 bg-gradient-to-br from-amber-100 to-amber-200/80'
                : 'w-7 h-7 bg-gradient-to-br from-stone-100 to-stone-200/80'
              }
            `}
          >
            {isPrimary ? (
              <Cross className="w-4 h-4 text-amber-700" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-stone-500" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            {isPrimary && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-600/80 font-medium mb-0.5">
                Saint principal
              </p>
            )}
            <h3
              className={`
                font-bold leading-snug
                ${isPrimary ? 'text-[1.05rem] text-stone-800' : 'text-[0.9rem] text-stone-700'}
              `}
                         >
              {saint.nom}
            </h3>
          </div>

          <ChevronDown
            className={`
              w-5 h-5 flex-shrink-0 transition-transform duration-300 ease-out
              ${isPrimary ? 'text-amber-400' : 'text-stone-300'}
              ${isOpen ? 'rotate-180' : ''}
            `}
          />
        </button>

        {/* Expandable content — description + prayer */}
        <div
          className={`
            grid transition-all duration-300 ease-out
            ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
          `}
        >
          <div className="overflow-hidden">
            <div className={`${isPrimary ? 'px-5 pb-5' : 'px-4 pb-4'}`}>
              {/* Subtle separator */}
              <div
                className={`mb-3 ${isPrimary ? 'mx-4' : 'mx-3'}`}
                style={{
                  height: '1px',
                  background: isPrimary
                    ? 'linear-gradient(90deg, transparent, rgba(217,170,75,0.25), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(168,162,158,0.2), transparent)',
                }}
              />

              {/* Description */}
              <p
                className={`
                  leading-relaxed mb-4
                  ${isPrimary ? 'text-[0.85rem] text-stone-600' : 'text-[0.8rem] text-stone-500'}
                `}
              >
                {saint.description}
              </p>

              {/* Prayer bubble */}
              <div
                className={`
                  relative rounded-2xl
                  ${isPrimary
                    ? 'bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-amber-50/70 px-5 py-4'
                    : 'bg-gradient-to-br from-stone-50 to-stone-100/80 px-4 py-3.5'
                  }
                `}
              >
                {/* Decorative large quote mark */}
                <div
                  className={`
                    absolute font-serif leading-none pointer-events-none select-none
                    ${isPrimary
                      ? '-top-2 left-3 text-[3.5rem] text-amber-300/40'
                      : '-top-1 left-2.5 text-[2.5rem] text-stone-300/40'
                    }
                  `}
                                 >
                  &ldquo;
                </div>

                <div className="relative flex items-start gap-2.5">
                  <BookOpen
                    className={`
                      flex-shrink-0 mt-0.5
                      ${isPrimary ? 'w-4 h-4 text-amber-500/70' : 'w-3.5 h-3.5 text-stone-400/70'}
                    `}
                  />
                  <p
                    className={`
                      italic leading-relaxed
                      ${isPrimary ? 'text-[0.82rem] text-stone-700' : 'text-[0.78rem] text-stone-600'}
                    `}
                  >
                    {saint.priere}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreviewSaintsV2() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(170deg, #faf8f3 0%, #f5f0e8 30%, #f0ece3 60%, #ebe6db 100%)',
      }}
    >
      {/* Header */}
      <div className="bg-stone-800 text-white py-3 px-4">
        <p className="text-center text-[11px] font-medium tracking-[0.15em] uppercase opacity-80">
          Preview v2 — Saints du jour
        </p>
      </div>

      {/* Date banner — warm sunrise feel */}
      <div className="relative overflow-hidden">
        <div
          className="py-5 px-4"
          style={{
            background:
              'linear-gradient(135deg, rgba(217,170,75,0.12) 0%, rgba(245,235,215,0.6) 50%, rgba(217,170,75,0.08) 100%)',
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(217,170,75,0.1) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-1.5">
            <Sun className="w-5 h-5 text-amber-500/80" />
            <p
              className="text-[0.95rem] text-stone-700 capitalize font-medium"
                         >
              {MOCK_DATA.date}
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium">
              Saints du jour
            </p>
          </div>
        </div>
      </div>

      {/* Saints cards */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <div className="space-y-4">
          {MOCK_DATA.saints.map((saint, index) => (
            <SaintCard
              key={index}
              saint={saint}
              isPrimary={saint.rang === 1}
              defaultOpen={saint.rang === 1}
            />
          ))}
        </div>
      </div>

      {/* Decorative bottom */}
      <div className="flex justify-center pb-8">
        <div className="flex items-center gap-3 opacity-30">
          <div className="w-8 h-px bg-stone-400" />
          <Cross className="w-3 h-3 text-stone-400" />
          <div className="w-8 h-px bg-stone-400" />
        </div>
      </div>

      <div className="px-4 pb-6">
        <p className="text-center text-[10px] text-stone-400 tracking-wide">
          Prototype v2 — en attente validation
        </p>
      </div>
    </div>
  );
}
