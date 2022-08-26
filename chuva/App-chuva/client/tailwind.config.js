module.exports = {
  purge: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        company:{
          100: "#ED7839",
          200: "#EE7A3A",
          300: "#FDF1EB",
          400: "#FFB354",
          500: "#8D350680",
          600: "#725C5C"
        }
      },
      fontFamily:{
        Roboto: ['Roboto'],
        Quicksand: ['Quicksand']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
