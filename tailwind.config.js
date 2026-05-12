/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // themes color
      primary: "#33B6FF",
      secondary: "#f4f5f6",
      tertiary: "#0d1013",
      gray: "#f6f6f6",
      black: "#000000",

      // background-color
      "color-1": "linear-gradient(145deg, #1e2024, #23272b)",
      "color-2": "#212428",
      "color-4": "#242435",
      body: "#878e99",
      transparent: "transparent",
      border: "#ffffff14",
    },
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      animation: {
        "scrolling-infinit": "scrolling 30s linear infinite",
      },
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-350vw)" },
        },
      },
      flex: {
        "scroll-item": "0 0 35vw",
      },
    },
  },
  plugins: [],
};
