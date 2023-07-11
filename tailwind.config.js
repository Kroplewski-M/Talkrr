/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(-10%)" },
          "100%": { opacity: "1", transform: "translateX(0);" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
      },
    },
    colors: {
      primaryText: "#082b22",
      secondaryText: "#fefefe",
      background: "#ffffff",
      logo: "#ffffff",
      primaryButton: "#30d9ac",
      secondaryButton: "#f2fdfa",
      signOutBtn: "#BB0000",
      accent: "#46ddb5",
      navBg: "#30d9ac",
      black: "#222222",
      defaultPopUp: "#D3D3D3",
      errorPopUp: "#FF1a26",
      successPopUp: "#33FF33",
    },
  },
  plugins: [],
};
