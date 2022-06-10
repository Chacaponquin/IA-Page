module.exports = {
    content: ["./src/**/*.{html,ts}"],
    important: true,
    theme: {
        extend: {
            colors: {
                primary_color: "#3498db",
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