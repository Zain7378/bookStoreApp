/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      scale:{
        '125':'1.06'
      }
    },
  },
  plugins: [
    require('daisyui'),

  ],
}