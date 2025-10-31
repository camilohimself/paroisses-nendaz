# 📋 CLAUDE.md - Paroisses Nendaz

## 🔗 URLs
- **Production** : https://paroisses-nendaz.vercel.app
- **Dev local** : http://localhost:3002

## 🔑 Config Vercel
- `NEXTAUTH_SECRET` : `5UsYTaIYaSV7wvDgNivJ6qkOiywhgPjx6Cg` ✅
- `GOOGLE_API_KEY` : `AIzaSyA6k3URet6_TCTvq_6A4gkOiywhgPjx6Cg` ✅

## 🎨 Palette "Pierre et Lumière" Valais
**Tons montagne/terre (Validée) :**
- Confirmation : `slate-600/700`
- Communion : `amber-500/yellow-500`
- Pardon : `emerald-700/teal-700`
- Mariage : `stone-600/amber-700`
- Onction : `slate-700/blue-800`

**Enoria** : `#2A8B8C` (toujours cette couleur exacte)

## 📊 État actuel
- **47 pages** Next.js 15 + TypeScript
- **20+ calendriers Google** (162 événements)
- **SEO** : robots.txt, sitemap, manifest PWA
- **Build** : 0 erreur, First Load 102-143 kB

## 🔧 Stack
- Next.js 15, React 19, TypeScript, Tailwind
- Google Calendar API (20+ lieux)
- Vercel auto-deploy
- NextAuth + DOMPurify

## 📝 TODO Post-V1
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Tests mobile Lighthouse >85

## 📚 Commandes
```bash
npm run dev              # Port 3002
npm run build           # 47 pages
git push origin main     # Deploy
```

## 🚀 SÉANCE DU 31 OCTOBRE 2025 - PAGES SACREMENTS + DESIGN ICÔNES ✅

### ✨ RÉALISATIONS MAJEURES

**1. 🎨 PAGE PARDON - REFONTE COMPLÈTE**
- **Contenu textuel complet** : Histoire, préparation enfants, textes anciens site
- **Vidéo YouTube** : Embed 8AaGadHv55E (comprendre le sacrement)
- **PDF téléchargeable** : deplent-info-parents-2025-26.pdf (1.0 MB)
- **4 responsables** avec coordonnées complètes clickables :
  - Martin Fendrych (Coordinateur, Salins)
  - Anne-Lyse Métrailler (Catéchiste, Haute-Nendaz)
  - Nadia Fendrych (Catéchiste, Salins)
  - Abbé Félicien Roux (Prêtre, Basse-Nendaz)
- **CTA Enoria** : Lien "Mon Foyer" dans sidebar
- **Image hero** : Collage optimisé Option B (181 KB → 49 KB, -73%)
- **Layout** : 2/3 texte + 1/3 image rectangulaire

**2. ✨ RÈGLE DESIGN : ZÉRO EMOJI, 100% ICÔNES LUCIDE**
- **7 pages traitées** : Pardon, Communion, Pastorale, Confirmation, Mariage, Onction, Baptême
- **30+ emojis remplacés** par icônes professionnelles Lucide React
- **Icônes utilisées** : Phone, Mail, Calendar, BookOpen, UsersRound, Church, Heart, GraduationCap, HandHeart, Sparkles, Sun, Target, MapPin, Star
- **Standardisation** : Tailles w-4/w-5/w-6, couleurs cohérentes, flex-shrink-0

**3. 🐛 CORRECTIONS TECHNIQUES**
- **Fix imports manquants** : Phone et Mail dans page Communion
- **Fix SSR** : Remplacement event handlers JS par CSS pur (hover:opacity-90)
- **Build réussi** : 47 pages générées sans erreur

### 📊 STATISTIQUES SESSION
- **8 commits** poussés sur GitHub
- **12 fichiers modifiés**
- **1 image optimisée** : pardon-hero.jpg (49 KB)
- **1 PDF ajouté** : deplent-info-parents-2025-26.pdf (1.0 MB)
- **0 erreur** TypeScript/ESLint

### 🎯 COMMITS DE LA SÉANCE
1. `92b33b7` - Refonte page Pardon complète (texte + vidéo + PDF + contacts)
2. `0f04114` - CTA Enoria + Image hero collage
3. `c1e68b5` - Remplacement emojis 3 pages (Pardon, Communion, Pastorale partiel)
4. `0c8f5e9` - Fix imports Phone/Mail
5. `c26210b` - Fix event handlers SSR
6. `61bb634` - Remplacement emojis Pastorale complet
7. `48a05ef` - Remplacement emojis 4 pages finales (Confirmation, Mariage, Onction, Baptême)

### ✅ PAGES SACREMENTS - ÉTAT FINAL
- ✅ **Baptême** - Complet avec icônes
- ✅ **Communion** - Complet avec icônes + catéchistes + vidéos + PDFs
- ✅ **Confirmation** - Complet avec icônes + PDF
- ✅ **Pardon** - **NOUVEAU** Complet avec icônes + vidéo + PDF + 4 contacts
- ✅ **Mariage** - Complet avec icônes
- ✅ **Onction malades** - Complet avec icônes

### 🎨 DESIGN SYSTEM VALIDÉ
**Règle de base projet :**
- ❌ Aucun emoji autorisé
- ✅ Uniquement icônes Lucide React
- ✅ Tailles standardisées : w-4 (16px), w-5 (20px), w-6 (24px)
- ✅ Couleurs cohérentes par thème
- ✅ flex-shrink-0 + mt-0.5 pour alignement parfait

### 📁 FICHIERS CRÉÉS/MODIFIÉS
**Créés :**
- `public/images/sacrements/pardon-hero.jpg` (49 KB)
- `public/documents/pardon/deplent-info-parents-2025-26.pdf` (1.0 MB)
- `app/test-hero-pardon/*` (3 pages test Options A/B/C)

**Modifiés (pages sacrements) :**
- `app/sacrements/pardon/page.tsx` - Refonte complète 280 lignes
- `app/sacrements/communion/page.tsx` - Fix imports + emojis
- `app/sacrements/confirmation/page.tsx` - Emojis remplacés
- `app/sacrements/mariage/page.tsx` - Emojis remplacés
- `app/sacrements/onction-malades/page.tsx` - Emojis remplacés
- `app/sacrements/bapteme/page.tsx` - Emojis remplacés
- `app/pastorale/page.tsx` - 10+ emojis remplacés

---

## 🚀 SÉANCE DU 31 OCTOBRE 2025 (APRÈS-MIDI) - PAGE ACTUALITÉS ✅

### ✨ AMÉLIORATIONS RÉALISÉES

**1. 🎨 REMPLACEMENT SVG → ICÔNES LUCIDE**
- **Calendar** : Toutes les dates (featured video + cards)
- **MapPin** : Tous les lieux
- **Star** : Placeholder pour événements sans image
- **Cohérence** : Alignement design avec le reste du projet

**2. 🧹 NETTOYAGE LIENS CASSÉS**
- Suppression titres cliquables vers pages inexistantes
- Suppression liens "En savoir plus"
- Suppression arrow CTA dans liste agenda
- Interface plus honnête et claire

**3. 📸 SIMPLIFICATION IMAGES**
- `hasImage: false` pour tous les événements actuels
- Placeholder Star élégant pour highlights
- Dossier `/images/articles/` créé (prêt pour futures images)
- Pas d'images 404

### 📊 STATISTIQUES
- **1 commit** : `ad74e50`
- **1 fichier modifié** : app/actualites/page.tsx
- **67 lignes supprimées** (SVG + liens cassés)
- **16 lignes ajoutées** (imports Lucide + simplification)
- **Build** : 53 pages générées avec succès

### 🎯 COMMIT
`ad74e50` - ✨ ACTUALITÉS: Icônes Lucide + Nettoyage UX

### ✅ RÉSULTAT
- ✅ Design 100% cohérent avec le reste du site
- ✅ ZERO emoji, 100% Lucide icons (règle respectée)
- ✅ Pas de liens cassés
- ✅ Build production sans erreur
- ✅ Prêt pour ajout futur d'images réelles

---

## 🎨 SÉANCE DU 31 OCTOBRE 2025 (SOIR) - ÉVÉNEMENTS PHARES + LIGHTBOX ✅

### ✨ RÉALISATIONS MAJEURES

**1. 🔍 DIAGNOSTIC SECTION "ÉVÉNEMENTS PHARES" INVISIBLE**
- **Problème identifié** : Section masquée car `highlightEvents.length === 0`
- **Cause** : Tous les événements avaient `hasImage: false`
- **Solution** : Ajout de 2 événements avec images réelles

**2. 🎨 ÉVÉNEMENT 1 : COURONNES DE L'AVENT**
- **Titre** : Journée intergénérationnelle des Couronnes de l'Avent
- **Date** : 29 novembre 2025
- **Lieu** : Messe 17h30 (Haute-Nendaz)
- **Image** : Flyer A4 optimisé (420 KB → 141 KB, -66%)
- **Source** : `/NEWS/NOVEMBRE/JOURNEEDESCOURONNES-v2 (1).jpg`
- **Catégorie** : Événement (badge amber)

**3. 📚 ÉVÉNEMENT 2 : BILLET DE PRIÈRE NOVEMBRE**
- **Titre** : Billet de prière - Novembre 2025
- **Date** : 1er novembre 2025
- **Lieu** : Toutes paroisses
- **Image** : Couverture optimisée PNG→JPG (357 KB → 158 KB, -56%)
- **PDF** : `/documents/billets-priere/billet-priere-novembre-2025.pdf` (271 KB)
- **Catégorie** : Pastorale (badge turquoise)
- **Contexte** : Blandine fait chaque mois un billet prière + démarches spéciales (Avent/Carême)

**4. 🖼️ LIGHTBOX INTELLIGENTE**
- **Overlay fullscreen** : bg-black/95 avec click outside to close
- **Bouton close** : X (Lucide) en haut à droite
- **Responsive** : max-w-full max-h-full object-contain
- **Click handler intelligent** :
  - Si `pdfUrl` existe → ouvre PDF dans nouvel onglet
  - Sinon → affiche image en lightbox
- **Hover texte adaptatif** :
  - "Cliquer pour télécharger" (PDF)
  - "Cliquer pour agrandir" (Image)

**5. 📝 CHANGEMENT TITRE SECTION**
- **Avant** : "Événements phares"
- **Après** : "Rencontres et partages"
- Plus cohérent avec l'esprit communautaire paroissial

**6. 🗂️ ORGANISATION FICHIERS**
- **Images articles** : `/public/images/articles/`
- **PDFs billets prière** : `/public/documents/billets-priere/`
- **Structure mensuelle** : Prêt pour futurs billets (décembre, janvier...)

### 📊 STATISTIQUES SESSION
- **3 commits** poussés sur GitHub
- **3 fichiers modifiés/créés** :
  - `app/actualites/page.tsx` (ajout 2 événements + lightbox)
  - `public/images/articles/couronnes-avent-2025.jpg` (141 KB)
  - `public/images/articles/billet-priere-novembre-2025.jpg` (158 KB)
  - `public/documents/billets-priere/billet-priere-novembre-2025.pdf` (271 KB)
- **Build** : 53 pages générées avec succès
- **0 erreur** TypeScript/ESLint

### 🎯 COMMITS DE LA SÉANCE
1. `ad74e50` - ✨ ACTUALITÉS: Icônes Lucide + Nettoyage UX
2. `f0b8d7d` - 🎨 ACTUALITÉS: Événement phare Couronnes de l'Avent
3. `be62ec4` - 📚 ACTUALITÉS: Billet de prière Novembre + Lightbox intelligente

### ✅ FONCTIONNALITÉS AJOUTÉES
- ✅ Section "Rencontres et partages" avec 2 événements côte à côte
- ✅ Lightbox fullscreen avec fermeture (X + click outside)
- ✅ Click intelligent selon type de contenu (PDF vs image)
- ✅ Hover texte adaptatif selon action
- ✅ Images optimisées (compression -56% à -66%)
- ✅ Structure fichiers organisée pour contenu mensuel récurrent

### 📁 FICHIERS CRÉÉS
**Images optimisées :**
- `public/images/articles/couronnes-avent-2025.jpg` (141 KB, 800px)
- `public/images/articles/billet-priere-novembre-2025.jpg` (158 KB, 800px)

**Documents :**
- `public/documents/billets-priere/billet-priere-novembre-2025.pdf` (271 KB)

### 🎨 DESIGN SYSTEM
**Lightbox component :**
```typescript
{lightboxImage && (
  <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
       onClick={() => setLightboxImage(null)}>
    <button className="absolute top-4 right-4 text-white hover:text-neutral-grisClaire transition-colors z-10">
      <X className="w-8 h-8" />
    </button>
    <img src={lightboxImage} className="max-w-full max-h-full object-contain"
         onClick={(e) => e.stopPropagation()} />
  </div>
)}
```

**Click handler intelligent :**
```typescript
onClick={() => {
  if ('pdfUrl' in event && event.pdfUrl) {
    window.open(event.pdfUrl, '_blank')  // PDF
  } else if ('image' in event && event.image) {
    setLightboxImage(event.image)  // Image
  }
}}
```

### 💡 MÉTHODOLOGIE VALIDÉE
**Approche itérative avec tests visuels :**
1. Diagnostic de la section invisible
2. Ajout événement 1 avec lightbox
3. Test utilisateur + validation
4. Changement titre section
5. Ajout événement 2 avec PDF
6. Test final + validation
7. Commit et push

**Avantages :**
- Précision maximale des fonctionnalités
- Feedback utilisateur immédiat
- UX optimale (comportement intelligent selon contenu)
- Code propre et maintenable

---
*Mise à jour : 31 octobre 2025 - Pages sacrements + Actualités (icônes + événements phares + lightbox)*
