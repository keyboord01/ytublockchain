import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "circular-web": ["var(--font-circular-web)"],
        general: ["var(--font-general)"],
        "robert-medium": ["var(--font-robert-medium)"],
        "robert-regular": ["var(--font-robert-regular)"],
        family: ["var(--font-zentry)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
