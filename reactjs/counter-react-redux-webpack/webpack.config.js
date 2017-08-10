const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/src/main.js',
  module: {
    loaders: [
      {
        loaders: ['react-hot-loader', 'babel-loader'],
        test: /\.js$/,
        include: __dirname + '/src'
      }
    ]
  },
  output: {
    filename: "app.js",
    path: __dirname + '/dist'
  },
  plugins: [HtmlWebPackPluginConfig],
  devServer: {
    port: 6172,
    contentBase: __dirname + '/dist'
  }
}