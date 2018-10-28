import { combineReducers, createStore, applyMiddleware,  } from 'redux';
import promise from 'redux-promise';
// import files
import discount from './reducer_discount';
import items from './reducer_items';
import zip from './reducer_zip';
import isPick from './reducer_setPickup';
import pickupDis from './reduce_setPickupDisc';

const rootReducer = combineReducers({
  discount,
  isPick,
  items,
  pickupDis,
  zip,
});




const store = createStore(
  rootReducer,
  applyMiddleware(promise),
);

export default store;