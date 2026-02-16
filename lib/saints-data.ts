/**
 * Calendrier des Saints 2026
 * Clé: "MM-DD" (ex: "01-07" pour 7 janvier)
 * Mise à jour automatique côté client selon la date du navigateur
 *
 * Note liturgique : Les dimanches priment toujours sur les saints.
 * Chaque dimanche est "jour du Seigneur" (Résurrection) et porte
 * son propre nom liturgique selon le temps (Ordinaire, Carême, Pâques, Avent).
 */

import { SaintEnrichi, SAINTS_ENRICHIS_2026 } from './saints-enrichis-data';

export type { SaintEnrichi };

export interface SaintDuJour {
  nom: string;
  estFete?: boolean; // true si c'est une fête liturgique majeure
  estDimanche?: boolean; // true si c'est un dimanche liturgique
}

/**
 * Dimanches liturgiques 2026 (Année A)
 * Le dimanche prime toujours sur le saint du jour.
 * Source : Calendrier romain général, diocèse de Sion (Valais)
 */
export const DIMANCHES_2026: Record<string, SaintDuJour> = {
  // ========== JANVIER ==========
  "01-04": { nom: "2e Dimanche après Noël", estFete: true, estDimanche: true },
  "01-11": { nom: "Baptême du Seigneur", estFete: true, estDimanche: true },
  "01-18": { nom: "2e Dimanche du Temps Ordinaire", estDimanche: true },
  "01-25": { nom: "3e Dimanche du Temps Ordinaire", estDimanche: true },

  // ========== FÉVRIER ==========
  "02-01": { nom: "4e Dimanche du Temps Ordinaire", estDimanche: true },
  "02-08": { nom: "5e Dimanche du Temps Ordinaire", estDimanche: true },
  "02-15": { nom: "6e Dimanche du Temps Ordinaire", estDimanche: true },
  "02-22": { nom: "1er Dimanche de Carême", estFete: true, estDimanche: true },

  // ========== MARS ==========
  "03-01": { nom: "2e Dimanche de Carême", estFete: true, estDimanche: true },
  "03-08": { nom: "3e Dimanche de Carême", estFete: true, estDimanche: true },
  "03-15": { nom: "4e Dimanche de Carême (Laetare)", estFete: true, estDimanche: true },
  "03-22": { nom: "5e Dimanche de Carême", estFete: true, estDimanche: true },
  "03-29": { nom: "Dimanche des Rameaux et de la Passion", estFete: true, estDimanche: true },

  // ========== AVRIL ==========
  "04-05": { nom: "Pâques — Résurrection du Seigneur", estFete: true, estDimanche: true },
  "04-12": { nom: "2e Dimanche de Pâques (Miséricorde divine)", estFete: true, estDimanche: true },
  "04-19": { nom: "3e Dimanche de Pâques", estFete: true, estDimanche: true },
  "04-26": { nom: "4e Dimanche de Pâques", estFete: true, estDimanche: true },

  // ========== MAI ==========
  "05-03": { nom: "5e Dimanche de Pâques", estFete: true, estDimanche: true },
  "05-10": { nom: "6e Dimanche de Pâques", estFete: true, estDimanche: true },
  "05-17": { nom: "7e Dimanche de Pâques", estFete: true, estDimanche: true },
  "05-24": { nom: "Dimanche de la Pentecôte", estFete: true, estDimanche: true },
  "05-31": { nom: "La Très Sainte Trinité", estFete: true, estDimanche: true },

  // ========== JUIN ==========
  "06-07": { nom: "10e Dimanche du Temps Ordinaire", estDimanche: true },
  "06-14": { nom: "11e Dimanche du Temps Ordinaire", estDimanche: true },
  "06-21": { nom: "12e Dimanche du Temps Ordinaire", estDimanche: true },
  "06-28": { nom: "13e Dimanche du Temps Ordinaire", estDimanche: true },

  // ========== JUILLET ==========
  "07-05": { nom: "14e Dimanche du Temps Ordinaire", estDimanche: true },
  "07-12": { nom: "15e Dimanche du Temps Ordinaire", estDimanche: true },
  "07-19": { nom: "16e Dimanche du Temps Ordinaire", estDimanche: true },
  "07-26": { nom: "17e Dimanche du Temps Ordinaire", estDimanche: true },

  // ========== AOÛT ==========
  "08-02": { nom: "18e Dimanche du Temps Ordinaire", estDimanche: true },
  "08-09": { nom: "19e Dimanche du Temps Ordinaire", estDimanche: true },
  "08-16": { nom: "20e Dimanche du Temps Ordinaire", estDimanche: true },
  "08-23": { nom: "21e Dimanche du Temps Ordinaire", estDimanche: true },
  "08-30": { nom: "22e Dimanche du Temps Ordinaire", estDimanche: true },

  // ========== SEPTEMBRE ==========
  "09-06": { nom: "23e Dimanche du Temps Ordinaire", estDimanche: true },
  "09-13": { nom: "24e Dimanche du Temps Ordinaire", estDimanche: true },
  "09-20": { nom: "25e Dimanche du Temps Ordinaire", estDimanche: true },
  "09-27": { nom: "26e Dimanche du Temps Ordinaire", estDimanche: true },

  // ========== OCTOBRE ==========
  "10-04": { nom: "27e Dimanche du Temps Ordinaire", estDimanche: true },
  "10-11": { nom: "28e Dimanche du Temps Ordinaire", estDimanche: true },
  "10-18": { nom: "29e Dimanche du Temps Ordinaire", estDimanche: true },
  "10-25": { nom: "30e Dimanche du Temps Ordinaire", estDimanche: true },

  // ========== NOVEMBRE ==========
  "11-01": { nom: "Toussaint", estFete: true, estDimanche: true },
  "11-08": { nom: "32e Dimanche du Temps Ordinaire", estDimanche: true },
  "11-15": { nom: "33e Dimanche du Temps Ordinaire", estDimanche: true },
  "11-22": { nom: "Le Christ, Roi de l'Univers", estFete: true, estDimanche: true },
  "11-29": { nom: "1er Dimanche de l'Avent", estFete: true, estDimanche: true },

  // ========== DÉCEMBRE ==========
  "12-06": { nom: "2e Dimanche de l'Avent", estFete: true, estDimanche: true },
  "12-13": { nom: "3e Dimanche de l'Avent (Gaudete)", estFete: true, estDimanche: true },
  "12-20": { nom: "4e Dimanche de l'Avent", estFete: true, estDimanche: true },
  "12-27": { nom: "Sainte Famille de Jésus, Marie et Joseph", estFete: true, estDimanche: true },
};

export const SAINTS_2026: Record<string, SaintDuJour> = {
  // ========== JANVIER ==========
  "01-01": { nom: "Sainte Marie Mère de Dieu", estFete: true },
  "01-02": { nom: "Saints Basile et Grégoire" },
  "01-03": { nom: "Sainte Geneviève" },
  "01-04": { nom: "Saint Odilon" },
  "01-05": { nom: "Saint Édouard" },
  "01-06": { nom: "Épiphanie du Seigneur", estFete: true },
  "01-07": { nom: "Saint Raymond" },
  "01-08": { nom: "Saint Lucien" },
  "01-09": { nom: "Sainte Alix" },
  "01-10": { nom: "Saint Guillaume" },
  "01-11": { nom: "Saint Paulin / Baptême du Seigneur", estFete: true },
  "01-12": { nom: "Sainte Tatiana" },
  "01-13": { nom: "Sainte Yvette" },
  "01-14": { nom: "Sainte Nina" },
  "01-15": { nom: "Saint Rémi" },
  "01-16": { nom: "Saint Marcel" },
  "01-17": { nom: "Sainte Roseline" },
  "01-18": { nom: "Sainte Prisca" },
  "01-19": { nom: "Saint Marius" },
  "01-20": { nom: "Saint Sébastien" },
  "01-21": { nom: "Sainte Agnès" },
  "01-22": { nom: "Saint Vincent" },
  "01-23": { nom: "Saint Barnard" },
  "01-24": { nom: "Saint François de Sales" },
  "01-25": { nom: "Conversion de Saint Paul", estFete: true },
  "01-26": { nom: "Sainte Paule / Saints Timothée et Tite" },
  "01-27": { nom: "Sainte Angèle" },
  "01-28": { nom: "Saint Thomas d'Aquin" },
  "01-29": { nom: "Saint Gildas" },
  "01-30": { nom: "Sainte Martine" },
  "01-31": { nom: "Sainte Marcelle" },

  // ========== FÉVRIER ==========
  "02-01": { nom: "Sainte Ella" },
  "02-02": { nom: "Présentation du Seigneur (Chandeleur)", estFete: true },
  "02-03": { nom: "Saint Blaise" },
  "02-04": { nom: "Sainte Véronique" },
  "02-05": { nom: "Sainte Agathe" },
  "02-06": { nom: "Saint Gaston" },
  "02-07": { nom: "Sainte Eugénie" },
  "02-08": { nom: "Sainte Jacqueline" },
  "02-09": { nom: "Sainte Apolline" },
  "02-10": { nom: "Saint Arnaud" },
  "02-11": { nom: "Notre Dame de Lourdes", estFete: true },
  "02-12": { nom: "Saint Félix" },
  "02-13": { nom: "Sainte Béatrice" },
  "02-14": { nom: "Saint Valentin (Saints Cyrille et Méthode)" },
  "02-15": { nom: "Saint Claude" },
  "02-16": { nom: "Sainte Julienne" },
  "02-17": { nom: "Saint Alexis (Mardi Gras)" },
  "02-18": { nom: "Mercredi des Cendres", estFete: true },
  "02-19": { nom: "Saint Gabin" },
  "02-20": { nom: "Sainte Aimée" },
  "02-21": { nom: "Saint Pierre Damien" },
  "02-22": { nom: "Chaire de Saint Pierre", estFete: true },
  "02-23": { nom: "Saint Lazare" },
  "02-24": { nom: "Saint Modeste" },
  "02-25": { nom: "Saint Roméo" },
  "02-26": { nom: "Saint Nestor" },
  "02-27": { nom: "Sainte Honorine" },
  "02-28": { nom: "Saint Romain" },

  // ========== MARS ==========
  "03-01": { nom: "Saint Aubin" },
  "03-02": { nom: "Saint Charles le Bon" },
  "03-03": { nom: "Saint Guénolé" },
  "03-04": { nom: "Saint Casimir" },
  "03-05": { nom: "Sainte Olive" },
  "03-06": { nom: "Sainte Colette" },
  "03-07": { nom: "Sainte Félicité" },
  "03-08": { nom: "Saint Jean de Dieu" },
  "03-09": { nom: "Sainte Françoise" },
  "03-10": { nom: "Saint Vivien" },
  "03-11": { nom: "Sainte Rosine" },
  "03-12": { nom: "Sainte Justine" },
  "03-13": { nom: "Saint Rodrigue" },
  "03-14": { nom: "Sainte Mathilde" },
  "03-15": { nom: "Sainte Louise" },
  "03-16": { nom: "Sainte Bénédicte" },
  "03-17": { nom: "Saint Patrice (Patrick)" },
  "03-18": { nom: "Saint Cyrille" },
  "03-19": { nom: "Saint Joseph", estFete: true },
  "03-20": { nom: "Saint Herbert (Printemps)" },
  "03-21": { nom: "Sainte Clémence" },
  "03-22": { nom: "Sainte Léa" },
  "03-23": { nom: "Saint Victorien" },
  "03-24": { nom: "Sainte Catherine de Suède" },
  "03-25": { nom: "Annonciation du Seigneur", estFete: true },
  "03-26": { nom: "Sainte Larissa" },
  "03-27": { nom: "Saint Habib" },
  "03-28": { nom: "Saint Gontran" },
  "03-29": { nom: "Dimanche des Rameaux", estFete: true },
  "03-30": { nom: "Saint Amédée" },
  "03-31": { nom: "Saint Benjamin" },

  // ========== AVRIL ==========
  "04-01": { nom: "Saint Hugues" },
  "04-02": { nom: "Sainte Sandrine / Jeudi Saint", estFete: true },
  "04-03": { nom: "Vendredi Saint", estFete: true },
  "04-04": { nom: "Samedi Saint", estFete: true },
  "04-05": { nom: "Pâques - Résurrection du Seigneur", estFete: true },
  "04-06": { nom: "Lundi de Pâques", estFete: true },
  "04-07": { nom: "Saint Jean-Baptiste de la Salle" },
  "04-08": { nom: "Sainte Julie" },
  "04-09": { nom: "Saint Gautier" },
  "04-10": { nom: "Saint Fulbert" },
  "04-11": { nom: "Saint Stanislas" },
  "04-12": { nom: "Divine Miséricorde", estFete: true },
  "04-13": { nom: "Sainte Ida" },
  "04-14": { nom: "Saint Maxime" },
  "04-15": { nom: "Saint Paterne" },
  "04-16": { nom: "Saint Benoît-Joseph" },
  "04-17": { nom: "Saint Anicet" },
  "04-18": { nom: "Saint Parfait" },
  "04-19": { nom: "Sainte Emma" },
  "04-20": { nom: "Sainte Odette" },
  "04-21": { nom: "Saint Anselme" },
  "04-22": { nom: "Saint Alexandre" },
  "04-23": { nom: "Saint Georges" },
  "04-24": { nom: "Saint Fidèle" },
  "04-25": { nom: "Saint Marc (Évangéliste)", estFete: true },
  "04-26": { nom: "Sainte Alida" },
  "04-27": { nom: "Sainte Zita" },
  "04-28": { nom: "Sainte Valérie" },
  "04-29": { nom: "Sainte Catherine de Sienne" },
  "04-30": { nom: "Saint Robert" },

  // ========== MAI ==========
  "05-01": { nom: "Saint Joseph Artisan", estFete: true },
  "05-02": { nom: "Saint Boris" },
  "05-03": { nom: "Saints Philippe et Jacques", estFete: true },
  "05-04": { nom: "Saint Sylvain" },
  "05-05": { nom: "Sainte Judith" },
  "05-06": { nom: "Sainte Prudence" },
  "05-07": { nom: "Sainte Gisèle" },
  "05-08": { nom: "Saint Désiré (Armistice 1945)" },
  "05-09": { nom: "Saint Pacôme" },
  "05-10": { nom: "Sainte Solange" },
  "05-11": { nom: "Sainte Estelle" },
  "05-12": { nom: "Saint Achille" },
  "05-13": { nom: "Notre Dame de Fatima", estFete: true },
  "05-14": { nom: "Ascension du Seigneur", estFete: true },
  "05-15": { nom: "Sainte Denise" },
  "05-16": { nom: "Saint Honoré" },
  "05-17": { nom: "Saint Pascal" },
  "05-18": { nom: "Saint Éric" },
  "05-19": { nom: "Saint Yves" },
  "05-20": { nom: "Saint Bernardin" },
  "05-21": { nom: "Saint Constantin" },
  "05-22": { nom: "Sainte Émile" },
  "05-23": { nom: "Saint Didier" },
  "05-24": { nom: "Pentecôte", estFete: true },
  "05-25": { nom: "Lundi de Pentecôte", estFete: true },
  "05-26": { nom: "Saint Bérenger" },
  "05-27": { nom: "Saint Augustin" },
  "05-28": { nom: "Saint Germain" },
  "05-29": { nom: "Saint Aymard" },
  "05-30": { nom: "Saint Ferdinand" },
  "05-31": { nom: "Visitation de la Vierge Marie / Sainte Trinité", estFete: true },

  // ========== JUIN ==========
  "06-01": { nom: "Saint Justin" },
  "06-02": { nom: "Sainte Blandine" },
  "06-03": { nom: "Saint Kévin" },
  "06-04": { nom: "Sainte Clotilde" },
  "06-05": { nom: "Saint Igor" },
  "06-06": { nom: "Saint Norbert" },
  "06-07": { nom: "Saint-Sacrement (Fête-Dieu)", estFete: true },
  "06-08": { nom: "Saint Médard" },
  "06-09": { nom: "Sainte Diane" },
  "06-10": { nom: "Saint Landry" },
  "06-11": { nom: "Saint Barnabé" },
  "06-12": { nom: "Sacré-Cœur de Jésus", estFete: true },
  "06-13": { nom: "Saint Antoine de Padoue" },
  "06-14": { nom: "Saint Élisée" },
  "06-15": { nom: "Sainte Germaine" },
  "06-16": { nom: "Saint Jean-François Régis" },
  "06-17": { nom: "Saint Hervé" },
  "06-18": { nom: "Saint Léonce" },
  "06-19": { nom: "Saint Romuald" },
  "06-20": { nom: "Saint Silvère" },
  "06-21": { nom: "Saint Rodolphe (Fête des Pères)" },
  "06-22": { nom: "Saint Alban" },
  "06-23": { nom: "Sainte Audrey" },
  "06-24": { nom: "Nativité de Saint Jean-Baptiste", estFete: true },
  "06-25": { nom: "Saint Prosper" },
  "06-26": { nom: "Saint Anthelme" },
  "06-27": { nom: "Saint Fernand" },
  "06-28": { nom: "Saint Irénée" },
  "06-29": { nom: "Saints Pierre et Paul", estFete: true },
  "06-30": { nom: "Saint Martial" },

  // ========== JUILLET ==========
  "07-01": { nom: "Saint Thierry" },
  "07-02": { nom: "Saint Martinien" },
  "07-03": { nom: "Saint Thomas" },
  "07-04": { nom: "Saint Florent" },
  "07-05": { nom: "Saint Antoine" },
  "07-06": { nom: "Sainte Mariette" },
  "07-07": { nom: "Saint Raoul" },
  "07-08": { nom: "Saint Thibault" },
  "07-09": { nom: "Sainte Amandine" },
  "07-10": { nom: "Saint Ulrich" },
  "07-11": { nom: "Saint Benoît" },
  "07-12": { nom: "Saint Olivier" },
  "07-13": { nom: "Saints Henri et Joël" },
  "07-14": { nom: "Saint Camille / Fête Nationale" },
  "07-15": { nom: "Saint Donald" },
  "07-16": { nom: "Notre Dame du Mont Carmel", estFete: true },
  "07-17": { nom: "Sainte Charlotte" },
  "07-18": { nom: "Saint Frédéric" },
  "07-19": { nom: "Saint Arsène" },
  "07-20": { nom: "Sainte Marina" },
  "07-21": { nom: "Saint Victor" },
  "07-22": { nom: "Sainte Marie-Madeleine", estFete: true },
  "07-23": { nom: "Sainte Brigitte" },
  "07-24": { nom: "Sainte Christine" },
  "07-25": { nom: "Saint Jacques le Majeur", estFete: true },
  "07-26": { nom: "Sainte Anne et Saint Joachim", estFete: true },
  "07-27": { nom: "Sainte Nathalie" },
  "07-28": { nom: "Saint Samson" },
  "07-29": { nom: "Sainte Marthe" },
  "07-30": { nom: "Sainte Juliette" },
  "07-31": { nom: "Saint Ignace de Loyola" },

  // ========== AOÛT ==========
  "08-01": { nom: "Saint Alphonse" },
  "08-02": { nom: "Saint Julien" },
  "08-03": { nom: "Sainte Lydie" },
  "08-04": { nom: "Saint Jean-Marie Vianney (Curé d'Ars)", estFete: true },
  "08-05": { nom: "Saint Abel" },
  "08-06": { nom: "Transfiguration du Seigneur", estFete: true },
  "08-07": { nom: "Saint Gaétan" },
  "08-08": { nom: "Saint Dominique" },
  "08-09": { nom: "Saint Amour" },
  "08-10": { nom: "Saint Laurent" },
  "08-11": { nom: "Sainte Claire" },
  "08-12": { nom: "Sainte Clarisse" },
  "08-13": { nom: "Saint Hippolyte" },
  "08-14": { nom: "Saint Maximilien Kolbe" },
  "08-15": { nom: "Assomption de la Vierge Marie", estFete: true },
  "08-16": { nom: "Saint Armel" },
  "08-17": { nom: "Saint Hyacinthe" },
  "08-18": { nom: "Sainte Hélène" },
  "08-19": { nom: "Saint Jean Eudes" },
  "08-20": { nom: "Saint Bernard" },
  "08-21": { nom: "Saint Christophe" },
  "08-22": { nom: "Saint Fabrice / Marie Reine", estFete: true },
  "08-23": { nom: "Sainte Rose de Lima" },
  "08-24": { nom: "Saint Barthélémy", estFete: true },
  "08-25": { nom: "Saint Louis" },
  "08-26": { nom: "Sainte Natacha" },
  "08-27": { nom: "Sainte Monique" },
  "08-28": { nom: "Saint Augustin" },
  "08-29": { nom: "Sainte Sabine / Martyre de St Jean-Baptiste", estFete: true },
  "08-30": { nom: "Saint Fiacre" },
  "08-31": { nom: "Saint Aristide" },

  // ========== SEPTEMBRE ==========
  "09-01": { nom: "Saint Gilles" },
  "09-02": { nom: "Sainte Ingrid" },
  "09-03": { nom: "Saint Grégoire" },
  "09-04": { nom: "Sainte Rosalie" },
  "09-05": { nom: "Sainte Raïssa" },
  "09-06": { nom: "Saint Bertrand" },
  "09-07": { nom: "Sainte Reine" },
  "09-08": { nom: "Nativité de la Vierge Marie", estFete: true },
  "09-09": { nom: "Saint Alain" },
  "09-10": { nom: "Sainte Inès" },
  "09-11": { nom: "Saint Adelphe" },
  "09-12": { nom: "Saint Apollinaire" },
  "09-13": { nom: "Saint Aimé" },
  "09-14": { nom: "La Croix Glorieuse", estFete: true },
  "09-15": { nom: "Saint Roland / Notre Dame des Douleurs", estFete: true },
  "09-16": { nom: "Sainte Édith" },
  "09-17": { nom: "Saint Renaud" },
  "09-18": { nom: "Sainte Nadège" },
  "09-19": { nom: "Sainte Émilie" },
  "09-20": { nom: "Saint Davy" },
  "09-21": { nom: "Saint Matthieu", estFete: true },
  "09-22": { nom: "Saint Maurice" },
  "09-23": { nom: "Saint Constant" },
  "09-24": { nom: "Sainte Thècle" },
  "09-25": { nom: "Saint Hermann" },
  "09-26": { nom: "Saint Côme et Saint Damien" },
  "09-27": { nom: "Saint Vincent de Paul" },
  "09-28": { nom: "Saint Venceslas" },
  "09-29": { nom: "Saints Michel, Gabriel, Raphaël (Archanges)", estFete: true },
  "09-30": { nom: "Saint Jérôme" },

  // ========== OCTOBRE ==========
  "10-01": { nom: "Sainte Thérèse de l'Enfant Jésus", estFete: true },
  "10-02": { nom: "Saint Léger" },
  "10-03": { nom: "Saint Gérard" },
  "10-04": { nom: "Saint François d'Assise", estFete: true },
  "10-05": { nom: "Sainte Fleur" },
  "10-06": { nom: "Saint Bruno" },
  "10-07": { nom: "Saint Serge / Notre Dame du Rosaire", estFete: true },
  "10-08": { nom: "Sainte Pélagie" },
  "10-09": { nom: "Saint Denis" },
  "10-10": { nom: "Saint Ghislain" },
  "10-11": { nom: "Saint Firmin" },
  "10-12": { nom: "Saint Wilfried" },
  "10-13": { nom: "Saint Géraud" },
  "10-14": { nom: "Saint Juste" },
  "10-15": { nom: "Sainte Thérèse d'Avila", estFete: true },
  "10-16": { nom: "Sainte Edwige" },
  "10-17": { nom: "Saint Baudouin" },
  "10-18": { nom: "Saint Luc", estFete: true },
  "10-19": { nom: "Saint René" },
  "10-20": { nom: "Sainte Adeline" },
  "10-21": { nom: "Sainte Céline" },
  "10-22": { nom: "Sainte Élodie" },
  "10-23": { nom: "Saint Jean de Capistran" },
  "10-24": { nom: "Saint Florentin" },
  "10-25": { nom: "Saint Crépin" },
  "10-26": { nom: "Saint Dimitri" },
  "10-27": { nom: "Sainte Émeline" },
  "10-28": { nom: "Saints Simon et Jude", estFete: true },
  "10-29": { nom: "Saint Narcisse" },
  "10-30": { nom: "Sainte Bienvenue" },
  "10-31": { nom: "Saint Quentin" },

  // ========== NOVEMBRE ==========
  "11-01": { nom: "Toussaint", estFete: true },
  "11-02": { nom: "Commémoration des Défunts", estFete: true },
  "11-03": { nom: "Saint Hubert" },
  "11-04": { nom: "Saint Charles Borromée" },
  "11-05": { nom: "Sainte Sylvie" },
  "11-06": { nom: "Sainte Bertille" },
  "11-07": { nom: "Sainte Carine" },
  "11-08": { nom: "Saint Geoffroy" },
  "11-09": { nom: "Saint Théodore" },
  "11-10": { nom: "Saint Léon" },
  "11-11": { nom: "Saint Martin" },
  "11-12": { nom: "Saint Christian" },
  "11-13": { nom: "Saint Brice" },
  "11-14": { nom: "Saint Sidoine" },
  "11-15": { nom: "Saint Albert" },
  "11-16": { nom: "Sainte Marguerite" },
  "11-17": { nom: "Sainte Élisabeth" },
  "11-18": { nom: "Sainte Aude" },
  "11-19": { nom: "Saint Tanguy" },
  "11-20": { nom: "Saint Edmond" },
  "11-21": { nom: "Présentation de Marie", estFete: true },
  "11-22": { nom: "Christ Roi de l'Univers", estFete: true },
  "11-23": { nom: "Saint Clément" },
  "11-24": { nom: "Sainte Flora" },
  "11-25": { nom: "Sainte Catherine" },
  "11-26": { nom: "Sainte Delphine" },
  "11-27": { nom: "Saint Séverin" },
  "11-28": { nom: "Saint Jacques de la Marche" },
  "11-29": { nom: "1er Dimanche de l'Avent", estFete: true },
  "11-30": { nom: "Saint André", estFete: true },

  // ========== DÉCEMBRE ==========
  "12-01": { nom: "Sainte Florence" },
  "12-02": { nom: "Sainte Viviane" },
  "12-03": { nom: "Saint François-Xavier" },
  "12-04": { nom: "Sainte Barbe" },
  "12-05": { nom: "Saint Gérald" },
  "12-06": { nom: "Saint Nicolas" },
  "12-07": { nom: "Saint Ambroise" },
  "12-08": { nom: "Immaculée Conception", estFete: true },
  "12-09": { nom: "Saint Pierre Fourier" },
  "12-10": { nom: "Saint Romaric" },
  "12-11": { nom: "Saint Daniel" },
  "12-12": { nom: "Sainte Jeanne-Françoise de Chantal" },
  "12-13": { nom: "Sainte Lucie" },
  "12-14": { nom: "Sainte Odile" },
  "12-15": { nom: "Sainte Ninon" },
  "12-16": { nom: "Sainte Alice" },
  "12-17": { nom: "Saint Gaël" },
  "12-18": { nom: "Saint Gatien" },
  "12-19": { nom: "Saint Urbain" },
  "12-20": { nom: "Saint Théophile" },
  "12-21": { nom: "Saint Pierre Canisius" },
  "12-22": { nom: "Sainte Françoise-Xavière" },
  "12-23": { nom: "Saint Armand" },
  "12-24": { nom: "Sainte Adèle (Nuit de Noël)", estFete: true },
  "12-25": { nom: "Noël - Nativité du Seigneur", estFete: true },
  "12-26": { nom: "Saint Étienne", estFete: true },
  "12-27": { nom: "Sainte Famille / Saint Jean l'Évangéliste", estFete: true },
  "12-28": { nom: "Saints Innocents", estFete: true },
  "12-29": { nom: "Saint David" },
  "12-30": { nom: "Saint Roger" },
  "12-31": { nom: "Saint Sylvestre" },
};

/**
 * Retourne la célébration du jour pour une date donnée.
 * Le dimanche prime toujours sur le saint : on affiche le nom
 * liturgique du dimanche (ex: "6e Dimanche du Temps Ordinaire").
 * @param date - Date (par défaut: aujourd'hui)
 */
export function getSaintDuJour(date: Date = new Date()): SaintDuJour | null {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const key = `${month}-${day}`;

  // Le dimanche prime toujours sur le saint du jour
  if (date.getDay() === 0 && DIMANCHES_2026[key]) {
    return DIMANCHES_2026[key];
  }

  return SAINTS_2026[key] || null;
}

/**
 * Retourne les saints enrichis du jour (avec descriptions et prières).
 * Disponible du 16 fév au 31 déc 2026.
 * Retourne null si pas de données enrichies pour cette date.
 * Le dimanche, retourne null (on affiche le nom liturgique via getSaintDuJour).
 */
export function getSaintsEnrichis(date: Date = new Date()): SaintEnrichi[] | null {
  // Le dimanche prime : pas de saints enrichis
  if (date.getDay() === 0) return null;

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const key = `${month}-${day}`;

  return SAINTS_ENRICHIS_2026[key] || null;
}

/**
 * Retourne la date formatée en français
 * @param date - Date (par défaut: aujourd'hui)
 */
export function getDateFormatee(date: Date = new Date()): string {
  return date.toLocaleDateString('fr-CH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}
