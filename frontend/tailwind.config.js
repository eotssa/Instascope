import * as daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem', // Increased padding for larger screens
        '2xl': '10rem', // Increased padding for larger screens
      },
    },
    extend: {
      colors: {
        'insta-royal-blue': '#405DE6',
        'insta-blue': '#5B51D8',
        'insta-purple': '#833AB4',
        'insta-dark-pink': '#C13584',
      },
      maxWidth: {
        '7xl': '80rem', // Increased max-width for larger screens
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}
