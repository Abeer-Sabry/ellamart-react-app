// ----- Price-international-format
export const formatPrice = number => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return newNumber;
};
// ----- Responsible For Calculating Product Price Percentage
export const checkDiscountPercent = item => {
  const percentage = item.discountPercent ? (item.discountPercent / 100) * item.price : null;

  if (percentage) {
    return item.price - percentage;
  }
  return item.price;
};
