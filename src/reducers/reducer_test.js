import { TESTING } from '../actions';


export default function (state = 'heetee', action) {
  switch (action.type) {
    case TESTING:
      return action.payload;
    default:
      return state;
  }
}