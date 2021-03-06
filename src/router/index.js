// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由的配置的数组
import routes from './routes.js'
// 声明使用
Vue.use(VueRouter)
// 配置路由
export default new VueRouter({
  mode: 'hash',
  routes
})
