<template>
  <div class="container content">
    <h2>Orders List</h2>

    <div v-if="orders.length">
      <pre>
        {{ orders }}
      </pre>
    </div>
    <div v-else>No data available</div>
  </div>
</template>

<script>
// import addInvestor from "@/graphql/addInvestor.gql";
export default {
  data() {
    return {
      orders: [],
      params: {
        filter: {
          project_id: 338,
        },
        include:
          "products,products.brand,products.categories,products.attributeOptions.attribute,orderStatus,paymentStatus,orderProducts.orderProductStatus,orderProducts.orderProductPaymentStatus",
      },
    };
  },
  created() {
    // console.log("this $apollo Helper", this.$apollo);
    // this.$axios
    //   .get("orders", { useCache: true, params: this.params })
    //   .then((res) => {
    //     this.orders = res.data.data;
    //   });
    // this.$mutate(addInvestor, {
    //   email: "n@g.com",
    //   firstName: "nayan",
    //   lastName: "padshala",
    //   mcc: "+91",
    //   mediaId: null,
    //   middleName: "B",
    //   mobile: "6806260633",
    //   password: "admin123",
    // })
    //   .then()
    //   .catch((error) => {
    //     console.log("error", error.graphQLErrors);
    //   });
  },
};
</script>

<style lang="scss" scoped></style>
