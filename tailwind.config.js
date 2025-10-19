/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: '#ff5252', // if anyone write text-primary this color show
      },
      backgroundColor:{ //bg-primary
        primary: '#ff5252',
      }
    },
  },
 plugins: [
  require('@tailwindcss/line-clamp'),
],

}
