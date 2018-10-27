import { combineReducers, createStore, applyMiddleware,  } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
// import files
import testingData from './reducer_test';
import discount from ''

const rootReducer = combineReducers({
  testing: testingData,
});


// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStoreWithMiddleware(rootReducer, {}, enhancers);

// export default store;

const store = createStore(
  rootReducer,
  applyMiddleware(promise),
);

export default store;