import { DISCOUNT } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case DISCOUNT:
      return action.payload;
    default:
      return state;
  }
}