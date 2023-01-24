<template>
  <div style="display: flex; gap: 20px">
    <div
      v-for="(_, columnIndex) in column"
      style="display: flex; flex-direction: column"
      :key="`column-${columnIndex}`"
    >
      <!-- style="display: flex; flex-direction: column" -->

      <div v-for="(_, rowIndex) in row" :key="`row-${rowIndex}`">
        <SkeletonLoader
          :width="250"
          :height="20"
          :primary-opacity="0.5"
          :secondary-opacity="0.5"
          :key="`row-${rowIndex}-column-${columnIndex}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "./SkeletonLoader.vue";

export default {
  props: {
    row: {
      type: Number,
      default: 10,
    },
    column: {
      type: Number,
      default: 3,
    },
  },
  components: {
    SkeletonLoader,
  },
};
</script>
