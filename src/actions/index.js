export const DISCOUNT = 'discountCode';
export let setDiscount = function(currDiscData, newProp) {
  let discount = [true, .10];
  return {
    type: DISCOUNT,
    payload: { 'DISCOUNT': [true, .10]}
  };
}


export const ITEMS = 'items';
export let setItems = function(arrOfItems) {
  return {
    type: ITEMS,
    payload: arrOfItems
  }
}