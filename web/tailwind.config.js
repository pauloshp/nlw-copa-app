/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        ignite: {
          500: '#129E57'
        },
        yellow: {
          500: '#F7DD43',
          700: '#E5CD3D'
        },
        gray: {
          900: '#121214',
          800: '#323238',
          600: '#202024',
          300: '#8D8D99',
          100: '#E1E1E6'
        }
      }
    }
  },
  plugins: [],
}
