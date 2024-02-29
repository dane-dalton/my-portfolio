const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-bg-1": "#1a001d",
        "purple-bg-2": "#9d1999",
        "pink-bg-1": "#dd3086",
        "orange-bg-1": "#e7a400",
        "orange-text": "#e47f2a",
      },
      boxShadow: {
        centered: "0 0 24px 24px rgb(148 163 184 / 1)",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
    screens: {
      xxs: "240px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      xxl: "1700px",
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
