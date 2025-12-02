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
npm run build    # 57 pages
git push origin main
```

## Design System - Palette "Pierre et Lumière"
| Élément | Couleurs |
|---------|----------|
| Principal | `stone-50/100/600/800/900` + `amber-400/500/600` |
| Confirmation | `slate-600/700` |
| Communion | `amber-500/yellow-500` |
| Pardon | `emerald-700/teal-700` |
| Mariage | `stone-600/amber-700` |
| Onction | `slate-700/blue-800` |
| Enoria | `#2A8B8C` (toujours exact) |
| YouTube CTA | `#FF0000` (exception) |

**Règles** : ZÉRO emoji → 100% icônes Lucide React (w-4/w-5/w-6)

## Composants clés
- `/components/structured-data/` : 5 schémas JSON-LD (Organization, WebSite, Event, Place, Breadcrumb)
- `/lib/feuille-annonces-pdf.tsx` : PDF @react-pdf/renderer, timezone Europe/Zurich
- `/components/GoogleAnalytics.tsx` : GA4 intégré

## Fonctionnalités actives
- **PDF Feuille annonces** : Période liturgique (sam→dim suivant), 1 page A4, prévisualisation inline
- **Formulaire contact** : FormSubmit + page /contact/merci
- **Compteur Avent** : Hero page Actualités + `/avent`, lancement 30 nov 2025
- **Mission Avent** : `/avent/mission-1` - Parcours interactif Luce (5 étapes, 22 slides)
- **SEO** : robots.txt strict (protection anti-piratage japonais), sitemap 23 URLs légitimes

## Calendrier de l'Avent
- **Page hub** : `/avent` - Compteur + redirection vers missions
- **Mission 1** : `/avent/mission-1` - Luce (semaine 1, jaune)
  - Layout immersif : sans header/footer sur mobile, avec sur desktop
  - 5 étapes : Présentation → Chapelet → Tabernacle → Eucharistie → Prière → Défi
  - Images optimisées : 400px max, ~100-200KB chacune
  - OpenGraph : Image Luce pour partage WhatsApp/social
- **Personnages** : Luce (jaune), Fe (rouge), Xin (vert), Sky (bleu)
- **Assets** : `/public/images/avent/personnages/`

## Paroisses légitimes (sitemap)
Aproz, Basse-Nendaz, Brignon, Fey, Haute-Nendaz, Saclentse, Veysonnaz

## Backlog
- [ ] Sticky bar (menu fixe au scroll)
- [ ] Tests mobile Lighthouse >85
- [ ] Mode sombre (optionnel)
- [ ] Mission 2 (Fe), Mission 3 (Xin), Mission 4 (Sky)

---
*Dernière màj : 2 déc 2025*
