const { merge } = require('lodash');

export default function(config, swcOptions) {
  ['jsx', 'tsx'].forEach((rule) => {
    config.module
      .rule(rule)
      .use('swc-loader')
      .tap((options) => {
        return merge(options, swcOptions);
      });
  });
}