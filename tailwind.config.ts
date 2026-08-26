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
        bgColor: "#f3f0ec",
        contentColor: "#161616",
        sand: "#ece7e0",
        accent: {
          DEFAULT: "#C29B38", // Luxury Champagne Gold Accent
          gold: "#D4AF37",
          dark: "#9E7D23",
          purple: "#8D46E7",
        },
        navy: {
          DEFAULT: "#0F1A2C",
          dark: "#09101C",
          light: "#1C2D4A",
        },
        grey: {
          50: "#fbfaf8",
          100: "#f3f0ec",
          200: "#e6e1da",
          300: "#cac3b8",
          400: "#a9a193",
          500: "#867e71",
          600: "#6a6357",
          700: "#524d43",
          800: "#36322b",
          900: "#1e1c18",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Elsie", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "Space Grotesk", "monospace"],
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
      },
    },
  },
  plugins: [],
};
export default config;
