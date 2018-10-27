import { DISCOUNT } from '../actions';
let discData = { 'DISCOUNT': [true, .10] }

export default function (state = discData, action) {
  switch (action.type) {
    case DISCOUNT:
      return action.payload;
    default:
      return state;
  }
}