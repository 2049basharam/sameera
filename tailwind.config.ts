import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F5F3EE",
          subtle: "#ECEAE3",
          pure: "#FFFFFF",
        },
        charcoal: {
          DEFAULT: "#171918",
          light: "#262927",
          dark: "#0F100F",
        },
        forest: {
          DEFAULT: "#283C32",
          deep: "#1C2A23",
          light: "#395245",
        },
        sage: {
          DEFAULT: "#A9B7A0",
          light: "#CAD4C3",
          dark: "#7E8F74",
        },
        subtext: "#777B76",
        borderline: "rgba(23, 25, 24, 0.08)",
        borderdark: "rgba(23, 25, 24, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest: ".2em",
        tighter: "-.04em",
      },
      transitionTimingFunction: {
        "cinematic": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
