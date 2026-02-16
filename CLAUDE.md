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

- **Saint du Jour** : `lib/saints-data.ts` (366 jours + 52 dimanches liturgiques) + `components/SaintDuJour.tsx` (bandeau homepage)
  - Les dimanches affichent le nom liturgique (ex: "6e Dimanche du Temps Ordinaire") au lieu du saint
  - Mapping `DIMANCHES_2026` dans `saints-data.ts` (Annee A, diocese de Sion)
- **Google Calendar** : `app/api/horaires/route.ts` — events reels, filtre par paroisse
- **Feuille d'annonces** : `app/api/feuille-annonces/generate/route.tsx`

## Saints du Jour enrichis (INTEGRE — valide par le cure 16 fev 2026)

**Source CSV** : `docs/data/saints-2026-complet.csv` (552 entrees, 274 jours, 16 fev - 31 dec)
**Donnees TS** : `lib/saints-enrichis-data.ts` (genere via `npx tsx scripts/parse-saints-csv.ts`)
**Composant** : `components/SaintCard.tsx` — accordeon reutilisable
**Integration** : `components/SaintDuJour.tsx` — bascule auto entre mode enrichi et simple

- 2-3 saints par jour (rang 1 = principal, rang 2-3 = secondaires)
- Mode enrichi (fev-dec) : accordeon avec description + priere, style "manuscrit sacre"
- Mode simple (jan ou fallback) : bandeau classique avec juste le nom
- `getSaintsEnrichis()` dans `lib/saints-data.ts` — retourne tableau ou null
- Les dimanches affichent toujours le nom liturgique (pas de saints enrichis)
- Icones : Cross (rang 1), Sparkles (rang 2), BookOpen (priere), ChevronDown (accordeon)
- Mobile-first, teste a 390px

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
- **Fin 2026** : Mettre a jour `DIMANCHES_2026` pour 2027 (Annee B, dates differentes)
- **Fin 2026** : Regenerer CSV saints pour 2027

## Audit SEO & Nettoyage (15 fev 2026)

**Score SEO** : 7/10 → ameliore via 4 sprints
- [x] Sprint 1 : Metadata enrichies, geo types, cache API, ARIA labels
- [x] Sprint 2 : next/font migration (Playfair, Crimson, Inter), inline styles, img→Image
- [x] Sprint 3 : JSON-LD (BreadcrumbSchema, EventListSchema, PersonSchema)
- [x] Sprint 4 : Accessibilite WCAG (skip-to-content, focus trap modal, aria-expanded)
- [x] Nettoyage code : 25 fichiers, -1306 lignes dead code, images optimisees, securite auth.ts

**Fichiers supprimes** : test-avent/, test-hero-communion/, test-hero-pardon/, EventCard.tsx, YouTubeLiveIndicator.tsx, SVG boilerplate
**Images optimisees** : epiphanie (1.4MB→233KB), festival-familles (5.9MB→379KB)

*Historique sessions dans `_ARCHIVES/`*
