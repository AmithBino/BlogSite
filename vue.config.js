module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/<your-repo-name>/' : '/',
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        return options;
      });
  }
}
