import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense
} from '../../actions/expenses';

import expenses from '../fixtures/expenses';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

//
// REMOVE_EXPENSE
//
test('should setup remove expense action', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup the startRemoveExpense action', done => {
  const store = mockStore({});
  const id = expenses[0].id;

  store
    .dispatch(startRemoveExpense({ id: id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id: id
      });
      return database.ref(`expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(null);
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

//
// EDIT_EXPENSE
//
test('shoudl setup the edit expense action', () => {
  const action = editExpense('123abc', { note: 'testing note prop' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'testing note prop'
    }
  });
});

//
// ADD_EXPENSE
//
test('should setup the add expense action with provided values', () => {
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', done => {
  const store = mockStore({});
  const data = {
    description: 'dummy',
    note: 'dummy data note field',
    amount: 19956,
    createdAt: 1000
  };

  store
    .dispatch(startAddExpense(data))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...data
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      const snapshotVal = snapshot.val();
      expect(snapshotVal).toEqual(data);
      done();
    });
});

//
// SET_EXPENSES
//
test('should setup setExpenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should add expenses to database and store startSetExpenses', done => {
  const store = mockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
