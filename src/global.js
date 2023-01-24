import Vue from "vue";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";
import axios from "@/plugins/axios";
import gql from "graphql-tag";
Vue.component("v-select", vSelect);

// List Loader
import ListLoader from "@/components/loader/ListLoader.vue";
Vue.component("ListLoader", ListLoader);

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

// Registering GQL TAG
Vue.prototype.$gql = (query) =>
  gql`
    ${query}
  `;

import LvButton from "lightvue/button";
Vue.component("LvButton", LvButton);

import LvCheckBox from "lightvue/checkbox";
Vue.component("LvCheckBox", LvCheckBox);
