/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'toggle-up': 'toggle-up 1s ease-in-out',
        'toggle-up-slow': 'toggle-up 1.5s ease-in-out',
        spray: 'spray 1s ease-in-out',
        'fade-in-down': 'fade-in-down 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'fade-in-right': 'fade-in-right 1s ease-in-out',
      },
      keyframes: {
        'toggle-up': {
          '0%': {
            transform: 'translateY(50%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'fade-in-down': {
          '0%': {
            transform: 'translateY(-40%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'fade-in-up': {
          '0%': {
            transform: 'translateY(40%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'fade-in-right': {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        spray: {
          '0%': {
            transform: 'scale(0.5) translateY(40%)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1) translateY(0%)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
