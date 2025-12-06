# JOURNAL DE BORD - Paroisses Nendaz

---

## SESSION 6 DECEMBRE 2025

### Objectif du jour
Finalisation Mission 2 - Images Fe + amélioration textes

### Realise aujourd'hui

**1. Images Fe - 7 postures générées (ChatGPT)**
- `Fe-accueil.png` : bras ouverts, accueillant
- `Fe-salut.png` : main qui salue, présentation
- `Fe-indices.png` : doigt levé, donne des indices
- `Fe-bible.png` : tient la Bible + bâton pèlerin
- `Fe-bravo.png` : bras levés, célébration
- `Fe-priere.png` : en prière, yeux fermés
- `Fe-fin.png` : salue + bâton (au revoir)

**2. Intégration images dans mission-2**
- IMAGES_FE mis à jour avec les 7 postures
- Chaque slide utilise maintenant l'image appropriée

**3. Amélioration des textes (ton enfantin)**
Réécriture des 20 slides pour un ton plus vivant et adapté aux enfants :
- Phrases courtes et dynamiques
- Vocabulaire simple et joyeux
- Interpellation directe ("Tu vois...", "À toi de jouer !")
- Expressions ludiques ("chasse au trésor", "chercheur de trésors")
- Émotions positives ("Youpi !", "Bravo !")

**4. Mode développeur**
- Ajout paramètre `?dev=true` pour bypasser le compteur
- Permet de tester avant le 7 décembre sans modifier la date

### Principes rédactionnels - Dialogues enfants

| Avant | Après |
|-------|-------|
| Phrases longues explicatives | Phrases courtes, punch |
| "Je suis vêtu de rouge parce que..." | "Tu vois ma cape rouge ?" |
| Vocabulaire adulte | Vocabulaire enfantin |
| Ton descriptif | Ton interactif (questions) |
| Formules passives | Interpellation directe |

**5. Slide "Raconte-moi !" (explication Bible)**
- Nouvelle image `Fe-showing-bible.png`
- Slide intermédiaire expliquant la Bible aux enfants
- "La Bible, c'est une vraie bibliothèque ! 73 livres écrits sur plus de 1000 ans"
- Cohérence mise à jour dans les slides suivantes (plus "un livre" mais "la Bible")

**6. Optimisation images**
- Toutes les images Fe réduites avec `sips -Z 500`
- Poids total : ~17MB → ~1.4MB (réduction 90%)
- Chargement mobile fluide

**7. Tracking GA4**
- Nouveau fichier `lib/analytics.ts`
- Events : `mission_start`, `mission_complete`, `bible_discovered`, `ambon_found`
- Intégré dans mission-1 et mission-2

**8. Page /avent - Blocs semaine enrichis**
- Ajout champ `introduction` (description personnage + intention)
- Ajout champ `actionSemaine` (défi concret de la semaine)
- Contenu pour les 4 semaines extrait du PDF
- Mode dev `?dev=true` pour prévisualiser toutes les semaines
- Teaser dynamique selon semaine actuelle (église + personnage)

### Architecture - Déverrouillage automatique

Le calendrier se déverrouille automatiquement selon la date du navigateur :
```typescript
// lib/avent-data.ts
getSemaineActuelle() → compare new Date() avec dateDebut/dateFin
getJourActuel() → calcule le jour depuis le 1er décembre
```

Pas besoin de redéployer - le calcul est côté client à chaque visite.

### Commits
- `342ccc4` 🎄 AVENT: Mission 2 complète + blocs semaine enrichis

---

## SESSION 4 DECEMBRE 2025 (matin)

### Objectif du jour
Mission 2 - Fe à l'église de Fey

### Realise ce matin

**1. Page Mission 2 (`/avent/mission-2`)**
- Parcours interactif 5 étapes à l'église de Fey
- Contrôle d'accès : page verrouillée jusqu'au 7 décembre
- Écran "pas encore disponible" avec compteur
- Étapes : Présentation Fe → Question Bible → Recherche Ambon → Psaume → Défis
- Teaser fin : Xin à Veysonnaz (14 décembre)
- Placeholders images pour personnalisation (IMAGES_FE en haut du fichier)

**2. Données Semaine 2 (`lib/avent-data.ts`)**
- JOURS_SEMAINE_2[] : jours 8-13 décembre
- Méditations quotidiennes extraites du PDF
- Fonction getJourData() mise à jour

**3. Assets**
- QR code `mission-2-fe.jpg` généré → https://www.paroisses-nendaz.ch/avent/mission-2
- Image Fe.png copiée dans personnages

### Commits
- `641f13e` - 🎄 AVENT: Mission 2 - Fe à Fey

---

## SESSION 2 DECEMBRE 2025

### Objectif du jour
Page calendrier de l'Avent interactive + maillage interne

### Realise aujourd'hui

**1. Page `/avent` - Refonte complete**
- Hero avec image groupe des 4 personnages
- CTA dynamique vers mission de la semaine en cours
- Calendrier interactif 25 jours (grille 5x5)
- Cases colorees par semaine (jaune S1 / rouge S2 / vert S3 / bleu S4)
- Modal contenu du jour (texte biblique + meditation + priere)
- Section semaine : psaume + priere + chant YouTube embed
- Fil d'Ariane retour vers /actualites

**2. Donnees semaine 1 (`lib/avent-data.ts`)**
- Structure TypeScript pour semaines et jours
- Contenu jours 1-7 decembre extrait du PDF
- 4 semaines definies avec couleurs Tailwind
- Chants YouTube IDs integres

**3. Mission 1 - Mise a jour**
- Ajout lieu : "Bienvenue a l'eglise de Basse-Nendaz"

**4. Maillage interne**
- `/actualites` → CTA "Ouvrir le calendrier" → `/avent`
- `/avent` → Lien retour → `/actualites`
- Suppression compteur sur actualites (plus necessaire)

**5. SEO OpenGraph**
- Image groupe pour partage WhatsApp/Facebook sur `/avent`

**6. QR Code Mission 1**
- `qr-codes/mission-1-luce.jpg` genere

### Commits
- `cc6f272` - 🎄 AVENT: Page calendrier interactif + maillage interne
- `f450b45` - 🖼️ SEO: OpenGraph image groupe pour /avent

---

## SESSION 28 NOVEMBRE 2025

### Objectif du jour
Finalisation Mission 1 de l'Avent (Luce) - Parcours interactif complet

### Realise aujourd'hui

**1. Mission 1 complete - `/avent/mission-1`**
- Parcours interactif avec Luce (personnage jaune)
- 5 etapes : Presentation → Chapelet → Tabernacle → Eucharistie → Priere → Defi
- 22 slides au total avec navigation intuitive
- Layout immersif : sans header/footer sur mobile, avec sur desktop

**2. Optimisation images**
- Compression 87% des images (ultra-legeres)
- Format 400px max, ~100-200KB chacune
- Nouvelle image groupe.png pour hero actualites

**3. SEO & Partage social**
- Image OpenGraph Luce pour partage WhatsApp/social
- Meta tags optimises pour la mission

**4. UI/UX**
- Animation pulse (remplacement bounce qui cachait le texte)
- Palette Pierre et Lumiere appliquee sur `/avent`
- Coherence visuelle avec `/actualites`

### Commits
- `e5cc1ea` - 🎄 AVENT: Mission 1 Luce - Etape presentation
- `ef83730` - 🎄 AVENT: Mission 1 - Luce complete
- `bf4a346` - 🖼️ OPTIM: Images Avent compressees (70% plus legeres)
- `235a449` - 🎨 FIX: Animation bounce → pulse
- `5cd6af8` - 📱 UX: Header/Footer desktop only sur mission
- `85277cd` - 🖼️ SEO: Image Luce pour partage WhatsApp/social
- `89043ff` - 🖼️ OPTIM: Images mission Avent ultra-legeres (87% reduction)
- `f52a57d` - 🖼️ UPDATE: Nouvelle image groupe Avent
- `6c5ad5d` - 🎨 UI: Palette Pierre et Lumiere sur /avent

---

## SESSION 27 NOVEMBRE 2025

### Realise aujourd'hui

**1. Page /dons - Section IBAN avec copie presse-papier**
- Nouvelle section "Virement bancaire" ajoutee
- Carte Nendaz : `CH27 0076 5000 K022 7898 3` (style stone)
- Carte Veysonnaz : `CH80 8057 2000 0017 6694 0` (style amber)
- Bouton copier IBAN avec feedback visuel (icone check + message)
- Composant `components/IbanCard.tsx` cree

**2. Formulaire /contact - Protection anti-spam**
- Captcha FormSubmit active (`_captcha: true`)
- Honeypot `_honey` ameliore (position absolute hors ecran)
- Second honeypot ajoute (champ `website_url` invisible)
- Note : texte captcha en anglais (limitation FormSubmit)

**3. Page /pastorale/liturgie - Bouton Enoria**
- Ajout CTA "Servir a la messe" (lien Enoria inscription)
- Couleur Enoria (#2A8B8C)
- Deplace sous le hero pour meilleure visibilite
- Lien : https://public.enoria.app/pubinsc/auth?type=acteurs&e=598&type_messe=dominicale

**4. Page /actualites - Evenements decembre 2025**
- 7 dec : Loto du choeur Le Muguet (Aproz)
- 20 dec : Rencontre Eveil a la Foi (Basse-Nendaz)
- 20 dec : Concert Noel Muguet + Echo du Mont (Aproz)
- 21 dec : Loto Choeur Caecilia (Biolette)
- 23 dec : Chantee de Noel (Haute-Nendaz)
- 26 dec : Concert de Noel (Veysonnaz)
- Note : Messes exclues (affichees sur page d'accueil)

### Commits
- `b8b141c` - 💳 DONS: IBAN + 🛡️ CONTACT: Anti-spam
- `0ae62af` - 📝 JOURNAL: Session 27 nov
- `fcdacb4` - 🙏 LITURGIE: Bouton "Servir a la messe" (Enoria)
- `0a0c01c` - 🙏 LITURGIE: Deplace CTA sous le hero
- `ce61af6` - 📅 ACTUALITES: Evenements decembre 2025

---

## SESSION 26 NOVEMBRE 2025

### Objectif du jour
Developpement projet `/avent` - Calendrier interactif pour enfants

### Realise aujourd'hui

**1. Mise a jour CLAUDE.md**
- Reduction 96% (47k → 1.8k caracteres)
- Synthese sharp des infos essentielles
- Creation JOURNAL.md pour historique sessions

**2. Nouveaux personnages integres**
- 4 personnages + 1 groupe remplaces dans `/public/images/avent/personnages/`
- Anciens noms : luce-jaune, fe-rouge, joy-vert, louange-bleu
- Nouveaux noms : Luce.png, Fe.png, Xin.png, Sky.png, groupe.png
- Format : 1080x1350px, PNG, ~400KB chacun

**3. Test integration hero page Actualites**
- Ajout image groupe.png dans hero compteur Avent
- Test responsive mobile/desktop
- Constat : marge blanche trop grande autour des personnages

### A faire prochaine session

**Image groupe.png** :
- [ ] Recadrer dans Canva (supprimer espace blanc autour)
- [ ] Re-exporter et remplacer

**Developpement Avent** :
- [ ] Detection semaine automatique (1-4)
- [ ] Integrer page `/test-avent` dans `/avent`
- [ ] Ajouter contenu semaines 2, 3, 4 (Fe, Xin, Sky)

### Personnages - Noms definitifs

| Fichier | Personnage | Couleur | Semaine |
|---------|------------|---------|---------|
| `Luce.png` | Luce | Jaune | 1 |
| `Fe.png` | Fe | Rouge | 2 |
| `Xin.png` | Xin | Vert | 3 |
| `Sky.png` | Sky | Bleu | 4 |
| `groupe.png` | Les 4 ensemble | - | Teasing |

### Page test existante
`/test-avent` - Semaine 1 complete avec Luce :
- Dialogue interactif 6 etapes
- Mission "Trouve le Tabernacle"
- Chant YouTube + paroles
- Defi de la semaine
- Liens ressources

---

## HISTORIQUE SESSIONS PRECEDENTES

### 23 nov 2025 - Refonte design + Compteur Avent
- Refonte complete palette Pierre et Lumiere (stone/amber)
- Integration compteur Avent en hero page Actualites
- Couleurs progressives : stone-700 → amber-400

### 21 nov 2025 - Page compteur Avent
- Creation `/app/avent/page.tsx`
- Compteur 4 couleurs temps reel
- QR code `avent-page-principale.jpg`
- Date lancement : 30 nov 2025 minuit

### 18 nov 2025 - Projet Avent documente
- Creation `PROJET_AVENT.md`
- Concept calendrier interactif enfants
- 4 personnages colores style jeu video
- Systeme dialogue + missions hebdomadaires

### 10 nov 2025 - QR Codes Avent
- Generation 5 QR codes semaines
- Package `qrcode` installe
- Script `generate-qr-codes.js`

---

## FICHIERS CLES PROJET AVENT

```
/app/avent/page.tsx                    # Page principale compteur
/app/test-avent/page.tsx               # Prototype semaine 1 (Luce)
/app/actualites/page.tsx               # Hero avec compteur + groupe
/public/images/avent/personnages/      # 5 images PNG
/qr-codes/*.jpg                        # 6 QR codes
/PROJET_AVENT.md                       # Documentation concept
```

---

## DATES AVENT 2025

| Semaine | Date debut | Personnage | Couleur | Chant |
|---------|-----------|------------|---------|-------|
| 0 | 30 nov | - | - | Pelerins sur la terre |
| 1 | 1er dec | Luce | Jaune | Dans la lumiere de Dieu |
| 2 | 8 dec | Fe | Rouge | J'ai confiance |
| 3 | 15 dec | Xin | Vert | Messagers de la joie |
| 4 | 22 dec | Sky | Bleu | Comment ne pas te louer |

---
*Derniere mise a jour : 2 decembre 2025*
