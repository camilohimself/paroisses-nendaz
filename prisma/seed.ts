import { PrismaClient, EventType, SacramentType, UserRole, DocumentType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Nettoyer la base
  console.log('🧹 Nettoyage de la base de données...')
  await prisma.sacrament.deleteMany()
  await prisma.parishioner.deleteMany()
  await prisma.event.deleteMany()
  await prisma.article.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()
  await prisma.parish.deleteMany()
  await prisma.document.deleteMany()
  await prisma.newsletterSubscription.deleteMany()
  await prisma.reservation.deleteMany()

  console.log('⛪ Création des paroisses...')
  // Créer les paroisses
  const nendaz = await prisma.parish.create({
    data: {
      name: 'Nendaz',
      address: 'Route de la Cure 1, 1996 Basse-Nendaz',
      phone: '027 288 23 43',
      email: 'paroisse.nendaz@netplus.ch',
      priest: 'Abbé Vincent Lafargue',
      description: 'Paroisse de Nendaz comprenant Basse-Nendaz et Haute-Nendaz'
    }
  })

  const veysonnaz = await prisma.parish.create({
    data: {
      name: 'Veysonnaz',
      address: 'Place de l\'Église, 1993 Veysonnaz',
      phone: '027 288 23 43',
      email: 'paroisse.nendaz@netplus.ch',
      priest: 'Abbé Vincent Lafargue',
      description: 'Paroisse de Veysonnaz'
    }
  })

  console.log('👤 Création des utilisateurs...')
  // Créer un utilisateur admin
  const admin = await prisma.user.create({
    data: {
      email: 'admin@paroisses-nendaz.ch',
      name: 'Administrateur',
      password: '$2b$10$K7L/R7hWE0.hI4HLcUJSEOJbC6EhtLa/eDPaYHNQT2hI4HLcUJSEO',  // Password: admin123
      role: UserRole.ADMIN
    }
  })

  const editor = await prisma.user.create({
    data: {
      email: 'secretariat@paroisses-nendaz.ch',
      name: 'Secrétariat',
      password: '$2b$10$K7L/R7hWE0.hI4HLcUJSEOJbC6EhtLa/eDPaYHNQT2hI4HLcUJSEO',  // Password: admin123
      role: UserRole.EDITOR
    }
  })

  console.log('📂 Création des catégories...')
  // Créer des catégories
  const pastorale = await prisma.category.create({
    data: {
      name: 'Pastorale',
      slug: 'pastorale',
      description: 'Actualités concernant la vie pastorale'
    }
  })

  const formation = await prisma.category.create({
    data: {
      name: 'Formation',
      slug: 'formation',
      description: 'Catéchisme et formations'
    }
  })

  const informations = await prisma.category.create({
    data: {
      name: 'Informations',
      slug: 'informations',
      description: 'Informations générales et pratiques'
    }
  })

  console.log('📰 Création des articles...')
  // Créer des articles
  await prisma.article.create({
    data: {
      title: 'Nouvelle année pastorale 2024-2025',
      slug: 'nouvelle-annee-pastorale-2024-2025',
      content: 'Cette nouvelle année pastorale débute avec de nombreux projets et nouveautés pour nos communautés. Découvrez le programme complet...',
      excerpt: 'Découvrez le programme et les nouveautés de cette année pastorale qui débute avec de nombreux projets.',
      published: true,
      publishedAt: new Date('2024-12-15'),
      categoryId: pastorale.id,
      authorId: admin.id
    }
  })

  await prisma.article.create({
    data: {
      title: 'Inscriptions ouvertes pour le catéchisme',
      slug: 'inscriptions-catechisme-2025',
      content: 'Les inscriptions pour le catéchisme des enfants et des jeunes sont maintenant ouvertes. Voici les modalités et informations pratiques...',
      excerpt: 'Les inscriptions pour le catéchisme des enfants et jeunes sont ouvertes. Informations et modalités.',
      published: true,
      publishedAt: new Date('2024-12-10'),
      categoryId: formation.id,
      authorId: editor.id
    }
  })

  console.log('🎭 Création des événements...')
  // Créer des événements
  await prisma.event.create({
    data: {
      title: 'Messe en famille',
      description: 'Messe dominicale adaptée aux familles avec enfants',
      startDate: new Date('2025-01-19T10:00:00'),
      location: 'Église Saint-Michel, Haute-Nendaz',
      type: EventType.MASS,
      parishId: nendaz.id
    }
  })

  await prisma.event.create({
    data: {
      title: 'Parcours confirmation',
      description: 'Rencontre pour les jeunes en parcours de confirmation',
      startDate: new Date('2025-01-25T13:30:00'),
      endDate: new Date('2025-01-25T16:00:00'),
      location: 'Salle paroissiale, Basse-Nendaz',
      type: EventType.MEETING,
      parishId: nendaz.id
    }
  })

  await prisma.event.create({
    data: {
      title: 'Messe des familles - Chandeleur',
      description: 'Célébration de la Chandeleur avec bénédiction des cierges',
      startDate: new Date('2025-02-02T10:00:00'),
      location: 'Église Saint-Symphorien, Veysonnaz',
      type: EventType.CELEBRATION,
      parishId: veysonnaz.id
    }
  })

  await prisma.event.create({
    data: {
      title: 'Baptême de Paul Dupont',
      description: 'Célébration du baptême en famille',
      startDate: new Date('2025-02-09T14:00:00'),
      location: 'Église Saint-Léger, Basse-Nendaz',
      type: EventType.BAPTISM,
      parishId: nendaz.id
    }
  })

  console.log('👥 Création des paroissiens...')
  // Créer quelques paroissiens
  const paroissien1 = await prisma.parishioner.create({
    data: {
      firstName: 'Marie',
      lastName: 'Dubois',
      email: 'marie.dubois@example.com',
      phone: '079 123 45 67',
      address: 'Route de la Télécabine 15, 1997 Haute-Nendaz',
      birthDate: new Date('1985-06-15'),
      newsletter: true,
      parishId: nendaz.id
    }
  })

  const paroissien2 = await prisma.parishioner.create({
    data: {
      firstName: 'Jean',
      lastName: 'Martin',
      email: 'jean.martin@example.com',
      phone: '079 987 65 43',
      address: 'Place de la Télécabine 3, 1993 Veysonnaz',
      birthDate: new Date('1978-03-22'),
      newsletter: false,
      parishId: veysonnaz.id
    }
  })

  console.log('🎊 Création des sacrements...')
  // Créer des sacrements
  await prisma.sacrament.create({
    data: {
      type: SacramentType.BAPTISM,
      date: new Date('2020-05-15'),
      location: 'Basse-Nendaz',
      minister: 'Abbé Vincent Lafargue',
      parishionerId: paroissien1.id
    }
  })

  await prisma.sacrament.create({
    data: {
      type: SacramentType.FIRST_COMMUNION,
      date: new Date('2022-05-08'),
      location: 'Haute-Nendaz',
      minister: 'Abbé Vincent Lafargue',
      parishionerId: paroissien1.id
    }
  })

  console.log('📄 Création des documents...')
  // Créer des documents
  await prisma.document.create({
    data: {
      title: 'Feuille d\'annonces - 19 janvier 2025',
      filename: 'FA_2025_01_19.pdf',
      originalName: 'Feuille annonces 19 janvier 2025.pdf',
      mimeType: 'application/pdf',
      size: 1024000,
      type: DocumentType.ANNOUNCEMENT,
      description: 'Feuille d\'annonces hebdomadaire'
    }
  })

  await prisma.document.create({
    data: {
      title: 'Bulletin paroissial - Hiver 2024',
      filename: 'bulletin_hiver_2024.pdf',
      originalName: 'Bulletin paroissial hiver 2024.pdf',
      mimeType: 'application/pdf',
      size: 2048000,
      type: DocumentType.BULLETIN,
      description: 'Bulletin paroissial trimestriel'
    }
  })

  console.log('📧 Création des abonnements newsletter...')
  // Créer des abonnements newsletter
  await prisma.newsletterSubscription.create({
    data: {
      email: 'marie.dubois@example.com'
    }
  })

  await prisma.newsletterSubscription.create({
    data: {
      email: 'pierre.roche@example.com'
    }
  })

  console.log('✅ Seed terminé avec succès!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })