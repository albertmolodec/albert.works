const colors = require('tailwindcss/colors')
delete colors['lightBlue'] // temp fix to clean up logs

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
  },
  plugins: [require('@tailwindcss/typography')],
}
