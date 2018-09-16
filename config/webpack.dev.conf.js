const path = require("path");
const merge = require("webpack-merge");

const rootdir = path.join(__dirname, "../");
const webpackBaseConfig = require("./webpack.base.conf");
require("webpack-dev-server");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devServer: {
    contentBase: path.join(rootdir, "dist/"),
    compress: false,
    historyApiFallback: true,
    port: 3001
  }
});
