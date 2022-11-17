/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'M PLUS Rounded 1c'"],
      },
      colors: {
        primary: "#7B71D6",
      },
    },
  },
  plugins: [require("daisyui")],
};
