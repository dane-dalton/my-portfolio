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
      },
    },
  },
  plugins: [],
};
