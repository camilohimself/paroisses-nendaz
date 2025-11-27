# JOURNAL DE BORD - Paroisses Nendaz

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
*Derniere mise a jour : 27 novembre 2025*
