module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
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
