import Vue from "vue";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";
import axios from "@/plugins/axios";

Vue.component("v-select", vSelect);

// Registering Icons Automatically globally.

const icons = require.context("./icons", true, /\.vue/i);
icons.keys().map((item) => {
  let tempArray = item.split("/");
  let name = tempArray[tempArray.length - 1].split(".")[0];
  let component = icons(item);
  Vue.component(name, component.default);
});

// Registering Axios globally
Vue.prototype.$axios = axios;
