/**
 * Script d'optimisation des images pour les paroisses
 * Génère les versions WebP + JPEG optimisées pour hero et galerie
 *
 * Usage: npx tsx scripts/optimize-images.ts
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Configuration des dimensions
const DIMENSIONS = {
  hero: {
    desktop: { width: 1920, height: 800, fit: 'cover' as const },
    mobile: { width: 768, height: 500, fit: 'cover' as const },
  },
  gallery: {
    desktop: { width: 600, height: 400, fit: 'cover' as const },
  }
};

// Qualité des compressions
const QUALITY = {
  webp: 85,
  jpeg: 85,
};

// Mapping des images basé sur IMAGE_MAPPING.md
interface ImageMapping {
  id: string;
  name: string;
  hero: string;
  gallery: string[];
}

const IMAGE_MAPPINGS: ImageMapping[] = [
  {
    id: 'basse-nendaz',
    name: 'Église de Basse-Nendaz',
    hero: 'eglisebassenendaz.JPG',
    gallery: ['eglisebassenendaz3.jpg', 'eglisebassenendaz5.JPG', 'eglisebassenendaz6.JPG', 'eglisebassenendaz8.JPG']
  },
  {
    id: 'haute-nendaz',
    name: 'Église de Haute-Nendaz',
    hero: 'HN.png',
    gallery: ['eglisehautenendaz.JPG']
  },
  {
    id: 'aproz',
    name: "Église d'Aproz",
    hero: 'egliseaproz.JPG',
    gallery: ['ebliseaproz1.JPG', 'egliseaproz2.JPG', 'egliseaproz3.JPG', 'egliseaproz4.JPG']
  },
  {
    id: 'fey',
    name: 'Église de Fey',
    hero: 'eglisefey.JPG',
    gallery: []
  },
  {
    id: 'veysonnaz',
    name: 'Église de Veysonnaz',
    hero: 'egliseveysonnaz.JPG',
    gallery: []
  },
  {
    id: 'beuson',
    name: 'Chapelle de Beuson',
    hero: 'chapellebeuson2.JPG',
    gallery: ['chapellebeuson3.jpg', 'chapellebeuson4.jpg']
  },
  {
    id: 'brignon',
    name: 'Chapelle de Brignon',
    hero: 'chapellebrignon.JPG',
    gallery: []
  },
  {
    id: 'saclentse',
    name: 'Chapelle de Saclentse',
    hero: 'chapellesaclentse.JPG',
    gallery: []
  },
  {
    id: 'planchouet',
    name: 'Chapelle de Planchouet',
    hero: 'chapelleplanchouet.JPG',
    gallery: []
  },
  {
    id: 'rairettes',
    name: 'Chapelle des Rairettes',
    hero: 'chapellerairettes.JPG',
    gallery: []
  },
  {
    id: 'bleusy',
    name: 'Chapelle du Bleusy',
    hero: 'chapellebleusy.jpg',
    gallery: []
  },
  {
    id: 'condemines',
    name: 'Chapelle des Condémines',
    hero: 'chapellecondemines.JPG',
    gallery: []
  },
  {
    id: 'baar',
    name: 'Chapelle de Baar',
    hero: 'chapellebaar.jpg',
    gallery: []
  },
  {
    id: 'clebes',
    name: 'Chapelle de Clèbes',
    hero: 'chapellecleb.jpg',
    gallery: []
  },
  {
    id: 'saint-sebastien',
    name: 'Chapelle Saint-Sébastien',
    hero: 'chapellestsebastienbassenendaz.jpg',
    gallery: []
  },
  {
    id: 'saint-michel',
    name: 'Chapelle Saint-Michel',
    hero: 'chapellehaute-nendaz.jpg',
    gallery: []
  },
  {
    id: 'saint-barthelemy',
    name: 'Chapelle Saint-Barthélémy',
    hero: 'chapellecleuson.JPG',
    gallery: []
  }
];

// Chemins
const SOURCE_DIR = '/Users/camilorivera/WORKSPACE-OSOM/PROJETS-EXTERNES/PAROISSES_NENDAZ/media-siteweb/Eglises et Chapelle';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images', 'paroisses');

/**
 * Optimise une image pour le hero (desktop + mobile)
 */
async function optimizeHeroImage(sourcePath: string, outputDir: string): Promise<void> {
  console.log(`  📸 Optimizing hero: ${path.basename(sourcePath)}`);

  // Hero Desktop - WebP
  await sharp(sourcePath)
    .resize(DIMENSIONS.hero.desktop.width, DIMENSIONS.hero.desktop.height, {
      fit: DIMENSIONS.hero.desktop.fit,
      position: 'center'
    })
    .webp({ quality: QUALITY.webp })
    .toFile(path.join(outputDir, 'hero-desktop.webp'));

  // Hero Desktop - JPEG fallback
  await sharp(sourcePath)
    .resize(DIMENSIONS.hero.desktop.width, DIMENSIONS.hero.desktop.height, {
      fit: DIMENSIONS.hero.desktop.fit,
      position: 'center'
    })
    .jpeg({ quality: QUALITY.jpeg, progressive: true })
    .toFile(path.join(outputDir, 'hero-desktop.jpg'));

  // Hero Mobile - WebP
  await sharp(sourcePath)
    .resize(DIMENSIONS.hero.mobile.width, DIMENSIONS.hero.mobile.height, {
      fit: DIMENSIONS.hero.mobile.fit,
      position: 'center'
    })
    .webp({ quality: QUALITY.webp })
    .toFile(path.join(outputDir, 'hero-mobile.webp'));

  // Hero Mobile - JPEG fallback
  await sharp(sourcePath)
    .resize(DIMENSIONS.hero.mobile.width, DIMENSIONS.hero.mobile.height, {
      fit: DIMENSIONS.hero.mobile.fit,
      position: 'center'
    })
    .jpeg({ quality: QUALITY.jpeg, progressive: true })
    .toFile(path.join(outputDir, 'hero-mobile.jpg'));

  console.log(`    ✅ Hero optimized (4 versions)`);
}

/**
 * Optimise une image pour la galerie
 */
async function optimizeGalleryImage(sourcePath: string, outputDir: string, index: number): Promise<void> {
  console.log(`  🖼️  Optimizing gallery ${index + 1}: ${path.basename(sourcePath)}`);

  // Gallery - WebP
  await sharp(sourcePath)
    .resize(DIMENSIONS.gallery.desktop.width, DIMENSIONS.gallery.desktop.height, {
      fit: DIMENSIONS.gallery.desktop.fit,
      position: 'center'
    })
    .webp({ quality: QUALITY.webp })
    .toFile(path.join(outputDir, `gallery-${index + 1}.webp`));

  // Gallery - JPEG fallback
  await sharp(sourcePath)
    .resize(DIMENSIONS.gallery.desktop.width, DIMENSIONS.gallery.desktop.height, {
      fit: DIMENSIONS.gallery.desktop.fit,
      position: 'center'
    })
    .jpeg({ quality: QUALITY.jpeg, progressive: true })
    .toFile(path.join(outputDir, `gallery-${index + 1}.jpg`));

  console.log(`    ✅ Gallery ${index + 1} optimized (2 versions)`);
}

/**
 * Traite toutes les images d'une paroisse
 */
async function processParoisse(mapping: ImageMapping): Promise<void> {
  console.log(`\n🏛️  Processing: ${mapping.name} (${mapping.id})`);

  const outputDir = path.join(OUTPUT_DIR, mapping.id);

  // Vérifier que le dossier de sortie existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Optimiser le hero
    const heroPath = path.join(SOURCE_DIR, mapping.hero);
    if (fs.existsSync(heroPath)) {
      await optimizeHeroImage(heroPath, outputDir);
    } else {
      console.log(`  ⚠️  Hero not found: ${mapping.hero}`);
    }

    // Optimiser les images de galerie
    for (let i = 0; i < mapping.gallery.length; i++) {
      const galleryPath = path.join(SOURCE_DIR, mapping.gallery[i]);
      if (fs.existsSync(galleryPath)) {
        await optimizeGalleryImage(galleryPath, outputDir, i);
      } else {
        console.log(`  ⚠️  Gallery image not found: ${mapping.gallery[i]}`);
      }
    }

    console.log(`  ✅ ${mapping.name} completed!`);
  } catch (error) {
    console.error(`  ❌ Error processing ${mapping.name}:`, error);
  }
}

/**
 * Main
 */
async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`📂 Source: ${SOURCE_DIR}`);
  console.log(`📂 Output: ${OUTPUT_DIR}\n`);

  console.log(`🎯 Dimensions:`);
  console.log(`   Hero Desktop: ${DIMENSIONS.hero.desktop.width}x${DIMENSIONS.hero.desktop.height}`);
  console.log(`   Hero Mobile: ${DIMENSIONS.hero.mobile.width}x${DIMENSIONS.hero.mobile.height}`);
  console.log(`   Gallery: ${DIMENSIONS.gallery.desktop.width}x${DIMENSIONS.gallery.desktop.height}`);
  console.log(`\n💎 Quality: WebP ${QUALITY.webp}%, JPEG ${QUALITY.jpeg}%\n`);

  console.log(`📋 Processing ${IMAGE_MAPPINGS.length} paroisses...\n`);
  console.log('─'.repeat(60));

  let totalImages = 0;

  for (const mapping of IMAGE_MAPPINGS) {
    await processParoisse(mapping);
    totalImages += 1 + mapping.gallery.length; // hero + gallery
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`\n✨ Optimization complete!`);
  console.log(`📊 Statistics:`);
  console.log(`   - Paroisses processed: ${IMAGE_MAPPINGS.length}`);
  console.log(`   - Source images: ${totalImages}`);
  console.log(`   - Output files: ${totalImages * 6} (WebP + JPEG, hero + gallery)`);
  console.log(`\n🎉 All images optimized and ready for integration!\n`);
}

// Exécution
main().catch(console.error);
