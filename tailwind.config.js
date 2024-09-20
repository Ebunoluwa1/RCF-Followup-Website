/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
   
    fontFamily:{
      inter: ['Inter', 'sans-serif'],
      dmsans: ['DM Sans', 'sans serif'],
      Roboto: ['Roboto']
    },
    extend: {
       colors: {
        Rose: '#9841ab',

       },
    },
  },
  plugins: [],
}

