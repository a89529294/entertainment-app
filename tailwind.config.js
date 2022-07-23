/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tomato-frog": "#FC4747",
        "dark-blue": "#10141E",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      spacing: {
        4.5: "18px",
        6.5: "26px",
      },
    },
  },
  plugins: [],
};
