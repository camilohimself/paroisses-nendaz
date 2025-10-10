// Base de données des contenus pour chaque paroisse/chapelle
export interface ParoisseContent {
  id: string;
  name: string;
  sector: 'nendaz' | 'veysonnaz';
  type: 'eglise' | 'chapelle' | 'ems';
  history: string;
  horaires: {
    dominicale?: string;
    semaine?: string;
    adoration?: string;
    vepres?: string;
    special?: string;
  };
  patron?: string;
  dateConstruction?: string;
  particularites?: string[];
}

export const PAROISSES_CONTENT: ParoisseContent[] = [
  // SECTEUR NENDAZ
  {
    id: 'basse-nendaz',
    name: 'Église de Basse-Nendaz',
    sector: 'nendaz',
    type: 'eglise',
    patron: 'Saint-Léger',
    dateConstruction: 'IXème-Xème siècle (chapelle primitive)',
    history: `La chapelle primitive qui constitue la partie la plus ancienne de l'édifice tient lieu de nos jours de crypte. Elle se trouve au sous-sol de l'église actuelle. Sa construction remonte à la fin du IXème début du Xème siècle. Elle est restée ensevelie sous les décombres des édifices successifs durant des siècles mais, heureusement, on a découvert ses vestiges lors de la réfection de 1964/67.`,
    horaires: {
      dominicale: 'tous les dimanches à 10h00, 09h30 en été',
      semaine: 'tous les vendredis à 19h00',
      adoration: 'tous les vendredis de 18h00 à 18h45',
      vepres: 'le 1er vendredi du mois avant la messe',
      special: 'Confession : tous les vendredis de 18h à 18h45, tous les dimanches de 9h à 9h45'
    },
    particularites: ['Crypte du IXème siècle', 'Rénovation 1964-1967', 'Patron Saint-Léger']
  },
  {
    id: 'haute-nendaz',
    name: 'Église de Haute-Nendaz',
    sector: 'nendaz',
    type: 'eglise',
    dateConstruction: '1943-1953',
    history: `En 1943, la population de Haute-Nendaz lassé de se rendre tous les dimanches et jours de fête à Basse-Nendaz pour la messe, décide de construire leur propre église. Il ne leur faudra pas moins de dix années pour mener à bien leur projet. Tous les habitants du village participent à la construction pendant leurs temps libres et parfois même le dimanche. Les premières messes sont dites dans un bâtiment sans toit ni fenêtres, hiver comme été. De nombreux problèmes retardèrent l'avancement des travaux comme la mobilisation ou les travaux de construction des barrages.`,
    horaires: {
      dominicale: 'tous les samedis à 17h30',
      semaine: 'le 4e mardi du mois à 19h00',
      adoration: 'les lundis et jeudis de 6h à 7h - Responsable : Eugène Fournier, les 4èmes mardis du mois de 18h15 à 18h45'
    },
    particularites: ['Construction communautaire', 'Messes dans bâtiment sans toit', 'Défi des barrages']
  },
  {
    id: 'fey',
    name: 'Église de Fey',
    sector: 'nendaz',
    type: 'eglise',
    dateConstruction: '1953',
    history: `Avant 1953, les habitants du village se recueillaient dans une petite chapelle pouvant accueillir une trentaine de personnes mais, le dimanche, ils se rendaient à Basse-Nendaz pour la messe dominicale. On peut encore voir, dans le cimetière, le clocher de l'ancienne chapelle qui se rappelle au souvenir des villageois.`,
    horaires: {
      dominicale: 'les 1er et 3è samedis du mois, à 19h',
      semaine: 'le 3ème mardi du mois, à 19h',
      adoration: 'les 4èmes mardis du mois de 18h30 à 19h',
      special: 'Messes annuelles : Fête patronale (Christ-Roi) samedi 19h, Toussaint 15h, Noël 18h, Pâques 10h30, Messe à la Moudonne le 2ème samedi de juin'
    },
    particularites: ['Ancienne chapelle 30 places', 'Clocher conservé au cimetière']
  },
  {
    id: 'aproz',
    name: 'Église d\'Aproz',
    sector: 'nendaz',
    type: 'eglise',
    history: `Église du village d'Aproz, accueillant la communauté pour les célébrations liturgiques.`,
    horaires: {
      dominicale: 'les 1er et 3è samedis du mois, à 19h',
      adoration: 'les 4èmes mardis du mois de 18h30 à 19h'
    },
    particularites: ['Communauté paroissiale active']
  },
  {
    id: 'baar',
    name: 'Chapelle de Baar',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Saint-Jean-Baptiste',
    dateConstruction: '1977',
    history: `Bénédiction en 1977, dédiée à St-Jean-Baptiste.`,
    horaires: {},
    particularites: ['Dédiée à Saint-Jean-Baptiste']
  },
  {
    id: 'brignon',
    name: 'Chapelle de Brignon',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Notre-Dame de l\'Espérance',
    dateConstruction: '1987-1988',
    history: `La première pierre fut posée en 1987 sous la forme d'une cassette-archive scellée dans le béton qui contient des informations sur la vie du village. La bénédiction de la chapelle eut lieu le 23 octobre 1988 et elle fut dédiée à Notre-Dame de l'Espérance.`,
    horaires: {
      semaine: 'le 4e jeudi du mois à 19h00',
      adoration: 'tous les lundis de 19h00 à 19h30 (adoration animée)'
    },
    particularites: ['Cassette-archive dans fondations', 'Bénédiction 23 octobre 1988']
  },
  {
    id: 'planchouet',
    name: 'Chapelle de Planchouet',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Sacré-Cœur',
    dateConstruction: '1930-1931',
    history: `La chapelle de Planchouet, dédiée au Sacré-Cœur est l'œuvre des villageois de la rive droite de la Printse. En mai 1930, le travail commença par l'abattage des arbres nécessaires à la construction. Les fondations posèrent des problèmes puisqu'il fallut miner la roche, mais de dimanche en dimanche, le bâtiment prit forme et le 9 août 1931, le doyen Bourban bénit la chapelle. Après quelques travaux de finition, l'abbé Joseph Fournier qui fut l'instigateur du projet, put boucler les comptes; la construction a coûté CHF 7045.-. A l'intérieur on trouve les statues de la Vierge Marie, de St-Antoine, de St-Maurice et de St-Nicolas.`,
    horaires: {
      dominicale: 'en été à 11h (du 1er dimanche de juillet jusqu\'au dernier dimanche d\'août)'
    },
    particularites: ['Coût CHF 7045.-', 'Minage de la roche', 'Statues multiples', 'Abbé Joseph Fournier']
  },
  {
    id: 'rairettes',
    name: 'Chapelle des Rairettes',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Bienheureuse Vierge Marie',
    dateConstruction: '1930',
    history: `C'est une des trois chapelles des mayens avec celle du Bleusy et celle de Planchouet. A partir des années 1920, certains habitants de Sion cherchant la tranquillité et la fraîcheur, construisirent les premiers chalets dans la région des Rairettes. Avec quelques nendards propriétaires de mayens ils décidèrent de construire une chapelle afin d'éviter les déplacements jusqu'à Basse-Nendaz pour la messe du dimanche. La chapelle dédiée à la Bienheureuse Vierge Marie fut consacrée le 15 août 1930. Le chemin de croix peint sur des ardoises ajoute une touche originale.`,
    horaires: {
      dominicale: 'en été à 11h (du 1er dimanche de juillet jusqu\'au dernier dimanche d\'août)'
    },
    particularites: ['Chapelle des mayens', 'Habitants de Sion', 'Chemin de croix sur ardoises', 'Consacrée 15 août 1930']
  },
  {
    id: 'beuson',
    name: 'Chapelle de Beuson',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Saint-Bernard de Menthon et Sainte-Agathe',
    dateConstruction: '1783',
    history: `En 1783, les villageois rebâtissent leur chapelle dédiée à St-Bernard de Menthon et à Ste-Agathe. Auparavant, il existait déjà une chapelle dans un autre lieu du village et on décida de construire la nouvelle au bord de la route de la vallée. Autrefois on se rendait à Beuson pour faire bénir le fil que l'on portait dans les habits pour éloigner le mauvais sort ainsi que du pain et du sel que l'on donnait au bétail malade.`,
    horaires: {
      semaine: 'le 2e mercredi du mois à 19h00'
    },
    particularites: ['Reconstruction 1783', 'Bénédiction fil et pain', 'Protection bétail']
  },
  {
    id: 'condemines',
    name: 'Chapelle des Condémines',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Notre Dame du Perpétuel Secours',
    dateConstruction: '1967',
    history: `La chapelle dédiée à Notre Dame du Perpétuel Secours a été bénite en 1967. Elle est l'œuvre d'Emile Crettenand et de sa famille. Ils la firent bâtir en souvenir d'un membre de la famille décédé accidentellement.`,
    horaires: {
      semaine: 'le 2e jeudi du mois à 19h00 (sauf l\'hiver)'
    },
    particularites: ['Famille Crettenand', 'Mémorial familial']
  },
  {
    id: 'saclentse',
    name: 'Chapelle de Saclentse',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Saint-Joseph',
    dateConstruction: '1922',
    history: `Le curé Joseph Fournier est l'instigateur du projet de construction. La bénédiction eu lieu en 1922 et la chapelle est dédiée à Saint-Joseph. Une cloche qui avait été installée au clocher de Basse-Nendaz avant 1794 ornera le clocher de Saclentse.`,
    horaires: {
      semaine: 'le 4e mercredi du mois à 19h00',
      special: 'Chapelet : les dimanches à 19h30'
    },
    particularites: ['Curé Joseph Fournier', 'Cloche historique de Basse-Nendaz (avant 1794)']
  },
  {
    id: 'bleusy',
    name: 'Chapelle du Bleusy',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Sainte-Thérèse de l\'Enfant Jésus',
    history: `Sur le parcours du bisse du Milieu, en arrivant dans les mayens du Bleusy, la chapelle nous invite à faire une pause. Ste-Thérèse de l'Enfant Jésus est la patronne des lieux.`,
    horaires: {
      special: 'le dernier dimanche d\'août à 11h00 (à la place de Planchouet)'
    },
    particularites: ['Bisse du Milieu', 'Mayens du Bleusy', 'Pause randonnée']
  },
  {
    id: 'saint-michel',
    name: 'Chapelle Saint-Michel',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Saint-Michel',
    dateConstruction: '1499 (style baroque XVIIIe)',
    history: `Discrète, elle se niche au cœur du vieux village de Haute-Nendaz, au bord de ce qui était autrefois la rue principale. Maintenant rénovée et entretenue, elle connut des hauts et des bas au cours de son existence. Elle fut construite en 1499 comme l'atteste un panneau en bois gravé que l'on peut voir sur la gauche du cœur et qui a été découvert lors d'une rénovation. Plusieurs fois reconstruite et rénovée, elle faillit disparaître dans les années 60. Certains habitants voulaient simplement la démolir. Un voisin proposa de l'acheter pour en faire une porcherie. Grâce à l'intervention du service des Monuments Historiques du canton du Valais et au courage de certaines personnes, la chapelle fut sauvée. L'édifice dans son état actuel, de style baroque, daterait du 18ème siècle. La décoration intérieure est l'œuvre du peintre Charles Frédéric Brun, plus connu chez nous sous le nom du Déserteur.`,
    horaires: {},
    particularites: ['Panneau 1499', 'Sauvée de la démolition', 'Peintures du Déserteur', 'Style baroque', 'Monuments Historiques']
  },
  {
    id: 'saint-sebastien',
    name: 'Chapelle Saint-Sébastien',
    sector: 'nendaz',
    type: 'chapelle',
    patron: 'Saint-Sébastien',
    dateConstruction: 'avant 1555',
    history: `Située à la sortie du village de Basse-Nendaz en direction de Fey sur un promontoire rocheux dominant la vallée du Rhône. Il n'existe pas de documents historiques permettant de dater précisément la construction de l'édifice. Cependant, un acte de mars 1555 fait état d'une donation de trois florins et de deux nappes d'autel pour la restauration de certains édifices religieux de la région, dont la chapelle Saint-Sébastien. Un autre fait historique dramatique avait pour décors les alentours du lieu saint : en effet sous les rochers soutenant la chapelle, se trouvait le gibet de la majorie de Nendaz où les criminels étaient conduits pour être pendus.`,
    horaires: {
      special: 'Messe : tous les 20 janvier'
    },
    particularites: ['Promontoire rocheux', 'Vue vallée du Rhône', 'Ancien gibet', 'Donation 1555']
  },

  // SECTEUR VEYSONNAZ
  {
    id: 'veysonnaz',
    name: 'Église de Veysonnaz',
    sector: 'veysonnaz',
    type: 'eglise',
    dateConstruction: '1908 (chapelle 1425, reconstruite 1721)',
    history: `Terre de l'Evêché de Sion, Veysonnaz faisait d'abord partie de Nendaz. Une chapelle est mentionnée en 1425, qui fut reconstruite en 1721. En 1908 l'église actuelle est construite et en 1912 Veysonnaz, quittant l'église paroissiale de Basse-Nendaz, accède au titre de paroisse avec Clèbes et Verrey, qui sont restées liées à la commune de Nendaz. Rénovation entre 1962 et 1968. Église néogothique.`,
    horaires: {
      dominicale: 'les 1er, 3e samedis du mois à 19h00',
      semaine: 'les 1er et 5e mardis du mois à 19h00',
      adoration: 'tous les mardis sauf le 2è du mois de 18h à 18h45 et tous les vendredis de 14h à 15h'
    },
    particularites: ['Évêché de Sion', 'Paroisse autonome 1912', 'Style néogothique', 'Rénovation 1962-1968']
  },
  {
    id: 'clebes',
    name: 'Chapelle de Clèbes',
    sector: 'veysonnaz',
    type: 'chapelle',
    patron: 'Notre-Dame de la Visitation',
    dateConstruction: '1707 (reconstruite après 1904)',
    history: `La chapelle date de 1707 et est dédiée à Notre-Dame de la Visitation. Elle brûlera en 1904 et sera reconstruite.`,
    horaires: {
      semaine: 'les 2è mardis du mois à 19h00'
    },
    particularites: ['Incendie 1904', 'Reconstruction']
  },
  {
    id: 'saint-barthelemy',
    name: 'Chapelle Saint-Barthélémy',
    sector: 'veysonnaz',
    type: 'chapelle',
    patron: 'Saint-Barthélémy',
    dateConstruction: 'avant 1447 (actuelle 1951)',
    history: `Au bord du lac de Cleuson, à près de 2200m d'altitude, la chapelle est la plus haute de la commune. Elle domine le val de Nendaz et le panorama s'étend jusqu'à la chaîne des alpes bernoises. Il s'agit de la plus ancienne chapelle de Nendaz. On ignore la date exacte de sa construction, mais un document de 1447, signé par l'évêque de Sion mentionne que 40 jours d'indulgence seraient accordés à toute personne qui ferait une aumône en faveur de la chapelle. Ce qui laisse supposer que l'édifice est antérieur à cette date. Avant la construction du barrage, elle était située dans le vallon de Cleuson, sur la rive droite, légèrement en amont. Construite en bois, elle a été rénovée à plusieurs reprises, la dernière fois en 1888. En 1951, les ouvriers du barrage ont construit une nouvelle chapelle en pierre, à l'emplacement actuel.`,
    horaires: {
      special: 'Messe : tous les 24 août'
    },
    particularites: ['2200m d\'altitude', 'Plus haute de la commune', 'Plus ancienne (avant 1447)', 'Reconstruite par ouvriers barrage 1951', 'Lac de Cleuson']
  },

  // EMS
  {
    id: 'foyer-ma-vallee',
    name: 'Foyer Ma Vallée',
    sector: 'nendaz',
    type: 'ems',
    history: `Établissement médico-social accueillant les résidents pour les célébrations liturgiques.`,
    horaires: {
      semaine: 'les 1er, 3e et 5e mercredis du mois à 10h15'
    },
    particularites: ['Établissement médico-social']
  },
  {
    id: 'foyer-les-vergers',
    name: 'Foyer Les Vergers',
    sector: 'nendaz',
    type: 'ems',
    history: `Établissement médico-social accueillant les résidents pour les célébrations liturgiques.`,
    horaires: {
      semaine: 'les 1er, 3è et 5è jeudis du mois, 10h15'
    },
    particularites: ['Établissement médico-social']
  }
];

// Fonction pour récupérer le contenu d'une paroisse par ID
export function getParoisseContent(id: string): ParoisseContent | undefined {
  return PAROISSES_CONTENT.find(paroisse => paroisse.id === id);
}

// Fonction pour récupérer les paroisses par secteur
export function getParoissesBySector(sector: 'nendaz' | 'veysonnaz'): ParoisseContent[] {
  return PAROISSES_CONTENT.filter(paroisse => paroisse.sector === sector);
}

// Fonction pour récupérer les extraits pour la page index
export function getParoisseExtract(paroisse: ParoisseContent): string {
  const words = paroisse.history.split(' ');
  if (words.length <= 30) return paroisse.history;
  return words.slice(0, 30).join(' ') + '...';
}