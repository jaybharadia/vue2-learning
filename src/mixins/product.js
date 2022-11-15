import { formatPrice } from "@/utilities/common";

export default {
  methods: {
    getAacBlocksPrice(price) {
      return formatPrice(price);
    },
  },
};
