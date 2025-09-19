/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        circle: "circle(50% at 50% 50%)",
        ellipse: "ellipse(70% 50% at 50% 50%)",
        hexagon:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
