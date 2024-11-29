import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        linkHover: "var(--color-medium-light)",
        linksBackground: "var(--color-medium)",
        colorPrice : "var(--color-price)",
      },
    },
  },
  plugins: [],
} satisfies Config;
