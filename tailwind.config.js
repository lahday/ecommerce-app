/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f97316"
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '1': '6px',
        '2': '10px',
        '3': '14px',
        '4': '18px',
        '5': '22px',
        '6': '26px',
      },
    },
  },
  plugins: [],
}