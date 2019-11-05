import Vue from 'vue'
import App from './App.vue'
// 引入路由器,并注册
import router from './router'
// 引入store
// import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
   router, // 注册路由器
  //  store, // 注册仓库
}).$mount('#app')
