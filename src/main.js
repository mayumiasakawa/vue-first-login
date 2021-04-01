import Vue from 'vue';
import App from './App.vue';
import axios from "axios";

Vue.config.productionTip = false

axios.defaults.baseURL =
'https://firestore.googleapis.com/v1/projects/vue-first-login/databases/(default)/documents/';

axios.interceptors.request.use();
axios.interceptors.response.use();

new Vue({
  render: h => h(App),
}).$mount('#app')
