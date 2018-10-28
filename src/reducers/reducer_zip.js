import { ZIP } from '../actions';
let zip = { 'zipCode': [94112, 0.085]}

export default function (state = zip, action) {
  switch (action.type) {
    case ZIP:
      return action.payload;
    default:
      return state;
  }
}