module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
      // open: process.platform === 'darwin',
      // host: 'localhost',
      port: 8071,
      // open: true, //配置自动启动浏览器
      proxy: {
        '/api': {
          target: 'http://59.111.92.205:8088', //对应自己的接口
          changeOrigin: true,
          ws: true,
          /* pathRewrite: {
            '^/api': ''
          } */
        },
        '/mv': {
          target: 'http://59.111.92.205:8089', //对应自己的接口
          changeOrigin: true,
        },
        
        '/astro': {
          target: 'https://api.jisuapi.com', //对应自己的接口
          changeOrigin: true,
        },
      }
     },
  }