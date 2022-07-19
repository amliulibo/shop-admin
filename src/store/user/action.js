/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 18:30:33
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:43:37
 * @FilePath: \shop-admin\src\store\user\action.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import User from '@/api/index'
import { reject } from 'core-js/fn/promise'

const Login = ({ commit, state }, formData) => {
  return new Promise((resolve, reject) => {
    User.Login(formData).then((res) => {
      if (!res.status) {
        reject(res)
        return
      }
      //存储到state
      commit('SetUserInfo', res.data)
    })
  })
}

const Register = ({ commit, state }, formData) => {
  return new Promise((resolve, reject) => {
    User.register(formData).then((res) => {
      if (!res.status) {
        reject(res)
        return
      }
      //存储到state
      commit('SetUserInfo', res.data)
    })
  })
}

const GetUserInfo = ({ commit, state }, formData) => {
  return new Promise((resolve, reject) => {
    User.getUserInfo(formData).then((res) => {
      if (!res.status) {
        reject(res)
        return
      }
      //存储到state
      commit('SetUserInfo', res.data)
    })
  })
}
const UpdateUserInfo = ({ commit, state }, formData) => {
  return new Promise((resolve, reject) => {
    User.updateUserInfo(formData).then((res) => {
      if (!res.status) {
        reject(res)
        return
      }
      //存储到state
      commit('SetUserInfo', res.data)
    })
  })
}

export default {
  Login,
  Register,
  GetUserInfo,
  UpdateUserInfo,
}
