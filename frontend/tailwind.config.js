/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Epilogue', 'sans-serif'],
        'serif': ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const shopTextActive = {
        '.text-shop-active': {
          background: 'linear-gradient(272deg, #994D80 -0.13%, #E55CB8 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
          'display': 'inline-block', // Ensures background clip works properly
        },
      };
      addUtilities(shopTextActive, ['responsive', 'hover']);
    }),
  ],
}

