/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#4a4a4a',
        accent: '#3b82f6'
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}