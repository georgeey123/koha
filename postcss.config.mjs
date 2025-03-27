// postcss.config.mjs (Corrected for v4)
const config = {
  plugins: [
    "@tailwindcss/postcss", // Use the specific v4 package name
    "autoprefixer",       // Keep autoprefixer
  ],
};

export default config;