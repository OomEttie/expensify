import { expensesReducer } from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

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
// return state.map(expense => {
//   // console.log('expense-', expense);
//   // console.log('EDIT_EXPENSE action-', action.id);
//   if (expense.id == action.id) {
//     return { ...expense, ...action.updates };
//   } else {
//     return expense;
//   }
// });
// }
