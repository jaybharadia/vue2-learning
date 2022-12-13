<template>
  <div>
    <!-- <VueSelectWrapper /> -->
    <v-select
      :options="options"
      required
      :components="{ indicator }"
      @input="selectedOption = $event"
      :value="selectedOption"
      :filterable="false"
      :reduce="(item) => item.value"
      placeholder="Select Framework"
    />
    <!-- @search="onSearch" -->
    <!-- :selectable="() => selectedOption.length < 2" -->
    <!-- multiple -->
  </div>
</template>

<script>
export default {
  components: {
    // VueSelectWrapper: require("@/components/VueSelectWrapper.vue"),
  },
  data() {
    return {
      // selectedOption: [],
      selectedOption: null,
      indicator: {
        render: (createElement) => createElement("span", "🔽"),
      },
      options: [
        {
          label: "Vue JS",
          value: "vue",
        },
        {
          label: "React JS",
          value: "react",
        },
        {
          label: "Nuxt JS",
          value: "nuxt",
        },
        {
          label: "Angular",
          value: "angular",
        },
      ],
    };
  },
  methods: {
    setInitialOption() {
      this.selectedOption = "nuxt";
    },
    onSearch(value) {
      console.log("value", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
