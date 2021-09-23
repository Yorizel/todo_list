module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      transitionDuration: {
        3000: '3000ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
