/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

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
        gray100: '#6C6C6C',
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
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
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
        'clamp-xs': 'clamp(.8rem, 3vw, 1rem)',
        'clamp-s': 'clamp(1rem, 3vw, 1.2rem)',
        'clamp-m': 'clamp(1.2rem, 3vw, 1.6rem)',
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
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const hoverUtilities = {
        '.opacity-80': {
          opacity: '.8',
        },
        '.opacity-100': {
          opacity: '1',
        },
        '.amount-btn-idle': {
          borderColor: theme('colors.gray100'),
        },
        '.amount-btn-hover': {
          borderColor: theme('colors.secondary'),
        },
        '.buy-btn-idle': {
          backgroundColor: theme('colors.gray100'),
        },
        '.buy-btn-hover': {
          backgroundColor: theme('colors.secondary'),
        },
      };

      addUtilities(hoverUtilities, ['hover']);
    })
  ],
};
