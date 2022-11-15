export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", currencyDisplay: "symbol", maximumFractionDigits: 2 }).format(price);
};
