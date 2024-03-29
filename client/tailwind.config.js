module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        xxs: '3.5em',
      },
      borderWidth: {
        1: '1px',
      },
      backgroundColor: {
        stone: '#353536',
        cream: '#F1F0ED',
        'sky-blue': '#1C9AEF',
      },
      fontFamily: {
        roboto: 'Roboto Condensed,Roboto,Helvetica,sans-serif',
      },
      colors: {
        gray: {
          dark: '#242527',
        },
        'off-white': 'rgb(240, 239, 239)',
        'hover-white': 'rgb(155, 152, 152)',
        'sky-blue': '#1C9AEF',
      },
      boxShadow: {
        'md-sky-blue':
          '0 4px 6px -1px rgba(28, 154, 239, 0.1), 0 2px 4px -1px rgba(28, 154, 239, 0.06)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
