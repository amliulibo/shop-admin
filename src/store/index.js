/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 18:30:14
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:52:07
 * @FilePath: \shop-admin\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
//module
import UserModule from './user/index'

Vue.use(vuex)
export default new Vuex.Store({
  modules: {
    User: UserModule,
  },
})
