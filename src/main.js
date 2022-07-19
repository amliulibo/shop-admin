/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 12:57:14
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:54:40
 * @FilePath: \shop-admin\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
