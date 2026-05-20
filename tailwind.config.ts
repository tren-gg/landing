import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#070708",
          900: "#0c0c0e",
          850: "#101013",
          800: "#15151a",
          700: "#1c1c22",
          600: "#26262d",
          500: "#3a3a43",
          400: "#5b5b64",
          300: "#8a8a92",
          200: "#b8b8be",
          100: "#dadadd",
          50: "#f3f3f4",
          0: "#ffffff",
        },
      },
      letterSpacing: {
        tightest: "0",
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
