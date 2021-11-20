module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-dark': '#01122C',
        'primary-light': '#DDDDF7',
        'secondary-dark': '#031D43',
        'secondary-light': '#F3F3FF',
      },
      screens : {
        print: {'raw': 'print'},
        sm   : '600px',
        md   : '960px',
        lg   : '1280px',
        xl   : '1440px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
