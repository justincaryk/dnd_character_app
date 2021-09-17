
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      backgroundColor: {
        stone: '#353536'
      },
      fontFamily: {
        'roboto': 'Roboto Condensed,Roboto,Helvetica,sans-serif'
      },
      colors: {
        gray: {
          dark: '#242527'
        },
        'off-white': 'rgb(240, 239, 239)',
        'hover-white': 'rgb(155, 152, 152)'
      },
      maxWidth: {
        xxs: '3.5em'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}