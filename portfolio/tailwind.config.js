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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        waveY: "waveY 2.5s ease-in-out infinite",
        fadeIn: "fadeIn 0.8s ease-in forwards", // slower fade in
        fadeOut: "fadeOut 0.8s ease-out forwards", // faster fade out
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
