
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zecoola: {
          orange: '#FF6B00',
          blue: '#1d4ed8',
          lightBlue: '#3b82f6',
          gray: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        jost: ['"Jost"', 'sans-serif'],
        // Geometric fonts that closely match the ZECOOLA signage
        brand: ['"Century Gothic"', '"Futura"', '"Avant Garde"', '"Arial"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
