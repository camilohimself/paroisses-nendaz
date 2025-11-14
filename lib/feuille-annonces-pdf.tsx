import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'

// Types pour les événements
interface CalendarEvent {
  id: string
  title: string
  startDate: string
  location?: string
  description?: string
  type: string
}

interface ActualiteEvent {
  id: string
  title: string
  date: string
  excerpt: string
  lieu: string
  category: string
}

interface FeuilleAnnoncesPDFProps {
  calendarEvents: CalendarEvent[]
  actualitesEvents: ActualiteEvent[]
  dateDebut: string
  dateFin: string
}

// Styles pour le PDF (optimisé pour tenir sur 1 page A4)
const styles = StyleSheet.create({
  page: {
    padding: 22,
    fontSize: 8.5,
    fontFamily: 'Helvetica',
    lineHeight: 1.25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    paddingBottom: 5,
    borderBottom: '2 solid #000',
  },
  logo: {
    width: 90,
    height: 30,
  },
  headerTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
  },
  headerSubtitle: {
    fontSize: 8.5,
    color: '#333',
    marginTop: 1,
  },
  headerContact: {
    fontSize: 7.5,
    textAlign: 'right',
    lineHeight: 1.4,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    marginTop: 6,
    marginBottom: 3,
    paddingBottom: 2,
    borderBottom: '1 solid #000',
  },
  dayBlock: {
    marginBottom: 4,
  },
  dayHeader: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 1.5,
    textTransform: 'uppercase',
  },
  daySubtitle: {
    fontSize: 7.5,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 2,
  },
  eventItem: {
    marginBottom: 2,
    paddingLeft: 8,
  },
  eventTime: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: 0.5,
  },
  eventDescription: {
    fontSize: 7.5,
    color: '#333',
    marginLeft: 8,
    lineHeight: 1.2,
  },
  actualiteItem: {
    marginBottom: 3,
    paddingLeft: 6,
    borderLeft: '2 solid #000',
  },
  actualiteTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    marginBottom: 0.5,
  },
  actualiteMeta: {
    fontSize: 7.5,
    color: '#555',
    marginBottom: 0.5,
  },
  actualiteDescription: {
    fontSize: 7.5,
    color: '#333',
  },
  footer: {
    marginTop: 6,
    paddingTop: 3,
    borderTop: '1 solid #ccc',
    fontSize: 6.5,
    textAlign: 'center',
    color: '#666',
  },
})

// Fonction pour formater les dates
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

const formatDateShort = (dateStr: string): string => {
  const date = new Date(dateStr)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const formatTime = (dateStr: string): string => {
  const date = new Date(dateStr)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

// Fonction pour nettoyer le HTML des descriptions (Google Calendar)
const stripHTML = (html: string): string => {
  if (!html) return ''

  // Remplacer les balises <br>, <br/>, <br /> par des espaces
  let text = html.replace(/<br\s*\/?>/gi, ' ')

  // Supprimer toutes les autres balises HTML
  text = text.replace(/<[^>]*>/g, '')

  // Décoder les entités HTML courantes
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")

  // Nettoyer les espaces multiples et trim
  text = text.replace(/\s+/g, ' ').trim()

  return text
}

// Composant PDF
export const FeuilleAnnoncesPDF: React.FC<FeuilleAnnoncesPDFProps> = ({
  calendarEvents,
  actualitesEvents,
  dateDebut,
  dateFin,
}) => {
  // Grouper les événements par date
  const eventsByDate: { [key: string]: CalendarEvent[] } = {}
  calendarEvents.forEach((event) => {
    const date = event.startDate.split('T')[0]
    if (!eventsByDate[date]) {
      eventsByDate[date] = []
    }
    eventsByDate[date].push(event)
  })

  const sortedDates = Object.keys(eventsByDate).sort()

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* En-tête */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>FEUILLE D'ANNONCES</Text>
            <Text style={styles.headerSubtitle}>
              Du {formatDateShort(dateDebut)} au {formatDateShort(dateFin)}
            </Text>
          </View>
          <View style={styles.headerContact}>
            <Text>027 288 22 50</Text>
            <Text>paroisses-nendaz.ch</Text>
            <Text>paroisse_nendaz@bluemail.ch</Text>
          </View>
        </View>

        {/* Section Messes et Célébrations */}
        <Text style={styles.sectionTitle}>MESSES ET CÉLÉBRATIONS</Text>

        {sortedDates.map((dateKey) => {
          const events = eventsByDate[dateKey]
          return (
            <View key={dateKey} style={styles.dayBlock}>
              <Text style={styles.dayHeader}>
                {formatDate(dateKey).toUpperCase()}
              </Text>

              {events.map((event) => (
                <View key={event.id} style={styles.eventItem}>
                  <Text style={styles.eventTime}>
                    {formatTime(event.startDate)} • {event.location || 'Lieu non spécifié'}
                  </Text>
                  <Text style={styles.eventDescription}>
                    {event.title}
                    {event.description && ` - ${stripHTML(event.description)}`}
                  </Text>
                </View>
              ))}
            </View>
          )
        })}

        {/* Section Événements Paroissiaux */}
        {actualitesEvents.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>ÉVÉNEMENTS PAROISSIAUX</Text>

            {actualitesEvents.map((event) => (
              <View key={event.id} style={styles.actualiteItem}>
                <Text style={styles.actualiteTitle}>{event.title}</Text>
                <Text style={styles.actualiteMeta}>
                  {formatDate(event.date)} • {event.lieu}
                </Text>
                <Text style={styles.actualiteDescription}>{event.excerpt}</Text>
              </View>
            ))}
          </>
        )}

        {/* Pied de page */}
        <Text style={styles.footer}>
          Généré le {formatDateShort(new Date().toISOString())} • Paroisses de Nendaz et Veysonnaz
        </Text>
      </Page>
    </Document>
  )
}
