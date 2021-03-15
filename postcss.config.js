module.exports = {
    plugins : [
        require('autoprefixer')({
            grid: "autoplace"
        }),
        require("cssnano")({
            preset: ["default", { discardComments: { removeAll: true } }],
          }),
        require('css-mqpacker')({
            sort: true
          })
    ]
};