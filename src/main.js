import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./styles/index.css";
import "./global";

import "./plugins/index.js";
import './registerServiceWorker'
import { createProvider } from './vue-apollo'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount("#app");
