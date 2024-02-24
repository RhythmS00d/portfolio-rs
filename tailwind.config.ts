import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "1.5rem",
    },
    extend: {
      backgroundColor: {
        primary: "#373535",
        secondary: "#FF8F27",
        white: "#EAEAEA",
        button: "#279CF2",
      },
      textColor: {
        primary: "#EAEAEA",
        secondary: "#FF8F27",
        name_heading: "#33905F",
      },
      animation: {
        openMenu: "slideOpen 200ms linear",
        closeMenu: "slideClose 200ms linear",
      },
      keyframes: {
        slideOpen: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        slideClose: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
