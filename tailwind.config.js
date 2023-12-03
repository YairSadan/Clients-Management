/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'battleship-gray': {
          '50': '#f4f6f3',
          '100': '#e6e8e3',
          '200': '#ced2c8',
          '300': '#aab2a3',
          '400': '#808b77',
          '500': '#636f5a',
          '600': '#4b5645',
          '700': '#3c4537',
          '800': '#31382d',
          '900': '#292e26',
          '950': '#171a14',
      },
      
      'bone': {
        '50': '#f9f6f3',
        '100': '#f1eae3',
        '200': '#deccbc',
        '300': '#d0b6a1',
        '400': '#bd947a',
        '500': '#af7b60',
        '600': '#a26a54',
        '700': '#875647',
        '800': '#6e473e',
        '900': '#593c35',
        '950': '#2f1e1b',
    },
    
    'wine-berry': {
      '50': '#fbf4f8',
      '100': '#f8ebf1',
      '200': '#f2d8e5',
      '300': '#e8b9d0',
      '400': '#d88eb0',
      '500': '#c96b93',
      '600': '#b54d74',
      '700': '#9b3b5d',
      '800': '#81334e',
      '900': '#6c2f43',
      '950': '#451827',
  },
  'bunker': {
    '50': '#f6f7f9',
    '100': '#eceef2',
    '200': '#d5d9e2',
    '300': '#b1bac8',
    '400': '#8694aa',
    '500': '#677690',
    '600': '#525e77',
    '700': '#434d61',
    '800': '#3a4252',
    '900': '#343946',
    '950': '#14161b80',
},

      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}