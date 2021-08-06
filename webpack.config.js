const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./component/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-atoms.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./example/index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
