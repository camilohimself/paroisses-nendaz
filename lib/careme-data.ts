// Données du Carême 2026 - "Prophète ? Moi ?"
// 47 jours : 18 février (Mercredi des Cendres) → 5 avril (Pâques)

export interface SaintCoach {
  id: string
  nom: string
  titre: string
  eglisePatronale?: string
  semaine: number
  couleur: string
  description: string
  priere: string
  image?: string
}

export interface JourCareme {
  jour: number
  date: string // YYYY-MM-DD
  jourSemaine: string
  contenu: string
  saintCoachId: string
  estDimanche: boolean
  estPaques?: boolean
}

export interface SemaineCareme {
  numero: number
  nom: string
  saintCoachId: string
  dateDebut: string
  dateFin: string
}

// Les 7 Saints Coachs
export const SAINTS_COACHS: SaintCoach[] = [
  {
    id: 'carlo-acutis',
    nom: 'Carlo Acutis',
    titre: 'Le Geek de Dieu',
    semaine: 0,
    couleur: 'violet',
    description: 'Carlo Acutis (1991-2006) était un adolescent italien passionné d\'informatique qui a utilisé ses talents pour évangéliser. Il a créé un site web cataloguant les miracles eucharistiques du monde entier. Béatifié en 2020, il a été canonisé en 2025.',
    priere: 'Saint Carlo, toi qui as su utiliser les outils modernes pour parler de Dieu, aide-moi à être un témoin de la foi dans mon quotidien.',
    image: '/images/careme/saints/carlo-acutis.webp'
  },
  {
    id: 'michel-archange',
    nom: 'Saint Michel Archange',
    titre: 'Le Défenseur',
    eglisePatronale: 'Haute-Nendaz',
    semaine: 1,
    couleur: 'bleu',
    description: 'Saint Michel est l\'archange qui a combattu le dragon (Satan) et l\'a vaincu. Son nom signifie "Qui est comme Dieu ?". Il est le protecteur de l\'Église et le patron de nombreuses paroisses.',
    priere: 'Saint Michel Archange, défends-nous dans le combat. Sois notre secours contre la méchanceté et les embûches du démon.',
    image: '/images/careme/saints/michel-archange.webp'
  },
  {
    id: 'leger',
    nom: 'Saint Léger',
    titre: 'L\'Évêque Courageux',
    eglisePatronale: 'Basse-Nendaz',
    semaine: 2,
    couleur: 'rouge',
    description: 'Saint Léger (616-679) fut évêque d\'Autun. Il défendit courageusement la foi face aux puissants de son époque, ce qui lui valut le martyre. Il est le patron de Basse-Nendaz.',
    priere: 'Saint Léger, toi qui as donné ta vie pour la vérité, donne-moi le courage de témoigner de ma foi.',
    image: '/images/careme/saints/leger.webp'
  },
  {
    id: 'nicolas-flue',
    nom: 'Saint Nicolas de Flüe',
    titre: 'Le Père de la Patrie',
    eglisePatronale: 'Aproz',
    semaine: 3,
    couleur: 'vert',
    description: 'Nicolas de Flüe (1417-1487), appelé "Frère Nicolas", est le saint patron de la Suisse. Après une vie de famille et de service public, il se retira en ermite. Ses conseils de paix sauvèrent la Confédération.',
    priere: 'Saint Nicolas de Flüe, toi qui as choisi la paix et la prière, aide-moi à être un artisan de paix autour de moi.',
    image: '/images/careme/saints/nicolas-flue.webp'
  },
  {
    id: 'joseph',
    nom: 'Saint Joseph',
    titre: 'Le Gardien Silencieux',
    semaine: 4,
    couleur: 'brun',
    description: 'Saint Joseph, époux de Marie et père adoptif de Jésus, est le modèle de l\'homme juste et discret. Il a protégé la Sainte Famille avec foi et courage, obéissant aux appels de Dieu.',
    priere: 'Saint Joseph, toi qui as veillé sur Jésus, toi qui as écouté l\'Esprit de Dieu tout au long de ta vie, aide-moi aujourd\'hui.',
    image: '/images/careme/saints/joseph.webp'
  },
  {
    id: 'marie-auxiliatrice',
    nom: 'Sainte Marie Auxiliatrice',
    titre: 'Notre Secours',
    eglisePatronale: 'Veysonnaz',
    semaine: 5,
    couleur: 'bleu-ciel',
    description: 'Marie Auxiliatrice ("Secours des Chrétiens") est un titre donné à la Vierge Marie. Elle est invoquée comme protectrice et aide dans les moments difficiles. C\'est la patronne de Veysonnaz.',
    priere: 'Marie, toi qui as dit oui à Dieu, aide-moi à accueillir sa Parole dans ma vie et à la partager autour de moi.',
    image: '/images/careme/saints/marie-auxiliatrice.webp'
  },
  {
    id: 'christ-roi',
    nom: 'Christ Roi',
    titre: 'Le Roi de l\'Univers',
    eglisePatronale: 'Fey',
    semaine: 6,
    couleur: 'or',
    description: 'Le Christ Roi est célébré comme le Seigneur de toute la création. Durant la Semaine Sainte, nous suivons son chemin vers la croix et la résurrection, victoire de l\'amour sur la mort.',
    priere: 'Jésus, Roi d\'amour, tu as donné ta vie pour nous. Aide-moi à te suivre sur le chemin de Pâques.',
    image: '/images/careme/saints/christ-roi.webp'
  }
]

// Les 7 semaines
export const SEMAINES_CAREME: SemaineCareme[] = [
  { numero: 0, nom: 'Semaine des Cendres', saintCoachId: 'carlo-acutis', dateDebut: '2026-02-18', dateFin: '2026-02-21' },
  { numero: 1, nom: 'Semaine 1', saintCoachId: 'michel-archange', dateDebut: '2026-02-22', dateFin: '2026-02-28' },
  { numero: 2, nom: 'Semaine 2', saintCoachId: 'leger', dateDebut: '2026-03-01', dateFin: '2026-03-07' },
  { numero: 3, nom: 'Semaine 3', saintCoachId: 'nicolas-flue', dateDebut: '2026-03-08', dateFin: '2026-03-14' },
  { numero: 4, nom: 'Semaine 4', saintCoachId: 'joseph', dateDebut: '2026-03-15', dateFin: '2026-03-21' },
  { numero: 5, nom: 'Semaine 5', saintCoachId: 'marie-auxiliatrice', dateDebut: '2026-03-22', dateFin: '2026-03-28' },
  { numero: 6, nom: 'Semaine Sainte', saintCoachId: 'christ-roi', dateDebut: '2026-03-29', dateFin: '2026-04-05' }
]

// Les 47 jours du Carême
export const JOURS_CAREME: JourCareme[] = [
  // Semaine 0 - Carlo Acutis (Cendres)
  { jour: 1, date: '2026-02-18', jourSemaine: 'Mercredi', contenu: 'Je fais un moment de calme dans mon coin prière', saintCoachId: 'carlo-acutis', estDimanche: false },
  { jour: 2, date: '2026-02-19', jourSemaine: 'Jeudi', contenu: 'Viens Esprit-Saint m\'aider à me rapprocher de toi', saintCoachId: 'carlo-acutis', estDimanche: false },
  { jour: 3, date: '2026-02-20', jourSemaine: 'Vendredi', contenu: 'J\'aide quelqu\'un en lui donnant beaucoup d\'amour', saintCoachId: 'carlo-acutis', estDimanche: false },
  { jour: 4, date: '2026-02-21', jourSemaine: 'Samedi', contenu: 'Jésus je te confie toutes les personnes de ma famille', saintCoachId: 'carlo-acutis', estDimanche: false },

  // Semaine 1 - St Michel Archange
  { jour: 5, date: '2026-02-22', jourSemaine: 'Dimanche', contenu: 'Je lis la carte de Saint Michel', saintCoachId: 'michel-archange', estDimanche: true },
  { jour: 6, date: '2026-02-23', jourSemaine: 'Lundi', contenu: 'Je répète dans mon cœur que Dieu m\'aime', saintCoachId: 'michel-archange', estDimanche: false },
  { jour: 7, date: '2026-02-24', jourSemaine: 'Mardi', contenu: 'Jésus merci de m\'avoir créé. Aide-moi à grandir comme un athlète de Dieu', saintCoachId: 'michel-archange', estDimanche: false },
  { jour: 8, date: '2026-02-25', jourSemaine: 'Mercredi', contenu: 'Aujourd\'hui je fais quelque chose de bien avec mes mains', saintCoachId: 'michel-archange', estDimanche: false },
  { jour: 9, date: '2026-02-26', jourSemaine: 'Jeudi', contenu: 'Jésus éclaire mon esprit afin que je fasse le bien', saintCoachId: 'michel-archange', estDimanche: false },
  { jour: 10, date: '2026-02-27', jourSemaine: 'Vendredi', contenu: 'Je fais silence et je confie à Dieu mes joies, mes doutes', saintCoachId: 'michel-archange', estDimanche: false },
  { jour: 11, date: '2026-02-28', jourSemaine: 'Samedi', contenu: 'Ô Jésus, ta Parole est vie, ta parole est création, ta Parole me transforme', saintCoachId: 'michel-archange', estDimanche: false },

  // Semaine 2 - St Léger
  { jour: 12, date: '2026-03-01', jourSemaine: 'Dimanche', contenu: 'Je lis la carte de Saint Léger', saintCoachId: 'leger', estDimanche: true },
  { jour: 13, date: '2026-03-02', jourSemaine: 'Lundi', contenu: 'Ô Viens Esprit Saint en mon cœur', saintCoachId: 'leger', estDimanche: false },
  { jour: 14, date: '2026-03-03', jourSemaine: 'Mardi', contenu: 'Aujourd\'hui je partage un sourire', saintCoachId: 'leger', estDimanche: false },
  { jour: 15, date: '2026-03-04', jourSemaine: 'Mercredi', contenu: 'Je remercie Dieu pour l\'amour reçu', saintCoachId: 'leger', estDimanche: false },
  { jour: 16, date: '2026-03-05', jourSemaine: 'Jeudi', contenu: 'J\'aide un camarade en difficulté', saintCoachId: 'leger', estDimanche: false },
  { jour: 17, date: '2026-03-06', jourSemaine: 'Vendredi', contenu: 'Ô viens Esprit saint en mon cœur, en ma vie !', saintCoachId: 'leger', estDimanche: false },
  { jour: 18, date: '2026-03-07', jourSemaine: 'Samedi', contenu: 'Je range ma chambre pour pouvoir mieux me reposer', saintCoachId: 'leger', estDimanche: false },

  // Semaine 3 - St Nicolas de Flüe
  { jour: 19, date: '2026-03-08', jourSemaine: 'Dimanche', contenu: 'Je lis la carte de Saint Nicolas de Flüe', saintCoachId: 'nicolas-flue', estDimanche: true },
  { jour: 20, date: '2026-03-09', jourSemaine: 'Lundi', contenu: 'Je lis en famille un passage de la bible Hébreux 4,12', saintCoachId: 'nicolas-flue', estDimanche: false },
  { jour: 21, date: '2026-03-10', jourSemaine: 'Mardi', contenu: 'Aujourd\'hui je fais quelque chose d\'inattendu pour faire plaisir à quelqu\'un', saintCoachId: 'nicolas-flue', estDimanche: false },
  { jour: 22, date: '2026-03-11', jourSemaine: 'Mercredi', contenu: 'Merci Jésus, pour tout ce que tu m\'as appris dans ma vie', saintCoachId: 'nicolas-flue', estDimanche: false },
  { jour: 23, date: '2026-03-12', jourSemaine: 'Jeudi', contenu: 'Aide-moi à mettre de l\'amour dans ce que je fais', saintCoachId: 'nicolas-flue', estDimanche: false },
  { jour: 24, date: '2026-03-13', jourSemaine: 'Vendredi', contenu: 'Montre-moi, Jésus comment je peux aider ceux qui souffrent autour de moi', saintCoachId: 'nicolas-flue', estDimanche: false },
  { jour: 25, date: '2026-03-14', jourSemaine: 'Samedi', contenu: 'Je trouve 3 qualités pour chaque membre de ma famille', saintCoachId: 'nicolas-flue', estDimanche: false },

  // Semaine 4 - St Joseph
  { jour: 26, date: '2026-03-15', jourSemaine: 'Dimanche', contenu: 'Je lis la carte de Saint Joseph', saintCoachId: 'joseph', estDimanche: true },
  { jour: 27, date: '2026-03-16', jourSemaine: 'Lundi', contenu: 'Jésus aide-moi à ce que tous ceux qui viennent vers moi repartent plus heureux', saintCoachId: 'joseph', estDimanche: false },
  { jour: 28, date: '2026-03-17', jourSemaine: 'Mardi', contenu: 'Que les autres puissent mieux te connaître, Jésus, juste en me voyant vivre, sourire', saintCoachId: 'joseph', estDimanche: false },
  { jour: 29, date: '2026-03-18', jourSemaine: 'Mercredi', contenu: 'Jésus fais grandir l\'Amour autour de moi', saintCoachId: 'joseph', estDimanche: false },
  { jour: 30, date: '2026-03-19', jourSemaine: 'Jeudi', contenu: 'St Joseph, toi qui as veillé sur Jésus, toi qui as écouté l\'Esprit de Dieu tout au long de ta vie, aide-moi aujourd\'hui', saintCoachId: 'joseph', estDimanche: false },
  { jour: 31, date: '2026-03-20', jourSemaine: 'Vendredi', contenu: 'Aujourd\'hui, je rends service sans me plaindre, mais avec mon plus beau sourire', saintCoachId: 'joseph', estDimanche: false },
  { jour: 32, date: '2026-03-21', jourSemaine: 'Samedi', contenu: 'Jésus, je te prie pour toutes les personnes qui souffrent', saintCoachId: 'joseph', estDimanche: false },

  // Semaine 5 - Ste Marie Auxiliatrice
  { jour: 33, date: '2026-03-22', jourSemaine: 'Dimanche', contenu: 'Je lis la carte de Sainte Marie Auxiliatrice', saintCoachId: 'marie-auxiliatrice', estDimanche: true },
  { jour: 34, date: '2026-03-23', jourSemaine: 'Lundi', contenu: 'Jésus, mets en mon cœur ta Parole pour que je puisse la redire aux autres', saintCoachId: 'marie-auxiliatrice', estDimanche: false },
  { jour: 35, date: '2026-03-24', jourSemaine: 'Mardi', contenu: 'Jésus change mon cœur pour que je puisse voir les personnes à ta manière', saintCoachId: 'marie-auxiliatrice', estDimanche: false },
  { jour: 36, date: '2026-03-25', jourSemaine: 'Mercredi', contenu: 'Je cherche 3 choses que je sais faire et je remercie Jésus pour ça', saintCoachId: 'marie-auxiliatrice', estDimanche: false },
  { jour: 37, date: '2026-03-26', jourSemaine: 'Jeudi', contenu: 'Aujourd\'hui je partage un goûter en famille ou avec mes amis à la récréation', saintCoachId: 'marie-auxiliatrice', estDimanche: false },
  { jour: 38, date: '2026-03-27', jourSemaine: 'Vendredi', contenu: 'Aujourd\'hui, je rends visite ou je prie pour une personne qui est seule ou malade', saintCoachId: 'marie-auxiliatrice', estDimanche: false },
  { jour: 39, date: '2026-03-28', jourSemaine: 'Samedi', contenu: 'Seigneur transforme mon cœur pour que ton amour puisse grandir autour de moi', saintCoachId: 'marie-auxiliatrice', estDimanche: false },

  // Semaine 6 - Semaine Sainte (Christ Roi)
  { jour: 40, date: '2026-03-29', jourSemaine: 'Dimanche', contenu: 'Je lis la carte du Christ Roi de l\'univers', saintCoachId: 'christ-roi', estDimanche: true },
  { jour: 41, date: '2026-03-30', jourSemaine: 'Lundi', contenu: 'Il est écrit : Soyez toujours dans la joie du Seigneur', saintCoachId: 'christ-roi', estDimanche: false },
  { jour: 42, date: '2026-03-31', jourSemaine: 'Mardi', contenu: 'Ô Jésus merci pour ta parole, merci d\'être parole', saintCoachId: 'christ-roi', estDimanche: false },
  { jour: 43, date: '2026-04-01', jourSemaine: 'Mercredi', contenu: 'Ô Jésus, apprends-moi à aimer... Fais de moi un prophète de l\'amour', saintCoachId: 'christ-roi', estDimanche: false },
  { jour: 44, date: '2026-04-02', jourSemaine: 'Jeudi', contenu: 'Si je peux, je participe à la célébration à Basse-Nendaz', saintCoachId: 'christ-roi', estDimanche: false },
  { jour: 45, date: '2026-04-03', jourSemaine: 'Vendredi', contenu: 'Si je peux, je fais un chemin de croix', saintCoachId: 'christ-roi', estDimanche: false },
  { jour: 46, date: '2026-04-04', jourSemaine: 'Samedi', contenu: 'Ô Jésus, donne-moi une âme qui sait veiller...', saintCoachId: 'christ-roi', estDimanche: false },
  { jour: 47, date: '2026-04-05', jourSemaine: 'Dimanche', contenu: 'Jésus est ressuscité !', saintCoachId: 'christ-roi', estDimanche: true, estPaques: true }
]

// Fonctions utilitaires
export function getSaintById(id: string): SaintCoach | undefined {
  return SAINTS_COACHS.find(s => s.id === id)
}

export function getJourByNumero(numero: number): JourCareme | undefined {
  return JOURS_CAREME.find(j => j.jour === numero)
}

export function getJourByDate(date: string): JourCareme | undefined {
  return JOURS_CAREME.find(j => j.date === date)
}

export function getSemaineByNumero(numero: number): SemaineCareme | undefined {
  return SEMAINES_CAREME.find(s => s.numero === numero)
}

export function getJoursParSemaine(semaineNumero: number): JourCareme[] {
  const semaine = getSemaineByNumero(semaineNumero)
  if (!semaine) return []

  return JOURS_CAREME.filter(jour => {
    const jourDate = new Date(jour.date)
    const debutDate = new Date(semaine.dateDebut)
    const finDate = new Date(semaine.dateFin)
    return jourDate >= debutDate && jourDate <= finDate
  })
}

// État d'un jour (verrouillé, actif, complété)
export type EtatJour = 'verrouille' | 'actif' | 'complete'

export function getEtatJour(dateJour: string, dateActuelle: Date = new Date()): EtatJour {
  const jour = new Date(dateJour)
  const aujourdhui = new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), dateActuelle.getDate())
  const jourNormalise = new Date(jour.getFullYear(), jour.getMonth(), jour.getDate())

  if (jourNormalise > aujourdhui) return 'verrouille'
  if (jourNormalise.getTime() === aujourdhui.getTime()) return 'actif'
  return 'complete'
}

// Progression globale
export function getProgression(dateActuelle: Date = new Date()): {
  joursCompletes: number
  joursTotal: number
  pourcentage: number
} {
  const completes = JOURS_CAREME.filter(j => getEtatJour(j.date, dateActuelle) === 'complete').length
  const actif = JOURS_CAREME.filter(j => getEtatJour(j.date, dateActuelle) === 'actif').length

  return {
    joursCompletes: completes + actif,
    joursTotal: JOURS_CAREME.length,
    pourcentage: Math.round(((completes + actif) / JOURS_CAREME.length) * 100)
  }
}
