module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkMode1: '#192734',
        darkMode2: '#15202B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
