import { DISCOUNT, UPDATEDISCOUNT } from '../actions';
// set default
let discData = { 'DISCOUNT': [true, .10] }

export default function (state = discData, action) {
  switch (action.type) {
    case DISCOUNT:
      return action.payload;
    case UPDATEDISCOUNT:
      return action.payload
    default:
      return state;
  }
}