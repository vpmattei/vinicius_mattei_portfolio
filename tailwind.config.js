// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // new extra-small sizes
        xsm:  ["0.75rem", { lineHeight: "1.05rem" }],  // 12px
        "2xsm":["0.6875rem", { lineHeight: "1rem" }],  // 11px
        "3xsm":["0.625rem", { lineHeight: "0.95rem" }],// 10px
      },
    },
  },
  plugins: [],
};