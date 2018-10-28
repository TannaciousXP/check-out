import { ITEMS } from '../actions';
import utils from '../util';

const { Items } = utils;

export default function(state = Items, action) {
  switch(action.type) {
    case ITEMS:
      return action.payload;
    default:
      return state;
  }
}