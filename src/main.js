// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'antd-button-color/dist/css/style.css'; // or 'antd-button-color/dist/css/style.less'
import VueCurrencyInput from 'vue-currency-input'

const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: { distractionFree: { hidecrrencySymbol: true } }, locale: 'en', precision: 0, }
}
import VueTheMask from 'vue-the-mask'
// import VueMoney from 'v-money'

// Vue.use(VueMoney, {precision: 0,  thousands: ','})

Vue.use(VueTheMask)
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(VueCurrencyInput, pluginOptions);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
