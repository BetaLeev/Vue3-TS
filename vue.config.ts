import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import SpeedMeasurePlugin from "speed-measure-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import os from "os";
const smp = new SpeedMeasurePlugin({
  pluginNames: {
    customUglifyName: UglifyJsPlugin,
  },
});

const webpackConfig = smp.wrap({
  plugins: [UglifyJsPlugin],
});
import HappyPack from "happypack";
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

import BundleAnalyzerPlugin from "webpack-bundle-analyzer";
// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin).end();
    }
    config.plugin("speed-measure-webpack-plugin").use(SpeedMeasurePlugin).end();
  },

  configureWebpack: {
    plugin: [new BundleAnalyzerPlugin.BundleAnalyzerPlugin()],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: true, //console
            drop_debugger: true,
            pure_funcs: ["console.log"], //移除console
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        styles: {
          name: "index",
          test: /.stylus|css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: OptimizeCssAssetsPlugin.ExtractTextPlugin.extract(
          "style",
          path.resolve(__dirname, "./node_modules", "happypack/loader") +
            "?id=less"
        ),
      },
      {
        test: /\.css$/,
        loader: OptimizeCssAssetsPlugin.ExtractTextPlugin.extract(
          "style-loader",
          "css-loader"
        ),
      },
      {
        test: /\.js$/,
        // use: ['babel-loader?cacheDirectory'] 之前是使用这种方式直接使用 loader
        // 现在用下面的方式替换成 happypack/loader，并使用 id 指定创建的 HappyPack 插件
        use: ["happypack/loader?id=babel"],
        // 排除 node_modules 目录下的文件
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: "less",
      loaders: ["css!less"],
      threadPool: happyThreadPool,
      cache: true,
      verbose: true,
    }),
    new MiniCssExtractPlugin(),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      algorithm: "gzip",
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
    new OptimizeCssAssetsPlugin.ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
  ],
};
