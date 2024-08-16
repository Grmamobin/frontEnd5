/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['../../assets/fonts/Poppins-Medium.ttf'],
    },
    fontSize: {
      'normal18': ['18px', {
        lineHeight: 'normal',
        fontWeight: '700',
      }],
      'normal16':['16px',{
        lineHeight: 'normal',
        fontWeight: '600',
      }],
      'normal32': ['32px', {
        lineHeight: '160%',
        fontWeight: '700',
      }],
      'normal12':['12px', {
        fontWeight: '600',
        lineHeight: '170%',
      }],
      'normal10':['10px', {
        fontWeight: '400',
        lineHeight: '200%',
      }]
    },
    letterSpacing:{
      widest: '1.12px',
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(139.15deg, #F1C365 7.67%, #F6AE54 40.13%, #FF922F 59.18%)',
      'custom-gradient2': 'linear-gradient(270deg, #F1BF62 0.05%, #FF912E 97.84%)',
    },
  },
  plugins: [],
  screens:{
  }
}