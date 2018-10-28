import { TOTAL } from '../actions';

export default function(state = 0, action) {
  switch (action.type) {
    case TOTAL:
      return action.payload;
    default:
      return state;
  }
}