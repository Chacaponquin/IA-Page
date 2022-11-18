module.exports = {
  content: ["./src/**/*.{html,ts}"],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary_color: "#3498db",
        dark_color: "#1e272e",
      },
      fontFamily: {
        firaCodeBold: ["FiraCodeBold"],
      },
      screens: {
        exsm: { max: "400px" },
        esm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
