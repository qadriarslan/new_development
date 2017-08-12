const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/main.js',
  output: {
      filename: 'app.js',
      path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/app',
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    port: 8888,
    contentBase: __dirname + '/dist'
  }
}