// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue
import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)
// 入口文件src/App.vue
import App from './App.vue'
// 引入路由配置文件
import routes from './config/routes'
// 使用配置文件规则
const router = new VueRouter({
  routes
})

// 引入 api 文件
import api from './config/api'
// 将API方法绑定到全局
Vue.prototype.$api = api

/* eslint-disable no-new */
// 运行起来
new Vue({
  el: '#app',
  router,
  // 这到底是什么意思??
  render: (h) => h(App)
})
