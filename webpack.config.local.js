const path = require("path");
const config = require("./webpack.config")
const { merge } = require("webpack-merge")
const packageName = require('./package.json').name;
module.exports = merge(config, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
})