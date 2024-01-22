/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Tourney: ["Tourney", "sans-serif"],
       },
       colors: {
        bblue: '#089EA8',
        rred: '#BF3535',
        ggrey: '#E5E5E5'
       },
    },
  },
  plugins: [],
}

