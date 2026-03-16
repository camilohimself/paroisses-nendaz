/**
 * Pensées et intentions de prière des paroissiens de Nendaz
 * En mémoire des victimes de l'incendie de Crans-Montana — 1er janvier 2026
 *
 * Sources : messages authentiques recueillis sur le mur de prières paroissial
 * Deux documents fusionnés : pensées de solidarité + intentions de prière personnelles
 * Affichage : 16 mars — 30 avril 2026
 */

export interface PenseeMessage {
  id: number
  text: string
  author?: string
  type: 'solidarite' | 'intention'
}

export const MEMORIAL_CONFIG = {
  title: 'Mur de prières',
  subtitle: 'En mémoire des victimes de Crans-Montana',
  date: '1er janvier 2026',
  displayFrom: '2026-03-16',
  displayUntil: '2026-04-30',
  description:
    'Ces pensées ont été laissées par les paroissiens de Nendaz sur le mur de prières de nos églises, en solidarité avec les familles touchées par le drame de Crans-Montana.',
}

export const pensees: PenseeMessage[] = [
  // --- Document 1 : Pensées de solidarité ---
  { id: 1, text: 'Que Dieu vous donne force et paix.', author: 'Céline', type: 'solidarite' },
  { id: 2, text: 'Que la lumière de Dieu vous accompagne ! Courage.', type: 'solidarite' },
  { id: 3, text: 'Prends soin de tous les jeunes. MERCI', type: 'solidarite' },
  { id: 4, text: 'Seigneur, viens enlever en moi la colère !', type: 'solidarite' },
  { id: 5, text: 'Je te confie tous les pompiers et soignants.', type: 'solidarite' },
  { id: 6, text: 'Votre douleur est la nôtre. Nous sommes avec vous.', type: 'solidarite' },
  { id: 7, text: 'Courage Alan et Nolan de tout cœur avec vous et votre famille.', type: 'solidarite' },
  { id: 8, text: 'Miséricorde et consolation', author: 'Émilie', type: 'solidarite' },
  { id: 9, text: 'Paix', type: 'solidarite' },
  { id: 10, text: 'Amitié !', type: 'solidarite' },
  { id: 11, text: "Je vous envoie plein d'amour.", type: 'solidarite' },
  { id: 12, text: "Gardez l'espérance dans le Seigneur.", type: 'solidarite' },
  { id: 13, text: 'En pensée avec vous. Que vos enfants reposent en paix.', type: 'solidarite' },
  { id: 14, text: 'En pensée avec vous \u2764', type: 'solidarite' },
  { id: 15, text: 'En pensée et en prière avec vous, je vous exprime ma solidarité face à cette tragédie. Courage à tous.', type: 'solidarite' },
  { id: 16, text: 'On vous aime !', type: 'solidarite' },
  { id: 17, text: "Force, foi et paix pour traverser l'impensable.", type: 'solidarite' },
  { id: 18, text: "L'espérance est un trésor qui redonne force et courage. \u2764", type: 'solidarite' },
  { id: 19, text: "De tout cœur avec la jeunesse ! Ils sont porteurs de vie pour l'avenir !", type: 'solidarite' },
  { id: 20, text: 'Une prière et une pensée pour vous chaque jour, chers parents et famille. Courage aux blessés \u2764', type: 'solidarite' },
  { id: 21, text: 'Merci Pierre pour ton témoignage de foi.', type: 'solidarite' },
  { id: 22, text: 'Nora Fanny Caroline Émilie Stefan Mariam', type: 'solidarite' },
  { id: 23, text: "Merci pour l'unité, la solidarité, la bienveillance, l'amour.", type: 'solidarite' },
  { id: 24, text: 'Ensemble !', type: 'solidarite' },
  { id: 25, text: 'Pour les amis de Charlélie \u2764', type: 'solidarite' },
  { id: 26, text: 'Courage à vous \u2764', type: 'solidarite' },
  { id: 27, text: 'Je pense bien à vous courage.', type: 'solidarite' },
  { id: 28, text: 'Que vous nous bénissiez de là-haut.', type: 'solidarite' },
  { id: 29, text: "41 anges de plus au paradis et autant d'étoiles. Courage aux familles.", type: 'solidarite' },
  { id: 30, text: 'Courage de tout cœur avec vous en ces moments douloureux', type: 'solidarite' },
  { id: 31, text: 'Vous êtes dans mon cœur. Nous partageons votre peine. Courage.', type: 'solidarite' },
  { id: 32, text: 'Amicales pensées. Soyez forts. Nous vous soutenons par la prière.', type: 'solidarite' },

  // --- Document 2 : Intentions de prière personnelles ---
  { id: 33, text: 'Dieu vous aime et vous accueille', type: 'intention' },
  { id: 34, text: 'Stefan, tu voles avec les anges', type: 'intention' },
  { id: 35, text: 'De tout cœur et en prière avec toutes les personnes touchées par cette tragédie !', type: 'intention' },
  { id: 36, text: 'Dieu est là avec vous dans cette épreuve', type: 'intention' },
  { id: 37, text: "Aux victimes : reposez en paix ! Aux blessés, sauveteurs, témoins : trouvez la force d'avancer et nos pensées vont vers vous tous. Il n'est pas facile de trouver les mots. Volez, petits anges !", author: 'ASP', type: 'intention' },
  { id: 38, text: 'En pensées avec vous tous !', author: 'Emma', type: 'intention' },
  { id: 39, text: "Pour les jeunes qui restent : qu'ils trouvent la force de vivre !", type: 'intention' },
  { id: 40, text: 'Pour ceux qui sont partis \u2764', type: 'intention' },
  { id: 41, text: 'Seigneur, apporte soutien, présence et amour !', type: 'intention' },
  { id: 42, text: 'Pour vous les familles !', type: 'intention' },
  { id: 43, text: 'Pour Colette', author: 'Ursula', type: 'intention' },
  { id: 44, text: '\u2764', author: 'Cyria', type: 'intention' },
  { id: 45, text: "Je t'aime K\u2026 tu me manques beaucoup !", type: 'intention' },
  { id: 46, text: 'Je prie pour que les blessés ne souffrent pas trop', type: 'intention' },
  { id: 47, text: "Je pense à toi grand-mère, je t'aime !", type: 'intention' },
  { id: 48, text: 'Bon courage aux familles qui ont perdu leur enfant et qui sont blessés. Je pense à vous.', type: 'intention' },
  { id: 49, text: "De tout cœur et en pensées avec les familles des victimes de ce drame tragique. Vous n'êtes pas seuls.", type: 'intention' },
  { id: 50, text: 'Force et courage à toutes les familles et amis des disparus et des blessés', type: 'intention' },
  { id: 51, text: "Unis à vous tous et toutes : que votre chemin soit parsemé de mille fleurs d'espérance. En pensée et en prière avec toutes les victimes d'ici et d'ailleurs.", type: 'intention' },
]
