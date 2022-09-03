const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    // overlay: true,
  },
  module: {
    rules: [
      { test: /\.js|x$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.html$/, loader: "html-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
