const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/styles/variables.scss"; ',
      },
    },
  },

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: "page-",
    },
  },
});
