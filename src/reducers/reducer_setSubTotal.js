import { SUBTOTAL } from '../actions';
import utils from '../util';

const { Items, getSubTotal } = utils;

const subTotal = getSubTotal(Items);

export default function(state = subTotal, action) {
  switch (action.type) {
    case SUBTOTAL:
      return action.payload;
    default:
      return state;
  }
}
