/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#eeeeef",
          200: "#e6e9ed",
          600: "#95989c",
        },
        blue: {
          300: "#e0e7fe",
          500: "#3e38a7",
          600: "#5046e4",
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}