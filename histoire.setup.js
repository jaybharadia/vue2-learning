import { defineSetupVue2 } from "@histoire/plugin-vue2";
import VueRouter from "vue-router";

export const setupVue2 = defineSetupVue2(({ app }) => {
  app.use(VueRouter);
});
