/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'Helvetica', 'sans-serif'],
      'serif': ['Crimson Text', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#000000',
        gray: '#F2F2F2',
        alert: '#FB0000',
      },
      spacing: {
        '2px': '.2rem',
        1: '.4rem',
        2: '1.2rem',
        3: '1.6rem',
        4: '2.4rem',
        5: '3.2rem',
        6: '4.8rem',
        7: '6.4rem',
        8: '7.2rem',
        9: '8rem',
        10: '9.2rem',
        '4/4': '100%',
      },
      fontSize: {
        'xs': '.8rem',
        's': '1.2rem',
        'm': '1.6rem',
        'l': '2rem',
        'xl': '2.4rem',
        '2xl': '3.2rem',
        '3xl': '3.6rem',
      },
      width: {
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '4/4': '100%',
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  plugins: [],
};
