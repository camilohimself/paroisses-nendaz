# 📅 Guide de configuration des calendriers Google

## 🎯 Objectif
Récupérer les vrais IDs des calendriers Google du curé pour remplacer les IDs fictifs dans `/lib/calendars-config.ts`.

## 🔍 Méthode recommandée : Inspection manuelle

### Étape 1 : Accéder aux paramètres Google Calendar

1. **Se connecter** au compte Google du curé
2. **Aller sur** https://calendar.google.com
3. **Cliquer** sur l'icône ⚙️ (Paramètres) en haut à droite
4. **Sélectionner** "Paramètres"

### Étape 2 : Trouver les IDs des calendriers

Pour **chaque calendrier** visible dans la sidebar gauche :

1. **Cliquer** sur le nom du calendrier
2. **Descendre** jusqu'à la section "Intégrer le calendrier"
3. **Copier** l'**"ID du calendrier"** (format : `abc123@group.calendar.google.com`)
4. **Noter** quel calendrier correspond à quel lieu

### Étape 3 : Identifier les calendriers par nom

Voici les calendriers attendus selon votre CLAUDE.md :

#### SECTEUR NENDAZ :
- [ ] **Église de Basse-Nendaz** → ID: `________________`
- [ ] **Église de Haute-Nendaz** → ID: `________________`
- [ ] **Chapelle de Beuson** → ID: `________________`
- [ ] **Chapelle de Brignon** → ID: `________________`
- [ ] **Chapelle de Saclentse** → ID: `________________`
- [ ] **Chapelle du Bleusy** → ID: `________________`
- [ ] **Chapelle de Planchouet** → ID: `________________`
- [ ] **Chapelle St-Michel** → ID: `________________`
- [ ] **Chapelle St-Sébastien** → ID: `________________`
- [ ] **Chapelle des Condémines** → ID: `________________`
- [ ] **Chapelle des Rairettes** → ID: `________________`

#### SECTEUR VEYSONNAZ :
- [ ] **Église de Veysonnaz** → ID: `________________`
- [ ] **Chapelle de Clèbes** → ID: `________________`
- [ ] **Chapelle St-Barthélémy** → ID: `________________`

#### AUTRES SECTEURS :
- [ ] **Église d'Aproz** → ID: `________________`
- [ ] **Église de Fey** → ID: `________________`
- [ ] **EMS Les Vergers** → ID: `________________`
- [ ] **Foyer Ma Vallée** → ID: `________________`
- [ ] **Oratoire du Chardonney** → ID: `________________`

#### TRANSVERSAL :
- [ ] **Z - Équipe pastorale** → ID: `________________`

## 🔧 Étape 4 : Mettre à jour la configuration

Une fois les IDs récupérés, **remplacer** dans `/lib/calendars-config.ts` :

```typescript
// AVANT (fictif)
googleCalendarId: 'eglise.basse.nendaz@gmail.com',

// APRÈS (réel)
googleCalendarId: 'abc123def456@group.calendar.google.com',
```

## 🚨 Points d'attention

### Permissions requises
Les calendriers doivent être **publics** ou l'application doit avoir les **droits de lecture**.

### Si calendriers privés
Si les calendriers ne sont pas publics, il faudra :
1. **Les rendre publics** (recommandé pour horaires de messe)
2. OU configurer **OAuth complet** (plus complexe)

### Test de validation
Après mise à jour, tester l'URL :
```
http://localhost:3003/api/horaires?calendarId=basse-nendaz
```

## 🎯 Résultat attendu

Après configuration, le site affichera les **vrais événements** de chaque calendrier Google au lieu des données de démonstration.

---

**💡 Besoin d'aide ?**
Si problème avec l'accès aux calendriers, nous pourrons mettre en place un système OAuth plus avancé.