/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          default: "#ff12b0",
          variant: "#e6c962",
          t2: "#c4826f",
          t3: "#b5838d",
          t4: "#b15f65",
          t5: "#9a3a3e",
        },
        secondary: {
          default: "#ff99ac",
          variant: "#ff85a1",
          t2: "#ff7096",
          t3: "#ff5c8a",
          t4: "#ff477e",
          t5: "#ff0a54",
        },
        neutral: {
          primary: "#212B36",
          secondary: "#5E738A",
          800: "#333F4D",
          700: "#425263",
          600: "#516579",
          500: "#5E738A",
          300: "#7ebc89",
          200: "#c1dbb3",
          100: "#f2d078",
          50: "#faedca",
        },
      },
    },
  },
  plugins: [],
};
