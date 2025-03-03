
module.exports = {
  content: ["./*.html"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        "custom-cyan": "#00a0b1", 
        "dark-custom-cyan": "#007A87", 
        "light-cyan": "#E0F7FA",
        "dark-gray": "#333",
        "medium-gray": "#666",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      fontSize: {
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
};