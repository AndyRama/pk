import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6F1",
        sand: "#F3F0EA",
        card: "#FCFBF8",
        ink: "#18181B",
        body: "#6B6862",
        muted: "#8E8A84",
        gold: "#AB8149",
        line: "#E4DFD6",
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
