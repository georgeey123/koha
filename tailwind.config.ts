import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // Import default Tailwind settings

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B705C", // Olive Green
        secondary: "#B08968", // Amber Brown
        background: "#FAF8F5", // Light Beige
        textPrimary: "#4F4A45", // Dark Brownish Gray
        textMuted: "#706C68", // Muted Gray
        olive: {
          600: "#708238",
          700: "#5A682C",
          800: "#454F21",
        },
        beige: {
          200: "#e7dac6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
