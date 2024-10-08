import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "spotlight": "radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
      },
      colors: {
        "background": "#0F172A",
      },
    },
  },
  plugins: [],
};
export default config;
