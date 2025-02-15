import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-general)", "sans-serif"],
        "circular-web": ["var(--font-circular-web)"],
        general: ["var(--font-general)"],
        "robert-medium": ["var(--font-robert-medium)"],
        "robert-regular": ["var(--font-robert-regular)"],
        anton: ["var(--font-anton)"],
      },
    },
  },
  plugins: [],
};

export default config;
