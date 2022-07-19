/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 14:13:33
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 14:22:01
 * @FilePath: \shop-admin\src\plugins\vue-axios.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import axios from 'axios'
import { Loading, Message } from 'element-ui'
import VueAxios from 'vue-axios'

let laoding
axios.interceptors.request.use(
  function (config) {
    //发送请求前做什么
    //排除登录，注册两个api
    loading = Loading.service({ background: 'rgba(0,0,0,0)' })
    if (
      config.url == '/api/admin/login' ||
      config.url == '/api/admin/register'
    ) {
      return config
    }

    if (sessionStorage.token) {
      config.headers.Authorization = `Bearer ${sessionStorage.token}`
    } else {
      Message.error('token未获取，请登录')
    }
    return config
  },
  function (eror) {
    //对请求错误做些什么
    return Promise.reject(error)
  },
)
