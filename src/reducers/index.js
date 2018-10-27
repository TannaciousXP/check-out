import { combineReducers, createStore, applyMiddleware,  } from 'redux';
import promise from 'redux-promise';
// import files
import discount from './reducer_discount';
import items from './reducer_items';

const rootReducer = combineReducers({
  discount,
  items
});




const store = createStore(
  rootReducer,
  applyMiddleware(promise),
);

export default store;