const path = require("path");
const webpack = require("webpack");
const DtsBundlerPlugin = require("dtsbundler-webpack-plugin");

module.exports = {
  entry: "./lib/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "lib"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "lib"),
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react-atoms.js",
    library: "react-atoms",
    libraryTarget: "umd",
  },
  externals: ["react", "classnames"],
  plugins: [new DtsBundlerPlugin({ out: "react-atoms.d.ts" })],
};
