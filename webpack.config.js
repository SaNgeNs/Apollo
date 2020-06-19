const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const baseDir = process.cwd();
const buildPath = path.join(baseDir, 'build');
const prodEnv = process.env.NODE_ENV === 'production';

const rules = [
  {
    test: /\.js(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  }
];
const extensions = ['.js', '.jsx'];

module.exports = [
  {
    name: "browser",
    target: 'web',
    entry: {
      main: './src/client.jsx',
    },
    output: {
      path: `${buildPath}/spa`,
      publicPath: '/',
      chunkFilename: '[name].spa.chunk.[contenthash].js',
      filename: '[name].spa.bundle.[contenthash].js',
    },
    module: {
      rules: [
        ...rules,
      ],
    },
    resolve: {
      extensions: [
        ...extensions
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            test: /node_modules/,
            enforce: true,
          },
        },
      },
      moduleIds: 'hashed',
      namedModules: true,
      namedChunks: true,
      nodeEnv: prodEnv && 'production',
      mangleWasmImports: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      flagIncludedChunks: true,
      occurrenceOrder: true,
      providedExports: true,
      usedExports: true,
      concatenateModules: prodEnv,
      // sideEffects: false,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: { // api-doc: https://terser.org/docs/api-reference#minify-options
            compress: {
              drop_console: prodEnv,
            },
            mangle: true,
            module: true,
            toplevel: true,
            keep_classnames: false,
            keep_fnames: false,
          },
        }),
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        defaultSizes: 'gzip',
        analyzerMode: 'server', // 'disabled'
      }),
      prodEnv ? new CompressionPlugin() : () => {},
      new LoadablePlugin(),
    ],
  },
  {
    name: 'ssr',
    target: 'node',
    entry: {
      main: './src/server.jsx',
    },
    externals: [webpackNodeExternals()],
    output: {
      path: buildPath,
      filename: 'server.js',
      chunkFilename: '[name].ssr.chunk.[contenthash].js',
    },
    module: {
      rules: [
        ...rules,
      ],
    },
    resolve: {
      extensions: [
        ...extensions
      ],
    },
    plugins: [
      new NodemonPlugin({
        watch: buildPath,
        script: path.join(buildPath, 'server.js'),
      }),
    ],
  }
];
