// Utilitaires pour le tracking GA4 des événements Avent

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type AventEventName =
  | 'mission_start'      // Début d'une mission (scan QR code)
  | 'mission_complete'   // Mission terminée
  | 'mission_step'       // Progression dans les étapes
  | 'bible_discovered'   // Bible trouvée
  | 'ambon_found'        // Ambon trouvé
  | 'marie_found'        // Statue Marie trouvée (Mission 3)
  | 'calendar_view'      // Vue du calendrier

interface AventEventParams {
  mission_number: number       // 1, 2, 3, 4
  personnage?: string          // Luce, Fe, Xin, Sky
  lieu?: string                // Basse-Nendaz, Fey, Veysonnaz
  step_number?: number         // Numéro de l'étape
  step_name?: string           // Nom de l'étape
}

export function trackAventEvent(
  eventName: AventEventName,
  params: AventEventParams
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Avent 2025',
      ...params
    })
  }
}

// Raccourcis pour les missions
export const trackMission = {
  start: (mission: number, personnage: string, lieu: string) => {
    trackAventEvent('mission_start', {
      mission_number: mission,
      personnage,
      lieu
    })
  },

  complete: (mission: number, personnage: string) => {
    trackAventEvent('mission_complete', {
      mission_number: mission,
      personnage
    })
  },

  step: (mission: number, stepNumber: number, stepName: string) => {
    trackAventEvent('mission_step', {
      mission_number: mission,
      step_number: stepNumber,
      step_name: stepName
    })
  },

  bibleDiscovered: (mission: number) => {
    trackAventEvent('bible_discovered', {
      mission_number: mission
    })
  },

  ambonFound: (mission: number) => {
    trackAventEvent('ambon_found', {
      mission_number: mission
    })
  },

  marieFound: (mission: number) => {
    trackAventEvent('marie_found', {
      mission_number: mission
    })
  }
}
