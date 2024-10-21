/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite CU", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};
