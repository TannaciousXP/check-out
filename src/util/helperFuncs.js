export const getSubTotal = (itemsArr) => {
  return itemsArr.reduce((total, item) => {
    return total += item.info.price;
  }, 0)
};