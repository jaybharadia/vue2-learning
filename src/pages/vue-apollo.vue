<template>
  <div>
    Vue Apollo

    <p v-if="$apollo.loading">Loading.....</p>
    <div v-else>
      {{ company }}
    </div>
  </div>
</template>

<script>
import getCompany from "@/graphql/queries/getCompany.gql";

export default {
  apollo: {
    company() {
      return {
        query() {
          if (this.productItem) {
            console.log("inside IF query reactive");
            return this.$gql(getCompany);
          } else {
            console.log("inside else query reactive");
            return this.$gql(getCompany);
          }
        },
        variables() {
          return {
            gstNo: this.gstNo,
            id: "61",
          };
        },

        update: (data) => {
          console.log("inside update ***", data);
          return data.company;
        },
      };
    },
  },
  data() {
    return {
      company: null,
      gstNo: "07AQPPK1278H1ZJ",
      productItem: null,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
