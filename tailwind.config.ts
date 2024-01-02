import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "480px",
      },
      colors: {
        text: "#FFFFFF",
        bg: "#0d0c22",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      height: {
        "calc-100vh-100px": "calc(100vh - 100px)",
      },
    },
  },
  plugins: [],
};
export default config;
