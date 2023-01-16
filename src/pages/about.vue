<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Profile />
  </div>
</template>

<script>
export default {
  components: {
    Profile: require("@/components/Profile.vue").default,
  },
};
</script>
