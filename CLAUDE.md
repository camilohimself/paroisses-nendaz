# 📋 CLAUDE.md - Journal de développement Paroisses Nendaz

## 🔗 Références importantes
- **Site actuel de référence** : https://paroisses-nendaz.ch/
- **Logo officiel** : Intégré dans `/public/logo-paroisses.png`
- **Palette de couleurs** : Basée sur le site actuel et le logo multicolore

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
- **Couleurs primaires** : 
  - Rouge (#d14f42)
  - Orange (#f7a145)
  - Rouge foncé (#a2473e)
- **Couleurs secondaires** (du logo) :
  - Bleu (#4A90E2)
  - Vert (#52C41A)
  - Jaune (#FADB14)
  - Violet (#722ED1)
- **Typographie** : Montserrat (titres) et Crimson Text (texte)

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
*Dernière mise à jour : 26 août 2025, 16h30*
*Par : Claude Assistant & Camilo Rivera*