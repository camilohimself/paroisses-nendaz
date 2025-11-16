const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const qrCodes = [
  {
    name: '00-avent-pelerins-sur-la-terre.jpg',
    url: 'https://m.youtube.com/watch?v=bfhW9hRddOg&list=RDbfhW9hRddOg&start_radio=1&pp=ygUWUMOobGVyaW5zIHN1ciBsYSB0ZXJyZaAHAdIHCQkDCgGHKiGM7w%3D%3D',
    label: 'Pour l\'Avent : Pèlerins sur la terre'
  },
  {
    name: '01-semaine1-dans-la-lumiere-de-dieu.jpg',
    url: 'https://youtu.be/fOJoUI_IA4s',
    label: '1ère semaine : Dans la lumière de Dieu'
  },
  {
    name: '02-semaine2-jai-confiance.jpg',
    url: 'https://m.youtube.com/watch?v=rIjW99MJf7w&list=RDrIjW99MJf7w&start_radio=1&pp=oAcB',
    label: '2ème semaine : J\'ai confiance, je ne crains pas'
  },
  {
    name: '03-semaine3-messagers-de-la-joie.jpg',
    url: 'https://youtu.be/QaEnLdiCCLM',
    label: '3ème semaine : Messagers de la joie'
  },
  {
    name: '04-semaine4-comment-ne-pas-te-louer.jpg',
    url: 'https://m.youtube.com/watch?v=H06KAewLhaY&list=RDH06KAewLhaY&start_radio=1&pp=oAcB',
    label: '4ème semaine : Comment ne pas te louer'
  }
];

const outputDir = path.join(__dirname, 'qr-codes');

async function generateQRCodes() {
  console.log('🎨 Génération des QR codes...\n');

  for (const qr of qrCodes) {
    const outputPath = path.join(outputDir, qr.name);

    try {
      // Générer QR code en JPEG
      await QRCode.toFile(outputPath, qr.url, {
        type: 'jpeg',
        quality: 0.95,
        width: 500,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H'
      });

      console.log(`✅ ${qr.label}`);
      console.log(`   → ${qr.name}`);
      console.log(`   → ${qr.url}\n`);
    } catch (err) {
      console.error(`❌ Erreur pour ${qr.name}:`, err);
    }
  }

  console.log(`\n🎯 ${qrCodes.length} QR codes générés dans: qr-codes/`);
}

generateQRCodes();
