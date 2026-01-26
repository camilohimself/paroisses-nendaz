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
npm run build    # 62 pages
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
/app/avent/mission-2/page.tsx    # Mission Fe (FAIT)
/app/avent/mission-3/page.tsx    # Mission Xin (FAIT)
/app/avent/mission-4/page.tsx    # Mission Sky (FAIT)
/lib/avent-data.ts               # Données semaines + jours
/public/images/avent/personnages/ # Images PNG optimisées
/qr-codes/mission-X-xxx.jpg      # QR codes par mission
```

### Structure données (`lib/avent-data.ts`)
- `SEMAINES_AVENT[]` : 4 semaines avec thème, personnage, couleurs, psaume, prière, chant YouTube
- `JOURS_SEMAINE_1[]` : Jours 1-7 (FAIT)
- `JOURS_SEMAINE_2[]` : Jours 8-13 (FAIT)
- `JOURS_SEMAINE_3[]` : Jours 14-20 (FAIT)
- `JOURS_SEMAINE_4[]` : Jours 21-25 (FAIT)

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
| 2 | Fe | Fey | FAIT |
| 3 | Xin | Veysonnaz | FAIT |
| 4 | Sky | Aproz | FAIT |

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

## Saint du Jour - Homepage

### Fichiers clés
```
/lib/saints-data.ts           # 366 jours avec nom + flag estFete
/components/SaintDuJour.tsx   # Composant avec 3 variantes (bandeau utilisé)
```

### Fonctionnement
- **Mise à jour automatique** : calcul côté client via `new Date()`
- **Aucune intervention requise** : s'actualise à chaque visite
- **Fêtes liturgiques** : style amber prononcé (flag `estFete: true`)

### Variantes disponibles
| Variante | Usage |
|----------|-------|
| `discret` | Ligne simple avec icône |
| `carte` | Encart stylisé centré |
| `bandeau` | Pleine largeur (ACTIF sur homepage) |

### Maintenance annuelle
- **Fin 2026** : Mettre à jour `saints-data.ts` pour 2027
- Les fêtes mobiles (Pâques, Ascension, Pentecôte) changent chaque année

## Backlog Avent - COMPLET
- [x] Mission 1 (Luce) - Basse-Nendaz - FAIT
- [x] Mission 2 (Fe) - Fey - FAIT
- [x] Mission 3 (Xin) - Veysonnaz - FAIT
- [x] Mission 4 (Sky) - Aproz - FAIT
- [x] Jours semaine 1 dans avent-data.ts - FAIT
- [x] Jours semaine 2 dans avent-data.ts - FAIT
- [x] Jours semaine 3 dans avent-data.ts - FAIT
- [x] Jours semaine 4 dans avent-data.ts - FAIT

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

## SESSION 20 DÉC 2025 - TERMINÉE

### Mission 4 (Sky) - COMPLÈTE
- [x] `/app/avent/mission-4/page.tsx` créé (page interactive complète)
- [x] 5 étapes interactives : présentation, guitare, indices, recherche ange, fin
- [x] Objet à trouver : **Ange sur la crèche** (poupée en tissu)
- [x] Scène crèche en pleine largeur (type `scene-creche`)
- [x] `JOURS_SEMAINE_4[]` mis à jour avec contenu officiel du PDF
- [x] Tracking GA4 `angel_found` ajouté
- [x] Location corrigée : "Aproz" (au lieu de "Haute-Nendaz")
- [x] Build vérifié
- [x] **Déployé en production**

### Images Sky intégrées
```
/public/images/avent/personnages/
├── Sky.png              - Personnage principal (capuche bleue, guitare)
├── Sky-presentation.png - Salut main levée
├── Sky-chant.png        - Joue de la guitare
├── Sky-indices.png      - Pose une question
├── Sky-cherche.png      - Main sur yeux, cherche
├── Sky-bravo.png        - Bras levés, célébration
├── Sky-fin.png          - Au revoir
└── Sky-ange.png         - Crèche avec ange (scène pleine largeur)
```

### Jours Semaine 4 (contenu officiel PDF)
| Jour | Date | Titre |
|------|------|-------|
| 21 | 21 déc | Alléluia, je loue Dieu ! (dimanche) |
| 22 | 22 déc | La joie de rencontrer Jésus |
| 23 | 23 déc | La joie dans mes relations |
| 24 | 24 déc | Veillée de Noël (bougie) |
| 25 | 25 déc | Joyeux Noël ! |

### Script Mission 4
1. **Étape 1** : Présentation Sky (4 slides) → Question guitare Oui/Non
2. **Étape 2** : Indices pour l'ange (5 slides) → Bouton "J'ai trouvé"
3. **Étape 3** : Scène crèche pleine largeur + Explication ange
4. **Étape 4** : Défi semaine - chanter un Alléluia
5. **Étape 5** : Fin + Joyeux Noël avec les 4 personnages

### Activation
- **Date** : 21 décembre 2025 à 00:00 (minuit)
- **Page Avent** : Semaine 4 visible dès le 21 déc
- **Mission 4** : Accessible dès minuit

### Commit
| Hash | Description |
|------|-------------|
| `988e8bd` | feat: Complete Mission 4 (Sky) interactive page + Week 4 content |

---

## CALENDRIER DE L'AVENT 2025 - COMPLET

Le projet Avent 2025 est maintenant terminé avec les 4 missions interactives :

| Semaine | Personnage | Thème | Église | Objet à trouver |
|---------|------------|-------|--------|-----------------|
| 1 | Luce (jaune) | Lumière | Basse-Nendaz | Bible |
| 2 | Fe (rouge) | Foi | Fey | Ambon |
| 3 | Xin (vert) | Espérance | Veysonnaz | Statue Marie |
| 4 | Sky (bleu) | Joie | Aproz | Ange sur crèche |

---

## SESSION 6 JAN 2026 - TERMINÉE

### Rapport GA4 Décembre 2025
- [x] Analyse complète des métriques décembre 2025
- [x] Export et traitement données GA4
- [x] Rapport généré : `docs/RAPPORT-GA4-DECEMBRE-2025.md`

### Métriques clés décembre 2025
| Métrique | Valeur |
|----------|--------|
| Visiteurs uniques | 1 104 |
| Pages vues | 4 150 |
| Sessions | 2 046 |
| Durée moyenne | 1min 35s |
| Trafic Google | 53% |
| Trafic direct | 34% |

### Bilan Calendrier de l'Avent 2025
| Métrique | Valeur |
|----------|--------|
| Visiteurs hub Avent | 231 |
| Missions démarrées | 50 |
| Missions terminées | 20 |
| Taux complétion | 40% |

### Pic de Noël
- **23 décembre 2025** : 168 visiteurs (+250%)
- Cause : recherche horaires messes de Noël

### Page 404 personnalisée
- [x] Création `/app/not-found.tsx`
- [x] Design cohérent palette Pierre et Lumière
- [x] Tracking GA4 événement `page_not_found`
- [x] Liens utiles : Accueil, Paroisses, Actualités, Contact
- **Commit** : `c859eaa`

### Sources trafic principales
| Source | Visiteurs |
|--------|-----------|
| Google organic | 587 |
| Direct (QR codes) | 371 |
| nendaz.ch | 76 |
| Facebook | 24 |
| veysonnaz.ch | 17 |

### Refonte HorairesMesse (homepage)
- [x] Suppression badges calendrier colorés
- [x] Ajout icône MapPin rouge pour le lieu
- [x] Suppression calendrier "fêtes patronales" (theodianendaz@gmail.com)
- [x] Suppression type événement `fete`
- [x] Label "Autre" → "Rencontre" (plus accueillant)
- [x] Ajout "La Papatuor" à l'événement St-Sébastien (20 jan)

### Audit projet crisisinfo.ch
- [x] Analyse complète du projet `/WORKSPACE-OSOM/3_PROJECTS/crisisinfo`
- Stack : Astro 4.x, Netlify, trilingue FR/EN/IT
- Contexte : Incendie Crans-Montana (1er jan 2026), 40 décès, 116 blessés
- Phase 3.2 : Préparation deuil national 9 janvier

### Événement mémorial Crans-Montana
- **Date** : Jeudi 9 janvier 2026
- **Lieu** : Église Saint-Léger, Basse-Nendaz
- **Programme** : 18h Adoration, 18h30 Prière, 19h Messe
- [x] Prompt Gemini créé pour visuel affiche (ruban noir + bougie)
- [x] Guidelines typographie Canva : Playfair Display + Montserrat, noir/gris
- Texte : "En mémoire des victimes de Crans-Montana"
- Panneau messages : "Un espace accueillera vos messages de soutien"

### Commits session
| Hash | Description |
|------|-------------|
| `c859eaa` | feat: Add custom 404 page with GA4 tracking |
| `7c5c02a` | feat: Redesign HorairesMesse cards + cleanup calendar config |

---

## SESSION 7 JAN 2026 - TERMINÉE

### Saint du Jour - Nouvelle fonctionnalité
- [x] Création `lib/saints-data.ts` avec 366 jours du calendrier 2026
- [x] Création `components/SaintDuJour.tsx` avec 3 variantes
- [x] Intégration variante "bandeau" sur homepage (entre Accès rapides et Célébrations)
- [x] Flag `estFete` pour fêtes liturgiques majeures (style amber)
- [x] Mise à jour automatique quotidienne (calcul côté client)

### Structure homepage mise à jour
```
Page d'accueil
├── 1. Hero Vidéo
├── 2. Accès Rapides (4 cartes)
├── 3. Saint du Jour (bandeau) ← NOUVEAU
├── 4. Prochaines Célébrations
└── 5. Horaires Habituels
```

### Commit session
| Hash | Description |
|------|-------------|
| `f2aca05` | feat: Add Saint du Jour component on homepage |

---

## SESSION 16 JAN 2026 - TERMINÉE

### Parcours des pèlerins - Pérennisation Avent 2025
- [x] Création page landing `/parcours-pelerins` (hub des 4 missions)
- [x] Migration missions vers `/parcours-pelerins/{luce,fe,xin,sky}`
- [x] Redirections 301 pour anciens QR codes `/avent/mission-X`
- [x] Image hero optimisée `hero-parcours-pelerins.jpg` (277KB)
- [x] QR code `parcours-pelerins-landing.jpg` généré

### Fichiers clés
```
/app/parcours-pelerins/page.tsx           # Hub 4 missions
/app/parcours-pelerins/luce/page.tsx      # Mission 1
/app/parcours-pelerins/fe/page.tsx        # Mission 2
/app/parcours-pelerins/xin/page.tsx       # Mission 3
/app/parcours-pelerins/sky/page.tsx       # Mission 4
/docs/qr-codes/parcours-pelerins-landing.jpg
```

### Redirections actives (next.config.ts)
| Ancienne URL | Nouvelle URL |
|--------------|--------------|
| `/avent/mission-1` | `/parcours-pelerins/luce` |
| `/avent/mission-2` | `/parcours-pelerins/fe` |
| `/avent/mission-3` | `/parcours-pelerins/xin` |
| `/avent/mission-4` | `/parcours-pelerins/sky` |

### Commits session
| Hash | Description |
|------|-------------|
| `04da60f` | feat: Create permanent Parcours des pèlerins section |
| `eca2568` | chore: Add QR code for parcours-pelerins landing page |

---

## SESSION 20 JAN 2026 - TERMINÉE

### Bug fix - Erreur 404 pages parcours-pelerins
- **Symptôme** : QR codes menaient à erreur 404 en production
- **Cause** : Propriété `slug` manquante dans tableau `missions` de `page.tsx`
- **Erreur TypeScript** : `Property 'slug' does not exist on type...`
- **Impact** : Build échouait → Vercel ne déployait pas → 404

### Diagnostic
1. `npm run build` local = échec TypeScript
2. Pages existaient en local mais pas déployées
3. `git status` montrait branche à jour (faux positif - build cassé)

### Correction
- [x] Ajout propriété `slug` aux 4 objets mission dans `/app/parcours-pelerins/page.tsx`
- [x] Build vérifié OK localement
- [x] Déploiement Vercel réussi
- [x] Test production : toutes pages accessibles

### Commit fix
| Hash | Description |
|------|-------------|
| `de8109d` | fix: Add missing slug property to missions array |

### Leçon retenue
**Toujours vérifier `npm run build` avant de pousser**, surtout avec TypeScript strict. Un build local qui échoue = déploiement Vercel bloqué.

---

## SESSION 21 JAN 2026 - TERMINÉE

### Fix page pardon - Wording card 2
- [x] Modification texte "Catéchèse hors école"
- **Avant** : "Participer à l'animation de la messe paroissiale..."
- **Après** : "Possibilité de participer à la messe des fenêtres catéchétiques... (fortement conseillé)"

### Nouvelle page - Activités catéchétiques
- [x] Création `/pastorale/activites-catechetiques`
- [x] 8 degrés (1H-8H) en cartes colorées
- [x] 3 temps de déroulement des activités
- [x] PDFs intégrés : 6H, 7H, 8H (1-2H, 3H en placeholder)
- [x] Vidéo tutoriel inscription (`8BlXpMJ__0o`)
- [x] Contacts par degré : Anne-Lyse Métrailler (1-3H), Jean-Philippe Glassey (6-8H), Martin Fendrych (7-8H)
- [x] Lien ajouté dans menu Pastorale (1ère position)

### Fichiers clés
```
/app/pastorale/activites-catechetiques/page.tsx
/public/documents/activites-catechetiques/flyer-6h.pdf
/public/documents/activites-catechetiques/flyer-7h.pdf
/public/documents/activites-catechetiques/flyer-8h.pdf
```

### Nouvelle page - /enoria (landing page)
- [x] Page intermédiaire avant connexion Enoria
- [x] 2 CTA horizontaux : "Se connecter" + "Voir le tutoriel"
- [x] Message simplifié : "Connexion : email ou téléphone (pas les deux)"
- [x] Vidéo tutoriel inscription Enoria (`Sb1pV4ZboYM`)
- [x] Bouton Header "Enoria" pointe maintenant vers `/enoria`

### Ajustements UX
- [x] Retrait sticky sidebar page activités catéchétiques
- [x] Format téléphone uniformisé : +41 xx xxx xx xx
- [x] Menu Pastorale : "Activités catéchétiques" en 1ère position

### Commits session
| Hash | Description |
|------|-------------|
| `3a5b5bc` | fix: Update pardon page card 2 wording |
| `93be05f` | feat: Add Activités catéchétiques page (1H-8H) |
| `88a2cd1` | feat: Add YouTube tutorial + contacts by degree |
| `1630ed0` | fix: Update contacts with complete phone/email |
| `d60e506` | fix: Remove Nadia Fendrych from contacts |
| `32e58cb` | fix: Remove sticky + standardize phone format |
| `3eb7b60` | feat: Move Activités catéchétiques first in menu |
| `11cd591` | feat: Create /enoria landing page |
| `0822220` | refactor: Simplify /enoria layout |

### URLs nouvelles
- https://www.paroisses-nendaz.ch/pastorale/activites-catechetiques
- https://www.paroisses-nendaz.ch/enoria

---

## SESSION 23 JAN 2026 - TERMINÉE

### Mise à jour Activités catéchétiques - Flyers complets
- [x] Ajout 3 flyers 1-2H distincts par enseignante :
  - Patricia Délèze
  - Christelle Briguet
  - Christelle Maytain
- [x] Ajout flyer 3H
- [x] Remplacement flyer 7H (version 2025-2026)
- [x] Affichage nom enseignante sur cartes 1-2H

### Tutoriels Enoria - 2 vidéos
- [x] Tuto 1 : Créer un compte / "Mon foyer" (`Sb1pV4ZboYM`)
- [x] Tuto 2 : Inscrire l'enfant à l'activité (`8BlXpMJ__0o`)

### Fichiers PDFs ajoutés
```
/public/documents/activites-catechetiques/
├── flyer-1-2h-patricia-deleze.pdf    (NEW)
├── flyer-1-2h-christelle-briguet.pdf (NEW)
├── flyer-1-2h-christelle-maytain.pdf (NEW)
├── flyer-3h.pdf                      (NEW)
├── flyer-6h.pdf
├── flyer-7h.pdf                      (UPDATED)
└── flyer-8h.pdf
```

### Commits session
| Hash | Description |
|------|-------------|
| `168b19e` | feat: Update activités catéchétiques flyers + add 2 Enoria tutorials |
| `b26093b` | fix: Display teacher name on 1-2H flyer cards |

---

## SESSION 26 JAN 2026 - TERMINÉE

### Audit technique complet Next.js
Audit de performance, sécurité, SEO et bonnes pratiques sans modification visuelle.

### Inventaire site production
- **23 URLs** dans sitemap.xml
- **76 événements** Google Calendar actifs
- `/admin/*` non déployé (404) - code préparatoire uniquement

### 10 optimisations appliquées

#### Performance images
- [x] `epiphanie-2026.jpg` : **1.4MB → 155KB** WebP (89% réduction)
- [x] Migration `app/actualites/page.tsx` : `<img>` → `next/image` avec `fill` + `sizes`
- [x] Migration `app/dons/page.tsx` : QR code → `next/image`

#### Robustesse Next.js
- [x] Création `app/error.tsx` - gestion erreurs avec tracking GA4
- [x] Création `app/loading.tsx` - skeleton UI avec croix animée
- [x] Fix TypeScript : 3 usages `any` → types stricts (`calendar_v3.Calendar`, `CalendarEvent`, `Uint8Array[]`)

#### SEO OpenGraph
- [x] Ajout OG metadata à 6 pages sacrements (bapteme, communion, confirmation, pardon, mariage, onction-malades)
- [x] Création `app/sacrements/communion/layout.tsx` pour metadata (page 'use client')

#### Sécurité
- [x] Ajout `Content-Security-Policy` header dans `vercel.json`
- [x] Validation paramètre `months` API horaires (borné 1-24)
- [x] Suppression `console.log` production

### Fichiers créés
```
/app/error.tsx                           # Gestion erreurs globale
/app/loading.tsx                         # Skeleton UI
/app/sacrements/communion/layout.tsx     # Metadata OG
/public/images/articles/epiphanie-2026.webp  # Image optimisée
```

### Fichiers modifiés
```
app/actualites/page.tsx                  # next/image migration
app/dons/page.tsx                        # next/image migration
app/api/horaires/route.ts                # Types + validation
app/api/feuille-annonces/generate/route.tsx  # Types + cleanup
app/sacrements/*/page.tsx                # 5 pages avec OG
vercel.json                              # CSP header
```

### CSP Header ajouté
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' googletagmanager.com google-analytics.com;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com;
  img-src 'self' data: https:;
  frame-src youtube.com youtube-nocookie.com public.enoria.app;
  connect-src 'self' google-analytics.com googleapis.com
```

### Commit session
| Hash | Description |
|------|-------------|
| `8df7fc6` | perf: Audit technique - 10 optimisations Next.js |

### Éléments exclus (non pertinents)
- `/admin/*` : non déployé en production (code préparatoire)
- Auth NextAuth : non active
- Prisma/DB : non connectée

### Résumé audit
| Catégorie | Score | Notes |
|-----------|-------|-------|
| Performance | 8/10 | Images optimisées, next/image |
| Robustesse | 9/10 | error.tsx + loading.tsx ajoutés |
| TypeScript | 9/10 | Plus de `any` dans API |
| SEO | 9/10 | OG complet sur sacrements |
| Sécurité | 8/10 | CSP + validation params |

---

*Dernière màj : 26 jan 2026 - session Claude (Audit technique)*
