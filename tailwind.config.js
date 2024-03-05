import colors, { blue } from 'tailwindcss/colors'
delete colors['lightBlue'] // temp fix to clean up logs

const extendUnderline = {
  '.underline-link': {
    textDecoration: 'underline',
    'text-decoration-color': blue[100],
    'text-underline-offset': '2px',
  },
}

export const mode = 'jit'
export const darkMode = false
export const purge = ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}']
export const theme = {
  colors,
  extend: {
    transitionProperty: {
      width: 'width',
    },
  },
}
export const plugins = [
  require('@tailwindcss/typography'),
  ({ addUtilities }) => {
    addUtilities(extendUnderline)
  },
]
