/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bt-p':'#DC0190',
        'bt-p1':'#FF70CD',
      }
    },
    fontFamily:{
      header:['Madimi One','Roboto']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
}

