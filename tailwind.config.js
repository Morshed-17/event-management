/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: "'Caveat', cursive",
        gothic: "'Gothic A1', sans-serif"
      },
      colors: {
        cream: "#6DFFFF",
        'dark-blue': '#37095B'
      }
    },
  },
  plugins: [require("daisyui")],
}

