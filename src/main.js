import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mock
import '../mock'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 样式文件需单独引入
// 引入全局样式
import '@/styles/index.scss'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
