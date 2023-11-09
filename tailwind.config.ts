/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#516D57',
          50: '#B1C5B5',
          100: '#A5BCAA',
          200: '#8EAB94',
          300: '#76997E',
          400: '#62846A',
          500: '#516D57',
          600: '#394D3D',
          700: '#212D24',
          800: '#090C0A',
          900: '#000000',
        },
      },
    },
  },
};
