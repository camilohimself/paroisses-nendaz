// Script OAuth pour découvrir tous les calendriers du compte
// Nécessite l'autorisation du curé

const { google } = require('googleapis');
const readline = require('readline');

// Configuration OAuth
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000/callback' // URL de callback temporaire
);

// Scopes nécessaires pour lire la liste des calendriers
const SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/calendar.calendars.readonly'
];

async function authorizeAndListCalendars() {
  // Générer l'URL d'autorisation
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('🔐 ÉTAPES POUR DÉCOUVRIR LES CALENDRIERS :\n');
  console.log('1. Envoyer cette URL au curé :');
  console.log('   ', authUrl);
  console.log('\n2. Il doit l\'ouvrir et autoriser l\'application');
  console.log('3. Copier le CODE de l\'URL de redirection');
  console.log('4. Exécuter : node scripts/get-calendars.js [CODE]\n');

  // Si on a le code en argument, continuer
  const authCode = process.argv[2];

  if (authCode) {
    try {
      const { tokens } = await oauth2Client.getToken(authCode);
      oauth2Client.setCredentials(tokens);

      const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

      console.log('📋 CALENDRIERS TROUVÉS :\n');

      const calendarList = await calendar.calendarList.list();
      const calendars = calendarList.data.items || [];

      calendars.forEach((cal, index) => {
        console.log(`${index + 1}. ${cal.summary}`);
        console.log(`   ID: ${cal.id}`);
        console.log(`   Description: ${cal.description || 'Aucune'}`);
        console.log('');
      });

      // Générer la configuration automatiquement
      console.log('🔧 CONFIGURATION À UTILISER :\n');
      console.log('const REAL_CALENDAR_IDS = {');

      calendars.forEach(cal => {
        const slug = cal.summary?.toLowerCase()
          .replace(/[éèê]/g, 'e')
          .replace(/[àâ]/g, 'a')
          .replace(/[ç]/g, 'c')
          .replace(/[ùû]/g, 'u')
          .replace(/[ïî]/g, 'i')
          .replace(/[ôö]/g, 'o')
          .replace(/[^a-z0-9]/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');

        console.log(`  '${slug}': '${cal.id}',`);
      });
      console.log('};');

    } catch (error) {
      console.error('❌ Erreur:', error.message);
    }
  }
}

authorizeAndListCalendars();