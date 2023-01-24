<template>
  <div>
    <template v-for="(_, index) in 3">
      <LvListLoader
        :key="`column-${index}`"
        :width="width"
        :height="height"
        primaryColor="#607c8a"
        secondaryColor="#8aa6b5"
      />
    </template>
  </div>
</template>

<script>
import LvListLoader from "lightvue/skeleton/preset/ListLoader.vue";

export default {
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
  components: {
    LvListLoader,
  },
};
</script>
