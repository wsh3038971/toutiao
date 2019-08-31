import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue' // 引入home.vue
import Login from './views/login/index.vue' // 引入login.vue
Vue.use(Router)

export default new Router({
  // 配置路由
  routes: [
    {
      path: '/home/index',
      component: Home
    },
    {
      path: '/',
      component: Login
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
