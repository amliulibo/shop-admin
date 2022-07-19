/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 18:30:59
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:32:36
 * @FilePath: \shop-admin\src\store\user\mutations.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const SetUserInfo = (state, user) => {
  state.userInfo = user
}
export default {
  SetUserInfo,
}
