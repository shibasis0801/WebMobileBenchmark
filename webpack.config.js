const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
let minimize = true;

let config, babelOptions;
const isApp = process.env.APP === "true";
if (isApp) {
  const appConfig = require("./android/webpack.config");
  config = appConfig;

  const ReactNative = require('@callstack/repack');
  const mode = ReactNative.getMode({ fallback: 'development' });
  const dev = mode === 'development';
  const devServer = ReactNative.getDevServerOptions();
  const minimize = ReactNative.isMinimizeEnabled({ fallback: !dev });

  babelOptions = {
    /** Add React Refresh transform only when HMR is enabled. */
    plugins: devServer.hmr ? ['module:react-refresh/babel'] : [],
    presets: []
  }
}
else {
  const webConfig = require("./web/webpack.config");
  config = webConfig;

  babelOptions = {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: []
  }
}


babelOptions.plugins.push('lodash');

config.module.rules.push({
  test: /\.[jt]sx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: babelOptions
  }
})
config.plugins.push(new LodashModuleReplacementPlugin({
  shorthands: false,
  cloning: false,
  currying: false,
  caching: false,
  collections: false,
  exotics: false,
  guards: false,
  metadata: false,
  deburring: false,
  unicode: false,
  chaining: false,
  memoizing: true,
  coercions: false,
  flattening: false,
  paths: true,
  placeholders: false
}));
config.optimization = {
  minimize,
  minimizer: [
    new TerserPlugin({
      ...(isApp && { test: /\.(js)?bundle(\?.*)?$/i}),
      extractComments: false,
    }),
  ],
}



module.exports = config;
