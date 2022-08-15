<template>
  <div>
    I Mask Library

    <label for=""> Date Mask </label>
    <imask-input
      v-model="numberModel"
      :mask="Date"
      :unmask="true"
      @accept="onAccept"
      placeholder="Enter here"
    />
  </div>
</template>

<script>
import { IMaskComponent } from "vue-imask";

export default {
  components: {
    "imask-input": IMaskComponent,
  },
  data() {
    return {
      numberModel: "",
    };
  },
  methods: {
    onAccept(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
