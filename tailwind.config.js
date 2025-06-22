// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)", opacity: "0.1" },
          "50%": { transform: "translateX(0%)", opacity: "0.3" },
          "100%": { transform: "translateX(100%)", opacity: "0.1" },
        },
      },
      animation: {
        shine: "shine 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
