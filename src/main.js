import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.less' // 初始化样式
import ElementUI from 'element-ui' // 引入
import 'element-ui/lib/theme-chalk/index.css' // element样式
import axios from 'axios' // 引入axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 省略基础地址
Vue.prototype.$axios = axios //  将axios绑定在vue的原型上

Vue.use(ElementUI) // 使用elementui

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
