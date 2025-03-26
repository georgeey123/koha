// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige': { // Using beige as a base
          50: '#FAF8F5', // Very light beige (background)
          100: '#F5F1EC',
          200: '#E8E0D4',
        },
        'olive': { // Olive green accent
          600: '#6B705C', // Main olive
          700: '#585C4D', // Darker olive (hover)
        },
        'amber': { // Deep amber/brown accent
          700: '#B08968', // Main amber
          800: '#9C6F4E', // Darker amber
        },
        'text-main': '#4F4A45', // Dark brownish-gray for text
        'text-muted': '#706C68', // Lighter gray for muted text
      },
      fontFamily: {
        // Example: Using Cormorant Garamond for headings and Inter for body
        // Make sure to import these in layout.tsx
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
  plugins: [], // You can add Tailwind plugins here if needed later
};
export default config;