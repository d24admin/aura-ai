/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFD700', // Inspired by yellow.ai/aura
          black: '#0A0A0A',
          gray: '#1F1F1F',
        },
        primary: '#2563EB', // Keeping a blue for trust, or maybe switch to the yellow as primary? Let's use yellow as accent.
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}