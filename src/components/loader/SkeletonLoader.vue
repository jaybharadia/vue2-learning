<template>
  <LvSkeleton
    primaryColor="#607c8a"
    secondaryColor="#8aa6b5"
    :width="width"
    :primary-opacity="primaryOpacity"
    :secondary-opacity="secondaryOpacity"
    :height="height"
  />
</template>

<script>
import LvSkeleton from "lightvue/skeleton";

export default {
  props: {
    primaryOpacity: {
      type: Number,
      default: 0.5,
    },
    secondaryOpacity: {
      type: Number,
      default: 0.5,
    },
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 40,
    },
  },
  components: {
    LvSkeleton,
  },
};
</script>

<style scoped></style>
