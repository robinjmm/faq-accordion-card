module.exports = {
    plugins: [
        require("@fullhuman/postcss-purgecss")({
            content: ["src/index.html"],
            variables: true,
            safelist: ["expand", "rotate", "bold"]
        }),
    ]
}