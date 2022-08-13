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
    this.$axios
      .get("orders", { useCache: true, params: this.params })
      .then((res) => {
        this.orders = res.data.data;
      });
  },
};
</script>

<style lang="scss" scoped></style>
