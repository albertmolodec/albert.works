const colors = require('tailwindcss/colors')
delete colors['lightBlue'] // temp fix to clean up logs

const extendUnderline = {
  '.underline-link': {
    'textDecoration': 'underline',
    'text-decoration-color': colors.blue[100],
    'text-underline-offset': '2px'
  }
}

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addUtilities }) => {
      addUtilities(extendUnderline)
    },
  ],
}
