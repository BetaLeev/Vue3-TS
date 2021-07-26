import OptimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

import HappyPack from "happypack";
const BundleAnalyzerPlugin =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
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
  },
  module: {
    rules: [
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
    ],
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      algorithm: "gzip",
    }),
    new BundleAnalyzerPlugin(),
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
