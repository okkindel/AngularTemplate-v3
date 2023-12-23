/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [],
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#eff8fc',
          '100': '#d8edf5',
          '200': '#b5daec',
          '300': '#82bfde',
          '400': '#479bc9',
          '500': '#2c7fae',
          '600': '#276793',
          '700': '#265478',
          '800': '#274863',
          '900': '#243d55',
          '950': '#010203',
        },
      },
    },
  },
};
