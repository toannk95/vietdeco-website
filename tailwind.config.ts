import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EC",
        ink: "#201C18",
        gold: {
          DEFAULT: "#B4894F",
          light: "#D9B888",
          dark: "#8C6A3A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-be-vietnam)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        "bounce-slow": "bounce 2.4s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
