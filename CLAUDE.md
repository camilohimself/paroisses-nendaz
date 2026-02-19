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
/app/careme2026/page.tsx     # Compagnon spirituel quotidien (4 zones verticales)
/app/careme2026/layout.tsx   # SEO : OpenGraph, Twitter Card, BreadcrumbSchema
/lib/careme-data.ts          # 47 jours enrichis (verset, meditation, priere) + 7 saints
/public/documents/careme/    # 7 coloriages + 7 bricolages (PDFs) + QR code
```
Palette "Lavande Douce" : `#8B7CB3` (header), `#7BA087` (complete), `#D4AF37` (or accent)
Source contenu : `../../careme2026/Demarche de careme prophete 2026.pdf` (28 pages)

**Architecture page (reecrite 17 fev 2026)** :
- Zone A : StickyProgressBar (header sticky + barre progression)
- Zone B : TodaySection (contenu du jour inline, zero clic) / TodaySunday (fiche saint + PDFs)
- Zone C : WeekStrip (trail horizontal 7 points)
- Zone D : PastDaysJournal (jours passes en cartes depliables)
- CountdownView (avant 18 fev) / CompletedView (apres 5 avr, navigation libre)
- State minimal : `expandedPastJour` + `browseJour` (CompletedView)

**PDFs enfants** : accessibles tous les jours (saint de la semaine en cours), pas seulement le dimanche. Change automatiquement chaque dimanche. Pas d'accumulation — seul le saint courant est affiche.

**Tracking GA4** : module `trackCareme` dans `lib/analytics-events.ts` (commit d001034, 19 fev 2026)
- `careme_page_view` (jour_numero, semaine_numero)
- `careme_pdf_download` (saint_id, pdf_type)
- `careme_jour_expand` (jour_numero)
- `careme_saint_view` (saint_id)
- `careme_browse_day` (jour_numero)

**COMPLET** :
- [x] Contenu enrichi 47 jours (versets, meditations, prieres du carnet)
- [x] DATE_DEMO → `new Date()` (production)
- [x] 7 PDFs coloriage + 7 PDFs bricolage (1 par saint)
- [x] PDFs saint semaine visible tous les jours (commit d001034, 19 fev 2026)
- [x] Tracking GA4 Careme — 5 evenements custom (commit d001034, 19 fev 2026)
- [x] Lien "Careme 2026" dans menu navigation (desktop + mobile, couleur lavande)
- [x] Metadonnees OpenGraph + Twitter Card
- [x] QR code : `public/documents/careme/qr-careme2026.png`
- [x] Reecriture compagnon quotidien (commit 1ebcbd5, 17 fev 2026)
- ~~Vitrail x7~~ (exclu du projet)

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
