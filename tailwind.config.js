/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#E7E7E7',
          '400': '#d4d4d4',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#5B5858 ',
          '800': '#424242',
          '900': '#212121',
        },
        blue: {
          '50': '#DFF6FF',
          '100': '#256D85',
          '200': '#06283D',
        },
      }
    },
  },
  plugins: [],
};
