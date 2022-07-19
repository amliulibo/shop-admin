/*
 * @Author: liulb 20224151@qq.com
 * @Date: 2022-07-19 12:57:10
 * @LastEditors: liulb 20224151@qq.com
 * @LastEditTime: 2022-07-19 18:15:19
 * @FilePath: \shop-admin\src\router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 0 如果使用模块化机制编程，导入Vue和VueRouter
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//1 import 进来views文件夹下的页面组件
//用户组
import UserLogin from '@/views/user/Login.vue'
import UserRegister from '@/views/user/UserRegister.vue'

/**
 * 2 定义路由
 * 每个路由应该映射一个组件
 * 其中component可以通过Vue.extend()创建的组件构造器
 * 或者，只是一个组件配置对象
 */
const routes = [
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister,
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin,
    props: (route) => route.query,
    alias: '/',
  },
]
//3 创建router实例，然后routes配置
const router = new Router({
  routes, //(缩写)相当于routes:routes
})

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    //无token，未登录
    if (!sessionStorage.token) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      })
      return

      //已登录
      next()
    } else {
      next()
    }
  }
})

export default router
