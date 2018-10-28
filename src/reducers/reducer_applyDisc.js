import { APPLYDISCOUNT } from '../actions'

export default function (state = 0, action) {
  switch (action.type) {
    case APPLYDISCOUNT:
      return action.payload;
    default:
      return state;
  }
}