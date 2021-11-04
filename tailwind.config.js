// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navCol: {
          primary : "#2E3147",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
