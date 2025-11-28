'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BulleDialogueProps {
  texte: string
  onSuivant?: () => void
  onRetour?: () => void
  showRetour?: boolean
  showSuivant?: boolean
  texteSuivant?: string
  children?: React.ReactNode // Pour les boutons custom (Oui/Non)
}

export default function BulleDialogue({
  texte,
  onSuivant,
  onRetour,
  showRetour = true,
  showSuivant = true,
  texteSuivant = 'Suivant',
  children
}: BulleDialogueProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Bulle de dialogue */}
      <div className="relative bg-white rounded-3xl p-6 shadow-2xl mb-6">
        {/* Triangle pointant vers le personnage */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-white" />

        {/* Texte */}
        <p className="text-xl text-slate-800 leading-relaxed text-center font-medium">
          {texte}
        </p>
      </div>

      {/* Navigation ou boutons custom */}
      {children ? (
        <div className="flex justify-center gap-4">
          {children}
        </div>
      ) : (
        <div className="flex justify-between items-center gap-4">
          {/* Bouton Retour */}
          {showRetour && onRetour ? (
            <button
              onClick={onRetour}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/80 text-slate-600 font-semibold shadow-lg active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
              Retour
            </button>
          ) : (
            <div className="w-24" /> // Spacer
          )}

          {/* Bouton Suivant */}
          {showSuivant && onSuivant && (
            <button
              onClick={onSuivant}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold shadow-xl active:scale-95 transition-transform"
            >
              {texteSuivant}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
