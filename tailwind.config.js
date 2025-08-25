/**@type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        auroraPulse: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
      },
      animation: {
        auroraPulse: "auroraPulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
