/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
   
    extend: {
      colors: {
        'Button': '#8d25e3',
      },
      fontFamily: {
        nunito: ['Nunito'],
        titillium: ['Titillium Web'],
      },   
    },
  },
  plugins: [],
}

