/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#000000',
        gray: '#F2F2F2',
        alert: '#FB0000',
      },
      spacing: {
        1: '.4rem',
        2: '.8rem',
        3: '1.2rem',
        4: '16.6rem',
        5: '2rem',
        6: '2.4rem',
        100: '100%'
      },
      width: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '4/4': '100%',
      },
    },
  },
  plugins: [],
};
