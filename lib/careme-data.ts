// Données du Carême 2026 - "Prophète ? Moi ?"
// 47 jours : 18 février (Mercredi des Cendres) → 5 avril (Pâques)
// Source : Carnet "Démarche de Carême 2026" — Secteur Nendaz–Veysonnaz

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
  contenu: string // Résumé court (grille)
  verset?: string // Référence biblique ou source de la citation
  citationBiblique?: string // Texte du verset ou de la citation
  meditation?: string // Paragraphe de réflexion / méditation
  priere?: string // Prière du jour
  saintCoachId: string
  estDimanche: boolean
  estPaques?: boolean
  estJourSaint?: boolean
}

export interface SemaineCareme {
  numero: number
  nom: string
  theme?: string
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
    description: 'Marie Auxiliatrice ("Secours des Chrétiens") est un titre donné à la Vierge Marie. Elle est invoquée comme protectrice et aide dans les moments difficiles. C\'est la patronne de Veysonnaz. Le 25 mars, nous célébrons l\'Annonciation, le jour où Marie a dit "oui" à Dieu.',
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
  { numero: 0, nom: 'Semaine des Cendres', theme: 'Prophète ? Moi ?', saintCoachId: 'carlo-acutis', dateDebut: '2026-02-18', dateFin: '2026-02-21' },
  { numero: 1, nom: 'Semaine 1', theme: 'Dieu parle ? Pourquoi ?', saintCoachId: 'michel-archange', dateDebut: '2026-02-22', dateFin: '2026-02-28' },
  { numero: 2, nom: 'Semaine 2', theme: 'La Parole de Dieu est Bonne Nouvelle !', saintCoachId: 'leger', dateDebut: '2026-03-01', dateFin: '2026-03-07' },
  { numero: 3, nom: 'Semaine 3', theme: 'Un.e prophète est solidaire de son temps…', saintCoachId: 'nicolas-flue', dateDebut: '2026-03-08', dateFin: '2026-03-14' },
  { numero: 4, nom: 'Semaine 4', theme: 'Prophète, oui ! mais comment ?', saintCoachId: 'joseph', dateDebut: '2026-03-15', dateFin: '2026-03-21' },
  { numero: 5, nom: 'Semaine 5', theme: 'Continuer l\'œuvre de Jésus !', saintCoachId: 'marie-auxiliatrice', dateDebut: '2026-03-22', dateFin: '2026-03-28' },
  { numero: 6, nom: 'Semaine Sainte', theme: 'Prophète du don d\'amour de Jésus', saintCoachId: 'christ-roi', dateDebut: '2026-03-29', dateFin: '2026-04-05' }
]

// Les 47 jours du Carême — contenu enrichi du carnet
export const JOURS_CAREME: JourCareme[] = [

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 0 — Carlo Acutis (Cendres) — "Prophète ? Moi ?"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 1, date: '2026-02-18', jourSemaine: 'Mercredi',
    contenu: 'Mercredi des Cendres : aujourd\'hui, je me retire dans le silence pour écouter.',
    verset: '1 Samuel 3',
    citationBiblique: '« Parle, Seigneur, ton serviteur écoute… »',
    meditation: 'Prophète ? Moi ? Par le baptême, nous devenons prêtres, prophètes et rois — appelés à devenir la voix de Dieu, ses porte-parole. Un prophète vit une grande intimité avec Dieu et un grand amour pour les personnes vers qui il est envoyé. Aujourd\'hui, déposons nos jugements, nos peurs, notre volonté. Faisons silence, faisons de la place en nous pour Dieu. On n\'entend rien dans le bruit.',
    priere: 'Seigneur, nous t\'apportons nos doutes, nos questions, nos faiblesses et nos manques… Nous t\'apportons aussi ceux de tous les humains — leurs fardeaux, leurs solitudes, leurs espérances fragiles…',
    saintCoachId: 'carlo-acutis', estDimanche: false, estJourSaint: true
  },
  {
    jour: 2, date: '2026-02-19', jourSemaine: 'Jeudi',
    contenu: 'Viens, Esprit Saint, m\'aider à me rapprocher de toi.',
    verset: 'Deutéronome 11, 29',
    citationBiblique: '« Ah ! Si le Seigneur pouvait faire de tout son peuple un peuple de prophètes ! Si le Seigneur pouvait mettre son esprit sur eux ! »',
    meditation: 'À la Pentecôte, c\'est chose faite. Aujourd\'hui, je choisis un exercice qui me rapproche de Dieu : prendre plus de temps pour la prière, accueillir le regard d\'amour de Dieu sur moi, développer la louange ou l\'intercession, lire davantage la Parole de Dieu… Et je choisis un exercice qui m\'aide à aimer les personnes vers qui Dieu m\'envoie — messager de son amour, de sa joie, de son espérance.',
    priere: 'Viens, Esprit Saint, viens m\'éclairer et m\'aider à me rapprocher de toi. Je te confie toutes les personnes que je rencontrerai…',
    saintCoachId: 'carlo-acutis', estDimanche: false
  },
  {
    jour: 3, date: '2026-02-20', jourSemaine: 'Vendredi',
    contenu: 'J\'aide quelqu\'un en lui donnant beaucoup d\'amour.',
    verset: 'Mère Teresa',
    citationBiblique: '« Si vous ne pouvez pas faire de grandes choses, faites de petites choses avec beaucoup d\'amour. Si vous ne pouvez pas les faire avec un grand amour, faites-les avec un peu d\'amour. Si vous ne pouvez pas les faire avec un peu d\'amour, faites-les quand même. »',
    priere: 'Je prie avec la prière au dos du carnet.',
    saintCoachId: 'carlo-acutis', estDimanche: false
  },
  {
    jour: 4, date: '2026-02-21', jourSemaine: 'Samedi',
    contenu: 'Jésus, je te confie toutes les personnes de ma famille.',
    verset: 'Mère Teresa',
    citationBiblique: '« La paix dans le monde commence en famille. »',
    priere: 'Seigneur, je te confie les personnes de ma famille… celles dont je me suis occupé, celles dont je m\'occupe aujourd\'hui, celles dont je m\'occuperai demain. Je te confie celles qui m\'entourent, celles qui me sont proches par le cœur et par la prière, celles dont la vie me rendra proche, celles pour qui je me ferai proche…',
    saintCoachId: 'carlo-acutis', estDimanche: false
  },

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 1 — St Michel Archange — "Dieu parle ? Pourquoi ?"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 5, date: '2026-02-22', jourSemaine: 'Dimanche',
    contenu: 'Je lis la carte de Saint Michel.',
    saintCoachId: 'michel-archange', estDimanche: true
  },
  {
    jour: 6, date: '2026-02-23', jourSemaine: 'Lundi',
    contenu: 'Je répète dans mon cœur que Dieu m\'aime.',
    verset: 'Isaïe 49, 15-16',
    citationBiblique: '« Une femme peut-elle oublier son nourrisson, ne plus avoir de tendresse pour le fils de ses entrailles ? Même si elle l\'oubliait, moi, je ne t\'oublierai pas. Car je t\'ai gravé sur les paumes de mes mains… »',
    meditation: 'Dieu parle d\'abord pour dire qu\'Il nous aime… Je relis ce verset biblique plusieurs fois et je laisse monter ma réponse, ma prière…',
    saintCoachId: 'michel-archange', estDimanche: false
  },
  {
    jour: 7, date: '2026-02-24', jourSemaine: 'Mardi',
    contenu: 'Jésus, merci de m\'avoir créé. Aide-moi à grandir comme un athlète de Dieu.',
    verset: 'Genèse 12, 1-2',
    citationBiblique: '« Quitte ton pays, ta parenté et la maison de ton père, et va vers le pays que je te montrerai. Je ferai de toi une grande nation, je te bénirai, je rendrai grand ton nom, et tu deviendras une bénédiction. »',
    meditation: 'Dieu parle pour entrer en relation avec les humains, pour faire alliance avec eux.',
    priere: 'Seigneur, merci de me rendre libre — libre des pressions que l\'on met sur moi, libre d\'aller là où tu veux que j\'aille, là où je pourrai être pleinement moi. Merci pour ta bénédiction… Aide-moi à grandir dans la vocation que tu as mise au plus profond de moi et à devenir à mon tour une bénédiction pour les autres.',
    saintCoachId: 'michel-archange', estDimanche: false
  },
  {
    jour: 8, date: '2026-02-25', jourSemaine: 'Mercredi',
    contenu: 'Aujourd\'hui, je fais quelque chose de bien avec mes mains.',
    verset: 'Genèse 12, 3',
    citationBiblique: '« En toi seront bénies toutes les familles de la terre. »',
    meditation: 'Dieu nous parle pour apporter une bénédiction sur la terre…',
    priere: 'Seigneur, tu aimerais rencontrer chacune et chacun, et leur manifester ta tendresse. Tu as besoin de mon cœur et de mes mains pour le faire. Merci de m\'avoir choisi !',
    saintCoachId: 'michel-archange', estDimanche: false
  },
  {
    jour: 9, date: '2026-02-26', jourSemaine: 'Jeudi',
    contenu: 'Jésus, éclaire mon esprit afin que je fasse le bien.',
    verset: 'Psaume 118, 105',
    citationBiblique: '« Ta parole est la lumière de mes pas, la lampe de ma route. »',
    meditation: 'Dieu nous parle pour nous éclairer, nous guider. Toutes les actions ne se valent pas : certaines mènent à la lumière, à la vie, à la paix… d\'autres à la destruction, aux divisions, à l\'injustice…',
    priere: 'Seigneur, éclaire mon esprit afin que je sache discerner ce qui est bien, et donne-moi la force de l\'accomplir… Guide mes pas… Seigneur, je te présente ce qui pèse sur moi… Ouvre mon esprit pour comprendre, pour demander conseil, et aide-moi à aller dans la bonne direction…',
    saintCoachId: 'michel-archange', estDimanche: false
  },
  {
    jour: 10, date: '2026-02-27', jourSemaine: 'Vendredi',
    contenu: 'Je fais silence et je confie à Dieu mes joies, mes doutes.',
    verset: '1 Rois 19, 11-13',
    citationBiblique: '« Sors et tiens-toi sur la montagne devant le Seigneur, car il va passer. » À l\'approche du Seigneur, il y eut un ouragan, si fort et si violent qu\'il fendait les montagnes et brisait les rochers, mais le Seigneur n\'était pas dans l\'ouragan ; et après l\'ouragan, il y eut un tremblement de terre, mais le Seigneur n\'était pas dans le tremblement de terre ; et après ce tremblement de terre, un feu, mais le Seigneur n\'était pas dans ce feu ; et après ce feu, le murmure d\'une brise légère.',
    meditation: 'Dieu parle dans le silence…',
    priere: 'Je fais silence… j\'écoute le bruit de mes pensées… Je les confie à Dieu. Puis je fais un grand silence pour écouter Dieu, là, près de moi…',
    saintCoachId: 'michel-archange', estDimanche: false
  },
  {
    jour: 11, date: '2026-02-28', jourSemaine: 'Samedi',
    contenu: 'Jésus, ta Parole est vie, ta Parole est création, ta Parole me transforme.',
    verset: 'Genèse 1, 3-4',
    citationBiblique: '« Dieu dit : « Que la lumière soit. » Et la lumière fut. Dieu vit que la lumière était bonne. »',
    meditation: 'La parole de Dieu crée.',
    priere: 'Seigneur, ta Parole est vie, ta Parole est création, ta Parole me transforme… Louange à toi pour ta Parole !',
    saintCoachId: 'michel-archange', estDimanche: false
  },

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 2 — St Léger — "La Parole de Dieu est Bonne Nouvelle !"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 12, date: '2026-03-01', jourSemaine: 'Dimanche',
    contenu: 'Je lis la carte de Saint Léger.',
    saintCoachId: 'leger', estDimanche: true
  },
  {
    jour: 13, date: '2026-03-02', jourSemaine: 'Lundi',
    contenu: 'Viens, Esprit Saint, en mon cœur.',
    verset: 'Luc 3, 22',
    citationBiblique: '« L\'Esprit Saint, sous une apparence corporelle, comme une colombe, descendit sur Jésus, et il y eut une voix venant du ciel : « Toi, tu es mon Fils bien-aimé ; en toi, je trouve ma joie. » »',
    meditation: 'Je lis à voix haute ce verset et je dialogue avec Dieu (Père, Jésus, Esprit Saint) au sujet de cette Parole. Comment cette Parole est-elle Bonne Nouvelle pour ma vie ? Celle des autres ? Comment puis-je la partager autour de moi, par ma vie ?',
    priere: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    saintCoachId: 'leger', estDimanche: false
  },
  {
    jour: 14, date: '2026-03-03', jourSemaine: 'Mardi',
    contenu: 'Aujourd\'hui, je partage un sourire.',
    verset: 'Matthieu 5, 5',
    citationBiblique: '« Heureux les doux, car ils recevront la terre en héritage. »',
    meditation: 'Je lis à voix haute ce verset et je dialogue avec Dieu (Père, Jésus, Esprit Saint) au sujet de cette Parole. Comment cette Parole est-elle Bonne Nouvelle pour ma vie ? Celle des autres ? Comment puis-je la partager autour de moi, par ma vie ?',
    priere: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    saintCoachId: 'leger', estDimanche: false
  },
  {
    jour: 15, date: '2026-03-04', jourSemaine: 'Mercredi',
    contenu: 'Je remercie Dieu pour l\'amour reçu.',
    verset: 'Jean 5, 8',
    citationBiblique: '« Lève-toi, prends ton brancard, et marche. »',
    meditation: 'Je lis à voix haute ce verset et je dialogue avec Dieu (Père, Jésus, Esprit Saint) au sujet de cette Parole. Comment cette Parole est-elle Bonne Nouvelle pour ma vie ? Celle des autres ? Comment puis-je la partager autour de moi, par ma vie ?',
    priere: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    saintCoachId: 'leger', estDimanche: false
  },
  {
    jour: 16, date: '2026-03-05', jourSemaine: 'Jeudi',
    contenu: 'J\'aide un camarade en difficulté.',
    verset: 'Matthieu 25, 40',
    citationBiblique: '« Amen, je vous le dis : chaque fois que vous l\'avez fait à l\'un de ces plus petits de mes frères, c\'est à moi que vous l\'avez fait. »',
    meditation: 'Je lis à voix haute ce verset et je dialogue avec Dieu (Père, Jésus, Esprit Saint) au sujet de cette Parole. Comment cette Parole est-elle Bonne Nouvelle pour ma vie ? Celle des autres ? Comment puis-je la partager autour de moi, par ma vie ?',
    priere: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    saintCoachId: 'leger', estDimanche: false
  },
  {
    jour: 17, date: '2026-03-06', jourSemaine: 'Vendredi',
    contenu: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    verset: 'Jean 15, 16',
    citationBiblique: '« Ce n\'est pas vous qui m\'avez choisi, c\'est moi qui vous ai choisis et établis, afin que vous alliez, que vous portiez du fruit, et que votre fruit demeure. »',
    meditation: 'Je lis à voix haute ce verset et je dialogue avec Dieu (Père, Jésus, Esprit Saint) au sujet de cette Parole. Comment cette Parole est-elle Bonne Nouvelle pour ma vie ? Celle des autres ? Comment puis-je la partager autour de moi, par ma vie ?',
    priere: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    saintCoachId: 'leger', estDimanche: false
  },
  {
    jour: 18, date: '2026-03-07', jourSemaine: 'Samedi',
    contenu: 'Je range ma chambre pour pouvoir mieux me reposer.',
    verset: 'Marc 6, 31',
    citationBiblique: '« Venez à l\'écart dans un endroit désert, et reposez-vous un peu. »',
    meditation: 'Je lis à voix haute ce verset et je dialogue avec Dieu (Père, Jésus, Esprit Saint) au sujet de cette Parole. Comment cette Parole est-elle Bonne Nouvelle pour ma vie ? Celle des autres ? Comment puis-je la partager autour de moi, par ma vie ?',
    priere: 'Viens, Esprit Saint, en mon cœur, en ma vie !',
    saintCoachId: 'leger', estDimanche: false
  },

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 3 — St Nicolas de Flüe — "Un.e prophète est solidaire"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 19, date: '2026-03-08', jourSemaine: 'Dimanche',
    contenu: 'Je lis la carte de Saint Nicolas de Flüe.',
    saintCoachId: 'nicolas-flue', estDimanche: true
  },
  {
    jour: 20, date: '2026-03-09', jourSemaine: 'Lundi',
    contenu: 'Je lis en famille un passage de la Bible : Hébreux 4, 12.',
    verset: 'Hébreux 4, 12',
    citationBiblique: '« Elle est vivante, la parole de Dieu, et énergique. »',
    meditation: 'La Parole de Dieu est vivante, elle féconde chaque période de la vie, chaque siècle. Un prophète n\'est pas crispé sur le passé : il puise dans la Parole de Dieu la semence pour nourrir sa vie et rendre féconde la vie qui l\'entoure.',
    priere: 'Merci, Seigneur, pour les repères et les trésors que j\'ai reçus par ta Parole. Merci pour la puissance et la liberté qu\'elle me donne…',
    saintCoachId: 'nicolas-flue', estDimanche: false
  },
  {
    jour: 21, date: '2026-03-10', jourSemaine: 'Mardi',
    contenu: 'Aujourd\'hui, je fais quelque chose d\'inattendu pour faire plaisir à quelqu\'un.',
    verset: 'Luc 1, 35',
    citationBiblique: '« L\'Esprit Saint viendra sur toi, et la puissance du Très-Haut te prendra sous son ombre ; c\'est pourquoi celui qui va naître sera saint, il sera appelé Fils de Dieu. »',
    meditation: 'Un prophète vit sous la mouvance de l\'Esprit Saint et est souvent appelé à l\'inattendu. Rempli de Dieu, ce que cette personne dit ou fait vient de Dieu. Elle ne parle pas en son nom, ni ne donne un cours de morale. Elle habite et transmet l\'espérance, la justice, l\'amour, la joie qui viennent de Dieu.',
    priere: 'Merci, Seigneur, pour ta Parole, merci pour la force, l\'espérance, la joie que tu nous donnes. Viens, Esprit Saint, viens m\'éclairer… Apprends-moi comment je pourrais être, aujourd\'hui, prophète du Dieu vivant.',
    saintCoachId: 'nicolas-flue', estDimanche: false
  },
  {
    jour: 22, date: '2026-03-11', jourSemaine: 'Mercredi',
    contenu: 'Merci, Jésus, pour tout ce que tu m\'as appris dans ma vie.',
    meditation: 'Les prophètes ont su lire dans les événements de leur vie personnelle la volonté, la parole de Dieu. Qu\'est-ce que les événements de ma vie m\'ont appris ?',
    priere: 'Merci, Seigneur, pour tout ce que tu m\'as appris dans ma vie. (Je cherche 3 exemples.) Merci pour les personnes que tu as mises sur mon chemin, celles qui m\'ont aidé et celles qui m\'aident encore à me construire. Donne-moi ton Esprit pour que je puisse comprendre ce que tu attends de moi, de ma vie, de ce que j\'ai à vivre aujourd\'hui.',
    saintCoachId: 'nicolas-flue', estDimanche: false
  },
  {
    jour: 23, date: '2026-03-12', jourSemaine: 'Jeudi',
    contenu: 'Aide-moi à mettre de l\'amour dans ce que je fais.',
    verset: 'Jean 1, 14',
    citationBiblique: '« Et le Verbe s\'est fait chair, il a habité parmi nous… »',
    meditation: 'Comme Jésus, c\'est par toute sa vie et non seulement par ses paroles qu\'un prophète parle…',
    priere: 'Seigneur, transforme mon cœur et ma vie à ton image… Aide-moi à sourire, à toujours croire en la vie, à faire confiance à ton amour, à accomplir les plus petites choses avec un grand amour… Aide-moi à vivre l\'Évangile.',
    saintCoachId: 'nicolas-flue', estDimanche: false
  },
  {
    jour: 24, date: '2026-03-13', jourSemaine: 'Vendredi',
    contenu: 'Montre-moi, Jésus, comment je peux aider ceux qui souffrent autour de moi.',
    verset: 'Jean 15, 13',
    citationBiblique: '« Il n\'y a pas de plus grand amour que de donner sa vie pour ceux qu\'on aime. »',
    meditation: 'Moïse, jeune homme, voit la misère de ses frères et se laisse interpeller par l\'injustice alors qu\'il a la chance de vivre dans un palais.',
    priere: 'Seigneur, fais de moi un frère, une sœur sur qui les autres peuvent compter. Aide-moi à me faire solidaire de ceux qui sont maltraités, de ceux qui souffrent. Montre-moi comment les aider autour de moi. Viens, Esprit Saint, viens m\'aider à vivre d\'amour !',
    saintCoachId: 'nicolas-flue', estDimanche: false
  },
  {
    jour: 25, date: '2026-03-14', jourSemaine: 'Samedi',
    contenu: 'Je trouve 3 qualités pour chaque membre de ma famille.',
    verset: '1 Corinthiens 1, 4',
    citationBiblique: '« Je ne cesse de rendre grâce à Dieu à votre sujet, pour la grâce qu\'il vous a donnée dans le Christ Jésus. »',
    meditation: 'Saint Paul rend grâce à Dieu pour le don que les autres ont reçu.',
    priere: 'Seigneur, merci pour les dons différents que tu distribues à chacun pour le bien de tous. Aide-moi à reconnaître les merveilles que tu fais aussi chez les autres et à le leur dire.',
    saintCoachId: 'nicolas-flue', estDimanche: false
  },

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 4 — St Joseph — "Prophète, oui ! mais comment ?"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 26, date: '2026-03-15', jourSemaine: 'Dimanche',
    contenu: 'Je lis la carte de Saint Joseph.',
    saintCoachId: 'joseph', estDimanche: true
  },
  {
    jour: 27, date: '2026-03-16', jourSemaine: 'Lundi',
    contenu: 'Jésus, aide-moi à ce que tous ceux qui viennent vers moi repartent plus heureux.',
    verset: '1 Corinthiens 14, 3',
    citationBiblique: '« Celui qui prophétise est constructif, il réconforte, il encourage. »',
    meditation: 'Un prophète ne cherche pas à ramener à soi, ni à gouverner l\'Église. Il édifie, montre le chemin, console.',
    priere: 'Seigneur, aide-moi à être constructif, à réconforter, à encourager. « Que tous ceux qui viennent vers moi repartent plus heureux. » (Mère Teresa) Viens, Esprit Saint…',
    saintCoachId: 'joseph', estDimanche: false
  },
  {
    jour: 28, date: '2026-03-17', jourSemaine: 'Mardi',
    contenu: 'Que les autres puissent mieux te connaître, Jésus, juste en me voyant vivre, sourire.',
    verset: 'Matthieu 7, 21',
    citationBiblique: '« Ce n\'est pas en me disant : « Seigneur, Seigneur ! » qu\'on entrera dans le royaume des Cieux, mais c\'est en faisant la volonté de mon Père qui est aux cieux. »',
    meditation: 'Un chrétien prophète laisse l\'Évangile transformer sa vie.',
    priere: 'Seigneur, aide-moi à vivre de ton Évangile pour que je devienne, avec mes couleurs, une « bonne nouvelle » pour ceux que je rencontrerai… Que les autres puissent mieux te connaître juste en me voyant vivre… Viens, Esprit Saint !',
    saintCoachId: 'joseph', estDimanche: false
  },
  {
    jour: 29, date: '2026-03-18', jourSemaine: 'Mercredi',
    contenu: 'Jésus, fais grandir l\'Amour autour de moi.',
    verset: 'Marc 1, 15 / Romains 14, 17',
    citationBiblique: '« Les temps sont accomplis : le règne de Dieu est tout proche… » — « En effet, le royaume de Dieu est justice, paix et joie dans l\'Esprit Saint. »',
    meditation: 'Un chrétien prophète annonce le règne de Dieu. Il ne juge pas, ni ne « fait la morale ». Pourtant, sa parole dérange car il dénonce les injustices. Il contribue par ses paroles et par ses actes à faire advenir le règne de Dieu qui est un règne de justice, de paix, de joie.',
    priere: 'Seigneur, transforme mon cœur pour que, par ma présence, mes paroles, mon action, ton règne de justice, de paix, de joie, d\'amour puisse grandir autour de moi.',
    saintCoachId: 'joseph', estDimanche: false
  },
  {
    jour: 30, date: '2026-03-19', jourSemaine: 'Jeudi',
    contenu: 'Saint Joseph, toi qui as veillé sur Jésus, toi qui as écouté l\'Esprit de Dieu tout au long de ta vie, aide-moi aujourd\'hui.',
    verset: 'Jean 10, 10',
    citationBiblique: '« Moi, je suis venu pour que le monde ait la vie, la vie en abondance. »',
    meditation: 'Un chrétien prophète promeut la vie.',
    priere: 'Seigneur, aide-moi à être prophète aujourd\'hui et à faire grandir la vie dans mon quotidien, par ma compassion, mon aide, mon sourire… Saint Joseph, toi qui as veillé sur Jésus et Marie, toi qui as écouté l\'Esprit de Dieu tout au long de ta vie, aide-moi à discerner et à accomplir son œuvre de vie…',
    saintCoachId: 'joseph', estDimanche: false
  },
  {
    jour: 31, date: '2026-03-20', jourSemaine: 'Vendredi',
    contenu: 'Aujourd\'hui, je rends service sans me plaindre, mais avec mon plus beau sourire.',
    verset: 'Isaïe 49, 1.3-5',
    citationBiblique: '« J\'étais encore dans le sein maternel quand le Seigneur m\'a appelé… Il m\'a dit : « Tu es mon serviteur, en toi je manifesterai ma splendeur. » Et moi, je disais : « Je me suis fatigué pour rien… » Et pourtant, mon droit subsistait auprès du Seigneur… Oui, j\'ai de la valeur aux yeux du Seigneur, c\'est mon Dieu qui est ma force. »',
    meditation: 'Un prophète est d\'abord un serviteur de Dieu, appelé par lui.',
    priere: 'Seigneur, montre-moi comment je peux être ton serviteur aujourd\'hui… Donne-moi la force de persévérer quand il est difficile d\'avancer, d\'aimer, de croire, de vivre. Loué sois-tu pour ton amour, ta tendresse, ta puissance de vie et de création, pour la beauté qui vient de toi…',
    saintCoachId: 'joseph', estDimanche: false
  },
  {
    jour: 32, date: '2026-03-21', jourSemaine: 'Samedi',
    contenu: 'Jésus, je te prie pour toutes les personnes qui souffrent.',
    verset: 'Isaïe 49, 6',
    citationBiblique: '« C\'est trop peu que tu sois mon serviteur… je fais de toi la lumière des nations, pour que mon salut parvienne jusqu\'aux extrémités de la terre. »',
    priere: 'Seigneur, ouvre mon cœur aux dimensions du monde. Aide-moi à rayonner ta lumière dans ma famille et autour de moi, et à me faire solidaire des plus pauvres. Je te prie pour toutes les personnes qui souffrent de la guerre et de l\'injustice. Aide-moi à contribuer — par un don, une prière, une aide concrète — à plus de vie, de paix et d\'amour en ce monde.',
    saintCoachId: 'joseph', estDimanche: false
  },

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 5 — Ste Marie Auxiliatrice — "Continuer l'œuvre de Jésus !"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 33, date: '2026-03-22', jourSemaine: 'Dimanche',
    contenu: 'Je lis la carte de Sainte Marie Auxiliatrice.',
    saintCoachId: 'marie-auxiliatrice', estDimanche: true
  },
  {
    jour: 34, date: '2026-03-23', jourSemaine: 'Lundi',
    contenu: 'Jésus, mets en mon cœur ta Parole pour que je puisse la redire aux autres.',
    verset: 'Actes 1, 8',
    citationBiblique: '« Vous allez recevoir une force quand le Saint-Esprit viendra sur vous ; vous serez alors mes témoins, à Jérusalem, dans toute la Judée et la Samarie, et jusqu\'aux extrémités de la terre. »',
    meditation: 'Jésus, tu es venu sur notre terre pour nous dire combien nous comptons à tes yeux, pour nous dire la puissance de la vie, la puissance de l\'amour, pour nous révéler le Père… Tu as guéri, prié, marché, ri, pleuré, dormi…',
    priere: 'Souffle sur moi ton Esprit, pour que je sois ton témoin aujourd\'hui… Mets en mon cœur ta Parole pour que je puisse aujourd\'hui semer ton Évangile…',
    saintCoachId: 'marie-auxiliatrice', estDimanche: false
  },
  {
    jour: 35, date: '2026-03-24', jourSemaine: 'Mardi',
    contenu: 'Jésus, change mon cœur pour que je puisse voir les personnes à ta manière…',
    verset: 'Jean 13, 35',
    citationBiblique: '« À ceci, tous reconnaîtront que vous êtes mes disciples : si vous avez de l\'amour les uns pour les autres. »',
    priere: 'Jésus, donne-moi un cœur humble et compatissant, un cœur qui sait voir au-delà des apparences… Convertis mon cœur pour que je puisse voir les personnes à ta manière… Merci pour mes amis, ceux qui me comprennent… Je te prie pour ceux qui me sont antipathiques, ceux qui m\'ont fait ou qui me font du mal… Viens, Esprit Saint, en mon cœur, pour que je devienne soleil d\'amour dans mon quotidien…',
    saintCoachId: 'marie-auxiliatrice', estDimanche: false
  },
  {
    jour: 36, date: '2026-03-25', jourSemaine: 'Mercredi',
    contenu: 'Annonciation : je cherche 3 choses que je sais faire et je remercie Jésus pour ça.',
    verset: '1 Corinthiens 12, 4-7',
    citationBiblique: '« Les dons de la grâce sont variés, mais c\'est le même Esprit. Les services sont variés, mais c\'est le même Seigneur. Les activités sont variées, mais c\'est le même Dieu qui agit en tout et en tous. À chacun est donnée la manifestation de l\'Esprit en vue du bien. »',
    priere: 'Père, merci pour ton Esprit, merci de compter sur moi, de me faire confiance. Aide-moi à découvrir et à accepter mes dons et charismes… Aide-moi à les mettre au service des autres. Que je devienne comme un vitrail et reflète ta lumière avec les couleurs que tu m\'as données. Marie, première en chemin, je viens mettre mes pas dans tes pas pour devenir avec toi prophète de celui qui a pris corps en nous. Viens, Esprit Saint !',
    saintCoachId: 'marie-auxiliatrice', estDimanche: false
  },
  {
    jour: 37, date: '2026-03-26', jourSemaine: 'Jeudi',
    contenu: 'Aujourd\'hui, je partage un goûter en famille ou avec mes amis à la récréation.',
    verset: 'Matthieu 25, 35-36',
    citationBiblique: '« Car j\'avais faim, et vous m\'avez donné à manger ; j\'avais soif, et vous m\'avez donné à boire ; j\'étais un étranger, et vous m\'avez accueilli ; j\'étais nu, et vous m\'avez habillé ; j\'étais malade, et vous m\'avez visité ; j\'étais en prison, et vous êtes venus jusqu\'à moi ! »',
    meditation: '« Qui a des semences peut semer l\'avenir. La faim bouffe l\'avenir. » — Thème de l\'action de carême de cette année.',
    priere: 'Jésus, toi qui as passé ta vie à guérir, remettre debout, faire le bien, apprends-moi à agir comme toi…',
    saintCoachId: 'marie-auxiliatrice', estDimanche: false
  },
  {
    jour: 38, date: '2026-03-27', jourSemaine: 'Vendredi',
    contenu: 'Aujourd\'hui, je rends visite ou je prie pour une personne qui est seule ou malade.',
    verset: 'Luc 5, 31',
    citationBiblique: '« Ce ne sont pas les gens en bonne santé qui ont besoin du médecin, mais les malades… »',
    meditation: 'Jésus surprend et dérange. Il se tient aux côtés des exclus, des pécheurs et des impurs. Ce choix scandalise les autorités religieuses de son temps. Mais Jésus ne vient pas condamner : il tend la main pour ouvrir un chemin de lumière. Serons-nous prêts à répondre à cet appel, à accueillir sa lumière et à la semer à notre tour ?',
    priere: 'Oui, Seigneur, me voici ! Aide-moi à aimer aussi les laissés-pour-compte… Je te prie pour toutes celles et tous ceux que notre société laisse de côté…',
    saintCoachId: 'marie-auxiliatrice', estDimanche: false
  },
  {
    jour: 39, date: '2026-03-28', jourSemaine: 'Samedi',
    contenu: 'Seigneur, transforme mon cœur pour que ton amour puisse grandir autour de moi.',
    verset: 'Jean 11, 25',
    citationBiblique: '« Moi, je suis la résurrection et la vie. »',
    priere: 'Jésus ressuscité, aide-moi à vivre en communion avec toi, à me laisser remplir et transformer par ta résurrection, à la rayonner et à semer l\'espérance.',
    saintCoachId: 'marie-auxiliatrice', estDimanche: false
  },

  // ═══════════════════════════════════════════════════════════
  // SEMAINE 6 — Semaine Sainte (Christ Roi) — "Prophète du don d'amour"
  // ═══════════════════════════════════════════════════════════

  {
    jour: 40, date: '2026-03-29', jourSemaine: 'Dimanche',
    contenu: 'Je lis la carte du Christ Roi de l\'univers.',
    meditation: 'Hosanna ! Jésus donne librement sa vie pour nous ! Écris des mercis tout autour de Jésus ! Tu peux aussi dessiner un manteau devant Jésus et écrire ce que tu donnes de toi à Jésus pour qu\'il puisse avancer aujourd\'hui…',
    saintCoachId: 'christ-roi', estDimanche: true
  },
  {
    jour: 41, date: '2026-03-30', jourSemaine: 'Lundi',
    contenu: 'Il est écrit : Soyez toujours dans la joie du Seigneur.',
    verset: 'Sophonie 3, 17 / Philippiens 4, 4',
    citationBiblique: '« Le Seigneur ton Dieu est en toi, c\'est lui, le héros qui apporte le salut. Il aura en toi sa joie et son allégresse, il te renouvellera par son amour ; il exultera pour toi et se réjouira… » — « Soyez toujours dans la joie du Seigneur ; je le redis : soyez dans la joie. »',
    priere: 'Ô Jésus, merci d\'être en moi et d\'être au milieu de nous en tant que communauté. Merci de nous libérer, de nous sauver. Viens nous renouveler par ton amour puis comme une fontaine, remplie à ras bord, déverse son eau, donne-nous la grâce de devenir prophète de la joie…',
    saintCoachId: 'christ-roi', estDimanche: false
  },
  {
    jour: 42, date: '2026-03-31', jourSemaine: 'Mardi',
    contenu: 'Ô Jésus, merci pour ta Parole, merci d\'être parole.',
    verset: 'Psaume 118, 102-103',
    citationBiblique: '« De tes décisions, je ne veux pas m\'écarter, car c\'est toi qui m\'enseignes. Qu\'elle est douce à mon palais ta promesse : le miel a moins de saveur dans ma bouche ! »',
    priere: 'Ô Jésus, merci pour ta Parole, merci d\'être parole. Fais de moi un prophète selon ton Évangile…',
    saintCoachId: 'christ-roi', estDimanche: false
  },
  {
    jour: 43, date: '2026-04-01', jourSemaine: 'Mercredi',
    contenu: 'Ô Jésus, apprends-moi à aimer… Fais de moi un prophète de l\'amour…',
    verset: '1 Corinthiens 13, 2.4-8',
    citationBiblique: '« J\'aurais beau être prophète, avoir toute la science des mystères et toute la connaissance de Dieu, j\'aurais beau avoir toute la foi jusqu\'à transporter les montagnes, s\'il me manque l\'amour, je ne suis rien… L\'amour prend patience ; l\'amour rend service ; l\'amour ne jalouse pas ; il ne se vante pas, ne se gonfle pas d\'orgueil ; il ne fait rien d\'inconvenant ; il ne cherche pas son intérêt ; il ne s\'emporte pas ; il n\'entretient pas de rancune ; il ne se réjouit pas de ce qui est injuste, mais il trouve sa joie dans ce qui est vrai ; il supporte tout, il fait confiance en tout, il espère tout, il endure tout. L\'amour ne passera jamais. »',
    priere: 'Ô Jésus, apprends-moi à aimer… Fais de moi un prophète de l\'amour…',
    saintCoachId: 'christ-roi', estDimanche: false
  },
  {
    jour: 44, date: '2026-04-02', jourSemaine: 'Jeudi',
    contenu: 'Si je peux, je participe à la célébration à Basse-Nendaz.',
    verset: 'Jean 6, 48',
    citationBiblique: '« Moi, je suis le pain de la vie. »',
    priere: 'Ô Jésus, tu te fais pour moi nourriture et vie. Merci ! Viens habiter en moi, viens ajouter de la vie à mes jours. Fais de moi un prophète qui permet à la vie de grandir…',
    saintCoachId: 'christ-roi', estDimanche: false
  },
  {
    jour: 45, date: '2026-04-03', jourSemaine: 'Vendredi',
    contenu: 'Si je peux, je fais un chemin de croix.',
    verset: 'Luc 23, 46',
    citationBiblique: '« Père, entre tes mains je remets mon esprit. »',
    meditation: 'Ô Jésus, tu as tout donné. Merci ! Je fais une minute de silence pour accueillir l\'amour de Jésus.',
    saintCoachId: 'christ-roi', estDimanche: false
  },
  {
    jour: 46, date: '2026-04-04', jourSemaine: 'Samedi',
    contenu: 'Ô Jésus, donne-moi une âme qui sait veiller…',
    verset: '1 Corinthiens 13, 13',
    citationBiblique: '« Ce qui demeure aujourd\'hui, c\'est la foi, l\'espérance et la charité… »',
    priere: 'Ô Jésus, donne-moi une âme qui sait veiller…',
    saintCoachId: 'christ-roi', estDimanche: false
  },
  {
    jour: 47, date: '2026-04-05', jourSemaine: 'Dimanche',
    contenu: 'Jésus est ressuscité !',
    verset: '1 Corinthiens 15, 12',
    citationBiblique: '« Nous proclamons que le Christ est ressuscité d\'entre les morts. »',
    meditation: 'Jésus est ressuscité et tout change… La vie est vainqueure de la mort, Alléluia ! La confiance est vainqueure de la peur, Alléluia ! L\'amour est vainqueur de la violence, Alléluia !',
    priere: 'Ô Jésus, c\'est toi, notre Dieu, c\'est toi notre force, c\'est toi notre victoire ! Merci !',
    saintCoachId: 'christ-roi', estDimanche: true, estPaques: true
  }
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
