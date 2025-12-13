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
  introduction: string // Description du personnage + intention de la semaine
  psaume: {
    numero: string
    texte: string
  }
  priereSemaine: string
  actionSemaine: string // "Comment puis-je vivre... aujourd'hui ?"
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
    introduction: `Avec les enfants, je me mets en route, avec Luce, qui veut dire "lumière".

Vêtue de jaune, en référence au drapeau du Vatican, elle nous apporte la lumière qui illumine notre chemin de foi. Comme ses amis, elle porte les différents attributs d'un pèlerin ; un bâton, des bottes tachées de boue en signe du long voyage à accomplir, un chapelet autour du cou, des yeux avec des reflets en forme de coquille Saint-Jacques.

Cette semaine, je veux accueillir la lumière et la semer autour de moi…`,
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
    actionSemaine: `Comment puis-je semer de la lumière dans ma vie ?

D'abord en me rechargeant par un temps de prière… Puis en partageant la lumière par un sourire – par une parole qui fait du bien – par une parole de sagesse – par mon humour – par ma joie de vivre…

Chaque jour, je choisis une action concrète pour semer de la lumière autour de moi et je fais avancer le pèlerin de l'espérance, Luce, vers la crèche… ou je dépose en évidence la carte de l'étoile…`,
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
    introduction: `Avec les enfants, je me mets en route avec "Fe" qui veut dire Foi.

Vêtu de rouge, il est rempli d'énergie et symbolise la confiance et la persévérance nécessaires pour avancer dans la vie. Avec sa Bible dans sa poche, il partage des paroles d'espérance et nous rappelle que la foi peut nous guider.

Cette semaine, je veux avancer dans la vie avec confiance…`,
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
    actionSemaine: `Comment puis-je vivre ma foi aujourd'hui ?

Lire une parole de la Bible chaque jour – à dire chaque jour de cette semaine : "Jésus, j'ai confiance en toi." – en témoignant par ma vie…

Dans quel domaine suis-je particulièrement invité.e à faire confiance, dans ma vie de tous les jours ? Je demande la force à Dieu et je m'y exerce chaque jour de cette semaine.

Chaque jour, je choisis une action concrète pour vivre ma foi et je fais avancer le pèlerin de l'espérance, Fe, vers la crèche… ou je dépose en évidence la carte de l'ancre…`,
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
    introduction: `Avec les enfants, je me mets en route, avec "Xin", qui veut dire cœur.

Vêtue de vert, elle est source de douceur et de tendresse. Avec son doudou dans sa poche, elle apporte une chaleur réconfortante à tous ceux qui croisent son chemin. Une fleur orne son bâton, symbolisant la beauté et l'espoir qu'elle désire semer sur son chemin de pèlerinage.

Jésus est l'ancre de notre vie, il nous aide à traverser les moments de tempête et nous apporte le réconfort et la tendresse dont nous avons besoin.

Cette semaine, je veux accueillir et semer l'espérance autour de moi…`,
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
    actionSemaine: `Comment puis-je vivre et semer l'espérance aujourd'hui ?

Comment puis-je semer la douceur et la tendresse autour de moi ? Semer la tendresse et la douceur c'est comme semer des fleurs. Je cherche comment je pourrais le faire aujourd'hui… semer un sourire, un service, faire plaisir à quelqu'un en lui offrant un dessin, s'approcher de quelqu'un qui est seul, réconforter quelqu'un de triste…

Chaque jour, je choisis une action concrète pour semer l'espérance, et je fais avancer le pèlerin de l'espérance, Xin, vers la crèche… ou je dépose en évidence la carte des fleurs…`,
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
    introduction: `Je me mets en route avec les enfants, avec "Sky" qui veut dire ciel.

Vêtu d'un manteau bleu, il emporte toujours sa guitare pour répandre des mélodies d'espoir et de joie. Sa guitare symbolise la prière, car chanter c'est prier deux fois ! Sky apporte une touche de musique et de spiritualité à la marche du pèlerinage.

Cette semaine, je veux accueillir la joie et la semer autour de moi…`,
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
    actionSemaine: `Comment puis-je louer Dieu, dire merci à Dieu aujourd'hui ?

Je m'exerce à dire merci en chantant un alléluia, un chant de Noël, un chant de Jésus, un chant de joie, ou je fais une prière qui commence par "Je te loue Seigneur pour…" ou "Merci la vie, pour…"

Chaque jour, je choisis une action concrète pour louer, dire merci à Dieu et je fais avancer le pèlerin de l'espérance Sky vers la crèche… ou je dépose en évidence la carte de l'ange musicien…

Dans la semaine, j'accroche un ange sur mon sapin. Je chante Les anges dans nos campagnes.`,
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
// JOURS DE L'AVENT - SEMAINE 2
// ============================================

export const JOURS_SEMAINE_2: JourAvent[] = [
  {
    jour: 8,
    date: "2025-12-08",
    titre: "La marche des mages est longue",
    texteBiblique: "La marche des mages est longue. La marche de Marie et Joseph aussi. Il leur a fallu beaucoup de foi – confiance pour accomplir tout ce chemin. Jésus aussi a beaucoup marché…",
    meditation: "",
    priere: `Seigneur Jésus, j'ai confiance en toi.
Mais, qu'il est parfois tortueux le chemin qui me conduit vers toi.
Augmente en moi la foi, alors la joie de me savoir ton enfant bien-aimé.e me remplira de bonheur.

Ô Marie, toi qui as connu ce chemin de foi, aide-moi à me laisser habiter par Dieu…`,
    special: 'dimanche',
    semaine: 2
  },
  {
    jour: 9,
    date: "2025-12-09",
    titre: "Ancrés dans le Christ",
    texteBiblique: "Les pèlerins, dans le logo de l'année de l'espérance, sont comme sur un bateau, ancrés dans le Christ. À leur suite…",
    meditation: "",
    priere: `Ô Seigneur, aide-moi à m'accrocher à toi,
à te faire confiance
même et surtout si je traverse la tempête.`,
    semaine: 2
  },
  {
    jour: 10,
    date: "2025-12-10",
    titre: "Différents et unis dans la foi",
    texteBiblique: "Comme les mages sont différents les uns des autres, les 4 personnages du logo ainsi que les 4 pèlerins de l'espérance représentent les personnes venant de tous les coins du monde. Différents et unis dans la foi !",
    meditation: "",
    priere: `Seigneur, je te prie pour toutes les personnes des différents continents.
Je te prie avec toutes les personnes de bonne volonté qui te prient de manières différentes.
Viens nous donner ta lumière, ta sagesse.
Apprends-nous à te chercher et chercher ensemble ta lumière dans nos vies…`,
    semaine: 2
  },
  {
    jour: 11,
    date: "2025-12-11",
    titre: "La confiance est contagieuse",
    texteBiblique: "La confiance est contagieuse. La foi d'une personne entraîne souvent d'autres personnes à s'accrocher.",
    meditation: "",
    priere: `Seigneur, je te confie toutes les personnes que je porte dans mon cœur, dans ma prière, dans ma vie…

Merci pour celles qui vont bien ! Je te confie celles qui ont des problèmes, soutiens-les…`,
    semaine: 2
  },
  {
    jour: 12,
    date: "2025-12-12",
    titre: "La croix de Jésus est une ancre",
    texteBiblique: "La croix de Jésus est une ancre. Dans le logo de l'espérance, l'ancre a la forme d'un bateau, symbole de protection et d'unité.",
    meditation: "",
    priere: `Ô Jésus, toi qui es venu habiter cette terre par amour,
par solidarité avec nous,
toi qui as donné ta vie, toi qui es le Vivant,
protège-nous.

Aide-nous chaque jour à être des pèlerins de l'espérance rempli de confiance en ton Esprit.
Merci d'être pour nous cette barque solide qui protège…`,
    semaine: 2
  },
  {
    jour: 13,
    date: "2025-12-13",
    titre: "Le Verbe s'est fait chair",
    texteBiblique: "Et le Verbe s'est fait chair, il a habité parmi nous, et nous avons vu sa gloire, la gloire qu'il tient de son Père comme Fils unique, plein de grâce et de vérité.",
    meditation: `Ô Jésus, tu es Parole de Dieu pour nous, ta vie est Parole, tes actes sont Parole, tes Paroles nous ouvrent à Dieu.`,
    priere: `Ô Jésus, si parfois, je ne sens plus ta présence…
si je suis chamboulé.e au point de ne plus croire si tu existes vraiment…
si je doute… si je marche dans la nuit,

Ô Seigneur, ouvre mon cœur à ta Parole…`,
    special: 'bougie',
    semaine: 2
  }
]

// ============================================
// JOURS DE L'AVENT - SEMAINE 3
// ============================================

export const JOURS_SEMAINE_3: JourAvent[] = [
  {
    jour: 14,
    date: "2025-12-14",
    titre: "Je marche plein d'espérance",
    texteBiblique: "",
    meditation: `Avec les enfants, je me mets en route, avec "Xin", qui veut dire cœur.

Vêtue de vert, elle est source de douceur et de tendresse. Avec son doudou dans sa poche, elle apporte une chaleur réconfortante à tous ceux qui croisent son chemin. Une fleur orne son bâton, symbolisant la beauté et l'espoir qu'elle désire semer sur son chemin de pèlerinage.

Jésus est l'ancre de notre vie, il nous aide à traverser les moments de tempête et nous apporte le réconfort et la tendresse dont nous avons besoin.

Cette semaine, je veux accueillir et semer l'espérance autour de moi…`,
    special: 'dimanche',
    semaine: 3
  },
  {
    jour: 15,
    date: "2025-12-15",
    titre: "La confiance et l'espérance sont le moteur",
    texteBiblique: "Les mages ne connaissent pas précisément où et comment est le but, ni le chemin. La confiance et l'espérance sont le moteur de leur marche.",
    meditation: "",
    priere: `Seigneur, aide-moi à garder toujours l'espérance, à croire en la vie malgré ce qui peut arriver, à continuer d'aimer même quand c'est difficile…`,
    semaine: 3
  },
  {
    jour: 16,
    date: "2025-12-16",
    titre: "Dieu est toujours surprenant",
    texteBiblique: "Les mages vont à Jérusalem : chef-lieu religieux et politique. Ils cherchent le messie, l'envoyé de Dieu dans un palais ou un temple. Mais Dieu est toujours surprenant, il naît dans une étable…",
    meditation: "",
    priere: `Ouvre mes yeux, Seigneur, aide-moi à te voir dans mon humble quotidien, dans mes proches, dans les personnes que je rencontre, celles pour qui je me ferai solidaire…

Seigneur, je te confie spécialement… (les personnes qui sont à ma charge dans ma famille, par mon travail, dans mon cœur, dans ma prière, celles pour qui je ferai un don…)

Je te prie aussi pour les personnes à qui j'offrirai un cadeau et celles qui m'en offriront…`,
    semaine: 3
  },
  {
    jour: 17,
    date: "2025-12-17",
    titre: "Dire OUI au plan de Dieu",
    texteBiblique: "Marie et Joseph aussi marchent et vivent remplis d'espérance. L'arrivée de Dieu dans leur vie a bousculé tous leurs plans. Leur première démarche a été de dire OUI au plan de Dieu. Malgré les changements, ils sont remplis de joie et d'espérance en attendant la naissance de leur enfant-Dieu.",
    meditation: "",
    priere: `Seigneur, aide-moi à te dire OUI, à risquer de me laisser bousculer par Ta Parole. Voici mon cœur, ma vie et mes mains pour qu'advienne aujourd'hui ton règne…`,
    semaine: 3
  },
  {
    jour: 18,
    date: "2025-12-18",
    titre: "L'espérance ne déçoit pas",
    texteBiblique: "« L'espérance ne déçoit pas. » Saint Paul apôtre aux Romains 5,5\n« Ne nous laissons pas voler notre espérance ! » Pape François",
    meditation: `Je cherche comment Dieu est une source d'espérance pour moi et je chante un alléluia…`,
    priere: `Merci Jésus, pour l'espérance nouvelle que tu nous donnes…
par ton amour, par ton choix de prendre chair,
par ta mort et ta résurrection,
tu nous ouvres un chemin nouveau. Alléluia !`,
    semaine: 3
  },
  {
    jour: 19,
    date: "2025-12-19",
    titre: "Devenons semeur d'espérance",
    texteBiblique: "L'Espérance chrétienne est la plus belle contagion au monde !",
    meditation: "",
    priere: `Seigneur, aide-moi à semer l'espérance aujourd'hui dans ma vie, par mon sourire, mon écoute, une parole bienfaisante, ma tendresse, un service rendu, un téléphone à une personne seule ou malade, par un don…

Ô Viens Seigneur Jésus !`,
    semaine: 3
  },
  {
    jour: 20,
    date: "2025-12-20",
    titre: "L'espérance fait de nous des pèlerins",
    texteBiblique: "Nous sommes invités à passer de l'angoisse existentielle à l'intranquillité de l'Évangile, celle qui nous ouvre à l'inconnu et à la grâce. — Marion Muller-Collard",
    meditation: "",
    priere: `Seigneur, fais de nous des pèlerins de l'espérance...
Aide-nous à semer ton amour, ta lumière, autour de nous…
Que la joie de nous savoir aimés et sauvés soit le moteur de notre vie…

Rends solide notre foi, affermis notre espérance et aide-nous à persévérer dans "l'intranquillité" de la charité…

Que l'espérance conduise notre marche aujourd'hui…`,
    special: 'bougie',
    semaine: 3
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
  // Semaine 1 : jours 1-7
  const jourSemaine1 = JOURS_SEMAINE_1.find(j => j.jour === jour)
  if (jourSemaine1) return jourSemaine1

  // Semaine 2 : jours 8-13
  const jourSemaine2 = JOURS_SEMAINE_2.find(j => j.jour === jour)
  if (jourSemaine2) return jourSemaine2

  // Semaine 3 : jours 14-20
  const jourSemaine3 = JOURS_SEMAINE_3.find(j => j.jour === jour)
  if (jourSemaine3) return jourSemaine3

  return undefined
}

export function getSemaineParJour(jour: number): SemaineAvent {
  if (jour <= 6) return SEMAINES_AVENT[0]
  if (jour <= 13) return SEMAINES_AVENT[1]
  if (jour <= 20) return SEMAINES_AVENT[2]
  return SEMAINES_AVENT[3]
}
