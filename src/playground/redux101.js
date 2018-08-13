import { createStore } from 'redux';

// action generators
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
};

const setCount = ({ count }) => {
  return {
    type: 'SET',
    count: count
  };
};

const resetCount = () => {
  return {
    type: 'RESET',
    count: 0
  };
};

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log('store subscribe hit-', store.getState());
});

//
// INCREMENT
//
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// unsubscribe();

//
// DESCREMENT
//
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

//
// SET
//
store.dispatch(setCount({ count: 101 }));

//
// RESET
//
store.dispatch(resetCount());

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// decrement count
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
// store.dispatch({
//   type: 'DECREMENT'
// });
