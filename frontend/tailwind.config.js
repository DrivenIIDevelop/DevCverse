/** @type {import('tailwindcss').Config} */

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
      boxShadow: {
        'even': '10px 10px rgba(235, 235, 235, 0.8)', // Custom shadow definition
      }
    },
  },
  plugins: [],
}

