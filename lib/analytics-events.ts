// Système de tracking GA4 - Paroisses Nendaz 2026
// Refonte selon recommandations GA4 (événements standards, types stricts)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// ============================================
// TYPES STRICTS
// ============================================

type SacrementType = 'bapteme' | 'communion' | 'confirmation' | 'mariage' | 'pardon' | 'onction-malades'
type ParoisseSlug = 'aproz' | 'basse-nendaz' | 'brignon' | 'fey' | 'haute-nendaz' | 'saclentse' | 'veysonnaz'
type ContactSujet = 'Demande de baptême' | 'Demande de mariage' | 'Inscription catéchisme' | 'Réservation salle' | 'Intention de messe' | 'Autre'
type DonCommune = 'Nendaz' | 'Veysonnaz'
type PaymentMethod = 'twint' | 'iban_nendaz' | 'iban_veysonnaz'
type ContentType = 'external_link' | 'phone_number' | 'email' | 'video' | 'platform'
type AventPersonnage = 'Luce' | 'Fe' | 'Xin' | 'Sky'
type AventLieu = 'Basse-Nendaz' | 'Fey' | 'Veysonnaz' | 'Aproz'

// Paramètres typés pour chaque catégorie d'événement
interface SacrementViewParams {
  sacrement_type: SacrementType
}

interface ParoisseViewParams {
  paroisse_slug: ParoisseSlug
  paroisse_nom: string
}

interface SelectContentParams {
  content_type: ContentType
  item_id: string
  context?: string
}

interface BeginCheckoutParams {
  currency: 'CHF'
  value: number
  payment_type?: PaymentMethod
}

interface AddPaymentInfoParams {
  currency: 'CHF'
  value: number
  payment_type: PaymentMethod
}

interface ContactFormParams {
  sujet?: ContactSujet
}

interface HorairesFilterParams {
  paroisse: string
  type_evenement: string
}

interface HorairesExpandParams {
  count_visible: number
}

interface AventMissionParams {
  mission_number: 1 | 2 | 3 | 4
  personnage?: AventPersonnage
  lieu?: AventLieu
  step_number?: number
  step_name?: string
}

// ============================================
// FONCTION HELPER PRINCIPALE
// ============================================

function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean | undefined>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

// ============================================
// 1. ENGAGEMENT PASTORAL
// ============================================

export const trackPastoral = {
  /** Vue d'une page sacrement */
  sacrementView: (type: SacrementType) => {
    trackEvent('sacrement_view', {
      sacrement_type: type
    })
  },

  /** Vue d'une page paroisse */
  paroisseView: (slug: ParoisseSlug, nom: string) => {
    trackEvent('paroisse_view', {
      paroisse_slug: slug,
      paroisse_nom: nom
    })
  },

  /** Vue de la page prière */
  priereView: (section?: string) => {
    trackEvent('priere_view', {
      section: section || 'main'
    })
  },

  /** Vue des pages liturgie */
  liturgieView: (page: string) => {
    trackEvent('liturgie_view', { page })
  }
}

// ============================================
// 2. DONS & SOUTIEN (Événements E-commerce GA4)
// ============================================

export const trackDons = {
  /** Début du processus de don (arrivée sur la page) */
  beginCheckout: () => {
    trackEvent('begin_checkout', {
      currency: 'CHF',
      value: 1 // Valeur symbolique pour activer les rapports e-commerce
    })
  },

  /** QR TWINT visible pendant plus de 3 secondes */
  addPaymentInfoTwint: () => {
    trackEvent('add_payment_info', {
      currency: 'CHF',
      value: 1,
      payment_type: 'twint'
    })
  },

  /** Copie d'un IBAN */
  addPaymentInfoIban: (commune: DonCommune) => {
    trackEvent('add_payment_info', {
      currency: 'CHF',
      value: 1,
      payment_type: commune === 'Nendaz' ? 'iban_nendaz' : 'iban_veysonnaz'
    })
  }
}

// ============================================
// 3. CONVERSIONS CONTACT
// ============================================

export const trackContact = {
  /** Premier champ du formulaire rempli */
  formStart: () => {
    trackEvent('contact_form_start', {})
  },

  /** Soumission du formulaire */
  formSubmit: (sujet: ContactSujet) => {
    trackEvent('contact_form_submit', { sujet })
  },

  /** Page de confirmation affichée */
  success: () => {
    trackEvent('contact_success', {})
  }
}

// ============================================
// 4. SÉLECTION DE CONTENU (Standard GA4)
// ============================================

export const trackContent = {
  /** Clic sur un lien Enoria */
  selectEnoria: (source: 'header' | 'footer' | 'card' | 'other') => {
    trackEvent('select_content', {
      content_type: 'platform',
      item_id: `enoria_${source}`
    })
  },

  /** Clic sur une vidéo YouTube */
  selectYoutube: (videoId: string, context: string) => {
    trackEvent('select_content', {
      content_type: 'video',
      item_id: videoId,
      context
    })
  },

  /** Clic sur un numéro de téléphone */
  selectPhone: (numero: string, context: string) => {
    trackEvent('select_content', {
      content_type: 'phone_number',
      item_id: numero,
      context
    })
  },

  /** Clic sur un email */
  selectEmail: (email: string, context: string) => {
    trackEvent('select_content', {
      content_type: 'email',
      item_id: email,
      context
    })
  },

  /** Clic sur un lien externe quelconque */
  selectExternalLink: (url: string, context: string) => {
    trackEvent('select_content', {
      content_type: 'external_link',
      item_id: url,
      context
    })
  }
}

// ============================================
// 5. HORAIRES & CALENDRIER
// ============================================

export const trackHoraires = {
  /** Changement de filtre sur les horaires */
  filterChange: (paroisse: string, typeEvenement: string) => {
    trackEvent('horaires_filter', {
      paroisse: paroisse || 'tous',
      type_evenement: typeEvenement || 'tous'
    })
  },

  /** Clic sur "Voir plus" */
  expand: (countVisible: number) => {
    trackEvent('horaires_expand', {
      count_visible: countVisible
    })
  }
}

// ============================================
// 6. AVENT (Archivé - Pour comparaison 2026)
// ============================================

export const trackAvent = {
  /** Début d'une mission */
  missionStart: (mission: 1 | 2 | 3 | 4, personnage: AventPersonnage, lieu: AventLieu) => {
    trackEvent('avent_mission_start', {
      mission_number: mission,
      personnage,
      lieu
    })
  },

  /** Mission terminée */
  missionComplete: (mission: 1 | 2 | 3 | 4, personnage: AventPersonnage) => {
    trackEvent('avent_mission_complete', {
      mission_number: mission,
      personnage
    })
  },

  /** Progression dans les étapes */
  missionStep: (mission: 1 | 2 | 3 | 4, stepNumber: number, stepName: string) => {
    trackEvent('avent_mission_step', {
      mission_number: mission,
      step_number: stepNumber,
      step_name: stepName
    })
  },

  /** Objet trouvé */
  objectFound: (mission: 1 | 2 | 3 | 4, objectName: 'bible' | 'ambon' | 'marie' | 'angel') => {
    trackEvent('avent_object_found', {
      mission_number: mission,
      object_name: objectName
    })
  }
}

// ============================================
// 7. CARÊME 2026
// ============================================

type CaremeSaintId = 'carlo-acutis' | 'michel-archange' | 'leger' | 'nicolas-flue' | 'joseph' | 'marie-auxiliatrice' | 'christ-roi'
type CaremePdfType = 'coloriage' | 'bricolage'

export const trackCareme = {
  /** Vue de la page Carême avec le numéro du jour */
  pageView: (jourNumero: number, semaineNumero: number) => {
    trackEvent('careme_page_view', {
      jour_numero: jourNumero,
      semaine_numero: semaineNumero
    })
  },

  /** Téléchargement d'un PDF (coloriage ou bricolage) */
  pdfDownload: (saintId: CaremeSaintId, pdfType: CaremePdfType) => {
    trackEvent('careme_pdf_download', {
      saint_id: saintId,
      pdf_type: pdfType
    })
  },

  /** Déplier un jour passé dans le journal */
  jourExpand: (jourNumero: number) => {
    trackEvent('careme_jour_expand', {
      jour_numero: jourNumero
    })
  },

  /** Vue de la fiche saint (lightbox ouverte) */
  saintView: (saintId: CaremeSaintId) => {
    trackEvent('careme_saint_view', {
      saint_id: saintId
    })
  },

  /** Navigation dans CompletedView (après Pâques) */
  browsePastDay: (jourNumero: number) => {
    trackEvent('careme_browse_day', {
      jour_numero: jourNumero
    })
  }
}

// ============================================
// ALIAS RÉTROCOMPATIBILITÉ (pour les missions Avent existantes)
// ============================================

export const trackMission = {
  start: (mission: number, personnage: string, lieu: string) => {
    trackAvent.missionStart(
      mission as 1 | 2 | 3 | 4,
      personnage as AventPersonnage,
      lieu as AventLieu
    )
  },
  complete: (mission: number, personnage: string) => {
    trackAvent.missionComplete(mission as 1 | 2 | 3 | 4, personnage as AventPersonnage)
  },
  step: (mission: number, stepNumber: number, stepName: string) => {
    trackAvent.missionStep(mission as 1 | 2 | 3 | 4, stepNumber, stepName)
  },
  bibleDiscovered: (mission: number) => {
    trackAvent.objectFound(mission as 1 | 2 | 3 | 4, 'bible')
  },
  ambonFound: (mission: number) => {
    trackAvent.objectFound(mission as 1 | 2 | 3 | 4, 'ambon')
  },
  marieFound: (mission: number) => {
    trackAvent.objectFound(mission as 1 | 2 | 3 | 4, 'marie')
  },
  angelFound: (mission: number) => {
    trackAvent.objectFound(mission as 1 | 2 | 3 | 4, 'angel')
  }
}
