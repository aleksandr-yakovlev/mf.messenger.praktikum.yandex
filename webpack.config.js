let ExtractTextPlugin = require("extract-text-webpack-plugin");
let path = require("path");

const src = path.resolve(__dirname, "src");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"],
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
  plugins: [new ExtractTextPlugin("bundle.css")],
};
