# CLAUDE.md - Paroisses Nendaz

## URLs & Config
- **Production** : https://www.paroisses-nendaz.ch
- **Dev** : http://localhost:3002
- **GA4** : G-M20DBECFYY | **GSC** : Propriété vérifiée
- **FormSubmit** : paroisse_nendaz@bluemail.ch

## Stack
Next.js 15, React 19, TypeScript, Tailwind, Google Calendar API (20+ lieux), Vercel auto-deploy

## Commandes
```bash
npm run dev      # Port 3002
npm run build    # 58 pages
git push origin main
```

## Design System - Palette "Pierre et Lumière"
| Élément | Couleurs |
|---------|----------|
| Principal | `stone-50/100/600/800/900` + `amber-400/500/600` |
| Avent S1 (Luce) | `amber-100/400/500/700` (jaune) |
| Avent S2 (Fe) | `red-100/400/500/700` (rouge) |
| Avent S3 (Xin) | `emerald-100/400/500/700` (vert) |
| Avent S4 (Sky) | `blue-100/400/500/700` (bleu) |
| Enoria | `#2A8B8C` (toujours exact) |
| YouTube CTA | `#FF0000` (exception) |

**Règles** : ZÉRO emoji → 100% icônes Lucide React (w-4/w-5/w-6)

## Calendrier de l'Avent 2025 - Architecture

### Fichiers clés
```
/app/avent/page.tsx              # Page calendrier interactif
/app/avent/layout.tsx            # Métadonnées OpenGraph
/app/avent/mission-1/page.tsx    # Mission Luce (FAIT)
/app/avent/mission-2/page.tsx    # Mission Fe (À CRÉER)
/app/avent/mission-3/page.tsx    # Mission Xin (À CRÉER)
/app/avent/mission-4/page.tsx    # Mission Sky (À CRÉER)
/lib/avent-data.ts               # Données semaines + jours
/public/images/avent/personnages/ # Images PNG optimisées
/qr-codes/mission-X-xxx.jpg      # QR codes par mission
```

### Structure données (`lib/avent-data.ts`)
- `SEMAINES_AVENT[]` : 4 semaines avec thème, personnage, couleurs, psaume, prière, chant YouTube
- `JOURS_SEMAINE_1[]` : Jours 1-7 (FAIT)
- `JOURS_SEMAINE_2[]` : Jours 8-13 (À AJOUTER)
- `JOURS_SEMAINE_3[]` : Jours 14-20 (À AJOUTER)
- `JOURS_SEMAINE_4[]` : Jours 21-25 (À AJOUTER)

### Chants YouTube (IDs)
| Semaine | Chant | YouTube ID |
|---------|-------|------------|
| 1 | Dans la lumière de Dieu | `fOJoUI_IA4s` |
| 2 | J'ai confiance, je ne crains pas | `rIjW99MJf7w` |
| 3 | Pèlerins sur la terre | `bfhW9hRddOg` |
| 4 | Comment ne pas te louer | `H06KAewLhaY` |

### Pour ajouter une semaine
1. Ajouter `JOURS_SEMAINE_X[]` dans `lib/avent-data.ts` (extraire du PDF)
2. Mettre à jour `getJourData()` pour inclure les nouveaux jours
3. Créer `/app/avent/mission-X/page.tsx` (copier mission-1 comme base)
4. Générer QR code : `node -e "require('qrcode').toFile(...)"`
5. Tester + commit + push

### Lieux des missions (QR codes physiques)
| Semaine | Personnage | Église | Status |
|---------|------------|--------|--------|
| 1 | Luce | Basse-Nendaz | FAIT |
| 2 | Fe | Fey | FAIT (page + QR) |
| 3 | Xin | Veysonnaz | À CRÉER |
| 4 | Sky | (à définir) | À CRÉER |

### Dates clés
| Semaine | Début | Fin | Personnage |
|---------|-------|-----|------------|
| 1 | 1 déc | 6 déc | Luce (jaune) |
| 2 | 7 déc | 13 déc | Fe (rouge) |
| 3 | 14 déc | 20 déc | Xin (vert) |
| 4 | 21 déc | 25 déc | Sky (bleu) |

## Maillage interne Avent
```
/actualites ──► /avent ──► /avent/mission-X
     ▲              │              │
     └──────────────┴──────────────┘
```

## Paroisses légitimes (sitemap)
Aproz, Basse-Nendaz, Brignon, Fey, Haute-Nendaz, Saclentse, Veysonnaz

## Backlog Avent
- [x] Mission 1 (Luce) - Basse-Nendaz - FAIT
- [x] Mission 2 (Fe) - Fey - FAIT (page + QR + jours 8-13)
- [x] Mission 3 (Xin) - Veysonnaz - PAGE CRÉÉE, images à personnaliser
- [ ] Mission 4 (Sky) - Aproz - semaine du 21 déc
- [x] Jours semaine 1 dans avent-data.ts - FAIT
- [x] Jours semaine 2 dans avent-data.ts - FAIT
- [x] Jours semaine 3 dans avent-data.ts - FAIT (jours 14-20)
- [ ] Jours semaine 4 dans avent-data.ts

---

## SESSION 13 DÉC 2025 - TERMINÉE ✅

### Mission 3 (Xin) - COMPLÈTE
- [x] `JOURS_SEMAINE_3[]` ajouté dans `avent-data.ts` (jours 14-20)
- [x] `getJourData()` mis à jour pour semaine 3
- [x] `/app/avent/mission-3/page.tsx` créé (structure complète)
- [x] QR code `mission-3-xin.jpg` généré
- [x] Monologues Xin améliorés (plus chaleureux, adaptés enfants)
- [x] **10 images Xin générées et optimisées** (~130KB chacune)
- [x] Build vérifié ✅
- [x] **Déployé en production** ✅

### Images Xin intégrées
```
/public/images/avent/personnages/
├── Xin.png              (96KB)  - Accueil, bras ouverts
├── Xin-presentation.png (109KB) - Salut main levée
├── Xin-baton.png        (144KB) - Montre bâton avec fleur
├── Xin-indices.png      (134KB) - Doigt levé, indices
├── Xin-defi.png         (131KB) - Câline son doudou
├── Xin-cherche.png      (128KB) - Main sur yeux, cherche
├── Xin-marie.png        (240KB) - Devant vitraux Marie
├── Xin-priere.png       (129KB) - En prière, yeux fermés
├── Xin-bravo.png        (122KB) - Bras levés, célébration
└── Xin-fin.png          (128KB) - Au revoir
```

### Activation
- **Date** : 14 décembre 2025 à 00:00 (minuit)
- **Page Avent** : Semaine 3 visible dès le 14 déc
- **Mission 3** : Accessible dès minuit

### Commits
- `11fc12a` - Images Xin personnalisées (9 poses optimisées)
- `05ee3ae` - Activation à minuit (14 déc 00h00)
- `67bd8da` - Mission 3 complète + jours 14-20

### Script Mission 3
1. **Étape 1** : Présentation Xin (4 slides) → Question bâton Oui/Non
2. **Étape 2** : Indices pour Marie (5 slides) → Bouton "J'ai trouvé"
3. **Étape 3** : Explication Marie + Prière (3 slides)
4. **Étape 4** : Défi semaine (2 slides) - câlins, dessins, sourires
5. **Étape 5** : Fin + Teaser Sky à Aproz (2 slides)

---

## SESSION 16 DÉC 2025 - TERMINÉE

### Fix Tailwind v4 - Couleurs paroisse
- [x] Ajout des couleurs `paroisse-*` dans `@theme inline` de `globals.css`
- [x] Fix bloc "Préparer un baptême" invisible sur `/sacrements/bapteme`
- **Cause** : Tailwind v4 nécessite les couleurs dans `@theme`, pas seulement `tailwind.config.ts`
- **Commit** : `1340335`

### GA4 Tracking - Mission 3
- [x] Ajout type `marie_found` dans `lib/analytics.ts`
- [x] Ajout `trackMission.marieFound(3)` quand statue Marie trouvée
- **Commit** : `9273ae8`

### Footer Enoria
- [x] Synchronisation lien footer avec header
- **Avant** : `https://web.enoria.app/`
- **Après** : `https://public.enoria.app/pubinsc/auth?type=foyer&p=598`
- **Commit** : `9273ae8`

### Feuille d'Annonces - Nouvelle logique dates
- [x] Simplification : **Jour J + 7 jours** (au lieu de logique weekends)
- **Avant** : Samedi → Dimanche +8j avec règle vendredi 18h
- **Après** : Date du clic → Date du clic + 7 jours
- **Fichier** : `app/api/feuille-annonces/generate/route.tsx`
- **Commit** : `ed4cf39`

### Commits session
| Hash | Description |
|------|-------------|
| `1340335` | fix: Add paroisse colors to Tailwind v4 @theme block |
| `9273ae8` | feat: Add marie_found tracking + fix Enoria footer link |
| `ed4cf39` | refactor: Simplify feuille d'annonces date logic |

---

## SESSION 19 DÉC 2025 - TERMINÉE

### Page dédiée "i cöble dû Bon Djyû"
- [x] Nouvelle page `/pastorale/liturgie/coble-bon-djyu`
- [x] Groupe d'animation liturgique familiale (pas juste une chorale)
- [x] Contenu : mission, FAQ accordion, prochaines dates, contact Jonathan Droxler
- [x] Palette **rose doux** (dusty pink) - couleur famille/tendresse
- [x] Carte cliquable sur `/pastorale/liturgie`
- **Commit** : `8dc467f`

### Calendrier Google - Fêtes patronales
- [x] Nouveau calendrier : `theodianendaz@gmail.com` (bleu `#3B82F6`)
- [x] Nouveau type événement `fete` → label "Célébration"
- [x] Détection auto : "fête patronale", "patron", "st-", "saint-"
- **Commit** : `139bd75`

### Bouton "Voir plus" - HorairesMesse
- [x] Ajout bouton pour charger +6 événements
- [x] Affiche nombre d'événements restants
- [x] Reset au changement de filtre
- **Commit** : `139bd75`

### Actualités - Nouveaux événements
- [x] Loto Hospitaliers de Lourdes (11 jan 2026, Biolette 17h30)
- [x] Fête St-Sébastien (20 jan 2026, Église Basse-Nendaz)
- [x] Loto église Aproz (25 jan 2026, Salle gym Aproz 17h30)
- [x] **Épiphanie 2026** (4 jan, Église Basse-Nendaz 10h) + affiche
- **Commits** : `7c0d1cf`, `b893111`, `ca4fb81`, `cda7567`

### QR Code Mission 4
- [x] Généré `qr-codes/mission-4-sky.jpg`
- [x] URL : `/avent/mission-4`
- [x] Couleur bleu Sky `#1e3a5f`

### Commits session
| Hash | Description |
|------|-------------|
| `8dc467f` | feat: Add dedicated page for "i cöble dû Bon Djyû" |
| `139bd75` | feat: Add Fêtes patronales calendar + "Voir plus" button |
| `7c0d1cf` | feat: Add 3 new events for January 2026 |
| `b893111` | fix: Préciser lieu Fête St-Sébastien |
| `ca4fb81` | feat: Add Épiphanie 2026 event with poster |
| `cda7567` | fix: Update Épiphanie 2026 poster (corrected version) |

---

## BACKLOG - Semaine 4 (Sky)
- Personnage : **Sky** (bleu)
- Église : **Aproz**
- Dates : 21-25 décembre
- [ ] Créer `/app/avent/mission-4/page.tsx`
- [ ] Ajouter `JOURS_SEMAINE_4[]` dans avent-data.ts
- [ ] Générer images Sky
- [x] Générer QR code mission-4 ✅

---
*Dernière màj : 19 déc 2025 - session Claude*
