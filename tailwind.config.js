/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}"],
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
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
