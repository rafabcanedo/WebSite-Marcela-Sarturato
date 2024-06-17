import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        roboto_mono: 'var(--font-roboto-mono)',
        mont: 'var(--font-montserrat)',
      },
      colors: {
        background: "#e2e2e2",
        white: "#FFFFFF",
        black: "#000000",
        primary: "#704d6e",
        secondary: "#919773",
        text: "#5F5F5F",
        gray: "#A1A1A1",
        navbar: "#e3e3e3",
      },
    },
  },
  plugins: [],
};
export default config;
