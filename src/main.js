import Vue from 'vue'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios';
import qs from 'qs';

Vue.use(ElementUI);
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
