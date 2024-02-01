module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        "daily-dev-tips": "#F89283",
      },
      fontFamily: {
        neue: ["Comic-Neue", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    // boxShadow: false,
  },
};
