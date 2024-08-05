/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        Parisienne: ["Parisienne", "cursive"]
      },
      colors:{
        primary: "#00C2FF",
        secondary: "#DD0BFF",
      },
      container:{
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
        center: true,
      }
    },
  },
  plugins: [],
}