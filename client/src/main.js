
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueToasted from 'vue-toasted';

// @ts-ignore
Vue.config.productionTip = false;

// Load Toast Plugin
// @ts-ignore
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

// @ts-ignore
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
