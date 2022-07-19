/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 12:56:30
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 13:45:54
 * @FilePath: \shop-admin\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true, //开启websocket代理
        changeorigine: true, //虚拟服务器收发请求，解决跨域
        pathRewrite: {
          '^/api': '/api',
        },
      },
      '/images': {
        target: 'http://127.0.0.1:3000',
        ws: true, //开启websocket代理
        changeorigine: true, //虚拟服务器收发请求，解决跨域
        pathRewrite: {
          '^/images': '/images',
        },
      },
    },
  },

  publicPath: '/admin/',
}
