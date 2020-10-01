const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {

  return {
    entry: "./src/index.tsx",
    target: "web",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "..", "resources", "static",),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "awesome-typescript-loader",
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.css$/,
          loader: "css-loader",
        },
        {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "./src/yourfile.css",
      }),
    ],
  }
}