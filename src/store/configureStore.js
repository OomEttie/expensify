import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { expensesReducer } from '../reducers/expenses';
import { filtersReducer } from '../reducers/filters';
import { authReducer } from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // store.subscribe(() => {
  //   const state = store.getState();
  // });

  return store;
};
