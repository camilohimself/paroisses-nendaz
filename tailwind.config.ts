import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Palette officielle du projet - Couleurs liturgiques et spirituelles
        liturgique: {
          communion: '#DC143C',      // Rouge profond - passion, amour
          ciel: '#4169E1',          // Bleu royal - spiritualité, ciel  
          lumiere: '#FFD700',       // Jaune or - lumière divine
          esperance: '#228B22',     // Vert forêt - espérance, nature
          chaleur: '#FF8C00',       // Orange foncé - chaleur communautaire
          mystique: '#8B008B',      // Violet - mystère, transcendance
        },
        // Couleurs neutres
        neutral: {
          charcoal: '#2C3E50',     // Texte principal
          gris: '#7F8C8D',         // Texte secondaire
          blanc: '#FFFFFF',        // Fond principal
          parchemin: '#FBF8F3',    // Fond alternatif
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;