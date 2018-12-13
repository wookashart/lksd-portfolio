const path = require("path");
const webpack = require('webpack');
const publicPath = '/public/';

module.exports = {
  entry: ["./src/react.js"],

  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, publicPath),
    filename: "bundle.js",
    publicPath: publicPath,
    sourceMapFilename: 'bundle.map',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
}