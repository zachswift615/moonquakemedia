/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html}",
    // The LOOM landing page is a carried-across static export: every rule it
    // needs is inline or in its own <style> block, and it uses no Tailwind
    // class at all. Scanning it only makes the extractor mistake words like
    // "outline" and "ring" for class names and emit dead CSS site-wide.
    "!./src/_includes/layouts/loom.njk",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#818cf8',
          500: '#667eea',
          600: '#764ba2',
        },
        available: '#34c759',
        coming: '#ff9500',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
