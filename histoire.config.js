import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue2";

export default defineConfig({
  setupFile: "./histoire.setup.js",
  plugins: [HstVue()],
});
