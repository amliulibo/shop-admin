/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 18:31:05
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:46:22
 * @FilePath: \shop-admin\src\store\user\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import actions from './action'

import getters from './getters'

import mutations from './mutations'
const state = {
  userInfo: '',
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
