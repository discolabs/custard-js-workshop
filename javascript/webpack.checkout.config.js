const path = require("path");
const fs = require('fs');

module.exports = {
  entry: "./checkout/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!@discolabs)/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.join(__dirname, "..", "assets"),
    publicPath: "/",
    filename: "checkout.js"
  }
};
