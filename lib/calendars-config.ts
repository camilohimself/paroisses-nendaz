export interface CalendarConfig {
  id: string;
  name: string;
  sector: 'nendaz' | 'veysonnaz' | 'autres' | 'transversal';
  type: 'eglise' | 'chapelle' | 'ems' | 'oratoire' | 'equipe';
  googleCalendarId: string;
  color: string;
  defaultLocation?: string;
}

export const CALENDARS_CONFIG: CalendarConfig[] = [
  // SECTEUR NENDAZ
  {
    id: 'basse-nendaz',
    name: 'Église de Basse-Nendaz',
    sector: 'nendaz',
    type: 'eglise',
    googleCalendarId: 'vs5coe3sm2lgid1uia3ppo4r6k@group.calendar.google.com',
    color: '#DC143C',
    defaultLocation: 'Église Saint-Léger, Basse-Nendaz'
  },
  {
    id: 'haute-nendaz',
    name: 'Église de Haute-Nendaz',
    sector: 'nendaz',
    type: 'eglise',
    googleCalendarId: 'coc1qb7okl6bt7kq6fpls0hiek@group.calendar.google.com',
    color: '#4169E1',
    defaultLocation: 'Église Saint-Michel, Haute-Nendaz'
  },
  {
    id: 'beuson',
    name: 'Chapelle de Beuson',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: '9d1s3t1s2q3b9hlfhuoqd63hq0@group.calendar.google.com',
    color: '#FFD700',
    defaultLocation: 'Chapelle de Beuson'
  },
  {
    id: 'brignon',
    name: 'Chapelle de Brignon',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'm4l948g6898iuh87ivrdpcshi4@group.calendar.google.com',
    color: '#228B22',
    defaultLocation: 'Chapelle de Brignon'
  },
  {
    id: 'saclentse',
    name: 'Chapelle de Saclentse',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'qc1abmsq4sg6gffteke0cplass@group.calendar.google.com',
    color: '#FF8C00',
    defaultLocation: 'Chapelle de Saclentse'
  },
  {
    id: 'bleusy',
    name: 'Chapelle du Bleusy',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'kb93atlflbphe08fa8791o5jes@group.calendar.google.com',
    color: '#8B008B',
    defaultLocation: 'Chapelle du Bleusy'
  },
  {
    id: 'planchouet',
    name: 'Chapelle de Planchouet',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'ougfpjbohde6m6s2ft48s5573k@group.calendar.google.com',
    color: '#20B2AA',
    defaultLocation: 'Chapelle de Planchouet'
  },
  {
    id: 'st-michel-hn',
    name: 'Chapelle St-Michel (Haute-Nendaz)',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'qg3bf7pr28q1q4va160in1dijs@group.calendar.google.com',
    color: '#FF69B4',
    defaultLocation: 'Chapelle Saint-Michel, Haute-Nendaz'
  },
  {
    id: 'st-sebastien',
    name: 'Chapelle St-Sébastien',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: '3g37totfo96dcnbt33upphngu4@group.calendar.google.com',
    color: '#DDA0DD',
    defaultLocation: 'Chapelle Saint-Sébastien'
  },
  {
    id: 'condemines',
    name: 'Chapelle des Condémines',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'aa15gunu9q2n17mjp09g1n88tc@group.calendar.google.com',
    color: '#F0E68C',
    defaultLocation: 'Chapelle des Condémines'
  },
  {
    id: 'rairettes',
    name: 'Chapelle des Rairettes',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: '78ovfngbbv7ghrr1s4k2e0lp2k@group.calendar.google.com',
    color: '#87CEEB',
    defaultLocation: 'Chapelle des Rairettes'
  },

  // SECTEUR VEYSONNAZ
  {
    id: 'veysonnaz',
    name: 'Église de Veysonnaz',
    sector: 'veysonnaz',
    type: 'eglise',
    googleCalendarId: 'dkva1vovji4funqhdhjjoehlo8@group.calendar.google.com',
    color: '#4B0082',
    defaultLocation: 'Église de Veysonnaz'
  },
  {
    id: 'clebes',
    name: 'Chapelle de Clèbes',
    sector: 'veysonnaz',
    type: 'chapelle',
    googleCalendarId: 'la3jtnie396g4goigdb3iqir4o@group.calendar.google.com',
    color: '#2F4F4F',
    defaultLocation: 'Chapelle de Clèbes'
  },
  {
    id: 'st-barthelemy',
    name: 'Chapelle St-Barthélémy',
    sector: 'nendaz',
    type: 'chapelle',
    googleCalendarId: 'vkauurg0o7r2u83fcp29urgdag@group.calendar.google.com',
    color: '#708090',
    defaultLocation: 'Chapelle Saint-Barthélémy, Clèbes'
  },

  {
    id: 'aproz',
    name: 'Église d\'Aproz',
    sector: 'nendaz',
    type: 'eglise',
    googleCalendarId: '02cme4ksjjjnbukvvvao6dl0t0@group.calendar.google.com',
    color: '#800000',
    defaultLocation: 'Église d\'Aproz'
  },
  {
    id: 'fey',
    name: 'Église de Fey',
    sector: 'nendaz',
    type: 'eglise',
    googleCalendarId: 'sketnk4dqjip6fj29298hhjpfg@group.calendar.google.com',
    color: '#008B8B',
    defaultLocation: 'Église de Fey'
  },

  {
    id: 'ems-vergers',
    name: 'EMS Les Vergers',
    sector: 'nendaz',
    type: 'ems',
    googleCalendarId: 'i8v8vq053mi7f10d5toi2oq9do@group.calendar.google.com',
    color: '#B22222',
    defaultLocation: 'EMS Les Vergers'
  },
  {
    id: 'foyer-ma-vallee',
    name: 'Foyer Ma Vallée',
    sector: 'nendaz',
    type: 'ems',
    googleCalendarId: 'jkcnv0mvaq2vkfb55dconfs4t8@group.calendar.google.com',
    color: '#556B2F',
    defaultLocation: 'Foyer Ma Vallée'
  },

  // TRANSVERSAL
  {
    id: 'equipe-pastorale',
    name: 'Z - Équipe pastorale',
    sector: 'transversal',
    type: 'equipe',
    googleCalendarId: 'sb3s2k8hi5poop8v5p2r9ar99c@group.calendar.google.com',
    color: '#2A8B8C',
    defaultLocation: 'Centre paroissial'
  },
  {
    id: 'evenements-paroissiaux',
    name: '0. Évènements paroissiaux',
    sector: 'transversal',
    type: 'equipe',
    googleCalendarId: '3aq4kt6h2unfnjmvg78531e1fk@group.calendar.google.com',
    color: '#FF6B35',
    defaultLocation: 'Diverses paroisses'
  }
];

// Helpers functions
export const getCalendarById = (id: string): CalendarConfig | undefined => {
  return CALENDARS_CONFIG.find(cal => cal.id === id);
};

export const getCalendarsBySector = (sector: string): CalendarConfig[] => {
  return CALENDARS_CONFIG.filter(cal => cal.sector === sector);
};

export const getCalendarsByType = (type: string): CalendarConfig[] => {
  return CALENDARS_CONFIG.filter(cal => cal.type === type);
};

// Map pour conversion rapide nom -> config
export const CALENDAR_NAME_MAP = new Map(
  CALENDARS_CONFIG.map(cal => [cal.name.toLowerCase(), cal])
);

// Types d'événements possibles
export const EVENT_TYPES = {
  messe: { label: 'Messe', color: '#DC143C' },
  adoration: { label: 'Adoration', color: '#FFD700' },
  confession: { label: 'Confession', color: '#8B008B' },
  bapteme: { label: 'Baptême', color: '#4169E1' },
  mariage: { label: 'Mariage', color: '#FF69B4' },
  funerailles: { label: 'Funérailles', color: '#2F4F4F' },
  reunion: { label: 'Réunion', color: '#2A8B8C' },
  formation: { label: 'Formation', color: '#228B22' },
  priere: { label: 'Prière', color: '#FF8C00' },
  celebration: { label: 'Célébration', color: '#4B0082' },
  autre: { label: 'Autre', color: '#708090' }
} as const;

export type EventType = keyof typeof EVENT_TYPES;

// Interface pour les événements
export interface CalendarEvent {
  id: string;
  calendarId: string;
  title: string;
  description?: string;
  location?: string;
  type: EventType;
  startDate: string;
  endDate?: string;
  isRecurring: boolean;
  calendar?: CalendarConfig;
}