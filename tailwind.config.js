/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e84393",
        secondary: "#10b981",
        accent: "#8b5cf6",
        dark: "#1f2937",
        light: "#f9fafb",
        "dark-plum": "#2d1b2d",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        handwriting: ['Architects Daughter', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
