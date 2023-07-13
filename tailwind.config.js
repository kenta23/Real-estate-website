/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#99D717',
        secondary: '#C0F255',
        tertiary: '#446203',
        highlights: '#D9E3C3',
        shadow: '#262920',
        background: '#0D0E0B'
    },
    },
  },
  plugins: [],
}
