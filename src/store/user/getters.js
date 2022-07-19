/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 18:30:48
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:45:14
 * @FilePath: \shop-admin\src\store\user\getters.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const role = (state) => state.userInfo.role
const nickname = (state) => state.userInfo.nickname
const avatar = (state) => state.userInfo.avatar

export default {
  role,
  nickname,
  avatar,
}
