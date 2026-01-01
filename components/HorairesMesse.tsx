'use client';

import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { sanitizeHtml } from '@/lib/sanitize';
import { CalendarEvent, EventType, EVENT_TYPES } from '@/lib/calendars-config';
import { ChevronDown } from 'lucide-react';

interface HorairesMesseProps {
  sector?: 'nendaz' | 'veysonnaz' | 'autres' | 'transversal';
  calendarId?: string;
  showCalendarSelector?: boolean;
  maxEvents?: number;
  expandStep?: number;
}

interface ApiResponse {
  success: boolean;
  data?: {
    events: CalendarEvent[];
    byCalendar: Record<string, CalendarEvent[]>;
    bySector: Record<string, CalendarEvent[]>;
    byType: Record<EventType, CalendarEvent[]>;
    calendars: Array<{
      id: string;
      name: string;
      sector: string;
      type: string;
      color: string;
    }>;
    eventTypes: typeof EVENT_TYPES;
    lastSync: string;
    totalEvents: number;
  };
  fallback?: boolean;
  error?: string;
}

export default function HorairesMesse({
  sector,
  calendarId,
  showCalendarSelector = false,
  maxEvents = 10,
  expandStep = 6
}: HorairesMesseProps) {
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [displayedCount, setDisplayedCount] = useState<number>(maxEvents);
  const [calendars, setCalendars] = useState<Array<{id: string; name: string; sector: string; type: string; color: string}>>([]);
  const [selectedCalendar, setSelectedCalendar] = useState<string>(calendarId || 'all');
  const [selectedSector, setSelectedSector] = useState<string>(sector || 'all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSync, setLastSync] = useState<string | null>(null);

  // Events to display (limited by displayedCount)
  const events = allEvents.slice(0, displayedCount);
  const hasMoreEvents = allEvents.length > displayedCount;

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 3600000); // Rafraîchir toutes les heures
    return () => clearInterval(interval);
  }, [selectedCalendar, selectedSector]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(maxEvents);
  }, [selectedCalendar, selectedSector, maxEvents]);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      // Construire l'URL avec les paramètres
      const params = new URLSearchParams();
      if (selectedCalendar !== 'all') params.append('calendarId', selectedCalendar);
      else if (selectedSector !== 'all') params.append('sector', selectedSector);

      const response = await fetch(`/api/horaires?${params.toString()}`);
      const data: ApiResponse = await response.json();

      if (data.success && data.data) {
        setAllEvents(data.data.events);
        setCalendars(data.data.calendars);
        setLastSync(data.data.lastSync);
        setError(null);
      } else if (data.fallback && data.data) {
        // Utiliser les données de fallback
        const fallbackEvents: CalendarEvent[] = [];
        Object.values(data.data.bySector).forEach(sectorEvents => {
          fallbackEvents.push(...sectorEvents);
        });
        setAllEvents(fallbackEvents);
        setCalendars(data.data.calendars);
        setError('Mode hors-ligne - Horaires de démonstration');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError('Impossible de charger les horaires');
      setAllEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setDisplayedCount(prev => prev + expandStep);
  };

  // Vérifie si un événement est "journée entière" (all-day event)
  // Ces événements ont généralement une heure à 00:00 ou 01:00 (UTC+1)
  const isAllDayEvent = (dateString: string): boolean => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours === 0 || hours === 1) && minutes === 0;
  };

  const formatDate = (dateString: string, eventType?: EventType) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      const now = new Date();
      const isToday = date.toDateString() === now.toDateString();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const isTomorrow = date.toDateString() === tomorrow.toDateString();

      // Pour les fêtes liturgiques (type "fete") ou événements all-day, ne pas afficher l'heure
      const isAllDay = eventType === 'fete' || isAllDayEvent(dateString);

      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit'
      };

      if (isToday) {
        return isAllDay ? `Aujourd'hui` : `Aujourd'hui à ${date.toLocaleTimeString('fr-CH', timeOptions)}`;
      } else if (isTomorrow) {
        return isAllDay ? `Demain` : `Demain à ${date.toLocaleTimeString('fr-CH', timeOptions)}`;
      } else {
        if (isAllDay) {
          const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          };
          return date.toLocaleDateString('fr-CH', options);
        } else {
          const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
          };
          return date.toLocaleDateString('fr-CH', options);
        }
      }
    } catch {
      return dateString;
    }
  };

  // Nettoie les noms de calendrier (retire les préfixes "0. ", "Z - ", etc.)
  const cleanCalendarName = (name: string): string => {
    return name.replace(/^[0-9]+\.\s*/, '').replace(/^Z\s*-\s*/, '').trim();
  };

  // Vérifie si le lieu est redondant avec le nom du calendrier
  const isLocationRedundant = (location: string | undefined, calendarName: string | undefined): boolean => {
    if (!location || !calendarName) return false;
    const locLower = location.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const calLower = calendarName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return calLower.includes(locLower) || locLower.includes(calLower);
  };

  // Vérifie si le titre est redondant avec le type d'événement
  const isTitleRedundant = (title: string, eventType: EventType): boolean => {
    const typeLabel = EVENT_TYPES[eventType]?.label || '';
    return title.toLowerCase().trim() === typeLabel.toLowerCase().trim();
  };

  const getEventTypeStyle = (type: EventType) => {
    const eventType = EVENT_TYPES[type] || EVENT_TYPES.autre;
    return {
      backgroundColor: `${eventType.color}20`,
      color: eventType.color,
      borderColor: eventType.color
    };
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header avec sélecteurs */}
      {showCalendarSelector && calendars.length > 0 && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap gap-2">
            <select
              value={selectedSector}
              onChange={(e) => {
                setSelectedSector(e.target.value);
                setSelectedCalendar('all');
              }}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tous les secteurs</option>
              <option value="nendaz">Nendaz</option>
              <option value="veysonnaz">Veysonnaz</option>
              <option value="autres">Autres</option>
              <option value="transversal">Équipe pastorale</option>
            </select>

            {selectedSector !== 'all' && (
              <select
                value={selectedCalendar}
                onChange={(e) => setSelectedCalendar(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Tous les lieux</option>
                {calendars
                  .filter(cal => selectedSector === 'all' || cal.sector === selectedSector)
                  .map(cal => (
                    <option key={cal.id} value={cal.id}>{cal.name}</option>
                  ))
                }
              </select>
            )}
          </div>
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Liste des événements */}
      {events.length === 0 ? (
        <div className="text-gray-500 text-center py-8">
          Aucune célébration prévue pour le moment
        </div>
      ) : (
        <div className="space-y-3">
          {events.map((event) => {
            const eventStyle = getEventTypeStyle(event.type);
            return (
              <div
                key={event.id}
                className="bg-white border rounded-lg p-4 hover:shadow-md transition"
                style={{ borderColor: eventStyle.borderColor }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  {/* Date - en haut sur mobile, à droite sur desktop */}
                  <div className="md:order-2 md:text-right md:ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {formatDate(event.startDate, event.type)}
                    </p>
                  </div>

                  {/* Contenu - prend toute la largeur sur mobile */}
                  <div className="md:order-1 md:flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <span
                        className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                        style={eventStyle}
                      >
                        {EVENT_TYPES[event.type]?.label || event.type}
                      </span>
                      {event.calendar && (
                        <span
                          className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${event.calendar.color}15`,
                            color: event.calendar.color
                          }}
                        >
                          {cleanCalendarName(event.calendar.name)}
                        </span>
                      )}
                    </div>
                    {/* Titre - masqué si identique au type d'événement (ex: "Messe" pour type messe) */}
                    {!isTitleRedundant(event.title, event.type) && (
                      <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    )}
                    {event.description && (
                      <div className="text-sm text-gray-600 mt-1 prose prose-sm max-w-none">
                        {parse(sanitizeHtml(event.description))}
                      </div>
                    )}
                    {/* Lieu - masqué si redondant avec le nom du calendrier */}
                    {event.location && !isLocationRedundant(event.location, event.calendar?.name) && (
                      <p className="text-sm text-gray-500 mt-1">📍 {event.location}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bouton Voir plus */}
      {hasMoreEvents && !loading && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-lg transition-colors border border-stone-300"
          >
            <span>Voir plus</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <p className="text-xs text-stone-500 mt-2">
            {allEvents.length - displayedCount} événement{allEvents.length - displayedCount > 1 ? 's' : ''} supplémentaire{allEvents.length - displayedCount > 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Footer */}
      {lastSync && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-end">
            <span className="text-xs text-gray-400">
              Dernière mise à jour: {new Date(lastSync).toLocaleTimeString('fr-CH')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}