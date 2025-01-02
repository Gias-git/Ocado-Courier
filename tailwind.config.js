/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'lato': ['Lato', 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif'],
      'nunitoSans': ['Nunito Sans', 'sans-serif'],
    },
    colors: {
      primaryColor: '#E83330',
      secondaryColor: '#FFEDED',
    },
  
  },
  plugins: [require('daisyui')],
}

