# 📋 CLAUDE.md - Journal de développement Paroisses Nendaz

## 🔗 Références importantes
- **Site actuel de référence** : https://paroisses-nendaz.ch/
- **Logo officiel** : Intégré dans `/public/logo-paroisses.png`
- **Palette de couleurs** : Basée sur le site actuel et le logo multicolore

## 🚀 État actuel du projet (9 septembre 2025 - 17h15)

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

## 🚀 État actuel du projet (9 septembre 2025)

### ✅ Réalisations complétées
- **Structure Next.js 15** avec TypeScript et Tailwind CSS
- **Pages principales** : Accueil, Actualités, Événements, Paroisses, Pastorale, Contact
- **Composants réutilisables** : Header, Footer, EventCard, QuickAccessCard
- **Base de données Prisma** avec schéma complet (désactivé temporairement)
- **Authentification NextAuth** (configuration partielle)
- **Dashboard admin** avec statistiques et vue d'ensemble
- **Déploiement Vercel** fonctionnel
- **Site live** : https://paroisses-nendaz.vercel.app

### 🎨 Identité visuelle
- **Logo** : Logo multicolore avec croix puzzle représentant les paroisses
- **Palette officielle - Couleurs liturgiques** :
  - Rouge communion (#DC143C) - Passion, amour
  - Bleu ciel (#4169E1) - Spiritualité, ciel
  - Jaune lumière (#FFD700) - Lumière divine  
  - Vert espérance (#228B22) - Espérance, nature
  - Orange chaleur (#FF8C00) - Chaleur communautaire
  - Violet mystique (#8B008B) - Mystère, transcendance
- **Couleurs neutres** :
  - Charcoal (#2C3E50) - Texte principal
  - Gris doux (#7F8C8D) - Texte secondaire
  - Blanc pur (#FFFFFF) - Fond principal
  - Beige parchemin (#FBF8F3) - Fond alternatif
- **Typographie** : Playfair Display (titres), Crimson Text (accents), Inter (corps)
- **Couleur Enoria** : #2A8B8C - Vert spécifique pour l'intégration

### 🔧 Configuration temporaire
- **Pas de base de données** : Données hardcodées pour la démo
- **Auth simplifiée** : Comptes de démo sans Prisma
- **Variables d'environnement manquantes** sur Vercel (NEXTAUTH_SECRET)

### 🔐 Accès actuels
- **Site public** : https://paroisses-nendaz.vercel.app
- **Dashboard admin** (accès direct) : https://paroisses-nendaz.vercel.app/admin/dashboard
- **Login admin** : https://paroisses-nendaz.vercel.app/admin/login
  - Email : admin@paroisses-nendaz.ch
  - Password : admin123

## 💡 Pourquoi une base de données ?

Une base de données est **essentielle** pour :
1. **Gestion dynamique du contenu** : Permettre aux administrateurs de modifier actualités, événements et horaires sans toucher au code
2. **Authentification sécurisée** : Gérer les comptes administrateurs de manière sécurisée
3. **Historique et archivage** : Conserver l'historique des événements et actualités
4. **Recherche et filtrage** : Permettre aux utilisateurs de rechercher dans le contenu
5. **Multi-utilisateurs** : Plusieurs personnes peuvent gérer le site simultanément
6. **Intégrations futures** : Newsletter, inscriptions événements, réservations salles

Sans base de données, tout changement nécessite une modification du code et un redéploiement, ce qui n'est pas viable pour une paroisse.

## 📝 TODO List - Priorités

### 🎯 Phase 1 : Configuration Production (Urgent)
- [ ] **Configurer Supabase PostgreSQL**
  - Créer compte Supabase
  - Créer base de données
  - Récupérer DATABASE_URL
- [ ] **Réactiver Prisma**
  - Décommenter imports dans `lib/auth.ts`
  - Décommenter code dans `app/admin/dashboard/page.tsx`
  - Migrer schéma : `npx prisma db push`
  - Seed data : `npm run db:seed`
- [ ] **Configurer variables Vercel**
  - NEXTAUTH_SECRET (générer avec `openssl rand -base64 32`)
  - NEXTAUTH_URL = https://paroisses-nendaz.vercel.app
  - DATABASE_URL (depuis Supabase)

### 🚀 Phase 2 : CMS Fonctionnel
- [ ] **API Routes CRUD**
  - `/api/events` - Créer, lire, modifier, supprimer événements
  - `/api/articles` - Gestion des actualités
  - `/api/documents` - Upload et gestion PDF
- [ ] **Interface Admin complète**
  - Page gestion événements (`/admin/events`)
  - Éditeur articles (`/admin/articles`)
  - Upload documents (`/admin/documents`)
- [ ] **Connexion données dynamiques**
  - Page accueil avec vrais événements depuis DB
  - Page actualités avec articles depuis DB

### 📦 Phase 3 : Fonctionnalités avancées
- [ ] **Intégration YouTube Live**
  - Embed player sur page accueil
  - Détection live/offline automatique
- [ ] **Système Upload PDF**
  - Intégrer Supabase Storage ou Vercel Blob
  - Page publique `/documents` pour téléchargements
- [ ] **Newsletter Brevo**
  - API d'inscription
  - Gestion des listes
- [ ] **Intégration Enoria**
  - SSO ou iframe
  - Authentification unifiée

### 🎨 Phase 4 : Finalisation
- [ ] **Pages manquantes**
  - Compléter page Paroisses avec vrais contenus
  - Finaliser page Pastorale (sacrements, catéchèse)
  - Page réservation salle
- [ ] **Optimisations**
  - Tests mobile responsive
  - Performance audit Lighthouse
  - SEO méta tags
  - Accessibilité WCAG
- [ ] **Multilingue**
  - Français/Allemand avec next-i18n

## 🐛 Problèmes connus à corriger

1. **NextAuth configuration**
   - Erreur : "Configuration" sur `/admin/error`
   - Solution : Ajouter NEXTAUTH_SECRET sur Vercel

2. **Base de données**
   - Erreur : "PrismaClientInitializationError" sur Vercel
   - Solution : Utiliser PostgreSQL (Supabase) au lieu de SQLite

3. **TypeScript warnings**
   - Unused variables dans certains fichiers
   - À nettoyer avec ESLint

## 📚 Documentation importante

### Stack technique
- **Frontend** : Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend** : Next.js API Routes, Prisma ORM
- **Auth** : NextAuth.js
- **DB** : PostgreSQL (Supabase recommandé)
- **Hosting** : Vercel
- **À intégrer** : Brevo (newsletter), YouTube API, Enoria

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

# Base de données
npm run db:generate      # Générer client Prisma
npm run db:push         # Pousser schéma vers DB
npm run db:seed         # Insérer données de test

# Production
npm run build           # Build production
npm run start          # Serveur production
```

## 💡 Notes pour la suite

### Après la présentation client
1. Définir priorités exactes avec le client
2. Confirmer intégrations tierces (Enoria, Theodia, Brevo)
3. Obtenir accès aux comptes/APIs nécessaires
4. Planifier migration du contenu existant

### Architecture recommandée
- **CMS headless** pour gestion contenu (déjà en place avec Next.js)
- **CDN Cloudflare** pour assets et cache
- **Monitoring Sentry** pour tracking erreurs
- **Analytics Plausible** (privacy-friendly)

### Points d'attention SEO
- Redirections 301 depuis anciennes URLs
- Sitemap XML dynamique
- Robots.txt optimisé
- Meta tags et Open Graph

## 🎯 Objectif final
Site moderne, performant et facile à maintenir pour les paroisses de Nendaz, avec CMS intuitif pour non-techniciens et toutes les intégrations nécessaires pour la vie paroissiale digitale.

---
*Dernière mise à jour : 9 septembre 2025, 17h15*
*Par : Claude Assistant & Camilo Rivera*

## 🎯 PROCHAINES ÉTAPES RECOMMANDÉES

### Phase 1 : Configuration production (priorité haute)
- Configuration base de données PostgreSQL (Supabase)
- Variables d'environnement Vercel
- Réactivation Prisma et données dynamiques

### Phase 2 : Contenu et fonctionnalités 
- Remplacement contenu temporaire par contenu réel
- Intégration API YouTube pour détection live automatique
- Pages manquantes (réservation salle, documents)

### Phase 3 : Optimisations finales
- Tests responsiveness mobile/tablet
- Optimisations SEO et performance
- Tests utilisateurs avec les paroissiens