<template>
  <div>
    <h3>PROFILE COMPONENT</h3>

    <div>
      Item Prop
      {{ value }}
    </div>

    <div>
      BAG PROP
      {{ bag }}
    </div>

    <button type="button" @click="$emit('input', 'hardar')">
      Update item prop
    </button>

    <button @click="$emit('input:bag', 'large')">UPdate bag prop</button>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Array],
    bag: String,
  },
  created() {
    console.log("inside created hook");
  },
  mounted() {
    console.log("insdie mounted hook");
  },
};
</script>

<style scoped></style>
