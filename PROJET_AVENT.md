# 🎄 PROJET CALENDRIER DE L'AVENT INTERACTIF

## 📋 CONCEPT GLOBAL

**"Calendrier de l'Avent Numérique pour Enfants"**
- Accessible via **QR code** scanné devant la paroisse
- Page web spéciale : `/avent`
- **4 semaines** de l'Avent = **4 personnages colorés**
- **Style jeu vidéo** (Clash of Clans / Pokémon)

---

## 🎮 FONCTIONNEMENT

### 1. ARRIVÉE (Scan QR code)
```
Enfant devant paroisse
    ↓
Scanne QR code
    ↓
Page web s'ouvre → www.paroisses-nendaz.ch/avent
    ↓
🟡 Bonhomme JAUNE apparaît (semaine 1)
```

### 2. DIALOGUE INTERACTIF
- **Pop-up/Modal** avec le bonhomme animé
- **Bulle de dialogue** : "Salut, bienvenu à toi pèlerin de l'espérance..."
- **Bouton "Continuer"** → Le dialogue avance
- **Style cartoon ludique** pour enfants

### 3. CONTENU PAGE (Derrière le dialogue)
- 📺 **Vidéo YouTube** embed (chant de la semaine)
- 🎵 **Paroles du chant**
- 🎯 **Mission de la semaine** (défi pour les enfants)
- ℹ️ **Autres infos** (dates, explications...)

### 4. PROGRESSION TEMPORELLE

| Semaine | Couleur | Personnage | Période |
|---------|---------|------------|---------|
| Semaine 1 | 🟡 Jaune | Bonhomme 1 | 1er dimanche Avent |
| Semaine 2 | 🔴 Rouge | Bonhomme 2 | 2e dimanche Avent |
| Semaine 3 | 🟢 Vert | Bonhomme 3 | 3e dimanche Avent |
| Semaine 4 | 🔵 Bleu | Bonhomme 4 | 4e dimanche Avent |

**→ Les semaines se "débloquent" automatiquement selon la date**

---

## ❓ INFORMATIONS À COLLECTER

### 1. PERSONNAGES
- [ ] Illustrations des 4 bonhommes (jaune, rouge, vert, bleu)
- [ ] Format : PNG/SVG/GIF ?
- [ ] Style cartoon fourni ou à créer ?

### 2. DIALOGUE
- [ ] Texte dialogue semaine 1 (exemple complet)
- [ ] Nombre de bulles par semaine
- [ ] Ton : ludique, spirituel, pédagogique ?
- [ ] Exemple : "Salut, bienvenu à toi pèlerin de l'espérance..."

### 3. MISSIONS
- [ ] Mission semaine 1 (jaune)
- [ ] Mission semaine 2 (rouge)
- [ ] Mission semaine 3 (vert)
- [ ] Mission semaine 4 (bleu)
- [ ] Exemple : "Allume une bougie et prie pour..."

### 4. CONTENU MULTIMÉDIA
- [ ] URL vidéo YouTube semaine 1
- [ ] URL vidéo YouTube semaine 2
- [ ] URL vidéo YouTube semaine 3
- [ ] URL vidéo YouTube semaine 4
- [ ] Paroles chants (texte)

### 5. DATES AVENT 2025
- [ ] **Semaine 1** : Dimanche 1er décembre 2025 ?
- [ ] **Semaine 2** : Dimanche 8 décembre 2025 ?
- [ ] **Semaine 3** : Dimanche 15 décembre 2025 ?
- [ ] **Semaine 4** : Dimanche 22 décembre 2025 ?

### 6. COMPORTEMENTS
- [ ] Si scan **avant le 1er décembre** → Que voir ?
- [ ] Si **semaine 3 active** → Accès semaines 1-2 précédentes ?
- [ ] Après Noël (26 déc+) → Page reste accessible ?

---

## 🛠️ STACK TECHNIQUE PRÉVU

### Structure
```
/app/avent/page.tsx
├── Détection date actuelle → Semaine active
├── Modal/Dialog personnage + dialogue interactif
├── Système "Continuer" (état React)
├── Contenu : YouTube embed + Paroles + Mission
└── Design mobile-first (scan QR smartphone)
```

### Features
- ✅ Modal interactif avec personnage animé
- ✅ Système dialogue multi-étapes "Continuer"
- ✅ Détection automatique semaine (date-fns)
- ✅ 4 personnages différents (composants React)
- ✅ Embed YouTube responsive
- ✅ Design ludique pour enfants (couleurs vives)
- ✅ Animation apparition personnage (Framer Motion ?)
- ✅ Responsive mobile (priorité)

### Composants à créer
```typescript
/components/avent/
├── PersonnageDialog.tsx       // Modal avec bonhomme + dialogue
├── DialogueBubble.tsx         // Bulle de texte style jeu vidéo
├── WeekContent.tsx            // Contenu semaine (vidéo + mission)
├── AdventCalendar.tsx         // Vue d'ensemble 4 semaines
└── CharacterAvatar.tsx        // Personnage animé
```

---

## 🎨 DESIGN INSPIRATIONS

**Style visuel** :
- Pokémon (dialogues avec PNJ)
- Clash of Clans (personnages cartoon)
- Animal Crossing (ton joyeux et accessible)

**Animations** :
- Personnage qui "pop" à l'écran
- Bulle de dialogue qui apparaît progressivement
- Texte qui se déroule (effet "typing" optionnel)

**Couleurs** :
- 🟡 Jaune : Lumière, espérance, étoile
- 🔴 Rouge : Amour, chaleur, cœur
- 🟢 Vert : Vie, nature, sapin
- 🔵 Bleu : Ciel, paix, Marie

---

## 📱 QR CODES

**5 QR codes à générer** :
- `/avent` → Page principale (détection auto de la semaine)
- `/avent?semaine=1` → Force semaine 1 (jaune)
- `/avent?semaine=2` → Force semaine 2 (rouge)
- `/avent?semaine=3` → Force semaine 3 (vert)
- `/avent?semaine=4` → Force semaine 4 (bleu)

**Déjà créés** : Fichiers dans `/qr-codes/` (session 10 nov)

---

## 🎯 PHASES DÉVELOPPEMENT

### Phase 1 : Structure de base
- [ ] Page `/avent` créée
- [ ] Détection semaine automatique
- [ ] Layout mobile responsive

### Phase 2 : Modal personnage
- [ ] Composant modal avec personnage
- [ ] Système dialogue multi-étapes
- [ ] Bouton "Continuer"
- [ ] Animation apparition

### Phase 3 : Contenu semaines
- [ ] Intégration YouTube embed
- [ ] Section paroles chant
- [ ] Section mission enfants
- [ ] Design ludique et coloré

### Phase 4 : Tests & déploiement
- [ ] Test QR codes
- [ ] Test mobile (différents écrans)
- [ ] Validation contenu par équipe
- [ ] Génération QR codes finaux

---

## 📅 CALENDRIER (À DÉFINIR)

- **Deadline** : Avant le 1er décembre 2025
- **Tests** : Mi-novembre 2025
- **Contenu finalisé** : Fin novembre 2025

---

## 💡 IDÉES BONUS (Optionnelles)

- Son/musique au clic "Continuer" ?
- Confettis animation fin dialogue ?
- Badge/récompense virtuelle après mission ?
- Galerie photos enfants participants ?
- Compteur enfants ayant scanné ?

---

## 📝 NOTES

**Projet en pause** - Session 18 nov 2025
- Concept validé
- En attente informations complémentaires
- Priorité : Correction formulaire contact

---

*Création : 18 novembre 2025*
*Statut : EN ATTENTE CONTENU*
