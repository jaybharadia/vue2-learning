<template>
  <div class="container content">
    <h2>Vue Mask Package</h2>

    <label for="input"> Input : </label>
    <input type="text" v-mask="'####-##'" v-model="inputData" />

    <h2>Plain Text Formatting without Input</h2>
    <span>{{ "9999999999" | VMask("(###) ###-####") }}</span>

    <!-- <h3>Email Input Mask</h3>
    <input type="text" v-mask="emailMask" v-model="email" /> -->

    <h3>Number Mask</h3>
    <input type="text" v-mask="numberMask" v-model="amount" />
  </div>
</template>

<script>
import createNumberMask from "text-mask-addons/dist/createNumberMask";

export default {
  data() {
    return {
      inputData: "",
      email: "",
      amount: "",
      numberMask: createNumberMask({
        prefix: "",
        suffix: " $", // This will put the dollar sign at the end, with a space.
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
