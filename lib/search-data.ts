// Manifest indexable pour la recherche globale du site
// Maintenu manuellement : ajouter une entrée pour chaque nouvelle page
// Hors saints du jour (catalogue distinct) et hors événements Google Calendar

export type SearchCategory =
  | 'Accueil'
  | 'Paroisses'
  | 'Sacrements'
  | 'Pastorale'
  | 'Carême'
  | 'Avent'
  | 'Parcours pèlerins'
  | 'Démarches'
  | 'Pratique'

export interface SearchDocument {
  id: string
  url: string
  title: string
  category: SearchCategory
  keywords: string[]
  body: string
}

export const searchDocuments: SearchDocument[] = [
  // ===== Accueil =====
  {
    id: 'home',
    url: '/',
    title: 'Accueil',
    category: 'Accueil',
    keywords: ['accueil', 'paroisses', 'nendaz', 'veysonnaz', 'saint du jour', 'horaires'],
    body: 'Accueil du site des Paroisses de Nendaz et Veysonnaz. Saint du jour, horaires des messes, actualités du secteur, accès rapide aux paroisses du secteur.',
  },
  {
    id: 'actualites',
    url: '/actualites',
    title: 'Actualités',
    category: 'Accueil',
    keywords: [
      'actualités',
      'news',
      'annonces',
      'événements',
      'feuille annonces',
      'billet de prière',
      'billet priere',
      'intentions de prière',
      'intentions mensuelles',
    ],
    body: 'Actualités, annonces et événements des paroisses de Nendaz et Veysonnaz. Feuille d\'annonces hebdomadaire et billet de prière mensuel.',
  },

  // ===== Paroisses (vue d'ensemble + 7 villages) =====
  {
    id: 'paroisses-index',
    url: '/paroisses',
    title: 'Les paroisses du secteur',
    category: 'Paroisses',
    keywords: ['paroisses', 'villages', 'églises', 'secteur', 'nendaz', 'veysonnaz'],
    body: 'Découvrez les sept paroisses du secteur Nendaz-Veysonnaz : Aproz, Basse-Nendaz, Brignon, Fey, Haute-Nendaz, Saclentse et Veysonnaz.',
  },
  {
    id: 'paroisse-aproz',
    url: '/paroisses/aproz',
    title: 'Paroisse d\'Aproz',
    category: 'Paroisses',
    keywords: ['aproz', 'plaine du rhône', 'église'],
    body: 'Paroisse d\'Aproz, dans la plaine du Rhône. Horaires des messes, contacts et histoire de la paroisse.',
  },
  {
    id: 'paroisse-basse-nendaz',
    url: '/paroisses/basse-nendaz',
    title: 'Paroisse de Basse-Nendaz',
    category: 'Paroisses',
    keywords: ['basse-nendaz', 'basse nendaz', 'centre paroissial', 'cure'],
    body: 'Paroisse de Basse-Nendaz, centre paroissial du secteur. Cure, salle paroissiale, horaires des messes.',
  },
  {
    id: 'paroisse-brignon',
    url: '/paroisses/brignon',
    title: 'Paroisse de Brignon',
    category: 'Paroisses',
    keywords: ['brignon', 'chapelle'],
    body: 'Paroisse de Brignon. Horaires des célébrations et informations pratiques.',
  },
  {
    id: 'paroisse-fey',
    url: '/paroisses/fey',
    title: 'Paroisse de Fey',
    category: 'Paroisses',
    keywords: ['fey', 'église'],
    body: 'Paroisse de Fey. Horaires des messes et vie paroissiale.',
  },
  {
    id: 'paroisse-haute-nendaz',
    url: '/paroisses/haute-nendaz',
    title: 'Paroisse de Haute-Nendaz',
    category: 'Paroisses',
    keywords: ['haute-nendaz', 'haute nendaz', 'station', 'tracouet'],
    body: 'Paroisse de Haute-Nendaz, station touristique. Messes en saison, célébrations dominicales.',
  },
  {
    id: 'paroisse-saclentse',
    url: '/paroisses/saclentse',
    title: 'Paroisse de Saclentse',
    category: 'Paroisses',
    keywords: ['saclentse', 'chapelle'],
    body: 'Paroisse de Saclentse. Informations pratiques et célébrations.',
  },
  {
    id: 'paroisse-veysonnaz',
    url: '/paroisses/veysonnaz',
    title: 'Paroisse de Veysonnaz',
    category: 'Paroisses',
    keywords: ['veysonnaz', 'station', 'thyon'],
    body: 'Paroisse de Veysonnaz. Horaires des messes et vie paroissiale.',
  },

  // ===== Sacrements =====
  {
    id: 'sacrement-bapteme',
    url: '/sacrements/bapteme',
    title: 'Baptême',
    category: 'Sacrements',
    keywords: ['baptême', 'bapteme', 'baptiser', 'baptiste', 'enfant', 'nourrisson', 'parrain', 'marraine', 'eau', 'naissance'],
    body: 'Préparer un baptême dans les paroisses de Nendaz et Veysonnaz. Demandes, rencontre de préparation, choix du parrain et de la marraine, déroulement de la célébration.',
  },
  {
    id: 'sacrement-communion',
    url: '/sacrements/communion',
    title: 'Première communion',
    category: 'Sacrements',
    keywords: ['communion', 'première communion', '1ère communion', 'eucharistie', 'pain', 'enfant', 'catéchisme', '4H'],
    body: 'Première communion des enfants. Préparation au catéchisme, rencontres et célébration. Les enfants reçoivent l\'eucharistie pour la première fois.',
  },
  {
    id: 'sacrement-confirmation',
    url: '/sacrements/confirmation',
    title: 'Confirmation',
    category: 'Sacrements',
    keywords: ['confirmation', 'esprit saint', 'adolescent', 'jeune', 'évêque', 'sacrement initiation'],
    body: 'Sacrement de confirmation pour les jeunes. Préparation, retraite, célébration avec l\'évêque.',
  },
  {
    id: 'sacrement-mariage',
    url: '/sacrements/mariage',
    title: 'Mariage',
    category: 'Sacrements',
    keywords: ['mariage', 'marier', 'noces', 'union', 'épouser', 'fiançailles', 'célébration mariage'],
    body: 'Préparer un mariage à l\'église. Démarches, rencontres avec le prêtre, dossier de mariage, célébration.',
  },
  {
    id: 'sacrement-onction',
    url: '/sacrements/onction-malades',
    title: 'Onction des malades',
    category: 'Sacrements',
    keywords: ['onction', 'malades', 'maladie', 'extrême onction', 'fin de vie', 'huile', 'sacrement malades'],
    body: 'Sacrement de l\'onction des malades. Demande, déroulement, accompagnement spirituel des personnes malades.',
  },
  {
    id: 'sacrement-pardon',
    url: '/sacrements/pardon',
    title: 'Sacrement du pardon',
    category: 'Sacrements',
    keywords: ['pardon', 'confession', 'réconciliation', 'pénitence', 'absolution'],
    body: 'Sacrement du pardon (confession). Horaires des confessions, déroulement, démarche de réconciliation.',
  },

  // ===== Pastorale =====
  {
    id: 'pastorale-index',
    url: '/pastorale',
    title: 'Pastorale',
    category: 'Pastorale',
    keywords: ['pastorale', 'sacrements', 'vie spirituelle', 'pastorale jeunes'],
    body: 'Vue d\'ensemble de la pastorale du secteur Nendaz-Veysonnaz. Activités catéchétiques, prière, liturgie, diaconie.',
  },
  {
    id: 'pastorale-cate',
    url: '/pastorale/activites-catechetiques',
    title: 'Activités catéchétiques',
    category: 'Pastorale',
    keywords: ['catéchèse', 'catéchisme', 'catéchétique', 'enfants', 'éveil à la foi', '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', 'caté'],
    body: 'Activités catéchétiques pour les enfants de 1H à 8H. Éveil à la foi, préparation aux sacrements, rencontres et célébrations.',
  },
  {
    id: 'pastorale-priere',
    url: '/pastorale/priere',
    title: 'Prière',
    category: 'Pastorale',
    keywords: ['prière', 'prier', 'oraison', 'adoration', 'chapelet', 'rosaire', 'spiritualité'],
    body: 'Vie de prière dans les paroisses : adoration eucharistique, chapelet, groupes de prière, prière personnelle.',
  },
  {
    id: 'pastorale-liturgie',
    url: '/pastorale/liturgie',
    title: 'Liturgie',
    category: 'Pastorale',
    keywords: ['liturgie', 'messe', 'célébration', 'chorale', 'servants d\'autel', 'lecteurs'],
    body: 'Service liturgique : messes, chorales, servants d\'autel, lecteurs. Engagement au service de la liturgie.',
  },
  {
    id: 'pastorale-coble',
    url: '/pastorale/liturgie/coble-bon-djyu',
    title: 'Còble Bon Djyu',
    category: 'Pastorale',
    keywords: ['còble bon djyu', 'coble', 'patois', 'patoisant', 'tradition', 'messe en patois'],
    body: 'Còble Bon Djyu : groupe et célébrations en patois nendard. Tradition vivante du secteur.',
  },
  {
    id: 'pastorale-diaconie',
    url: '/pastorale/diaconie',
    title: 'Diaconie',
    category: 'Pastorale',
    keywords: ['diaconie', 'service', 'fraternel', 'solidarité', 'visites malades', 'caritas', 'partage'],
    body: 'Diaconie : service fraternel et solidarité. Visites aux malades, soutien aux familles, engagement caritatif.',
  },

  // ===== Démarches (deuil + dons + contact) =====
  {
    id: 'deuil',
    url: '/accompagnement-deuil',
    title: 'Accompagnement du deuil',
    category: 'Démarches',
    keywords: ['deuil', 'funérailles', 'enterrement', 'décès', 'mort', 'défunt', 'pompes funèbres', 'urne', 'crémation', 'cimetière', 'messe enterrement', 'septième', 'souvenir', 'veillée'],
    body: 'Services religieux chrétiens lors d\'un deuil : veillées de prière, messe de funérailles publique, funérailles chrétiennes dans l\'intimité sans messe, messe du souvenir, dépôt de l\'urne. Accompagnement par les paroisses et les agents pastoraux.',
  },
  {
    id: 'contact',
    url: '/contact',
    title: 'Nous contacter',
    category: 'Démarches',
    keywords: ['contact', 'téléphone', 'adresse', 'email', 'cure', 'horaires bureau', 'permanence', 'secrétariat'],
    body: 'Coordonnées des paroisses : téléphone, email, adresse de la cure, heures de présence au secrétariat. Formulaire de contact en ligne.',
  },
  {
    id: 'contact-formulaire',
    url: '/contact#formulaire',
    title: 'Demande d\'intentions de messe',
    category: 'Démarches',
    keywords: ['intention', 'messe', 'demande messe', 'défunt', 'prière', 'offrande messe'],
    body: 'Demander une intention de messe (pour un défunt, un anniversaire, une action de grâce). Formulaire en ligne.',
  },
  {
    id: 'dons',
    url: '/dons',
    title: 'Faire un don',
    category: 'Démarches',
    keywords: ['don', 'dons', 'donner', 'soutenir', 'iban', 'twint', 'offrande', 'générosité', 'paroisse'],
    body: 'Soutenir financièrement les paroisses : don par TWINT ou par virement bancaire (IBAN Nendaz et Veysonnaz). Reçu pour déduction fiscale possible.',
  },

  // ===== Pratique =====
  {
    id: 'enoria',
    url: '/enoria',
    title: 'Enoria — Plateforme paroissiale',
    category: 'Pratique',
    keywords: ['enoria', 'plateforme', 'inscription', 'compte', 'membre'],
    body: 'Enoria : plateforme paroissiale pour s\'inscrire aux activités, suivre les annonces et rester en lien avec sa paroisse.',
  },
  {
    id: 'newsletter',
    url: '/#newsletter',
    title: 'Newsletter',
    category: 'Pratique',
    keywords: ['newsletter', 'inscription newsletter', 'lettre information', 'actualités email'],
    body: 'Inscription à la newsletter saisonnière des paroisses : actualités, annonces et temps forts liturgiques.',
  },

  // ===== Carême 2026 =====
  {
    id: 'careme2026',
    url: '/careme2026',
    title: 'Carême 2026 — Prophète ? Moi ?',
    category: 'Carême',
    keywords: ['carême', 'careme', 'prophète', 'prophete', '2026', 'cendres', 'pâques', 'paques', 'jeûne', 'jeune', 'partage', 'conversion', 'méditation', 'compagnon'],
    body: 'Démarche de Carême 2026 sur le thème "Prophète ? Moi ?". Compagnon spirituel quotidien : verset, méditation, prière. Sept saints prophètes et activités pour les enfants.',
  },

  // ===== Avent =====
  {
    id: 'avent',
    url: '/avent',
    title: 'Avent — Parcours des quatre amis',
    category: 'Avent',
    keywords: ['avent', 'noël', 'noel', 'attente', 'préparation noël', 'parcours avent', 'luce', 'fe', 'xin', 'sky'],
    body: 'Parcours de l\'Avent : quatre missions à découvrir avec Luce, Fé, Xin et Sky. Préparation à Noël pour les enfants et les familles.',
  },
  {
    id: 'avent-luce',
    url: '/avent/mission-1',
    title: 'Avent — Mission 1 : Luce',
    category: 'Avent',
    keywords: ['avent', 'luce', 'mission 1', 'lumière'],
    body: 'Première mission du parcours de l\'Avent avec Luce.',
  },
  {
    id: 'avent-fe',
    url: '/avent/mission-2',
    title: 'Avent — Mission 2 : Fé',
    category: 'Avent',
    keywords: ['avent', 'fé', 'fe', 'mission 2', 'foi'],
    body: 'Deuxième mission du parcours de l\'Avent avec Fé.',
  },
  {
    id: 'avent-xin',
    url: '/avent/mission-3',
    title: 'Avent — Mission 3 : Xin',
    category: 'Avent',
    keywords: ['avent', 'xin', 'mission 3'],
    body: 'Troisième mission du parcours de l\'Avent avec Xin.',
  },
  {
    id: 'avent-sky',
    url: '/avent/mission-4',
    title: 'Avent — Mission 4 : Sky',
    category: 'Avent',
    keywords: ['avent', 'sky', 'mission 4'],
    body: 'Quatrième mission du parcours de l\'Avent avec Sky.',
  },

  // ===== Parcours pèlerins (perenne) =====
  {
    id: 'pelerins-index',
    url: '/parcours-pelerins',
    title: 'Parcours pèlerins',
    category: 'Parcours pèlerins',
    keywords: ['pèlerins', 'pelerins', 'parcours', 'pèlerinage', 'marche', 'spiritualité'],
    body: 'Quatre parcours pèlerins pérennes à travers le secteur de Nendaz-Veysonnaz : Luce, Fé, Xin et Sky.',
  },
  {
    id: 'pelerins-luce',
    url: '/parcours-pelerins/luce',
    title: 'Parcours Luce',
    category: 'Parcours pèlerins',
    keywords: ['luce', 'lumière', 'parcours pèlerin'],
    body: 'Parcours pèlerin Luce — chemin de lumière à travers le secteur.',
  },
  {
    id: 'pelerins-fe',
    url: '/parcours-pelerins/fe',
    title: 'Parcours Fé',
    category: 'Parcours pèlerins',
    keywords: ['fé', 'fe', 'foi', 'parcours pèlerin'],
    body: 'Parcours pèlerin Fé — chemin de foi à travers le secteur.',
  },
  {
    id: 'pelerins-xin',
    url: '/parcours-pelerins/xin',
    title: 'Parcours Xin',
    category: 'Parcours pèlerins',
    keywords: ['xin', 'parcours pèlerin'],
    body: 'Parcours pèlerin Xin à travers le secteur.',
  },
  {
    id: 'pelerins-sky',
    url: '/parcours-pelerins/sky',
    title: 'Parcours Sky',
    category: 'Parcours pèlerins',
    keywords: ['sky', 'ciel', 'parcours pèlerin'],
    body: 'Parcours pèlerin Sky à travers le secteur.',
  },

  // ===== Pratique — Crans-Montana (lien externe au secteur mais hébergé ici) =====
  {
    id: 'prieres-crans-montana',
    url: '/prieres-crans-montana',
    title: 'Pensées et prières — Crans-Montana',
    category: 'Pratique',
    keywords: ['crans-montana', 'crans montana', 'pensées', 'pensees', 'prières', 'prieres', 'méditation'],
    body: 'Pensées et prières en provenance de Crans-Montana. Méditations quotidiennes.',
  },
]

// Suggestions affichées dans l'état vide de la recherche
export const searchSuggestions: { label: string; query: string }[] = [
  { label: 'Baptême', query: 'baptême' },
  { label: 'Horaires des messes', query: 'horaires messes' },
  { label: 'Accompagnement du deuil', query: 'deuil' },
  { label: 'Première communion', query: 'communion' },
  { label: 'Faire un don', query: 'don' },
]
