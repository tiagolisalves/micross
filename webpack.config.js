const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.js",
  target: "es5",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
