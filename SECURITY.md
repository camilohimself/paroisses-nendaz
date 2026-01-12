# SECURITY - Checklist Securite Projet OSOM

> Document de reference pour la securite des projets clients OSOM.
> A integrer dans chaque projet et verifier avant chaque mise en production.

---

## CHECKLIST RAPIDE

### Secrets & Variables d'environnement
- [ ] `.env` et `.env.local` sont dans `.gitignore`
- [ ] Aucune cle API hardcodee dans le code source
- [ ] Variables de production dans le dashboard d'hebergement (Vercel/Netlify)

### Logging
- [ ] Pas de `console.log()` avec donnees personnelles (emails, telephones, noms)
- [ ] Messages d'erreur generiques pour les utilisateurs
- [ ] Erreurs detaillees uniquement cote serveur

### Formulaires
- [ ] Validation des inputs (email, telephone, etc.)
- [ ] Protection spam (honeypot ou reCAPTCHA si necessaire)
- [ ] Messages d'erreur sans info sensible

### Headers de Securite (si applicable)
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer-Policy: strict-origin-when-cross-origin

### Dependances
- [ ] `npm audit` execute (0 vulnerabilites critiques)
- [ ] Packages a jour (derniere version stable)

---

## COMMANDES D'AUDIT

### Pour projets npm (Next.js, Astro, etc.)
```bash
# Verifier les vulnerabilites
npm audit

# Corriger automatiquement
npm audit fix

# Mise a jour des packages
npm update
```

### Pour projets HTML statiques
```bash
# Pas de npm audit necessaire
# Verifier manuellement:
# - Pas de secrets dans le code
# - Scripts externes charges en HTTPS
# - Formulaires avec action securisee
```

---

## REGLES PAR STACK

### Next.js (OSOM, Maitrise Cathedrale)
```javascript
// next.config.js - Headers de securite
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }]
}
```

### Astro (Ma Vita Nova)
```javascript
// astro.config.mjs - Headers via adaptateur ou _headers file
// Pour Netlify: creer public/_headers
/*
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
*/
```

### HTML Statique (JDW Portfolio)
```html
<!-- Meta tags de securite (limites mais utiles) -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta name="referrer" content="strict-origin-when-cross-origin">

<!-- Pour Netlify: creer _headers file -->
```

---

## LOGGING SECURISE

### INTERDIT
```javascript
// Ne JAMAIS faire ceci
console.log(userData)
console.log(JSON.stringify(formData, null, 2))
console.log(`Email: ${email}, Phone: ${phone}`)
```

### AUTORISE
```javascript
// Logger uniquement des infos non-sensibles
console.log(`Form submitted from: ${source} at ${timestamp}`)
console.log(`API call: ${endpoint} - Status: ${status}`)
```

---

## VALIDATION DES INPUTS

### Email
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  return { error: 'Email invalide' }
}
```

### Telephone Suisse
```javascript
const phoneRegex = /^(\+41|0)[0-9]{9,10}$/
if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
  return { error: 'Telephone invalide' }
}
```

---

## HEBERGEURS - VARIABLES D'ENVIRONNEMENT

### Vercel
Dashboard > Project > Settings > Environment Variables

### Netlify
Dashboard > Site > Site settings > Environment variables

### Jamais dans le code
```javascript
// INTERDIT
const API_KEY = "sk-abc123..."

// CORRECT
const API_KEY = process.env.API_KEY
```

---

## AUDIT MENSUEL RECOMMANDE

Chaque mois, executer:
1. `npm audit` (si npm)
2. Verifier les logs pour donnees sensibles
3. Tester les formulaires
4. Verifier les headers avec https://securityheaders.com

---

*Template OSOM - Janvier 2026*
