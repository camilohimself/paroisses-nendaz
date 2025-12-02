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
| Semaine | Personnage | Église |
|---------|------------|--------|
| 1 | Luce | Basse-Nendaz |
| 2 | Fe | (à définir) |
| 3 | Xin | (à définir) |
| 4 | Sky | (à définir) |

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

## Backlog
- [ ] Mission 2 (Fe) - semaine du 7 déc
- [ ] Mission 3 (Xin) - semaine du 14 déc
- [ ] Mission 4 (Sky) - semaine du 21 déc
- [ ] Jours semaine 2 dans avent-data.ts
- [ ] Jours semaine 3 dans avent-data.ts
- [ ] Jours semaine 4 dans avent-data.ts

---
*Dernière màj : 2 déc 2025*
