// Script pour lister tous les calendriers Google du compte
// À exécuter une seule fois pour découvrir les IDs

const { google } = require('googleapis');

async function listCalendars() {
  try {
    // Utiliser la clé API pour lister les calendriers publics
    const calendar = google.calendar({
      version: 'v3',
      auth: process.env.GOOGLE_API_KEY
    });

    console.log('🔍 Recherche des calendriers disponibles...\n');

    // Cette méthode nécessite OAuth - pour calendriers privés
    // const calendarList = await calendar.calendarList.list();

    // Alternative : tester des IDs probables basés sur le nom du compte
    const possibleCalendarIds = [
      'theodianendaz@gmail.com', // ID principal actuel
      'cure.nendaz@gmail.com',
      'paroisse.nendaz@gmail.com',
      'eglise.basse.nendaz@gmail.com',
      'eglise.haute.nendaz@gmail.com',
      'eglise.veysonnaz@gmail.com',
      'chapelle.beuson@gmail.com',
      'chapelle.brignon@gmail.com',
      'chapelle.saclentse@gmail.com',
      'chapelle.bleusy@gmail.com',
      'chapelle.planchouet@gmail.com',
      'chapelle.clebes@gmail.com',
      // Ajouter d'autres IDs probables...
    ];

    console.log('🧪 Test des calendriers possibles :\n');

    for (const calendarId of possibleCalendarIds) {
      try {
        const events = await calendar.events.list({
          calendarId: calendarId,
          timeMin: (new Date()).toISOString(),
          maxResults: 1,
          singleEvents: true,
          orderBy: 'startTime'
        });

        console.log(`✅ ${calendarId} - ACCESSIBLE`);
        if (events.data.items && events.data.items.length > 0) {
          console.log(`   📅 Dernier événement: ${events.data.items[0].summary}`);
        }
      } catch (error) {
        console.log(`❌ ${calendarId} - NON ACCESSIBLE`);
      }
    }

  } catch (error) {
    console.error('❌ Erreur:', error.message);

    console.log(`
📋 MARCHE À SUIVRE MANUELLE :

1. Se connecter à Google Calendar avec le compte du curé
2. Aller sur https://calendar.google.com/calendar/u/0/r/settings
3. Dans la sidebar gauche, cliquer sur chaque calendrier
4. Copier "ID du calendrier" de chacun
5. Les noter dans ce format :

SECTEUR NENDAZ:
- Église Basse-Nendaz: [ID_À_COPIER]
- Église Haute-Nendaz: [ID_À_COPIER]
- Chapelle Beuson: [ID_À_COPIER]
- etc...

SECTEUR VEYSONNAZ:
- Église Veysonnaz: [ID_À_COPIER]
- etc...
    `);
  }
}

// Exécution du script
if (require.main === module) {
  listCalendars();
}

module.exports = { listCalendars };