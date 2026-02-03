'use client'

import { useState } from 'react'
import { Check, Lock, Star, Church } from 'lucide-react'

// 4 palettes de violets pastels
const PALETTES = {
  A: {
    nom: 'Lavande Douce',
    description: 'Tons lavande légers et apaisants',
    recommande: false,
    colors: {
      headerFrom: '#8B7CB3',      // Lavande moyenne
      headerTo: '#6B5B95',        // Lavande profonde
      active: '#8B7CB3',          // Lavande moyenne
      activeRing: '#C4B7D4',      // Lavande claire
      complete: '#7BA087',        // Vert sauge doux
      accent: '#D4AF37',          // Or doux
      bgFrom: '#F5F3F7',          // Fond très clair
      bgTo: '#EDE8F2',            // Fond lavande pâle
      text: '#4A4063',            // Texte violet foncé
      textLight: '#7B6E8F',       // Texte violet moyen
    }
  },
  B: {
    nom: 'Mauve Liturgique',
    description: 'Violet traditionnel du Carême, sobre et profond',
    recommande: true,
    colors: {
      headerFrom: '#6B5271',      // Mauve profond
      headerTo: '#4A3728',        // Brun-violet (terre)
      active: '#7D6B84',          // Mauve moyen
      activeRing: '#B8A9BE',      // Mauve clair
      complete: '#6B8E6B',        // Vert olive doux
      accent: '#C9A227',          // Or antique
      bgFrom: '#F7F5F6',          // Fond crème
      bgTo: '#EDE6E9',            // Fond mauve très pâle
      text: '#3D3240',            // Texte foncé
      textLight: '#6B5A6E',       // Texte mauve
    }
  },
  C: {
    nom: 'Prune Pastel',
    description: 'Violet chaud avec des nuances rosées',
    recommande: false,
    colors: {
      headerFrom: '#8E6B8A',      // Prune douce
      headerTo: '#6B4E6B',        // Prune profonde
      active: '#9B7B97',          // Prune moyenne
      activeRing: '#C9B3C6',      // Prune claire
      complete: '#7A9B7A',        // Vert doux
      accent: '#D4A574',          // Or rosé
      bgFrom: '#F8F5F7',          // Fond rosé très clair
      bgTo: '#F0E8EE',            // Fond prune pâle
      text: '#4A3A48',            // Texte foncé
      textLight: '#7A6878',       // Texte prune
    }
  },
  D: {
    nom: 'Améthyste Serein',
    description: 'Violet frais avec des tons bleutés',
    recommande: false,
    colors: {
      headerFrom: '#7B7BA8',      // Améthyste
      headerTo: '#5C5C87',        // Améthyste profonde
      active: '#8585B2',          // Améthyste moyenne
      activeRing: '#B8B8D4',      // Améthyste claire
      complete: '#6B9B8A',        // Vert-bleu doux
      accent: '#C4A35A',          // Or froid
      bgFrom: '#F5F5F9',          // Fond bleuté très clair
      bgTo: '#E8E8F2',            // Fond améthyste pâle
      text: '#3A3A50',            // Texte foncé
      textLight: '#6B6B87',       // Texte améthyste
    }
  }
}

type PaletteKey = keyof typeof PALETTES

export default function PalettesPage() {
  const [selected, setSelected] = useState<PaletteKey>('B')

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Palettes Carême 2026
        </h1>
        <p className="text-gray-600 mb-8">
          Cliquez sur une palette pour la prévisualiser en grand
        </p>

        {/* Grille des 4 palettes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {(Object.keys(PALETTES) as PaletteKey[]).map((key) => {
            const palette = PALETTES[key]
            const isSelected = selected === key

            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`text-left rounded-2xl overflow-hidden shadow-lg transition-all ${
                  isSelected ? 'ring-4 ring-blue-500 scale-[1.02]' : 'hover:shadow-xl'
                }`}
              >
                {/* Mini preview */}
                <MiniPreview palette={palette} paletteKey={key} />

                {/* Info */}
                <div className="bg-white p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">
                      Option {key}: {palette.nom}
                    </span>
                    {palette.recommande && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Recommandé
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{palette.description}</p>

                  {/* Swatches */}
                  <div className="flex gap-1 mt-3">
                    {Object.entries(palette.colors).slice(0, 6).map(([name, color]) => (
                      <div
                        key={name}
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                        title={name}
                      />
                    ))}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Preview large de la palette sélectionnée */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="font-bold text-lg">
              Preview: Option {selected} - {PALETTES[selected].nom}
            </h2>
          </div>
          <FullPreview palette={PALETTES[selected]} />
        </div>

        {/* Codes couleurs */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow">
          <h3 className="font-bold mb-4">Codes couleurs - {PALETTES[selected].nom}</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(PALETTES[selected].colors).map(([name, color]) => (
              <div key={name} className="text-center">
                <div
                  className="w-full h-12 rounded-lg mb-2 border"
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs font-mono text-gray-600">{color}</p>
                <p className="text-xs text-gray-400">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Mini preview pour la grille
function MiniPreview({ palette, paletteKey }: { palette: typeof PALETTES.A, paletteKey: string }) {
  const { colors } = palette

  return (
    <div
      style={{ background: `linear-gradient(to bottom, ${colors.bgFrom}, ${colors.bgTo})` }}
      className="p-4"
    >
      {/* Mini header */}
      <div
        className="rounded-xl p-3 text-white mb-3"
        style={{ background: `linear-gradient(to right, ${colors.headerFrom}, ${colors.headerTo})` }}
      >
        <p className="text-xs opacity-70">Carême 2026</p>
        <p className="font-bold text-sm">Prophète ? Moi ?</p>
        {/* Mini progress bar */}
        <div className="mt-2 h-1.5 bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: '40%', backgroundColor: colors.accent }}
          />
        </div>
      </div>

      {/* Mini week section */}
      <div className="bg-white/80 rounded-xl p-2">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: `linear-gradient(to br, ${colors.headerFrom}, ${colors.headerTo})` }}
          >
            S
          </div>
          <div>
            <p className="text-[10px]" style={{ color: colors.textLight }}>Semaine 1</p>
            <p className="text-xs font-semibold" style={{ color: colors.text }}>Saint Michel</p>
          </div>
        </div>

        {/* Mini days */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((d) => (
            <div
              key={d}
              className="w-6 h-6 rounded flex items-center justify-center text-[10px]"
              style={{
                backgroundColor: d < 3 ? colors.complete : d === 3 ? colors.active : '#e5e5e5',
                color: d < 4 ? 'white' : '#999',
              }}
            >
              {d < 3 ? <Check className="w-3 h-3" /> : d === 3 ? d : <Lock className="w-2 h-2" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Preview complète
function FullPreview({ palette }: { palette: typeof PALETTES.A }) {
  const { colors } = palette

  return (
    <div
      style={{ background: `linear-gradient(to bottom, ${colors.bgFrom}, ${colors.bgTo})` }}
      className="p-6"
    >
      {/* Header */}
      <div
        className="rounded-2xl p-6 text-white mb-6"
        style={{ background: `linear-gradient(to right, ${colors.headerFrom}, ${colors.headerTo})` }}
      >
        <p className="text-sm opacity-70 uppercase tracking-wider mb-1">Carême 2026</p>
        <h1 className="text-2xl font-bold mb-1">Prophète ? Moi ?</h1>
        <p className="text-sm opacity-80">47 jours pour devenir porte-parole de Dieu</p>

        {/* Progress bar */}
        <div className="mt-4 max-w-md">
          <div className="flex justify-between text-xs opacity-70 mb-1">
            <span>Jour 19 / 47</span>
            <span>40%</span>
          </div>
          <div className="h-2 bg-black/20 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: '40%', backgroundColor: colors.accent }}
            />
          </div>
        </div>
      </div>

      {/* Week section */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden max-w-md">
        <div className="p-4 flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
            style={{ background: `linear-gradient(to br, ${colors.headerFrom}, ${colors.headerTo})` }}
          >
            S
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-wide" style={{ color: colors.active }}>
              Semaine 1
            </p>
            <h2 className="text-lg font-semibold" style={{ color: colors.text }}>
              Saint Michel Archange
            </h2>
            <p className="text-sm flex items-center gap-1" style={{ color: colors.textLight }}>
              <Church className="w-3 h-3" />
              Haute-Nendaz
            </p>
          </div>
        </div>

        {/* Days grid */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-7 gap-2">
            {/* Completed days */}
            {[22, 23, 24].map((d) => (
              <div
                key={d}
                className="aspect-square rounded-xl flex flex-col items-center justify-center text-white cursor-pointer"
                style={{ backgroundColor: colors.complete }}
              >
                <Check className="w-4 h-4" />
                <span className="text-xs mt-0.5">{d}</span>
              </div>
            ))}

            {/* Active day (Sunday) */}
            <div
              className="aspect-square rounded-xl flex flex-col items-center justify-center text-white cursor-pointer shadow-lg"
              style={{
                backgroundColor: colors.active,
                boxShadow: `0 0 0 4px ${colors.activeRing}`,
              }}
            >
              <span className="text-lg font-bold">25</span>
              <Star className="w-3 h-3" style={{ color: colors.accent }} />
            </div>

            {/* Locked days */}
            {[26, 27, 28].map((d) => (
              <div
                key={d}
                className="aspect-square rounded-xl flex items-center justify-center bg-gray-100 text-gray-400"
              >
                <Lock className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex justify-center gap-6 text-sm" style={{ color: colors.textLight }}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center">
            <Lock className="w-2 h-2 text-gray-400" />
          </div>
          <span>À venir</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded"
            style={{ backgroundColor: colors.active, boxShadow: `0 0 0 2px ${colors.activeRing}` }}
          />
          <span>Aujourd'hui</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded flex items-center justify-center text-white"
            style={{ backgroundColor: colors.complete }}
          >
            <Check className="w-2 h-2" />
          </div>
          <span>Fait</span>
        </div>
      </div>
    </div>
  )
}
