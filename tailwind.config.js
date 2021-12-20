module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        body: ["'M PLUS Rounded 1c'"],
      },
      colors: {
        primary: "#7B71D6"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
