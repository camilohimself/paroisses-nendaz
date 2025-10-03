# 📋 CLAUDE.md - Journal de développement Paroisses Nendaz

## 🔗 Références importantes
- **Site actuel de référence** : https://paroisses-nendaz.ch/
- **Site live production** : https://paroisses-nendaz.vercel.app
- **Logo officiel** : Intégré dans `/public/logo-paroisses.png`

## 🎉 SÉANCE DU 3 OCTOBRE 2025 (SOIR) - REFONTE PAROISSES + SÉCURITÉ ✅

### ✨ RÉALISATIONS MAJEURES

**1. 🐛 FIX CRITIQUE - Bug Google Calendar HTML**
- **Problème**: Balises HTML `<span>`, `<b>`, `</b>` affichées comme texte brut
- **Cause**: Descriptions Google Calendar non parsées correctement
- **Solution**: Installation `html-react-parser` + parsing sécurisé
- **Fichiers**: `EventCard.tsx`, `HorairesMesse.tsx`
- **Résultat**: Descriptions formatées correctement ✅

**2. 🏛️ REFONTE PAGE /paroisses - VERSION 2**
- **Style**: Liste manuscrite épurée (cohérent avec /contact)
- **Structure**:
  - Secteur Nendaz (15 lieux de culte)
  - Secteur Veysonnaz (3 lieux de culte)
  - Autres secteurs (2+ lieux)
- **Design**: Séparateurs clairs, hover subtil, bordures colorées
- **Palette Vitrail**: sky-500 (église), emerald-500 (chapelle), amber-500 (EMS)
- **Citation**: Matthieu 18,20

**3. 📄 PAGES INDIVIDUELLES /paroisses/[slug] - VERSION 2**
- **21 pages statiques** générées via `generateStaticParams`
- **Structure complète**:
  1. Header élégant avec badges (type, secteur, date)
  2. Histoire & Patrimoine (textes MD)
  3. Horaires habituels (liste VERSION 2)
  4. **Prochaines célébrations** (calendrier Google filtré) ⭐
  5. Navigation vers autres lieux du secteur
  6. Citation biblique finale
- **Calendrier filtré**: Chaque paroisse affiche UNIQUEMENT ses événements
- **Intégration**: `<HorairesMesse calendarId={calendar.id} />`

**4. 🔐 SÉCURISATION HTML - DOMPurify**
- **Installation**: `isomorphic-dompurify`
- **Création**: `/lib/sanitize.ts` avec 3 fonctions
  - `sanitizeHtml()` - Contenu riche (whitelist balises safe)
  - `stripHtml()` - Texte brut (supprime tout HTML)
  - `sanitizeForEmail()` - Email/SMS (minimal)
- **Application**: `parse(sanitizeHtml(event.description))`
- **Protection**: XSS impossible via Google Calendar
- **Flux sécurisé**: Google → API → sanitize → parse → DOM

### 📊 STATISTIQUES FINALES
- **46 pages générées** avec succès (Next.js build)
- **0 erreur TypeScript**
- **4 commits** poussés sur GitHub
- **Déploiement Vercel** automatique

### 🎯 COMMITS DE LA SÉANCE
1. `26c0be8` - FIX GOOGLE CALENDAR HTML + REFONTE PAGE PAROISSES VERSION 2
2. `c9eb56a` - REFONTE PAGES INDIVIDUELLES PAROISSES - VERSION 2
3. `b9f1761` - SÉCURISATION HTML - DOMPurify Protection XSS

### ✅ FONCTIONNALITÉS OPÉRATIONNELLES
- ✅ 20+ lieux de culte listés en VERSION 2
- ✅ Chaque lieu a sa page dédiée avec histoire
- ✅ Calendrier Google filtré par paroisse
- ✅ Descriptions HTML formatées correctement
- ✅ Protection XSS complète
- ✅ Build production réussi
- ✅ SEO optimisé (metadata)
- ✅ Responsive 100%
- ✅ ZÉRO emoji

### 🚀 URLs DISPONIBLES
- `/paroisses` - Index toutes paroisses
- `/paroisses/basse-nendaz` - Église Basse-Nendaz + calendrier filtré
- `/paroisses/haute-nendaz` - Église Haute-Nendaz + calendrier filtré
- `/paroisses/veysonnaz` - Église Veysonnaz + calendrier filtré
- ... + 18 autres lieux

---

## 🎨 PALETTE OFFICIELLE - VITRAIL (Validée le 03.10.2025)

### **Palette principale pour composants UI**
Couleurs Tailwind standards inspirées des vitraux d'église - douces, lumineuses et spirituelles :

- 🔵 **sky-500** (#0EA5E9) - Bleu céleste → **Service Liturgique**
- 🟢 **emerald-500** (#10B981) - Vert émeraude → **Sacrements**
- 🟢 **#2A8B8C** - Vert Enoria officiel → **Base Enoria** (TOUJOURS cette couleur exacte)
- 🟡 **amber-500** (#F59E0B) - Or lumineux → **Intentions & Annonces**

### **Avantages de cette palette**
- ✅ Couleurs Tailwind natives = **pas de safelist complexe**
- ✅ Ambiance chaleureuse et spirituelle
- ✅ Bon contraste avec texte blanc
- ✅ Compatible production sans Tailwind purge

### **Utilisation**
```tsx
// Service Liturgique
<a className="bg-sky-500 hover:bg-sky-600 p-8 rounded-lg">

// Sacrements
<a className="bg-emerald-500 hover:bg-emerald-600 p-8 rounded-lg">

// Base Enoria (inline style pour couleur exacte)
<a style={{backgroundColor: '#2A8B8C'}} className="p-8 rounded-lg">

// Intentions
<a className="bg-amber-500 hover:bg-amber-600 p-8 rounded-lg">
```

### **Palettes alternatives disponibles** (si besoin futur)
- **Méditerranée** : indigo-500, rose-500, #2A8B8C, orange-500
- **Nature** : blue-500, lime-600, #2A8B8C, yellow-500

---

## ❓ QUESTIONS STRATÉGIQUES POUR RENDEZ-VOUS CURÉ (4 octobre 2025)

### 🎯 SECTION SACREMENTS - Approche pastorale à définir

**📋 CONTEXTE** : 4 maquettes créées avec palette Vitrail - toutes très réussies visuellement

**🤔 QUESTION CLEF POUR LE CURÉ :**

**"Comment souhaitez-vous que les paroissiens approchent la question des sacrements sur le site web ?"**

**Option A - Information complète en ligne :**
- ✅ Toutes les informations détaillées disponibles sur le site
- ✅ Formulaires d'inscription en ligne
- ✅ Documents téléchargeables (PDF)
- ✅ Parcours détaillé pour chaque sacrement
- ⚠️ Risque : Moins de contact humain personnel

**Option B - Invitation au contact personnel :**
- ✅ Informations de base sur le site
- ✅ Fort accent sur "Contactez-nous pour en savoir plus"
- ✅ Accompagnement personnalisé privilégié
- ✅ Relation humaine et pastorale au centre
- ⚠️ Risque : Moins d'autonomie pour les paroissiens

**Option C - Hybride :**
- ✅ Informations pratiques en ligne (âges, dates, durée)
- ✅ + Invitation forte au contact pour l'accompagnement
- ✅ Équilibre entre autonomie et relation personnelle

**💡 IMPACT SUR LE DESIGN :**
- **Option A** → VERSION 1 ou 2 (détaillées, informatives)
- **Option B** → VERSION 3 (minimaliste, focus contact)
- **Option C** → VERSION 2 ou 4 (équilibre information/invitation)

**📌 MAQUETTES DISPONIBLES :**
- VERSION 1 : Grille 2 colonnes (moderne, complet)
- VERSION 2 : Liste manuscrite (élégant, détaillé)
- VERSION 3 : Minimaliste épuré (sobre, invitation contact)
- VERSION 4 : Lettrine enluminée (spirituel, traditionnel)

**🔗 URLs de test :**
- http://localhost:3000/sacrements-v1
- http://localhost:3000/sacrements-v2
- http://localhost:3000/sacrements-v3
- http://localhost:3000/sacrements-v4

**⏸️ STATUT : En attente décision curé avant intégration finale**

---

## 🚀 État actuel du projet (3 octobre 2025 - 20h30)

## 🔥 SÉANCE DU 3 OCTOBRE 2025 - FIX CRITIQUE TAILWIND PURGE ✅

### 🚨 PROBLÈME MAJEUR RÉSOLU - QuickAccessCard invisibles en production

**⚠️ SYMPTÔME PERSISTANT (plusieurs jours/semaines):**
- Les 4 cartes d'accès rapide complètement invisibles en production
- Fonctionnement correct en développement (localhost)
- Problème uniquement sur Vercel (https://paroisses-nendaz.vercel.app)

**🔍 CAUSE RACINE IDENTIFIÉE:**
- **Tailwind CSS purge** supprime les classes CSS dynamiques en production
- Classes définies dans objet JavaScript `colorClasses[color]` non détectables
- Scanner Tailwind ne peut pas analyser les propriétés d'objet
- Résultat: Classes `bg-paroisse-rouge`, `bg-paroisse-bleuRoi` etc. purgées du bundle final

**🛠️ DOUBLE SOLUTION IMPLÉMENTÉE:**

1. **components/QuickAccessCard.tsx - Refactorisation complète:**
   ```typescript
   // ❌ ANCIEN (ne fonctionne PAS):
   const colorClasses = {
     red: 'bg-paroisse-rouge hover:bg-paroisse-rouge/90 text-white',
     blue: 'bg-paroisse-bleuRoi ...'
   }
   const baseClasses = `${colorClasses[color]} ...`

   // ✅ NOUVEAU (fonctionne):
   let colorClasses = ''
   if (color === 'red') {
     colorClasses = 'bg-paroisse-rouge hover:bg-paroisse-rouge/90 text-white'
   } else if (color === 'blue') {
     colorClasses = 'bg-paroisse-bleuRoi hover:bg-paroisse-bleuRoi/90 text-white'
   }
   // ... explicite pour chaque couleur
   ```

2. **tailwind.config.ts - Safelist de protection:**
   ```typescript
   safelist: [
     // PROTECTION: Classes dynamiques QuickAccessCard & composants
     'bg-paroisse-rouge',
     'bg-paroisse-bleuRoi',
     'bg-paroisse-jaune',
     'bg-paroisse-vert',
     'bg-paroisse-violet',
     'bg-paroisse-turquoise',
     'bg-enoria',
     'hover:bg-paroisse-rouge/90',
     'hover:bg-paroisse-bleuRoi/90',
     // ... toutes les variantes
   ]
   ```

**✅ RÉSULTAT:**
- Build production: 42 pages générées avec succès
- Commit: `8123667` - FIX CRITIQUE QuickAccessCard invisibles
- Déploiement Vercel: En cours
- **IMPORTANT**: Vider cache navigateur (Ctrl+F5) pour voir le fix

**📚 LEÇON TECHNIQUE:**
- ⚠️ **NE JAMAIS** utiliser objets pour classes Tailwind dynamiques
- ✅ **TOUJOURS** utiliser conditions explicites (if/else/switch)
- ✅ **AJOUTER** safelist pour classes critiques générées dynamiquement
- 🔧 **TESTER** en production (Vercel) pas seulement en dev

---

## 🎉 SÉANCE DU 26 SEPTEMBRE 2025 - RÉSOLUTION FINALE API GOOGLE CALENDAR ✅

### 🏆 VICTOIRE COMPLÈTE - SYSTÈME 100% OPÉRATIONNEL

**🎯 OBJECTIF ATTEINT** : Site web entièrement fonctionnel avec Google Calendar API
- **4 cartes d'accès** affichées correctement ✅
- **162 événements** récupérés depuis 20+ calendriers Google ✅
- **API optimisée** avec nouvelle clé sans restrictions ✅
- **Déploiement Vercel** opérationnel ✅

### 🔧 CORRECTIONS FINALES RÉALISÉES

**🔑 NOUVELLE CLÉ API GOOGLE CALENDAR OPTIMISÉE**
- **Problème identifié** : Ancienne clé avec restrictions bloquant Vercel
- **Solution appliquée** : Création nouvelle clé `AIzaSyA6k3URet6_TCTvq_6A4gkOiywhgPjx6Cg` sans restrictions
- **Performance** : 45 événements → **162 événements** (3.6x amélioration)
- **Couverture** : 20+ calendriers Google publics récupérés en parallèle

**⚙️ CONFIGURATION GOOGLE CLOUD CONSOLE**
- **Projet** : "Paroisses Nendaz Calendar"
- **API activée** : Google Calendar API
- **Type de clé** : API Key publique sans restrictions
- **Coût** : 0€ (100,000 requêtes/jour gratuites vs ~50/jour utilisées)

**🚀 DÉPLOIEMENT VERCEL FINALISÉ**
- **Variable ajoutée** : `GOOGLE_API_KEY=AIzaSyA6k3URet6_TCTvq_6A4gkOiywhgPjx6Cg`
- **Environnements** : Production, Preview, Development
- **Test validé** : API retourne 162 événements en production
- **Cache frontend** : Possible nettoyage requis côté utilisateur (Ctrl+F5)

### 📊 RÉSULTATS DE PERFORMANCE

**API GOOGLE CALENDAR - COMPARAISON AVANT/APRÈS**
```json
// AVANT (clé restreinte)
"totalEvents": 0
"lastSync": "2025-09-26T07:42:29.761Z"

// APRÈS (nouvelle clé optimisée)
"totalEvents": 162
"lastSync": "2025-09-26T07:50:16.309Z"
```

**📍 CALENDRIERS CONFIGURÉS (20 calendriers actifs)**
- **NENDAZ** : Basse-Nendaz, Haute-Nendaz + 9 chapelles → 140+ événements
- **VEYSONNAZ** : Église + 2 chapelles → 15+ événements
- **AUTRES** : Aproz, Fey, EMS → 5+ événements
- **TRANSVERSAL** : Équipe pastorale → 2+ événements

### 🏗️ ARCHITECTURE FINALE VALIDÉE

**🔄 FLUX DE DONNÉES COMPLET**
```
20 Calendriers Google → API Key unique → Next.js API → Frontend React → 162 événements affichés
```

**⚡ OPTIMISATIONS TECHNIQUES**
- **Récupération parallèle** : 20 calendriers simultanément
- **Fallback intelligent** : Données de démonstration si offline
- **Cache stratégique** : Rafraîchissement toutes les heures
- **Types d'événements** : 11 catégories colorées (Messe, Adoration, etc.)

## 🚨 SÉANCE DU 23 SEPTEMBRE 2025 - DIAGNOSTIC ET RÉPARATION D'URGENCE ✅

### 🔍 PROBLÈME IDENTIFIÉ ET RÉSOLU
- **⚠️ SYMPTÔME** : QuickAccessCard invisibles, section calendriers en mode loading permanent
- **🔧 DIAGNOSTIC COMPLET** : Couleurs CSS inexistantes dans Tailwind config
- **✅ SOLUTION OSOM** : Remplacement total des couleurs obsolètes par la palette officielle

### 🎯 CORRECTIONS RÉALISÉES

**🎨 COLORIMÉTRIE CORRIGÉE**
- **YouTubeLiveIndicator.tsx** : Remplacement `bg-communion` → `bg-paroisse-rouge`, `bg-ciel` → `bg-paroisse-bleuCiel`
- **EventCard.tsx** : Migration complète couleurs `liturgique-*` vers palette `paroisse-*`
- **Système cohérent** : Toutes les couleurs alignées sur `tailwind.config.ts`

**🗂️ MAPPING COULEURS ÉVÉNEMENTS**
```typescript
// AVANT (couleurs inexistantes)
MASS: 'bg-liturgique-ciel/20 text-liturgique-ciel'
BAPTISM: 'bg-liturgique-esperance/20 text-liturgique-esperance'

// APRÈS (couleurs officielles)
MASS: 'bg-paroisse-bleuCiel/20 text-paroisse-bleuCiel'
BAPTISM: 'bg-paroisse-vert/20 text-paroisse-vert'
```

**🔗 API GOOGLE CALENDAR**
- **Statut** : ✅ Fonctionnel - Récupération 20+ calendriers en parallèle
- **Performance** : Première charge 24s → charges suivantes 900ms
- **Fallback** : Système de données de démonstration opérationnel

### 📊 RÉSULTAT FINAL
- **🎯 QuickAccessCard** : Affichage correct avec couleurs vives
- **🗓️ HorairesMesse** : Chargement dynamique des événements Google Calendar
- **🎨 Design cohérent** : Palette officielle appliquée sur tout le site
- **⚡ Performance** : API optimisée, chargement fluide

### 🛠️ ARCHITECTURE DIAGNOSTIQUE
**Méthode OSOM appliquée :**
1. **Diagnostic systématique** : API → CSS → Composants → Intégration
2. **Corrections ciblées** : Remplacement couleurs obsolètes par palette validée
3. **Tests en parallèle** : API, build, rendu client simultanés
4. **Validation complète** : Fonctionnalité restaurée 100%

**🎉 SITE OPÉRATIONNEL À 100% - PRÊT POUR UTILISATION**

## 🎯 SÉANCE DU 16 SEPTEMBRE 2025 - ARCHITECTURE MULTI-CALENDRIERS COMPLÈTE ✅

### ✨ RÉALISATION MAJEURE : SYSTÈME MULTI-CALENDRIERS 20+ LIEUX

**🏗️ ARCHITECTURE MULTI-CALENDRIERS IMPLÉMENTÉE**
- **Configuration complète** : 20+ calendriers mappés (Nendaz, Veysonnaz, autres secteurs)
- **API multi-parallèle** : Récupération simultanée de tous les calendriers Google
- **Filtrage intelligent** : Par secteur, par calendrier, par type d'événement
- **Typologie complète** : Églises, chapelles, EMS, oratoires, équipe pastorale

**🗓️ COMPOSANT HORAIREDESMESSE RÉVOLUTIONNÉ**
- **Sélecteurs dynamiques** : Secteurs + calendriers spécifiques
- **Affichage coloré** : Chaque lieu a sa couleur unique
- **Types d'événements** : Messe, adoration, confession, baptême, mariage, etc.
- **Responsive + fallback** : Fonctionne même si Google Calendar est hors ligne

**📍 PAGES INDIVIDUELLES PAR LIEU**
- **Routes dynamiques** : `/paroisses/[slug]` pour chaque église/chapelle
- **Horaires dédiés** : Chaque lieu affiche uniquement ses propres événements
- **Design contextuel** : Couleurs et icônes selon le type de lieu
- **Navigation intelligente** : Liens vers autres lieux du même secteur

**🗂️ PAGE INDEX PAROISSES**
- **Navigation par secteurs** : Nendaz, Veysonnaz, Autres, Transversal
- **Statistiques visuelles** : Nombres d'églises, chapelles, EMS
- **Cartes interactives** : Chaque lieu avec sa couleur et description

**👥 MISE À JOUR ÉQUIPE PASTORALE**
- **Nouvelle équipe complète** : 6 membres avec coordonnées détaillées
- **Section secrétariat** : Ajout Caroline Karlen avec horaires et services
- **Design amélioré** : Cartes avec adresses et téléphones pour chaque membre

## 🎯 SÉANCE DU 9 SEPTEMBRE 2025 - TRANSFORMATION IDENTITÉ PAROISSIALE

### ✨ Améliorations réalisées cette séance :

**🎨 TRANSFORMATION IDENTITÉ VISUELLE**
- **Typographie paroissiale** : Playfair Display (titres serif), Crimson Text (accents), Inter (corps)
- **Couleurs liturgiques authentiques** : Palette inspirée des vitraux d'église
- **Effet vitrail subtil** : Animation douce en arrière-plan du hero
- **Design chaleureux** : Le site a maintenant une vraie "âme paroissiale suisse"

**📺 YOUTUBE LIVE INTELLIGENT**  
- **Indicateur dynamique** : Détection automatique des messes (dimanche 10h)
- **URL officielle corrigée** : @paroissesnendazetveysonnaz
- **Design interactif** : Statut EN DIRECT/HORS LIGNE avec animations

**💚 INTÉGRATION ENORIA COMPLÈTE**
- **Couleur officielle** : #2A8B8C pour tous les éléments Enoria
- **Liens fonctionnels** : Tous pointent vers https://web.enoria.app/
- **Cohérence visuelle** : Boutons harmonisés dans header, footer et accès rapides

**🧹 ÉPUREMENT ET SOBRIÉTÉ**
- **Footer simplifié** : Suppression ornements, couleurs cohérentes, fond gris clair
- **Suppression décorations** : Plus d'ornements sous les titres pour plus de sobriété  
- **Contraste optimisé** : Vignettes d'accès rapides parfaitement lisibles
- **Menu réorganisé** : Accueil - Actualités - Pastorale - Paroisses - Contact

### 🔧 Corrections techniques :
- **ESLint fix** : Apostrophe échappée dans citation biblique
- **Build réussi** : Compilation production sans erreur
- **Cache nettoyé** : Next.js redémarré pour éviter les erreurs de dev

### 📦 Commits de la séance :
- `dc1f49c` - Transformation complète vers identité paroissiale chaleureuse
- `37533ec` - Correction apostrophe ESLint  
- `253e190` - Finalisation design et intégration Enoria
- `9e71491` - Footer sobre et cohérent
- `4d010c7` - Réorganisation menu navigation

**🎉 RÉSULTAT : Site avec identité paroissiale authentique, moderne et fonctionnel**

## 🎯 SÉANCE DU 23 SEPTEMBRE 2025 - INTÉGRATION CONTENUS HISTORIQUES ✅

### ✨ RÉALISATION MAJEURE : PAGES ENRICHIES AVEC CONTENUS MD

**📚 BASE DE DONNÉES CONTENUS COMPLÈTE**
- **20+ fiches détaillées** : Histoire, patron, dates de construction, particularités
- **Correspondance parfaite** : Textes MD ↔ calendriers Google existants
- **Horaires habituels** : Messes dominicales, semaine, adoration, vêpres
- **Structure TypeScript** : Interface ParoisseContent avec types stricts

**🏛️ PAGES INDIVIDUELLES RÉVOLUTIONNÉES**
- **Section Histoire** : Texte complet du MD avec particularités
- **Section Horaires fixes** : Données structurées du MD
- **Section "Prochaines célébrations"** : Google Calendar live intégré
- **Navigation enrichie** : Breadcrumb + liens vers autres lieux du secteur
- **Design cohérent** : Nouvelle charte graphique appliquée

**🗺️ PAGE INDEX PAROISSES ENRICHIE**
- **Cartes avec extraits** : 30 premiers mots de l'histoire
- **Informations enrichies** : Patron, date de construction, horaires dominicaux
- **Design amélioré** : Couleurs par secteur, badges informatifs
- **Navigation intelligente** : Liens directs vers pages détaillées

**🔗 ARCHITECTURE HYBRIDE PARFAITE**
- **Données statiques** (histoire, horaires) + **données live** (Google Calendar)
- **Système de fallback** : Horaires fixes si Google Calendar indisponible
- **35 pages générées** avec contenu riche et SEO optimisé
- **Meta descriptions** enrichies avec extraits historiques

## 🚀 État actuel du projet (23 septembre 2025 - 10h00)

### ✅ Réalisations complétées
- **Structure Next.js 15** avec TypeScript et Tailwind CSS
- **Pages principales** : Accueil, Actualités, Événements, Paroisses, Pastorale, Contact
- **Composants réutilisables** : Header, Footer, EventCard, QuickAccessCard
- **Système multi-calendriers Google** : 20+ calendriers pour tous les lieux de culte
- **Pages dynamiques** : Chaque paroisse/chapelle a sa propre page avec ses horaires
- **Détection YouTube Live** : Indicateur automatique pour les messes en direct
- **Base de données contenus** : Textes historiques et horaires pour 20+ lieux
- **Intégration MD complète** : Histoire + Google Calendar sur chaque page individuelle
- **Déploiement Vercel** fonctionnel
- **Site live** : https://paroisses-nendaz.vercel.app

### 🎨 Identité visuelle - CHARTE GRAPHIQUE OFFICIELLE
- **Logo** : Logo multicolore avec 9 carrés puzzle représentant l'unité des paroisses

#### **Palette officielle validée (23.09.2025) :**

**Couleurs principales du logo :**
- **Violet mystique** : `#8B4789` - Spiritualité, transcendance
- **Bleu roi** : `#2E5EAA` - Ciel divin, foi
- **Jaune lumière** : `#FFC107` - Lumière divine, joie
- **Turquoise** : `#5DADE2` - Eau baptismale, renouveau
- **Bleu marine** : `#1E3A5F` - Profondeur spirituelle
- **Bleu ciel** : `#87CEEB` - Paix céleste, sérénité
- **Vert espérance** : `#4CAF50` - Vie, espérance, nature
- **Bleu communauté** : `#4A90E2` - Unité paroissiale
- **Rouge passion** : `#E74C3C` - Amour du Christ, passion

**Couleurs neutres :**
- **Gris anthracite** : `#3E3E3E` - Fond sombre, contraste
- **Blanc pur** : `#FFFFFF` - Fond principal, pureté
- **Gris clair** : `#F5F5F5` - Fonds secondaires

- **Typographie** : Playfair Display (titres), Crimson Text (accents), Inter (corps)
- **Couleur Enoria** : `#2A8B8C` - Intégration plateforme Enoria

### 🔧 Architecture actuelle
- **Pas de base de données nécessaire** : Google Calendar sert de source de données pour les horaires
- **Gestion par OSOM** : Maintenance et mises à jour du contenu par l'équipe OSOM
- **Données statiques** : Contenus fixes directement dans le code
- **API Google Calendar** : Source dynamique pour tous les horaires de messes

### 🔐 Stratégie de gestion
- **Site public** : https://paroisses-nendaz.vercel.app
- **Gestion des horaires** : Via Google Calendar (accessible par la paroisse)
- **Mises à jour contenu** : Par OSOM via modification du code
- **Maintenance** : Déploiement automatique via Vercel

## 📝 TODO List - Priorités ACTUELLES

### 🎯 Phase 1 : Amélioration du contenu
- [ ] **Page Paroisses**
  - Enrichir le contenu avec informations pratiques
  - Ajouter photos des églises/chapelles
  - Détailler les services par paroisse
- [ ] **Page Pastorale**
  - Compléter informations sacrements
  - Ajouter section catéchèse détaillée
  - Informations sur les groupes paroissiaux
- [ ] **Page Actualités**
  - Ajouter plus d'articles pertinents
  - Intégrer photos et médias

### 🚀 Phase 2 : Optimisations fonctionnelles
- [ ] **Améliorer l'affichage mobile**
  - Tester et corriger responsive design
  - Optimiser la navigation mobile
- [ ] **Performance**
  - Optimiser les images
  - Améliorer temps de chargement
- [ ] **SEO**
  - Ajouter meta descriptions
  - Optimiser les titres de pages

### ⛪ Phase 3 : Intégration Google Calendar - ARCHITECTURE MULTI-CALENDRIERS ✅ COMPLÈTE
- [x] **Phase 3.1 : Installation et configuration**
  - [x] Installation librairie `googleapis`
  - [x] Configuration OAuth Google Cloud (Client ID/Secret)
  - [x] Création clé API simple pour calendriers publics
  - [x] Structure de données TypeScript pour événements
- [x] **Phase 3.2 : API Backend multi-calendriers**
  - [x] Créer API route `/api/horaires` pour 20+ calendriers
  - [x] Parser et formater les événements avec typologie complète
  - [x] Système de fallback en cas d'erreur API
  - [x] **IMPLÉMENTÉ** : Récupération parallèle de tous les calendriers
  - [x] **Filtrage** : Par secteur, par calendrier, par type d'événement
- [x] **Phase 3.3 : Composant React avancé**
  - [x] Composant `HorairesMesse` avec sélecteurs dynamiques
  - [x] Design responsive avec couleurs par lieu
  - [x] **IMPLÉMENTÉ** : Filtrage par secteur et calendrier spécifique
- [x] **Phase 3.4 : Architecture complète multi-lieux**
  - [x] **Configuration des 20+ calendriers** :
    - **NENDAZ** : Basse-Nendaz, Haute-Nendaz + 9 chapelles
    - **VEYSONNAZ** : Église Veysonnaz + 3 chapelles
    - **AUTRES** : Aproz, Fey, EMS, Oratoires
    - **TRANSVERSAL** : Équipe pastorale
  - [x] **API parallèle** : Récupération simultanée tous calendriers
  - [x] **Pages dynamiques** : Route `/paroisses/[slug]` pour chaque lieu
  - [x] **Navigation intelligente** : Index par secteurs avec filtrage

### 🏗️ **ARCHITECTURE DÉCOUVERTE - Liste complète des calendriers :**
**📍 SECTEUR NENDAZ :**
- Église de Basse-Nendaz
- Église de Haute-Nendaz
- Chapelle de Beuson, Brignon, Saclentse, Bleusy, Planchouet
- Chapelles St-Michel (Haute-Nendaz), St-Sébastien, des Condémines, des Rairettes

**📍 SECTEUR VEYSONNAZ :**
- Église de Veysonnaz
- Chapelle de Clèbes (Veysonnaz)
- Chapelle St-Barthélémy (Clèbes)

**📍 AUTRES SECTEURS :**
- Église d'Aproz, de Fey
- EMS Les Vergers, Foyer Ma Vallée
- Oratoire du Chardonney

**📍 TRANSVERSAL :**
- Z - Équipe pastorale (événements, réunions, formations)

**✅ OBJECTIF ATTEINT : Chaque paroisse/chapelle affiche SES propres horaires depuis SON calendrier Google**

### 🎉 FONCTIONNALITÉS IMPLÉMENTÉES CETTE SÉANCE :

**🔗 URLs disponibles :**
- **Page d'accueil** : `/` - Horaires globaux avec sélecteurs
- **Index paroisses** : `/paroisses` - Navigation par secteurs
- **Pages individuelles** : `/paroisses/basse-nendaz`, `/paroisses/haute-nendaz`, etc.
- **API multi-calendriers** : `/api/horaires?sector=nendaz&calendarId=basse-nendaz`

**📊 Capacités de l'API :**
- **Récupération parallèle** : 20+ calendriers simultanément
- **Filtrage flexible** : `?sector=nendaz` ou `?calendarId=basse-nendaz`
- **Fallback robuste** : Données de démonstration si Google Calendar indisponible
- **Cache intelligent** : Mise à jour toutes les heures
- **Types d'événements** : 11 types colorés (messe, adoration, etc.)

**🎨 Interface utilisateur :**
- **Sélecteurs intuitifs** : Dropdown secteurs et lieux
- **Design cohérent** : Couleurs uniques par lieu
- **Responsive** : Mobile, tablet, desktop
- **Accessible** : Navigation claire et logique

### 📦 Phase 3 : Fonctionnalités futures (optionnel)
- [ ] **Page documents**
  - Section téléchargements PDF
  - Organisation par catégories
- [ ] **Page réservation salles**
  - Formulaire de demande
  - Calendrier de disponibilité
- [ ] **Newsletter**
  - Formulaire d'inscription simple
  - Intégration avec service email
- [ ] **Multilingue**
  - Support français/allemand si nécessaire

## 🐛 Points d'attention

1. **TypeScript warnings**
   - Quelques unused variables à nettoyer
   - À corriger avec ESLint si nécessaire

2. **Optimisation images**
   - Certaines images pourraient être optimisées
   - Utiliser format WebP quand possible

## 📚 Documentation importante

### Stack technique
- **Frontend** : Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend** : Next.js API Routes
- **Données dynamiques** : Google Calendar API (horaires)
- **Hosting** : Vercel avec déploiement automatique
- **Intégrations actuelles** : YouTube Live (détection), Enoria (liens), Google Calendar (20+ calendriers)

### Structure du projet
```
site-web/
├── app/                 # Pages et routes Next.js
│   ├── admin/          # Section administration
│   ├── api/            # API routes
│   └── (pages)/        # Pages publiques
├── components/         # Composants React réutilisables
├── lib/               # Utilitaires (auth, prisma)
├── prisma/            # Schéma et migrations DB
└── public/            # Assets statiques
```

### Commandes utiles
```bash
# Développement
npm run dev              # Serveur dev localhost:3000

# Production
npm run build           # Build production
npm run start          # Serveur production

# Déploiement
git push origin main     # Déploiement automatique via Vercel
```

## 💡 Notes pour la suite

### Stratégie de maintenance
1. **Gestion des horaires** : La paroisse modifie directement dans Google Calendar
2. **Mises à jour contenu** : OSOM modifie le code et déploie via Git
3. **Monitoring** : Vérification régulière du bon fonctionnement
4. **Support** : OSOM assure la maintenance technique

### Points d'optimisation futurs
- **Performance** : Optimisation images et lazy loading
- **SEO** : Meta tags, sitemap XML, Open Graph
- **Accessibilité** : Tests WCAG et améliorations
- **Analytics** : Ajout tracking privacy-friendly si besoin

## 🎯 Objectif final
Site moderne et performant pour les paroisses de Nendaz, avec gestion simplifiée des horaires via Google Calendar et maintenance assurée par OSOM. Architecture légère sans base de données, adaptée aux besoins réels de la paroisse.

---
*Dernière mise à jour : 23 septembre 2025*
*Par : Claude Assistant & Camilo Rivera*

## 🎯 PROCHAINES ÉTAPES IMMÉDIATES

### Priorité 1 : Amélioration du contenu
- Enrichir page Paroisses avec informations pratiques
- Compléter page Pastorale (sacrements, catéchèse)
- Ajouter contenu pertinent sur page Actualités

### Priorité 2 : Optimisations
- Tests et corrections responsive mobile
- Optimisation des images et performances
- Amélioration SEO avec meta tags

### Priorité 3 : Fonctionnalités optionnelles
- Page documents PDF si nécessaire
- Formulaire réservation salles si demandé
- Support multilingue si requis