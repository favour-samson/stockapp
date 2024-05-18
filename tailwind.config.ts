import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          500: "#002616",
          400: "#0B1E1E",
          300: "#045634",
          200: "#DA8E23",
        },
        secondary: {
          500: "#FAFFFF",
          400: "#475467",
          300: "#E1F4F4",
        },
      },
      screens: {
        md: "957px",
        la: "520px",
      },
    },
  },
  plugins: [],
};
export default config;
