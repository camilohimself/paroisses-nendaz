import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * Allows safe HTML tags like <b>, <i>, <span>, <br>, <p>, <ul>, <li>
 * Removes dangerous tags like <script>, <iframe>, event handlers, etc.
 *
 * @param dirtyHtml - Raw HTML string from external source (Google Calendar, etc.)
 * @returns Sanitized HTML safe to render
 */
export function sanitizeHtml(dirtyHtml: string): string {
  if (!dirtyHtml) return '';

  // Configuration DOMPurify - Whitelist de balises sûres
  const config = {
    ALLOWED_TAGS: [
      'b', 'i', 'em', 'strong', 'u', 's', 'strike',
      'span', 'div', 'p', 'br',
      'ul', 'ol', 'li',
      'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'blockquote', 'pre', 'code'
    ],
    ALLOWED_ATTR: [
      'href', 'title', 'target', 'rel',
      'class', 'style' // Limité aux styles sûrs
    ],
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    KEEP_CONTENT: true, // Garde le contenu des balises supprimées
    FORCE_BODY: false,
    RETURN_TRUSTED_TYPE: false,
  };

  // Sanitize le HTML
  const cleanHtml = DOMPurify.sanitize(dirtyHtml, config);

  return cleanHtml;
}

/**
 * Sanitize HTML et supprime TOUTES les balises (retourne texte brut)
 * Utile pour les résumés, meta descriptions, etc.
 *
 * @param dirtyHtml - Raw HTML string
 * @returns Plain text without any HTML tags
 */
export function stripHtml(dirtyHtml: string): string {
  if (!dirtyHtml) return '';

  const config = {
    ALLOWED_TAGS: [], // Aucune balise autorisée
    KEEP_CONTENT: true,
  };

  return DOMPurify.sanitize(dirtyHtml, config).trim();
}

/**
 * Sanitize HTML pour email/SMS (encore plus restrictif)
 * Permet uniquement gras et italique
 *
 * @param dirtyHtml - Raw HTML string
 * @returns Sanitized HTML with minimal formatting
 */
export function sanitizeForEmail(dirtyHtml: string): string {
  if (!dirtyHtml) return '';

  const config = {
    ALLOWED_TAGS: ['b', 'i', 'strong', 'em', 'br'],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
  };

  return DOMPurify.sanitize(dirtyHtml, config);
}
