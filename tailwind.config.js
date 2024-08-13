/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx}",
    "./src/Router/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "Poppins"
    },
    extend: {
      colors: {
        primary: "#707FDD",
        secondary: {
          100: "#FFFFFF", 
          200: "#F1F2F7"
        },
        border: "#C8CBD9",
        textSecondary: "#082431", 
        hover: "#C7CEFF",
        accent: {
          DEFAULT: "#9678D0",
          hover: "#8966D0",
        },
      },
      fontSize: {
        'sm': '16px',
        'md': '20px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
};
