<template>
  <div>
    <h2>Vue select</h2>
    <v-select
      :options="options"
      required
      :components="{ indicator }"
      v-model="selectedOption"
      :filterable="false"
      multiple
      :selectable="() => selectedOption.length < 2"
      :reduce="(item) => item.value"
      placeholder="Select Framework"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  created() {
    // this.setInitialOption();
  },
  data() {
    return {
      selectedOption: [],
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
  },
};
</script>

<style lang="scss" scoped></style>
