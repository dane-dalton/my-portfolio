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
  plugins: [],
};
