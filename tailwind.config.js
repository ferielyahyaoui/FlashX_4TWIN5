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
        "custom-cyan": "#00a0b1", 
        "dark-custom-cyan": "#007A87", 
        "light-cyan": "#E0F7FA",
        "dark-gray": "#333",
        "medium-gray": "#666",
      },
      fontFamily: {
        body: ["Work Sans"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
        "custom-18": "18px",
        "custom-24": "24px",
        "custom-40": "40px",
      },
      lineHeight: {
        "custom-24": "24px",
      },
      boxShadow: {
        custom: "0px 16px 40px 0px rgba(112, 144, 176, 0.2)",
      },
    },
  },
  plugins: [],
}

