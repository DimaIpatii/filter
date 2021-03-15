const common = require('./webpack.common.js');
const path = require('path');
const {merge} = require('webpack-merge');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge( common, {
    mode : "development",
    devtool : "eval-cheap-module-source-map",
    target: "web",
    devServer : {
        index : 'index.html',
        contentBase : path.resolve(__dirname,"./dist"),
        hot : true,
        compress : true,
        port : 8080,
        open : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename : 'style.css'
        })
    ],
    module : {
        rules : [
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude : /node_modules/,
                use : [
                    {loader : MiniCssExtractPlugin.loader},
                    {
                        loader : 'css-loader',
                        options : {importLoaders : 1, sourceMap : true}
                    },
                    {
                        loader : 'sass-loader',
                        options : {sourceMap : true}
                    }
                ]
            }
        ]
    },
});