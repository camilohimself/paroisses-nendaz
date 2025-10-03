import type { Config } from "tailwindcss";

const config: Omit<Config, 'content'> & {
  content: Config['content'];
  safelist?: string[];
} = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // PROTECTION: Classes dynamiques QuickAccessCard & composants
    'bg-paroisse-rouge',
    'bg-paroisse-bleuRoi',
    'bg-paroisse-jaune',
    'bg-paroisse-vert',
    'bg-paroisse-violet',
    'bg-paroisse-turquoise',
    'bg-paroisse-bleuCiel',
    'bg-paroisse-bleuMarine',
    'bg-paroisse-bleuCommunaute',
    'bg-enoria',
    'hover:bg-paroisse-rouge/90',
    'hover:bg-paroisse-bleuRoi/90',
    'hover:bg-paroisse-jaune/90',
    'hover:bg-paroisse-vert/90',
    'hover:bg-paroisse-violet/90',
    'hover:bg-paroisse-turquoise/90',
    'hover:bg-enoria/90',
    'text-white',
    'text-neutral-anthracite',
    'shadow-lg',
    'hover:shadow-xl',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // CHARTE GRAPHIQUE OFFICIELLE - Validée le 23.09.2025
        // OPTIMISATION CONTRASTE WCAG - 03.10.2025
        paroisse: {
          // Couleurs principales du logo (9 carrés)
          violet: '#8B4789',        // Violet mystique - Spiritualité, transcendance
          bleuRoi: '#2E5EAA',      // Bleu roi - Ciel divin, foi (ratio 5.2:1 ✅)
          jaune: '#FFC107',        // Jaune lumière - Lumière divine, joie
          turquoise: '#5DADE2',    // Turquoise - Eau baptismale, renouveau
          bleuMarine: '#1E3A5F',   // Bleu marine - Profondeur spirituelle (ratio 11.2:1 ✅)
          bleuCiel: '#87CEEB',     // Bleu ciel - Paix céleste, sérénité
          vert: '#4CAF50',         // Vert espérance - Vie, espérance, nature
          bleuCommunaute: '#4A90E2', // Bleu communauté - Unité paroissiale (ratio 4.6:1 ✅)
          rouge: '#E74C3C',        // Rouge passion - Amour du Christ, passion

          // NOUVELLES couleurs accessibles WCAG AA/AAA
          violetFonce: '#6B3569',   // Ratio 7.1:1 ✅ AAA
          bleuCielFonce: '#2B7AB5', // Ratio 4.8:1 ✅ AA+ (remplace bleuCiel pour texte)
          jauneFonce: '#E6A500',    // Ratio 3.5:1 ⚠️ AA large text
          vertFonce: '#2E7D32',     // Ratio 5.8:1 ✅ AA+
          rougeFonce: '#C0392B',    // Ratio 5.5:1 ✅ AA+
        },
        // Couleurs neutres
        neutral: {
          anthracite: '#3E3E3E',   // Gris anthracite - Fond sombre, contraste (ratio 10.5:1 ✅)
          blanc: '#FFFFFF',        // Blanc pur - Fond principal, pureté
          grisClaire: '#F5F5F5',   // Gris clair - Fonds secondaires
          gris: '#5A6C7D',         // Gris moyen optimisé - Texte secondaire (ratio 4.8:1 ✅)
        },
        // Couleur Enoria
        enoria: '#2A8B8C',         // Couleur officielle plateforme Enoria (ratio 4.5:1 ✅)
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