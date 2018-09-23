const path = require("path");
const merge = require("webpack-merge");
const mocker = require("webpack-api-mocker");

const rootdir = path.join(__dirname, "../");
const webpackBaseConfig = require("./webpack.base.conf");
require("webpack-dev-server");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devServer: {
    contentBase: path.join(rootdir, "dist/"),
    compress: false,
    historyApiFallback: true,
    port: 3001,
    before(app) {
      // 模拟数据
      mocker(
        app,
        path.join(rootdir, "src/mock/index.js"),
      );
    }
  }
});
