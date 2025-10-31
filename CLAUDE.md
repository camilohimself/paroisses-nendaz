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
*Mise à jour : 31 octobre 2025 - Séance complète sacrements*
