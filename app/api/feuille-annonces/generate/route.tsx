import { NextResponse } from 'next/server'
import { renderToStream } from '@react-pdf/renderer'
import { FeuilleAnnoncesPDF } from '@/lib/feuille-annonces-pdf'

export const dynamic = 'force-dynamic'

// Événements Actualités (à synchroniser avec app/actualites/page.tsx)
const allActualites = [
  {
    id: 'billet-priere-novembre',
    title: 'Billet de prière - Novembre 2025',
    excerpt: 'Intention de prière pour le mois de novembre.',
    date: '2025-11-01',
    category: 'Pastorale',
    lieu: 'Toutes paroisses'
  },
  {
    id: 'toussaint-2025',
    title: 'Fête de la Toussaint',
    excerpt: 'Messes suivies d\'un temps de prière pour les défunts au cimetière.',
    date: '2025-11-01',
    category: 'Événement',
    lieu: 'Toutes paroisses'
  },
  {
    id: 'confirmation-2026',
    title: 'Présentation de la Confirmation 2026',
    excerpt: 'Présentation du parcours de confirmation après la messe de 10h.',
    date: '2025-11-09',
    category: 'Formation',
    lieu: 'Basse-Nendaz - 10h55'
  },
  {
    id: 'loto-st-michel',
    title: 'Loto du Chœur St-Michel',
    excerpt: 'Après-midi loto. Ambiance conviviale et nombreux lots !',
    date: '2025-11-09',
    category: 'Événement',
    lieu: 'Salle de la Biolette - 17h30'
  },
  {
    id: 'messe-enfants-catechese',
    title: 'Messe animée par les enfants',
    excerpt: 'Messe animée par les enfants des activités catéchétiques.',
    date: '2025-11-15',
    category: 'Liturgie',
    lieu: 'Haute-Nendaz - 17h30'
  },
  {
    id: 'concert-cecilia-fey',
    title: 'Concert anniversaire Caecilia de Fey',
    excerpt: '80 ans de la Caecilia de Fey.',
    date: '2025-11-15',
    category: 'Culture',
    lieu: 'Fey'
  },
  {
    id: 'communion-priere',
    title: 'Préparation 1ère Communion',
    excerpt: 'Après-midi de préparation à la première communion.',
    date: '2025-11-19',
    category: 'Formation',
    lieu: 'Basse-Nendaz'
  },
  {
    id: 'christ-roi',
    title: 'Fête patronale du Christ-Roi',
    excerpt: 'Messe de la fête patronale.',
    date: '2025-11-22',
    category: 'Événement',
    lieu: 'Église de Fey - 19h'
  },
  {
    id: 'couronnes-avent',
    title: 'Journée Couronnes de l\'Avent',
    excerpt: 'Fabrication des couronnes. Messe à 17h30 avec enfants et familles.',
    date: '2025-11-29',
    category: 'Événement',
    lieu: 'Haute-Nendaz'
  }
]

export async function GET(request: Request) {
  try {
    // Calculer les dates (du prochain samedi au dimanche suivant - 9 jours)
    const now = new Date()
    const currentDay = now.getDay() // 0 = dimanche, 6 = samedi

    // Trouver le prochain samedi (ou aujourd'hui si on est samedi)
    const daysUntilSaturday = currentDay === 6 ? 0 : (6 - currentDay + 7) % 7
    const nextSaturday = new Date(now)
    nextSaturday.setDate(now.getDate() + daysUntilSaturday)
    nextSaturday.setHours(0, 0, 0, 0) // Début de journée samedi

    // Dimanche suivant (8 jours après le samedi = 9 jours au total)
    const followingSunday = new Date(nextSaturday)
    followingSunday.setDate(nextSaturday.getDate() + 8)
    followingSunday.setHours(23, 59, 59, 999) // Fin de journée dimanche

    // Récupérer les événements Google Calendar
    let calendarEvents = []
    try {
      // Utiliser l'URL depuis la requête pour garantir le bon port
      const { origin } = new URL(request.url)
      const calendarResponse = await fetch(`${origin}/api/horaires?months=1`, {
        cache: 'no-store'
      })
      const calendarData = await calendarResponse.json()

      if (calendarData.success && calendarData.data.events) {
        // Filtrer les événements du samedi au dimanche suivant (9 jours)
        calendarEvents = calendarData.data.events.filter((event: any) => {
          const eventDate = new Date(event.startDate)
          return eventDate >= nextSaturday && eventDate <= followingSunday
        })
      }
    } catch (error) {
      console.error('Erreur récupération Google Calendar:', error)
    }

    // Filtrer les actualités du samedi au dimanche suivant (9 jours)
    const actualitesEvents = allActualites.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= nextSaturday && eventDate <= followingSunday
    })

    console.log(`Génération PDF: ${calendarEvents.length} messes, ${actualitesEvents.length} événements`)

    // Générer le PDF
    const stream = await renderToStream(
      <FeuilleAnnoncesPDF
        calendarEvents={calendarEvents}
        actualitesEvents={actualitesEvents}
        dateDebut={nextSaturday.toISOString()}
        dateFin={followingSunday.toISOString()}
      />
    )

    // Convertir le stream en buffer
    const chunks: any[] = []
    for await (const chunk of stream) {
      chunks.push(chunk)
    }
    const buffer = Buffer.concat(chunks as Uint8Array[])

    // Créer le nom du fichier avec la date
    const dateStr = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`
    const filename = `feuille-annonces-${dateStr}.pdf`

    // Retourner le PDF (inline = prévisualisation dans le navigateur)
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'no-store, max-age=0'
      }
    })
  } catch (error) {
    console.error('Erreur génération PDF:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Erreur lors de la génération du PDF',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      },
      { status: 500 }
    )
  }
}
