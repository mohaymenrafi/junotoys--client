module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        qsand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        blue1: '#181d4e',
        gray1: '#5e6071',
        green: '#2bb24c',
        gray2: '#646672',
        lightWhite: '#d0d3dc',
        paste: '#12aee0',
        bgGray: '#F5F6F7',
        blue2: '#182352',
      },
      spacing: {
        '57px': '75px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
