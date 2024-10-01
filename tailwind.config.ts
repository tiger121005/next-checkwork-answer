import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#e07594"
        },
        secondary: {
          100: "#f8cbcb",
          400: "#f2b1ae",
          DEFAULT: "#f2a09d"
        },
        accent: {
          ToTop: "#80d3ff",
          300: "#a6daf3",
          DEFAULT: "#63bdeb"
        },

        text: {
          DEFAULT: "#3a3c42"

        },
        background: {
          DEFAULT: "#fff7f9",
          loading: "#fafdff"
        },
      },
    },
  },
  plugins: [],
};
export default config;
