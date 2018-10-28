export const DISCOUNT = 'discountCode';
export let setDiscount = function(currDiscData, key, value) {
  currDiscData[key] = [true, value];
  return {
    type: DISCOUNT,
    payload: currDiscData
  };
}


export const ITEMS = 'items';
export let setItems = function(arrOfItems) {
  return {
    type: ITEMS,
    payload: arrOfItems
  }
}

export const ZIP = 'zipCode';
export let setZip = function (currZip, value) {
  // value = [zipCode, taxWithDecimal]
  currZip[ZIP] = value;
  return {
    type: ZIP,
    payload: currZip
  }
}

export const ISPICKUP = 'pickup';
export let setPickupFlag = function (bool) {
  return {
    type: ISPICKUP,
    payload: bool
  }
}

export const PICKUPDISC = 'pickupDisc';
export let setPickupDisc = function(amt) {
  return {
    type: PICKUPDISC,
    payload: amt
  }
}

export const SUBTOTAL = 'subTotal';
export let setSubTotal = function(amt) {
  return {
    type: SUBTOTAL,
    payload: amt
  }
}

export const TOTAL = 'subTotal';
export let setTotal = function(amt) {
  return {
    type: TOTAL,
    payload: amt
  }
}