export const getSubTotal = (itemsArr) => {
  return itemsArr.reduce((total, item) => {
    return total += item.price;
  }, 0)
};