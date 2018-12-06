// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from '../store/store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'; 
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.use(Mint)
Vue.config.productionTip = false
Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
