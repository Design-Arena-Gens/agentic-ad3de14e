/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7ff',
          100: '#d6ebff',
          200: '#add6ff',
          300: '#7cbaff',
          400: '#4a9cff',
          500: '#1f7fff',
          600: '#1062d6',
          700: '#0b4aa8',
          800: '#08377f',
          900: '#062a61',
        },
      },
      boxShadow: {
        glow: '0 10px 30px rgba(31, 127, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
