const path = require('path');
// const merge = require('webpack-merge');
// const HappyPack = require('happypack');
const rootdir = path.join(__dirname, '../');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSPlugin = require('mini-css-extract-plugin');
const ProgressPlugin = require('progress-bar-webpack-plugin');
const SizePlugin = require('size-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  entry: {
    main: ['@babel/polyfill', path.join(rootdir, 'src/entry.js')],
  },
  output: {
    path: path.join(rootdir, 'dist/'),
    filename: '[name].[chunkhash:4].bundle.js',
    chunkFilename: '[name].[chunkhash:4].chunk.js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      IOT: path.join(rootdir, 'src/common/index.js'),
      '@': path.join(rootdir, 'src'),
      '@common-vars': path.join(rootdir, 'src/assets/scss/common-vars.scss'),
      '@assets': path.join(rootdir, 'src/assets'),
      '@components': path.join(rootdir, 'src/components'),
    },
    extensions: [' ', '.js', '.vue', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        style: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
        },
        vender: {
          name: 'venders',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
        common: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
  module: {
    rules: [
      // eslint检查
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        use: ['cache-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [
          'vue-style-loader',
          // 开启CSS Modules支持
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
        exclude: path.join(rootdir, 'src/assets/scss/common.scss'),
      },
      // SCSS预处理器（只编译element-ui的样式）
      {
        test: /\.(css|scss)$/,
        use: ['cache-loader', 'vue-style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.join(rootdir, 'src/assets/scss/common.scss'),
          /node_modules/,
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif|svg|mp4)(\?\S*)?$/,
        use: [
          { loader: 'file-loader', options: { name: '[name]-[hash:4].[ext]' } },
        ],
      },
    ],
  },
  plugins: [
    // 显示编译进度
    new ProgressPlugin(true),
    // 清理目录
    new CleanWebpackPlugin(['dist'], {
      root: rootdir,
      verbose: true,
      dry: false,
    }),
    // 支持vue-loader
    new VueLoaderPlugin(),
    // CSS压缩
    new MiniCSSPlugin({
      filename: '[name]-[contenthash:4].css',
      chunkFilename: '[id]-[chunkhash:4].css',
    }),
    // html模板
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootdir, 'src/index.html'),
    }),
    // 模块大小提示
    new SizePlugin(),
  ],
});
