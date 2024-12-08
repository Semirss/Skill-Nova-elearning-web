/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#010E23',
        'secondary': '#F9F9FF',
        'bright': '#FF5733',
        'new': '#F5F5DC',
      }
    },
  },
  plugins: [],
}

