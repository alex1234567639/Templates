import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import smoothScroll from 'smoothscroll-polyfill';
import Carousel3d from 'vue-carousel-3d';
import Particles from "particles.vue";
import GAuth from 'vue-google-oauth2'
Vue.use(Particles);

// 列印
import Print from 'vue-print-nb'
Vue.use(Print)

// slick css
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

// tailwind css
import '@/assets/css/style.css'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios); //啟用 vue-axios, axios

// 多國語系 i18n
import i18n from './i18n/i18n'

// 彈窗
import Popup from './components/Popup'
Vue.use(Popup)

// 平滑滾動
smoothScroll.polyfill();

Vue.config.productionTip = false

/// api
import apiService from './api.js';
Vue.prototype.$apiService = new apiService(axios, store);


if (process.env.NODE_ENV === 'staging' || process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false;
} else {
    Vue.config.devtools = true;
}

// google-oauth
const gauthOption = {
    clientId: '840477974351-dpd5fdhh6jo3f3uj4vpekrmsm7bv9h64.apps.googleusercontent.com',
    scope: 'profile',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  axios,
  VueAxios,
  i18n,
  Carousel3d
}).$mount('#app')
