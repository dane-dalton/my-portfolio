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
        portalGlow: "portalGlow 0.75s alternate infinite",
        rotateIcon: "rotateIcon 4s linear infinite",
        bounceRight: "bounceRight 1s infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        portalGlow: {
          from: {
            boxShadow: "0 0 30px 1px rgba(255, 255, 255, 0.9)",
          },
          to: {
            boxShadow: "0 0 50px 4px rgba(255, 255, 255, 1)",
          },
        },
        rotateIcon: {
          from: {
            transform: "rotateY(var(--start-deg, 0deg))",
          },
          to: {
            transform: "rotateY(var(--end-deg, 360deg))",
          },
        },
        bounceRight: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
    screens: {
      xxs: "240px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1300px",
      xl: "1536px",
      xxl: "1700px",
    },
  },
  plugins: [],
};
