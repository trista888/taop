import Vue from 'vue'
import './registerServiceWorker'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios';
import qs from 'qs';
Vue.config.productionTip = true;

axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
