'use client';

import { useState } from 'react';
import { Cross, BookOpen, Sparkles, ChevronDown } from 'lucide-react';

interface SaintCardProps {
  saint: {
    rang: number;
    nom: string;
    description: string;
    priere: string;
  };
  isPrimary: boolean;
  defaultOpen?: boolean;
}

export default function SaintCard({ saint, isPrimary, defaultOpen = false }: SaintCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="relative">
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
        {/* Arc decoratif */}
        <div
          className={isPrimary ? 'h-2' : 'h-1.5'}
          style={{
            background: isPrimary
              ? 'linear-gradient(90deg, transparent 0%, #d4a843 20%, #c9993a 50%, #d4a843 80%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, #c8b88a 30%, #c8b88a 70%, transparent 100%)',
            borderRadius: '0 0 50% 50% / 0 0 100% 100%',
          }}
        />

        {/* En-tete cliquable */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
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

        {/* Contenu depliable */}
        <div
          className={`
            grid transition-all duration-300 ease-out
            ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
          `}
        >
          <div className="overflow-hidden">
            <div className={`${isPrimary ? 'px-5 pb-5' : 'px-4 pb-4'}`}>
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

              {/* Bulle priere */}
              <div
                className={`
                  relative rounded-2xl
                  ${isPrimary
                    ? 'bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-amber-50/70 px-5 py-4'
                    : 'bg-gradient-to-br from-stone-50 to-stone-100/80 px-4 py-3.5'
                  }
                `}
              >
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
