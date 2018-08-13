// https://budget-app.mead.io/dashboard
// http://indecision.mead.io/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';

import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// console.log(store.getState());

// store.dispatch(
//   addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1534068000000 }) //12th Aug
// );
// store.dispatch(
//   addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 1533117600000 }) //1st Aug
// );
// store.dispatch(
//   addExpense({ description: 'Rent', amount: 109500, createdAt: 1530439200000 }) //1st July
// );

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('appRoot'));

// const template = React.createElement('p', {}, 'testing 123');
// ReactDOM.render(template, document.getElementById('appRoot'));
