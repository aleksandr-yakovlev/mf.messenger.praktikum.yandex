const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");

const src = path.resolve(__dirname, "build");

module.exports = {
  entry: path.resolve(src, "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer],
              },
            },
          ],
        }),
      },
      {
        test: /\.hbs/,
        loader: "handlebars-loader",
        exclude: /(node_modules)/,
        options: {
          partialDirs: path.resolve(src, "partials"),
          helperDirs: path.resolve(src, "helpers"),
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      title: "mf.messenger.praktikum.yandex",
      template: "index.html",
    }),
  ],
};
