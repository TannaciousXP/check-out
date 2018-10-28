import { PICKUPDISC } from '../actions';

export default function (state = 3.85, action) {
  switch (action.type) {
    case PICKUPDISC:
      return action.payload;
    default:
      return state;
  }
}