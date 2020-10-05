import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

//Vue.config.productionTip = true;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
