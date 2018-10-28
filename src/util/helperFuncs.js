export const getSubTotal = (itemsArr) => {
  return itemsArr.reduce((total, item) => {
    return total += item.price;
  }, 0)
};

export const getDiscount = (discObj) => {
  return Object.keys(discObj).reduce((applied, ele, i, self) => {
    if (!discObj[ele][0]) {
      applied += `${ele}${i === self.length - 1 ? '' : ''}`
    }
    return applied;
  }, '')
}