
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'eslint-loader',
        exclude: ['node_modules']
      }
    ],

    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"} 
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
