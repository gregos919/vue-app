// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './layouts/App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#009bc0'
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
