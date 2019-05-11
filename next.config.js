const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'raw-loader',
    });
    if (
      config.mode === 'production' &&
      Array.isArray(config.optimization.minimizer)
    ) {
      const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
    }
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@actions'] = path.join(__dirname, 'actions');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');

    return config;
  },
});
