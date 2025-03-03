/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*","./src/*"],
  theme: {
    screens: {
      md: { max: "1050px" }, // Medium screens
      sm: { max: "550px" },   // Small screens
    },
    extend: {
      colors:{
        primary: "#00a0b1",
        secondary:"#00a0b1",
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

