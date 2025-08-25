// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        waveY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        waveY: "waveY 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
