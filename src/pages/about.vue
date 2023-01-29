<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Profile v-model="item" v-model:bag="bag" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "cocunt",
      bag: "small",
    };
  },
  components: {
    Profile: require("@/components/Profile.vue").default,
  },
};
</script>
