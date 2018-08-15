import { expensesReducer } from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

//
// REMOVE_EXPENSES
//
test('should remove exspense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove exspense if ID not found ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//
// ADD_EXPENSE
//
test('should add a new expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: 'test_ADD_EXPENSE',
      description: 'Gum',
      note: 'test add new expense',
      amount: 99.95,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

//
// EDIT_EXPENSE
//
test('should edit an expense', () => {
  const change = 'new updates expenses';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: change
    }
  };
  const state = expensesReducer(expenses, action);
  // console.log(state);
  expect(state[1].description).toBe(change);
});

test('should not edit an expense if ID not found', () => {
  const change = 'new updates expenses';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: change
    }
  };
  const state = expensesReducer(expenses, action);
  // console.log(state);
  expect(state).toEqual(expenses);
});

//
// SET_EXPENSES
// 
test('should set new expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});

