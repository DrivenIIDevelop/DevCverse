/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Epilogue', 'sans-serif'],
        'serif': ['Fraunces', 'serif'],
      },
      boxShadow: {
        'even': '10px 10px rgba(235, 235, 235, 0.8)', 
        'answer-hover': '0px 5px 10px 0px rgba(76, 191, 113, 0.25)',
        'quiz-progress': '0px 5px 10px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}

