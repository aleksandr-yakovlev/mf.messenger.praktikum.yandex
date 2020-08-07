const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require("autoprefixer");
const path = require("path");

const src = path.resolve(__dirname, "src");

module.exports = {
  entry: path.resolve(src, "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
  },
  devServer: {
    contentBase: "dist",
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
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
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
},
  plugins: [
    new ExtractTextPlugin({filename: 'style.[hash].bundle.css', disable: false, allChunks: true}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      title: "mf.messenger.praktikum.yandex",
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
