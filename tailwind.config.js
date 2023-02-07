const { mauve } = require('@radix-ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

//  TODO: add visby font
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mauve: {
          1: mauve.mauve1,
          2: mauve.mauve2,
          3: mauve.mauve3,
          4: mauve.mauve4,
          5: mauve.mauve5,
          6: mauve.mauve6,
          7: mauve.mauve7,
          8: mauve.mauve8,
          9: mauve.mauve9,
          10: mauve.mauve10,
          11: mauve.mauve11,
          12: mauve.mauve12,
        },
      },
      fontFamily: {
        heading: ['var(--wayfinder-font)',...defaultTheme.fontFamily.mono],
        sans: ['var(--visby-font)',...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
