import Vue from "vue";
import { ValidationProvider, extend } from "vee-validate";

import { required, email, min, max, max_value, min_value } from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en";

const rules = { required, email, min, max, max_value, min_value };

for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: en.messages[rule], // add its message
  });
}

extend("secret", {
  validate: (value) => value === "example",
  message: "This is not the magic word",
});

extend("minimum", {
  validate: (value, args) => {
    console.log("value is ", value, "args", args);
    return true;
  },
  params: ["min", "max"],
  message: "The {_field_} field must have at least {min} characters and {max} characters at most",
});

// extend("one_of", (value, values) => {
//   console.log("input ", value, "args", values);
//   return values.indexOf(value) !== -1;
// });

extend("one_of", {
  validate: (value, args) => {
    console.log("input ", value, "args", args);
    return args.indexOf(value) !== -1;
  },

  message: "The {_field_} field is invalid....",
});

Vue.component("ValidationProvider", ValidationProvider);
