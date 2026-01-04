'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { trackDons } from '@/lib/analytics-events';

interface IbanCardProps {
  commune: 'Nendaz' | 'Veysonnaz';
  iban: string;
  colorScheme: 'stone' | 'amber';
}

export default function IbanCard({ commune, iban, colorScheme }: IbanCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const ibanClean = iban.replace(/\s/g, '');
    try {
      await navigator.clipboard.writeText(ibanClean);
      setCopied(true);
      trackDons.addPaymentInfoIban(commune);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const bgColor = colorScheme === 'stone' ? 'bg-stone-50' : 'bg-amber-50';
  const borderColor = colorScheme === 'stone' ? 'border-stone-200' : 'border-amber-200';
  const titleColor = colorScheme === 'stone' ? 'text-stone-800' : 'text-amber-800';
  const labelColor = colorScheme === 'stone' ? 'text-stone-500' : 'text-amber-600';
  const ibanBg = colorScheme === 'stone' ? 'bg-stone-100' : 'bg-amber-100';
  const btnHover = colorScheme === 'stone' ? 'hover:bg-stone-200' : 'hover:bg-amber-200';
  const iconColor = colorScheme === 'stone' ? 'text-stone-600' : 'text-amber-700';

  return (
    <div className={`${bgColor} border-2 ${borderColor} rounded-xl p-6 transition-all hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className={`text-sm font-medium ${labelColor} uppercase tracking-wide`}>
            Paroisse de
          </p>
          <h3 className={`text-xl font-bold ${titleColor}`}>{commune}</h3>
        </div>
      </div>

      <div className={`${ibanBg} rounded-lg p-4 flex items-center justify-between gap-3`}>
        <div className="flex-1 min-w-0">
          <p className={`text-xs ${labelColor} mb-1`}>IBAN</p>
          <p className={`font-mono text-sm md:text-base ${titleColor} font-semibold tracking-wide`}>
            {iban}
          </p>
        </div>

        <button
          onClick={copyToClipboard}
          className={`flex-shrink-0 p-3 rounded-lg ${btnHover} transition-all duration-200 ${
            copied ? 'bg-green-100' : ''
          }`}
          title={copied ? 'Copié !' : 'Copier l\'IBAN'}
          aria-label={copied ? 'IBAN copié' : 'Copier l\'IBAN'}
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-600" />
          ) : (
            <Copy className={`w-5 h-5 ${iconColor}`} />
          )}
        </button>
      </div>

      {copied && (
        <p className="text-center text-sm text-green-600 mt-3 font-medium animate-pulse">
          IBAN copié dans le presse-papier
        </p>
      )}
    </div>
  );
}
