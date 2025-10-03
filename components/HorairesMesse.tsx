'use client';

import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { CalendarEvent, EventType, EVENT_TYPES } from '@/lib/calendars-config';

interface HorairesMesseProps {
  sector?: 'nendaz' | 'veysonnaz' | 'autres' | 'transversal';
  calendarId?: string;
  showCalendarSelector?: boolean;
  maxEvents?: number;
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
  maxEvents = 10
}: HorairesMesseProps) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [calendars, setCalendars] = useState<Array<{id: string; name: string; sector: string; type: string; color: string}>>([]);
  const [selectedCalendar, setSelectedCalendar] = useState<string>(calendarId || 'all');
  const [selectedSector, setSelectedSector] = useState<string>(sector || 'all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSync, setLastSync] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 3600000); // Rafraîchir toutes les heures
    return () => clearInterval(interval);
  }, [selectedCalendar, selectedSector, maxEvents]); // eslint-disable-line react-hooks/exhaustive-deps

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
        setEvents(data.data.events.slice(0, maxEvents));
        setCalendars(data.data.calendars);
        setLastSync(data.data.lastSync);
        setError(null);
      } else if (data.fallback && data.data) {
        // Utiliser les données de fallback
        const fallbackEvents: CalendarEvent[] = [];
        Object.values(data.data.bySector).forEach(sectorEvents => {
          fallbackEvents.push(...sectorEvents);
        });
        setEvents(fallbackEvents.slice(0, maxEvents));
        setCalendars(data.data.calendars);
        setError('Mode hors-ligne - Horaires de démonstration');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError('Impossible de charger les horaires');
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      const now = new Date();
      const isToday = date.toDateString() === now.toDateString();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const isTomorrow = date.toDateString() === tomorrow.toDateString();

      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit'
      };

      if (isToday) {
        return `Aujourd'hui à ${date.toLocaleTimeString('fr-CH', timeOptions)}`;
      } else if (isTomorrow) {
        return `Demain à ${date.toLocaleTimeString('fr-CH', timeOptions)}`;
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
    } catch {
      return dateString;
    }
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h3 className="text-xl font-semibold">
          Prochaines célébrations
        </h3>

        {showCalendarSelector && calendars.length > 0 && (
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
        )}
      </div>

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
                <div className="flex items-start justify-between">
                  <div className="flex-1">
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
                          {event.calendar.name}
                        </span>
                      )}
                      {event.isRecurring && (
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                          Récurrent
                        </span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900">{event.title}</h4>
                    {event.description && (
                      <div className="text-sm text-gray-600 mt-1 prose prose-sm max-w-none">
                        {parse(event.description)}
                      </div>
                    )}
                    {event.location && (
                      <p className="text-sm text-gray-500 mt-1">📍 {event.location}</p>
                    )}
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm font-medium text-gray-900">
                      {formatDate(event.startDate)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Synchronisé avec Google Calendar
          </p>
          {lastSync && (
            <span className="text-xs text-gray-400">
              Dernière mise à jour: {new Date(lastSync).toLocaleTimeString('fr-CH')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}