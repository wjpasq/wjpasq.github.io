const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  chainWebpack: config => {
    config.module.rule('pdf')
        .test(/\.(pdf)(\?.*)?$/)
        .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/pdf/[name].[hash:8].[ext]'
              })
    }
})
