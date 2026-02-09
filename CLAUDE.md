# Paroisses Nendaz

**Production** : https://www.paroisses-nendaz.ch
**Dev** : http://localhost:3002
**Stack** : Next.js 15, React 19, TypeScript, Tailwind, Google Calendar API (20+ lieux), Vercel
**GA4** : G-M20DBECFYY | **GSC** : Verifie
**FormSubmit** : paroisse_nendaz@bluemail.ch

## Commandes

```bash
npm run dev      # Port 3002
npm run build    # 62 pages
git push origin main
```

## Palette "Pierre et Lumiere"

`stone-50/100/600/800/900` + `amber-400/500/600` | Enoria : `#2A8B8C`
**Regles** : ZERO emoji → 100% icones Lucide React

## Composants Cles

- **Saint du Jour** : `lib/saints-data.ts` (366 jours) + `components/SaintDuJour.tsx` (bandeau homepage)
- **Google Calendar** : `app/api/horaires/route.ts` — events reels, filtre par paroisse
- **Feuille d'annonces** : `app/api/feuille-annonces/generate/route.tsx`

## Careme 2026 — "Prophete ? Moi ?"

```
/app/careme2026/page.tsx     # Timeline interactive (DATE_DEMO = new Date())
/lib/careme-data.ts          # 47 jours enrichis (verset, meditation, priere) + 7 saints
/public/documents/careme/    # 7 coloriages + 7 bricolages (PDFs)
```
Palette "Lavande Douce" : `#8B7CB3` (header), `#7BA087` (complete), `#D4AF37` (or accent)
Source contenu : `../../careme2026/Demarche de careme prophete 2026.pdf` (28 pages)

**FAIT** :
- [x] Contenu enrichi 47 jours (versets, meditations, prieres du carnet)
- [x] DATE_DEMO → `new Date()` (production)
- [x] 7 PDFs coloriage (1 par saint, decoupes)
- [x] 7 PDFs bricolage (1 par saint, decoupes)

**TODO Careme** :
- [ ] Ajouter lien "Careme 2026" dans menu navigation
- [ ] Vitrail x7 (a creer via Midjourney, decouper la rosace)
- [ ] Metadonnees OpenGraph
- [ ] QR code pour affichage physique

## Parcours Pelerins (perenne)

Missions dans `/app/parcours-pelerins/{luce,fe,xin,sky}` — redirections 301 depuis `/avent/mission-X`

## Paroisses

Aproz, Basse-Nendaz, Brignon, Fey, Haute-Nendaz, Saclentse, Veysonnaz

## Maintenance

- **Fin 2026** : Mettre a jour `saints-data.ts` pour 2027 (fetes mobiles changent)

*Historique sessions dans `_ARCHIVES/`*
