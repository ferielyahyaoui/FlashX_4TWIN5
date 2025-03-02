/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Scans all HTML files in the public folder
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript/TypeScript files in the src folder
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" }, // Medium screens
      sm: { max: "550px" },   // Small screens
    },
    extend: {},
  },
};