const path = require('path');
const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common,{
    mode : "production",
    devtool: "hidden-source-map",
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'style_[contenthash].css',
            chunkFilename: '[id].css'
        })
    ],
    output : {
        filename : 'index_[contenthash].js'
    },
    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/i,
                exclude : /node_modules/,
                use : [
                    {loader : MiniCssExtractPlugin.loader},
                    {loader : 'css-loader'},
                    {
                        loader : 'postcss-loader',
                        options : {
                            postcssOptions : {
                                config : path.resolve(__dirname,'postcss.config.js')
                            }
                        }
                    },
                    {loader : 'sass-loader'}
                ]
            }
        ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});