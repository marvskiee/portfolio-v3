import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        card_ratio: "16/10",
      },
      fontSize: {
        xxs: "10px"
      },
      colors: {
        cstm_violet: "#7D5DFD",
        cstm_lightgray: "#F5F5F5",
        cstm_gray: "#9E9EA7",
        cstm_black: "#1E1C1C",
        cstm_brown: "#fff",
        cstm_lightblack: "#2B2A2D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
