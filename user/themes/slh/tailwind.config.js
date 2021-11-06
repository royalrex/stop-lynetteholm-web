const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    container: false
  },
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#080456',
            },
            blockquote: {
              fontWeight: '500',
            },
            h2: {
              fontSize: '1.2em',
              marginBottom: '0.3em',
            }
          },
        },
      },
      colors: {
        brand: '#080456',
      },
      zIndex: {
        'overlay': '100'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '768px',
          // Breakpoints
          "@screen sm": {
            maxWidth: theme("screens.sm"),
          },
          "@screen md": {
            maxWidth: theme("screens.md"),
          },
        }
      })
    }
  ],
}
