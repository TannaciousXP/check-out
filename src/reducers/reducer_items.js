import { ITEMS } from '../actions';
import { Items } from '../itemsInfo/items';

export default function(state = Items, action) {
  switch(action.type) {
    case ITEMS:
      return action.payload;
    default:
      return state;
  }
}