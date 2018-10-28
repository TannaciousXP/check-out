import { combineReducers, createStore, applyMiddleware,  } from 'redux';
import promise from 'redux-promise';
// import files
import discount from './reducer_discount';
import discountAmt from './reducer_applyDisc';
import isPick from './reducer_setPickup';
import items from './reducer_items';
import pickupDis from './reduce_setPickupDisc';
import subTotal from './reducer_setSubTotal';
import total from './reducer_total';
import zip from './reducer_zip';

const rootReducer = combineReducers({
  discount,
  discountAmt,
  isPick,
  items,
  pickupDis,
  subTotal,
  total,
  zip,
});

const store = createStore(
  rootReducer,
  applyMiddleware(promise),
);

export default store;