const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry : ["@babel/polyfill","./src/index.js"],
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : 'index_bundle.js',
        clean: true,
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : "To-do Filter",
            filename : 'index.html',
            template : './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/i,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader : 'babel-loader',
                    options : {

                    }
                }
            }
        ]
    }
};