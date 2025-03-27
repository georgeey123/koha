// tailwind.config.ts (Corrected)
import type { Config } from 'tailwindcss';

const config: Config = {
  // --- CORRECTED CONTENT PATHS ---
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Scan files directly under ./app/
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Scan files directly under ./components/
    // Add './pages/**/*.{js,ts,jsx,tsx,mdx}' IF you are using the pages router alongside app router
  ],
  // --- END CORRECTION ---
  theme: {
    extend: {
      colors: {
        'beige': {
          50: '#FAF8F5',
          100: '#F5F1EC',
          200: '#E8E0D4',
        },
        'olive': {
          600: '#6B705C',
          700: '#585C4D',
        },
        'amber': {
          700: '#B08968',
          800: '#9C6F4E',
        },
        'text-main': '#4F4A45',
        'text-muted': '#706C68',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;