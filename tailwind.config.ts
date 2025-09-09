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
        // Palette inspirée du site référence et du logo
        primary: {
          red: '#d14f42',      // Rouge principal du site
          orange: '#f7a145',   // Orange chaud
          darkRed: '#a2473e',  // Rouge foncé
        },
        secondary: {
          blue: '#4A90E2',     // Bleu du logo
          green: '#52C41A',    // Vert du logo
          yellow: '#FADB14',   // Jaune du logo
          purple: '#722ED1',   // Violet du logo
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
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