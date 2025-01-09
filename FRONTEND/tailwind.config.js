const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'white',
        // primary: "#BDEB00",
        primary: "#60A5FA",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },
        red: 'red',
        gray: {
          100: '#f8fafc', // Light gray
          200: '#e5e7eb', // Medium light gray (for shadows)
          700: '#4a5568', // Dark gray
          800: '#2d3748', // Dark gray (used for dark mode)
        },
        default: '#0f172a',
        'shadow-gray-900': 'rgba(17, 24, 39, 0.5)', 
        'shadow-gray-200': 'rgba(229, 231, 235, 0.5)',
      }
    }
  },
  darkMode: "class", // Permite el uso de clases para el modo oscuro
  plugins: [nextui()],
};
