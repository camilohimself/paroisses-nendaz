// Données du calendrier de l'Avent 2025
// Basé sur le document "Démarche Avent 2025 + défi.pdf"

export interface JourAvent {
  jour: number
  date: string
  titre: string
  texteBiblique?: string
  meditation: string
  priere?: string
  special?: 'dimanche' | 'noel' | 'bougie'
  semaine: 1 | 2 | 3 | 4
}

export interface SemaineAvent {
  numero: 1 | 2 | 3 | 4
  theme: string
  personnage: string
  signification: string
  couleur: string
  couleurTailwind: {
    bg: string
    bgGradient: string
    text: string
    border: string
    accent: string
  }
  psaume: {
    numero: string
    texte: string
  }
  priereSemaine: string
  chant: {
    titre: string
    youtubeId: string
  }
  symbole: string
  dateDebut: string
  dateFin: string
}

// ============================================
// SEMAINES DE L'AVENT
// ============================================

export const SEMAINES_AVENT: SemaineAvent[] = [
  {
    numero: 1,
    theme: "Accueillir et semer la lumière",
    personnage: "Luce",
    signification: "Lumière",
    couleur: "jaune",
    couleurTailwind: {
      bg: "bg-amber-100",
      bgGradient: "from-amber-100 via-yellow-50 to-amber-100",
      text: "text-amber-700",
      border: "border-amber-400",
      accent: "bg-amber-500"
    },
    psaume: {
      numero: "Psaume 26",
      texte: `Le Seigneur est ma lumière et mon salut ; de qui aurais-je crainte ?
Qu'une armée se déploie devant moi, mon cœur est sans crainte ;
Que la bataille s'engage contre moi, je garde confiance…
Je chanterai, je fêterai le Seigneur.`
    },
    priereSemaine: `Ô Jésus, Tu es lumière…
Tu es la lumière qui guide mes pas,
ouvre mes oreilles à ta parole…

Tu es la lumière qui réchauffe mon cœur,
remplis-le,
que je devienne à mon tour, lumière pour les autres.

Tu es ma lumière,
merci pour la paix que tu me donnes...`,
    chant: {
      titre: "Dans la lumière de Dieu",
      youtubeId: "fOJoUI_IA4s"
    },
    symbole: "Étoile",
    dateDebut: "2025-12-01",
    dateFin: "2025-12-06"
  },
  {
    numero: 2,
    theme: "J'avance avec confiance",
    personnage: "Fe",
    signification: "Foi",
    couleur: "rouge",
    couleurTailwind: {
      bg: "bg-red-100",
      bgGradient: "from-red-100 via-red-50 to-red-100",
      text: "text-red-700",
      border: "border-red-400",
      accent: "bg-red-500"
    },
    psaume: {
      numero: "Psaume 71 (72)",
      texte: `En ces jours-là, fleurira la justice,
grande paix jusqu'à la fin des lunes !
Il délivrera le pauvre qui appelle et le malheureux sans recours.
Il aura souci du faible et du pauvre, du pauvre dont il sauve la vie….`
    },
    priereSemaine: `Dieu Puissant, merci d'être fidèle et de tenir toutes Tes promesses…
Ouvre mes oreilles pour que je sois attentif à Ta voix.
Aide-moi à écouter et à répondre à Ta parole.
Rappelle-moi que Tu es digne de confiance
et que Tu n'abandonnes jamais tes enfants.

Augmente ma foi pour savoir que ni la mort, ni la vie, ni les anges ni les dirigeants, ni le présent, ni l'avenir, ni la hauteur, ni la profondeur, ni rien d'autre dans toute la création ne pourra me séparer de Ton amour.`,
    chant: {
      titre: "J'ai confiance, je ne crains pas",
      youtubeId: "rIjW99MJf7w"
    },
    symbole: "Ancre",
    dateDebut: "2025-12-07",
    dateFin: "2025-12-13"
  },
  {
    numero: 3,
    theme: "Je marche plein d'espérance",
    personnage: "Xin",
    signification: "Cœur",
    couleur: "vert",
    couleurTailwind: {
      bg: "bg-emerald-100",
      bgGradient: "from-emerald-100 via-green-50 to-emerald-100",
      text: "text-emerald-700",
      border: "border-emerald-400",
      accent: "bg-emerald-500"
    },
    psaume: {
      numero: "Psaume 145 (146)",
      texte: `Viens, Seigneur, et sauve-nous ! Alléluia !
Le Seigneur fait justice aux opprimés,
aux affamés, il donne le pain,
le Seigneur délie les enchaînés.
Le Seigneur ouvre les yeux des aveugles,
le Seigneur redresse les accablés,
le Seigneur aime les justes.
Le Seigneur protège l'étranger, il soutient la veuve et l'orphelin.
D'âge en âge, le Seigneur régnera.`
    },
    priereSemaine: `Seigneur, je te prie pour les opprimés, les enchaînés, les aveugles de cœur, les accablés, les étrangers, soutiens-les, protège-les et aide-moi à me faire proche de ceux qui souffrent…`,
    chant: {
      titre: "Pèlerins sur la terre",
      youtubeId: "bfhW9hRddOg"
    },
    symbole: "Fleurs",
    dateDebut: "2025-12-14",
    dateFin: "2025-12-20"
  },
  {
    numero: 4,
    theme: "Alléluia, je loue Dieu !",
    personnage: "Sky",
    signification: "Ciel",
    couleur: "bleu",
    couleurTailwind: {
      bg: "bg-blue-100",
      bgGradient: "from-blue-100 via-sky-50 to-blue-100",
      text: "text-blue-700",
      border: "border-blue-400",
      accent: "bg-blue-500"
    },
    psaume: {
      numero: "Psaume 23 (24)",
      texte: `Qu'il vienne, le Seigneur : c'est lui, le roi de gloire !
Au Seigneur, le monde et sa richesse,
la terre et tous ses habitants !
C'est lui qui l'a fondée sur les mers
et la garde inébranlable sur les flots.
Qui peut gravir la montagne du Seigneur
et se tenir dans le lieu saint ?
L'homme au cœur pur, aux mains innocentes...
Il obtient, du Seigneur, la bénédiction,
et de Dieu son Sauveur, la justice.
Voici le peuple de ceux qui le cherchent !`
    },
    priereSemaine: `Je m'exerce à dire merci en chantant un alléluia, un chant de Noël, un chant de Jésus, un chant de joie, ou je fais une prière qui commence par "Je te loue Seigneur pour…" ou "Merci la vie, pour…"`,
    chant: {
      titre: "Comment ne pas te louer",
      youtubeId: "H06KAewLhaY"
    },
    symbole: "Ange musicien",
    dateDebut: "2025-12-21",
    dateFin: "2025-12-25"
  }
]

// ============================================
// JOURS DE L'AVENT - SEMAINE 1
// ============================================

export const JOURS_SEMAINE_1: JourAvent[] = [
  {
    jour: 1,
    date: "2025-12-01",
    titre: "Jésus, une nouvelle étoile dans mon ciel !",
    texteBiblique: "Où est le roi des juifs, qui vient de naître ? Nous avons vu, en effet, son astre à son lever…",
    meditation: `Quelles sont les étoiles qui peuplent mon ciel : des personnes que j'admire ? des valeurs ? des passions… ? Voilà que Jésus s'invite dans mon ciel… Je regarde les étoiles de mon ciel, je peux nommer certaines. Puis, j'en vois une qui brille particulièrement… c'est celle de Jésus.

Je laisse monter comme une prière, ma réaction première : étonnement, joie, ou désabusement, scepticisme, "ce serait beau si c'était vrai", de l'indifférence… ? Peut-être, il y a un mélange d'émotions.`,
    priere: "Je raconte tout cela à Jésus dans mon cœur…",
    semaine: 1
  },
  {
    jour: 2,
    date: "2025-12-02",
    titre: "Les mages se mettent en route",
    texteBiblique: "Les mages se mettent en route… Ils s'émerveillent et se laissent interpellés par cette nouvelle étoile et cherchent à rencontrer Jésus, à le voir.",
    meditation: "Moi aussi je cherche à te rencontrer, Jésus, à te voir, à te toucher…",
    priere: `Je te cherche Dieu, tu es mon Dieu et je t'appelle.
Je te cherche Dieu, entends la voix de ma prière…

Comme une terre assoiffée sans eau, Je te cherche et te désire.
Viens abreuver le sillon creusé dans mon désert.

Comme une biche vient au torrent, Je te cherche et te désire.
Sois la source qui ne tarit pas, fleuve d'eau vive.

Comme un enfant tout contre sa mère, Je te cherche et te désire.
Dans ton silence renaît la paix, qui me fait vivre.

Comme un veilleur désire l'aurore, Je te cherche et te désire.
En toi la nuit est comme le jour, tu es lumière.`,
    semaine: 1
  },
  {
    jour: 3,
    date: "2025-12-03",
    titre: "Les mages sont des chercheurs",
    texteBiblique: "Les mages sont des savants, des chercheurs… ils ne restent pas cramponnés sur leurs acquis. Ils cherchent…",
    meditation: "",
    priere: `Seigneur Jésus, Toi qui as fait un si long déplacement d'auprès du Père pour venir planter ta tente parmi nous ; toi qui es né au hasard d'un voyage, et as couru toutes les routes, celle de l'exil, celle des pèlerinages, celle de la prédication :

Tire-moi de mon égoïsme et de mon confort, fais de moi un pèlerin…

— Prière du pèlerin de la montagne`,
    semaine: 1
  },
  {
    jour: 4,
    date: "2025-12-04",
    titre: "Se laisser interpeller",
    texteBiblique: "Contrairement aux mages qui se mettent en route, qui cherchent, Hérode, ainsi que les grands prêtres, les lévites ne bougent pas… Ils restent enfermés dans leurs savoirs.",
    meditation: "Est-ce que je me laisse interpelé(e) par Dieu ? Comment Dieu se manifeste-t-il dans ma vie ?",
    priere: `Seigneur, Je t'ouvre la porte de mon cœur, la porte de ma vie.
Apprends-moi le silence, la disponibilité.
Donne-moi ta lumière pour que je puisse te reconnaître quand tu viens vers moi…
Rends mon cœur attentif pour que je puisse te rencontrer aujourd'hui…`,
    semaine: 1
  },
  {
    jour: 5,
    date: "2025-12-05",
    titre: "La lumière de Dieu conduit",
    texteBiblique: "L'astre les précédait. La lumière de Dieu conduit.",
    meditation: "",
    priere: `Ô Seigneur, Tu me conduis à travers les évènements de ma vie.
Tu me conduis à travers ta Parole que j'écoute et que j'essaie de vivre…
Tu me conduis à travers ma prière.

Donne-moi tes yeux, donne-moi ta lumière pour que je puisse voir les personnes et les choses à ta manière et te voir en chaque personne, à travers toute chose.`,
    semaine: 1
  },
  {
    jour: 6,
    date: "2025-12-06",
    titre: "Dieu comme une personne",
    texteBiblique: "Les mages ne découvrent pas Dieu comme une idée mais comme une personne, un bébé…",
    meditation: `Comme sœur Magdeleine, une des fondatrices des Petites sœurs de Jésus, certains saints ont imaginé, rêvé qu'ils portaient l'enfant Jésus et cela a transformé leur vie…

Je ferme les yeux et j'imagine que je porte Jésus, bébé de la crèche.
Qu'est-ce que je ferai, qu'est-ce que je lui dirai ?`,
    special: 'bougie',
    priere: "J'allume une bougie, sur le bord de ma fenêtre pour la paix dans le monde…",
    semaine: 1
  },
  {
    jour: 7,
    date: "2025-12-07",
    titre: "J'avance avec confiance",
    texteBiblique: "",
    meditation: `Avec les enfants, je me mets en route avec "Fe" qui veut dire Foi.

Vêtu de rouge, il est rempli d'énergie et symbolise la confiance et la persévérance nécessaires pour avancer dans la vie. Avec sa Bible dans sa poche, il partage des paroles d'espérance et nous rappelle que la foi peut nous guider.

Cette semaine, je veux avancer dans la vie avec confiance…`,
    special: 'dimanche',
    semaine: 2 // C'est le dimanche de transition vers semaine 2
  }
]

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

export function getSemaineActuelle(): SemaineAvent {
  const now = new Date()
  const semaine = SEMAINES_AVENT.find(s => {
    const debut = new Date(s.dateDebut)
    const fin = new Date(s.dateFin)
    fin.setHours(23, 59, 59, 999)
    return now >= debut && now <= fin
  })
  return semaine || SEMAINES_AVENT[0]
}

export function getJourActuel(): number {
  const now = new Date()
  const debut = new Date('2025-12-01')
  debut.setHours(0, 0, 0, 0)

  if (now < debut) return 0

  const diff = Math.floor((now.getTime() - debut.getTime()) / (1000 * 60 * 60 * 24))
  return Math.min(diff + 1, 25)
}

export function estJourAccessible(jour: number): boolean {
  return jour <= getJourActuel()
}

export function getJourData(jour: number): JourAvent | undefined {
  // Pour l'instant, seulement semaine 1
  return JOURS_SEMAINE_1.find(j => j.jour === jour)
}

export function getSemaineParJour(jour: number): SemaineAvent {
  if (jour <= 6) return SEMAINES_AVENT[0]
  if (jour <= 13) return SEMAINES_AVENT[1]
  if (jour <= 20) return SEMAINES_AVENT[2]
  return SEMAINES_AVENT[3]
}
