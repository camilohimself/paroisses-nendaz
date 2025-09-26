import type { Config } from "tailwindcss";

const config: Config = {
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
        // CHARTE GRAPHIQUE OFFICIELLE - Validée le 23.09.2025
        paroisse: {
          // Couleurs principales du logo (9 carrés)
          violet: '#8B4789',        // Violet mystique - Spiritualité, transcendance
          bleuRoi: '#2E5EAA',      // Bleu roi - Ciel divin, foi
          jaune: '#FFC107',        // Jaune lumière - Lumière divine, joie
          turquoise: '#5DADE2',    // Turquoise - Eau baptismale, renouveau
          bleuMarine: '#1E3A5F',   // Bleu marine - Profondeur spirituelle
          bleuCiel: '#87CEEB',     // Bleu ciel - Paix céleste, sérénité
          vert: '#4CAF50',         // Vert espérance - Vie, espérance, nature
          bleuCommunaute: '#4A90E2', // Bleu communauté - Unité paroissiale
          rouge: '#E74C3C',        // Rouge passion - Amour du Christ, passion
        },
        // Couleurs neutres
        neutral: {
          anthracite: '#3E3E3E',   // Gris anthracite - Fond sombre, contraste
          blanc: '#FFFFFF',        // Blanc pur - Fond principal, pureté
          grisClaire: '#F5F5F5',   // Gris clair - Fonds secondaires
          gris: '#7F8C8D',         // Gris moyen - Texte secondaire
        },
        // Couleur Enoria
        enoria: '#2A8B8C',         // Couleur officielle plateforme Enoria
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;