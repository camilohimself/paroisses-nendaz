// Système de tracking GA4 - Paroisses Nendaz 2026
// Événements pour mesurer l'engagement pastoral, les dons et les conversions

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// ============================================
// TYPES D'ÉVÉNEMENTS
// ============================================

type SacrementType = 'bapteme' | 'communion' | 'confirmation' | 'mariage' | 'pardon' | 'onction-malades'
type ParoisseSlug = 'aproz' | 'basse-nendaz' | 'brignon' | 'fey' | 'haute-nendaz' | 'saclentse' | 'veysonnaz'
type ContactSujet = 'Demande de baptême' | 'Demande de mariage' | 'Inscription catéchisme' | 'Réservation salle' | 'Intention de messe' | 'Autre'
type DonCommune = 'Nendaz' | 'Veysonnaz'

// ============================================
// FONCTION HELPER PRINCIPALE
// ============================================

function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Paroisses Nendaz',
      ...params
    })
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
    trackEvent('liturgie_view', {
      page
    })
  }
}

// ============================================
// 2. DONS & SOUTIEN
// ============================================

export const trackDons = {
  /** Vue de la page dons */
  pageView: () => {
    trackEvent('don_page_view', {})
  },

  /** QR TWINT visible pendant plus de 3 secondes */
  twintView: () => {
    trackEvent('don_twint_view', {
      method: 'twint'
    })
  },

  /** Copie d'un IBAN */
  ibanCopy: (commune: DonCommune) => {
    trackEvent('don_iban_copy', {
      commune
    })
  },

  /** Clic sur "Nous contacter" depuis la page dons */
  contactClick: () => {
    trackEvent('don_contact_click', {})
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
    trackEvent('contact_form_submit', {
      sujet
    })
  },

  /** Page de confirmation affichée */
  success: () => {
    trackEvent('contact_success', {})
  },

  /** Clic sur un numéro de téléphone */
  phoneClick: (numero: string, context: string) => {
    trackEvent('phone_click', {
      numero,
      context
    })
  },

  /** Clic sur un email */
  emailClick: (email: string, context: string) => {
    trackEvent('email_click', {
      email,
      context
    })
  }
}

// ============================================
// 4. LIENS EXTERNES
// ============================================

export const trackExternal = {
  /** Clic sur un lien Enoria */
  enoriaClick: (source: 'header' | 'footer' | 'card' | 'other') => {
    trackEvent('enoria_click', {
      source
    })
  },

  /** Clic sur une vidéo YouTube */
  youtubeClick: (videoId: string, context: string) => {
    trackEvent('youtube_click', {
      video_id: videoId,
      context
    })
  },

  /** Clic sur un lien externe quelconque */
  linkClick: (url: string, context: string) => {
    trackEvent('external_link', {
      url,
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
// 6. UTILITAIRES
// ============================================

export const trackUtils = {
  /** Génération de la feuille d'annonces PDF */
  feuilleGenerate: (dateDebut: string, dateFin: string) => {
    trackEvent('feuille_generate', {
      date_debut: dateDebut,
      date_fin: dateFin
    })
  },

  /** Ouverture d'une galerie photo */
  galleryOpen: (paroisse: string, imageIndex: number) => {
    trackEvent('gallery_open', {
      paroisse,
      image_index: imageIndex
    })
  },

  /** Navigation dans une galerie */
  galleryNavigate: (paroisse: string, direction: 'next' | 'prev') => {
    trackEvent('gallery_navigate', {
      paroisse,
      direction
    })
  }
}
