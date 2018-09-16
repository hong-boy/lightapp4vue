const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSPlugin = require("mini-css-extract-plugin");
const ProgressPlugin = require("progress-bar-webpack-plugin");
const SizePlugin = require("size-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const HappyPack = require("happypack");

const ThreadPool = HappyPack.ThreadPool({ size: 3 });
const rootdir = path.join(__dirname, "../");
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: {
    main: ["@babel/polyfill", path.join(rootdir, "src/entry.js")]
  },
  output: {
    path: path.join(rootdir, "dist/"),
    filename: "[name].[chunkhash:4].bundle.js",
    chunkFilename: "[name].[chunkhash:4].chunk.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      IOT: path.join(rootdir, "src/common/index.js"),
      "@": path.join(rootdir, "src"),
      "@common-vars": path.join(rootdir, "src/assets/scss/common-vars.scss"),
      "@assets": path.join(rootdir, "src/assets"),
      "@components": path.join(rootdir, "src/components")
    },
    extensions: [" ", ".js", ".vue", ".json"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        style: {
          name: "styles",
          test: /\.(css|scss)$/,
          chunks: "all"
        },
        vender: {
          name: "venders",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        },
        common: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      // eslint检查
      {
        enforce: "pre",
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "happypack/loader?id=eslint"
      },
      {
        test: /\.js$/,
        use: ["cache-loader", "happypack/loader?id=babel"],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: "happypack/loader?id=scss",
            js: "happypack/loader?id=babel"
          }
        }
      },
      {
        test: /\.(scss)$/,
        // use: "happypack/loader?id=scss",
        use: [
          "vue-style-loader",
          // 开启CSS Modules支持
          "happypack/loader?id=css-modules",
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true,
          //     localIdentName: "[local]-[hash:base64:5]"
          //   }
          // },
          // "sass-loader"
          "happypack/loader?id=scss"
        ],
        exclude: path.join(rootdir, "src/assets/scss/common.scss")
      },
      // SCSS预处理器（只编译element-ui的样式）
      {
        test: /\.(css|scss)$/,
        use: [
          "cache-loader",
          "vue-style-loader",
          "happypack/loader?id=css",
          "happypack/loader?id=scss"
        ],
        // use: "happypack/loader?id=css",
        include: [
          path.join(rootdir, "src/assets/scss/common.scss"),
          /node_modules/
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif|svg|mp4)(\?\S*)?$/,
        use: [
          { loader: "file-loader", options: { name: "[name]-[hash:4].[ext]" } }
        ]
      }
    ]
  },
  plugins: [
    // 显示编译进度
    new ProgressPlugin(true),
    // 清理目录
    new CleanWebpackPlugin(["dist"], {
      root: rootdir,
      verbose: true,
      dry: false
    }),
    new HappyPack({
      id: "eslint",
      threadPool: ThreadPool,
      loaders: ["eslint-loader"]
    }),
    new HappyPack({
      id: "babel",
      threadPool: ThreadPool,
      loaders: ["babel-loader"]
    }),
    new HappyPack({
      id: "scss",
      threadPool: ThreadPool,
      loaders: ["sass-loader"]
    }),
    new HappyPack({
      id: "css",
      threadPool: ThreadPool,
      loaders: ["css-loader"]
    }),
    new HappyPack({
      id: "css-modules",
      threadPool: ThreadPool,
      loaders: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: "[local]-[hash:base64:5]"
          }
        }
      ]
    }),
    // new HappyPack({
    //   id: "file",
    //   threadPool: ThreadPool,
    //   loaders: [
    //     { loader: "file-loader", options: { name: "[name]-[hash:4].[ext]" } }
    //   ]
    // }),
    // 支持vue-loader
    new VueLoaderPlugin(),
    // CSS压缩
    new MiniCSSPlugin({
      filename: "[name]-[contenthash:4].css",
      chunkFilename: "[id]-[chunkhash:4].css"
    }),
    // html模板
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.join(rootdir, "src/index.html")
    }),
    // 模块大小提示
    new SizePlugin()
  ]
});
