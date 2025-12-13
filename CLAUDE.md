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

## SESSION 13 DÉC 2025 - EN COURS

### État Mission 3 (Xin)
- [x] `JOURS_SEMAINE_3[]` ajouté dans `avent-data.ts` (jours 14-20)
- [x] `getJourData()` mis à jour pour semaine 3
- [x] `/app/avent/mission-3/page.tsx` créé (structure complète)
- [x] QR code `mission-3-xin.jpg` déjà généré
- [x] **Monologues Xin améliorés** (plus chaleureux, adaptés enfants)
- [x] **Image Xin.png propre intégrée** (400×500, depuis Xin-1.png)
- [x] **Build vérifié** ✅
- [ ] **Images poses Xin à personnaliser** (utilise Xin.png par défaut)

### Images Xin à générer (Grok)
Format : 400×500 px, PNG transparent, style chibi kawaii sticker
```
Xin-accueil.png      → Bras ouverts, accueillante
Xin-presentation.png → Se présente, souriante
Xin-baton.png        → Montre son bâton avec la fleur
Xin-indices.png      → Doigt levé, donne un indice
Xin-doudou.png       → Montre son doudou
Xin-cherche.png      → Invite à chercher dans l'église
Xin-marie.png        → Devant/près de Marie (contexte église)
Xin-priere.png       → En prière, yeux fermés
Xin-bravo.png        → Bras levés, célébration
Xin-fin.png          → Dit au revoir
```

### Script Mission 3 validé
1. **Étape 1** : Présentation Xin (4 slides) → Question bâton Oui/Non
2. **Étape 2** : Indices pour Marie (5 slides) → Bouton "J'ai trouvé"
3. **Étape 3** : Explication Marie + Prière (3 slides)
4. **Étape 4** : Défi semaine (2 slides) - câlins, dessins, sourires
5. **Étape 5** : Fin + Teaser Sky à Aproz (2 slides)

### Prochaines étapes
1. ~~Améliorer monologues Xin~~ ✅
2. Générer les images poses Xin avec Grok (prompts fournis)
3. Copier images dans `/public/images/avent/personnages/`
4. Mettre à jour `IMAGES_XIN` dans mission-3/page.tsx
5. Tester avec `?dev=true`
6. Deploy

### Infos semaine 4
- Personnage : **Sky** (bleu)
- Église : **Aproz** (confirmé dans docx)
- Dates : 21-25 décembre

---
*Dernière màj : 13 déc 2025 - 16h*
