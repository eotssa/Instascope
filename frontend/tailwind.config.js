import * as daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'insta-royal-blue': '#405DE6',
        'insta-blue': '#5B51D8',
        'insta-purple': '#833AB4',
        'insta-dark-pink': '#C13584',
      },
      // backgroundImage: {
      //   "custom-radial-gradient":
      //     "radial-gradient(62.24% 62.24% at 50% 50%, #1E283A 68.83%, #293344 100%)",
      // },
    },
  },
  plugins: [require('@tailwindcss/typography'), daisyui],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}
