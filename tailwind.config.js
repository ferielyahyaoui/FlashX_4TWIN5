/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*","./src/*"],
  theme: {
    extend: {
      colors:{
        primary: "#00A0B1",
        secondary:"#00CBE0",
        tertiary:"#68d5e0",
      },
      fontFamily: {
        body: ["Work Sans"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
      },
    },
  },
  plugins: [],
}

