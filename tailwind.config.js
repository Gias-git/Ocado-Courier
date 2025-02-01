/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif'],
      'nunitoSans': ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryColor: '#E83330',
        secondaryColor: '#FFEDED',
      },
      order: {
        13: '13',
        14: '14',
        15: '15', // Add as many as needed
      },
      boxShadow: {
        'inset-custom': 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'left': '-2px 0px 3px 0px rgba(0, 0, 0, 0.25)', 
      },
      animation: {
        'slide-in-from-top': 'slideInFromTop 0.3s ease-out',
      },
      keyframes: {
        slideInFromTop: {
         '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui'),  require('tailwind-scrollbar-hide')],
}
