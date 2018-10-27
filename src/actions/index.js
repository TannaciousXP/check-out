export const TESTING = 'test';
export const DISCOUNT = 'discountCode';

export let getTest = function() {
  return {
    type: TESTING,
    payload: 'TannaciousXP'
  }
};

export let setDiscount = function() {
  return {
    type: DISCOUNT,
    payload: {'DISCOUNT': true}
  };
}