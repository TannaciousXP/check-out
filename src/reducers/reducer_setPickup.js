import { ISPICKUP } from '../actions';

export default function (state = true, action) {
  switch (action.type) {
    case ISPICKUP:
      return action.payload;
    default:
    return state;
  }
}