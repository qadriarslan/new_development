var HTMLWebpackPlugin = require("html-webpack-plugin")
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: "body"
})

module.exports = {
    entry: "./app/main.js",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: __dirname + "/app",
                query: {
                    presets: ["react"]
                }
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
        port: 8474,
        contentBase: "./dist"
    }
}