import { google, calendar_v3 } from 'googleapis';
import { NextResponse } from 'next/server';
import { CALENDARS_CONFIG, CalendarEvent, EventType, EVENT_TYPES } from '@/lib/calendars-config';

// Fonction pour déterminer le type d'événement
function detectEventType(title: string, description?: string): EventType {
  const text = `${title} ${description || ''}`.toLowerCase();

  if (text.includes('messe')) return 'messe';
  if (text.includes('adoration')) return 'adoration';
  if (text.includes('confession')) return 'confession';
  if (text.includes('baptême') || text.includes('bapteme')) return 'bapteme';
  if (text.includes('mariage')) return 'mariage';
  if (text.includes('funérailles') || text.includes('funerailles') || text.includes('obsèques')) return 'funerailles';
  if (text.includes('réunion') || text.includes('reunion')) return 'reunion';
  if (text.includes('formation') || text.includes('catéchisme') || text.includes('catechisme')) return 'formation';
  if (text.includes('prière') || text.includes('priere') || text.includes('chapelet')) return 'priere';
  if (text.includes('célébration') || text.includes('celebration')) return 'celebration';

  return 'autre';
}

// Fonction pour récupérer les événements d'un calendrier
async function fetchCalendarEvents(
  calendar: calendar_v3.Calendar,
  calendarConfig: typeof CALENDARS_CONFIG[0],
  timeMin: string,
  timeMax: string
): Promise<CalendarEvent[]> {
  try {
    const response = await calendar.events.list({
      calendarId: calendarConfig.googleCalendarId,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 100
    });

    const events = response.data.items || [];

    return events.map((event) => ({
      id: `${calendarConfig.id}-${event.id}`,
      calendarId: calendarConfig.id,
      title: event.summary || 'Sans titre',
      description: event.description || undefined,
      location: event.location || calendarConfig.defaultLocation,
      type: detectEventType(event.summary || '', event.description || undefined),
      startDate: event.start?.dateTime || event.start?.date || '',
      endDate: event.end?.dateTime || event.end?.date || undefined,
      isRecurring: !!event.recurringEventId,
      calendar: calendarConfig
    }));
  } catch (error) {
    console.error(`Erreur lors de la récupération du calendrier ${calendarConfig.name}:`, error);
    return [];
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sector = searchParams.get('sector');
  const calendarId = searchParams.get('calendarId');
  const monthsParam = parseInt(searchParams.get('months') || '3');
  // Validate months parameter (1-24 range to prevent abuse)
  const months = Math.min(Math.max(monthsParam, 1), 24);

  try {
    // Configuration de l'API Google Calendar
    const calendar = google.calendar({
      version: 'v3',
      auth: process.env.GOOGLE_API_KEY
    });

    // Définir la période de récupération
    const now = new Date();
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + months);

    const timeMin = now.toISOString();
    const timeMax = futureDate.toISOString();

    // Sélectionner les calendriers à récupérer
    let calendarsToFetch = CALENDARS_CONFIG;

    if (calendarId) {
      // Un calendrier spécifique
      calendarsToFetch = CALENDARS_CONFIG.filter(cal => cal.id === calendarId);
    } else if (sector) {
      // Tous les calendriers d'un secteur
      calendarsToFetch = CALENDARS_CONFIG.filter(cal => cal.sector === sector);
    }

    // Récupérer tous les événements en parallèle
    const allEventsPromises = calendarsToFetch.map(calConfig =>
      fetchCalendarEvents(calendar, calConfig, timeMin, timeMax)
    );

    const allEventsArrays = await Promise.allSettled(allEventsPromises);

    // Combiner tous les événements
    const allEvents: CalendarEvent[] = [];
    allEventsArrays.forEach((result) => {
      if (result.status === 'fulfilled') {
        allEvents.push(...result.value);
      }
    });

    // Trier par date
    allEvents.sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateA - dateB;
    });

    // Grouper par calendrier
    const eventsByCalendar = allEvents.reduce((acc, event) => {
      if (!acc[event.calendarId]) {
        acc[event.calendarId] = [];
      }
      acc[event.calendarId].push(event);
      return acc;
    }, {} as Record<string, CalendarEvent[]>);

    // Grouper par secteur
    const eventsBySector = allEvents.reduce((acc, event) => {
      const sector = event.calendar?.sector || 'autres';
      if (!acc[sector]) {
        acc[sector] = [];
      }
      acc[sector].push(event);
      return acc;
    }, {} as Record<string, CalendarEvent[]>);

    // Grouper par type d'événement
    const eventsByType = allEvents.reduce((acc, event) => {
      if (!acc[event.type]) {
        acc[event.type] = [];
      }
      acc[event.type].push(event);
      return acc;
    }, {} as Record<EventType, CalendarEvent[]>);

    return NextResponse.json({
      success: true,
      data: {
        events: allEvents,
        byCalendar: eventsByCalendar,
        bySector: eventsBySector,
        byType: eventsByType,
        calendars: calendarsToFetch.map(cal => ({
          id: cal.id,
          name: cal.name,
          sector: cal.sector,
          type: cal.type,
          color: cal.color
        })),
        eventTypes: EVENT_TYPES,
        lastSync: new Date().toISOString(),
        totalEvents: allEvents.length
      }
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error);

    // Retourner des données de fallback structurées
    return NextResponse.json({
      success: false,
      error: 'Impossible de récupérer les horaires depuis Google Calendar',
      fallback: true,
      data: {
        events: [],
        byCalendar: {},
        bySector: {
          nendaz: [
            {
              id: 'fallback-1',
              calendarId: 'basse-nendaz',
              title: 'Messe dominicale',
              type: 'messe' as EventType,
              location: 'Église Saint-Léger, Basse-Nendaz',
              startDate: '2025-01-19T10:00:00',
              isRecurring: true,
              calendar: CALENDARS_CONFIG.find(c => c.id === 'basse-nendaz')
            },
            {
              id: 'fallback-2',
              calendarId: 'haute-nendaz',
              title: 'Messe du samedi soir',
              type: 'messe' as EventType,
              location: 'Église Saint-Michel, Haute-Nendaz',
              startDate: '2025-01-18T19:00:00',
              isRecurring: true,
              calendar: CALENDARS_CONFIG.find(c => c.id === 'haute-nendaz')
            }
          ],
          veysonnaz: [
            {
              id: 'fallback-3',
              calendarId: 'veysonnaz',
              title: 'Messe dominicale',
              type: 'messe' as EventType,
              location: 'Église de Veysonnaz',
              startDate: '2025-01-19T09:00:00',
              isRecurring: true,
              calendar: CALENDARS_CONFIG.find(c => c.id === 'veysonnaz')
            }
          ]
        },
        calendars: CALENDARS_CONFIG.map(cal => ({
          id: cal.id,
          name: cal.name,
          sector: cal.sector,
          type: cal.type,
          color: cal.color
        })),
        eventTypes: EVENT_TYPES,
        lastSync: new Date().toISOString(),
        totalEvents: 3
      }
    }, { status: 200 });
  }
}

// Route pour récupérer la configuration des calendriers
export async function OPTIONS() {
  return NextResponse.json({
    calendars: CALENDARS_CONFIG,
    sectors: ['nendaz', 'veysonnaz', 'autres', 'transversal'],
    types: ['eglise', 'chapelle', 'ems', 'oratoire', 'equipe'],
    eventTypes: EVENT_TYPES
  });
}