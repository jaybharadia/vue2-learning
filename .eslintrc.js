module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@pagemaker.io"],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:@pagemaker.io/essential",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
