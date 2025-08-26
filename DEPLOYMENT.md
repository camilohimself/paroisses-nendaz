# 🚀 Déploiement Vercel - Paroisses Nendaz

## Configuration Vercel

### 1. Variables d'environnement à configurer :

```bash
# Base de données (Production PostgreSQL)
DATABASE_URL="postgresql://user:password@host:port/db"

# NextAuth
NEXTAUTH_SECRET="your-production-secret-here"
NEXTAUTH_URL="https://your-domain.vercel.app"

# Optionnel - Intégrations futures
BREVO_API_KEY="your-brevo-key"
SUPABASE_URL="your-supabase-url"
SUPABASE_ANON_KEY="your-supabase-key"
```

### 2. Base de données production

**Option A: Supabase (Recommandé)**
- Gratuit jusqu'à 500MB
- PostgreSQL managed
- Interface web simple

**Option B: PlanetScale**
- MySQL serverless
- Gratuit avec limitations

**Option C: Railway/Render**
- PostgreSQL hosted
- ~5-7$/mois

### 3. Commands Vercel

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement depuis le repo GitHub
vercel --prod

# Ou via interface web Vercel (plus simple)
```

### 4. Configuration automatique

Une fois connecté à GitHub dans Vercel :
- ✅ Build détecté automatiquement  
- ✅ Variables d'env à configurer via UI
- ✅ Domaine custom possible
- ✅ SSL automatique

## 📋 Checklist avant déploiement

- [ ] Variables d'environnement configurées
- [ ] Base de données production créée
- [ ] Migration Prisma effectuée : `npx prisma db push`
- [ ] Seed data : `npm run db:seed` 
- [ ] Domaine personnalisé configuré (optionnel)

## 🔗 URLs importantes

- **Site de prod** : https://paroisses-nendaz.vercel.app
- **Dashboard Vercel** : https://vercel.com/dashboard
- **Domaine custom** : paroisses-nendaz.ch (à configurer)

Le site sera live en quelques minutes ! 🎉