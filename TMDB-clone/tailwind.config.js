/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "tmdb-dark-blue": "#0d253f",
        "tmdb-light-blue": "#01b4e4",
        "tmdb-light-green": "#90cea1",
      },
    },
  },
  plugins: [],
};
