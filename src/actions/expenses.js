const uuidV4 = require('uuid/v4');
import database from '../firebase/firebase';

//get the correct expenses db ref path
let expensesRef = uid => {
  return 'users/' + uid + '/expenses';
};

//
// ADD_EXPENSES
//
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    const dbPath = expensesRef(
      getState().auth ? getState().auth.uid : 'UID_unknown'
    );
    
    return database
      .ref(dbPath)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

//
// REMOVE_EXPENSE
//
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const dbPath = expensesRef(
      getState().auth ? getState().auth.uid : 'UID_unknown'
    );
    return database
      .ref(`${dbPath}/${id}`)
      .remove()
      .then(data => {
        dispatch(removeExpense({ id }));
      });
  };
};

//
// EDIT_EXPENSE
//
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const dbPath = expensesRef(
      getState().auth ? getState().auth.uid : 'UID_unknown'
    );
    return database
      .ref(`${dbPath}/${id}`)
      .update({
        ...updates
      })
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

//
// SET_EXPENSES
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const dbPath = expensesRef(
      getState().auth ? getState().auth.uid : 'UID_unknown'
    );
    return database
      .ref(dbPath)
      .once('value')
      .then(snapshot => {
        const expenses = [];

        snapshot.forEach(snapshotChild => {
          expenses.push({
            id: snapshotChild.key,
            ...snapshotChild.val()
          });
        });
        dispatch(setExpenses(expenses));
      })
      .catch(e => {});
  };
};
