/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        portfolio: {
          navy: '#2D1B69',
          slate: '#8B5A2B',
          blue: '#fe036a',
          lightBlue: '#fe036a',
          gray: '#5A4A6A',
          lightGray: '#A8A8A8'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}