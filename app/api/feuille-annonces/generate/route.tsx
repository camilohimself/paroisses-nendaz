import { NextResponse } from 'next/server'
import { renderToStream } from '@react-pdf/renderer'
import { FeuilleAnnoncesPDF } from '@/lib/feuille-annonces-pdf'
import { CalendarEvent } from '@/lib/calendars-config'

export const dynamic = 'force-dynamic'

// Événements Actualités supplémentaires (ajoutés manuellement si besoin)
// Les données principales proviennent de l'API Google Calendar
const allActualites: { id: string; title: string; excerpt: string; date: string; category: string; lieu: string }[] = []

export async function GET(request: Request) {
  try {
    // Logique simple : Jour J (aujourd'hui) + 7 jours suivants
    const now = new Date()

    // Date de début = aujourd'hui à 00:00
    const dateDebut = new Date(now)
    dateDebut.setHours(0, 0, 0, 0)

    // Date de fin = aujourd'hui + 7 jours à 23:59
    const dateFin = new Date(dateDebut)
    dateFin.setDate(dateDebut.getDate() + 7)
    dateFin.setHours(23, 59, 59, 999)

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
        // Filtrer les événements de Jour J à Jour J + 7
        calendarEvents = calendarData.data.events.filter((event: CalendarEvent) => {
          const eventDate = new Date(event.startDate)
          return eventDate >= dateDebut && eventDate <= dateFin
        })
      }
    } catch (error) {
      console.error('Erreur récupération Google Calendar:', error)
    }

    // Filtrer les actualités de Jour J à Jour J + 7
    const actualitesEvents = allActualites.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate >= dateDebut && eventDate <= dateFin
    })

    // Debug log removed for production

    // Générer le PDF
    const stream = await renderToStream(
      <FeuilleAnnoncesPDF
        calendarEvents={calendarEvents}
        actualitesEvents={actualitesEvents}
        dateDebut={dateDebut.toISOString()}
        dateFin={dateFin.toISOString()}
      />
    )

    // Convertir le stream en buffer
    const chunks: Uint8Array[] = []
    for await (const chunk of stream) {
      chunks.push(chunk as Uint8Array)
    }
    const buffer = Buffer.concat(chunks)

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
