const { mauve } = require('@radix-ui/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

//  TODO: add visby font
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
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
        primary: {
          50: '#f9ebfe',
          100: '#e2c7eb',
          200: '#cca4da',
          300: '#b880cb',
          400: '#a35cbb',
          500: '#8943a2',
          600: '#6b337e',
          700: '#4d255b',
          800: '#2f1538',
          900: '#120517',
        },
      },
      fontFamily: {
        heading: ['var(--wayfinder-font)', ...defaultTheme.fontFamily.mono],
        sans: ['var(--visby-font)', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        mobile: '352px',
        tablet: '896px',
        desktop: '1344px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
