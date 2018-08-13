import { createStore, combineReducers } from 'redux';
const uuidV4 = require('uuid/v4');

// ********
// EXPENSES
// ********
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidV4(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    // return state.concat(action.expense);
    case 'REMOVE_EXPENSE':
      return state.filter(data => data.id != action.id);
    case 'EDIT_EXPENSE': {
      // const expenseIndex = state.findIndex(data => data.id == action.id);
      // return { ...state[expenseIndex], amount: action.amount };
      return state.map(expense => {
        // console.log('expense-', expense);
        // console.log('EDIT_EXPENSE action-', action.id);
        if (expense.id == action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    }
    default:
      return state;
  }
};

// *******
// FILTERS
// *******

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  filterText: text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate: endDate
});

// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.filterText };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate != 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate != 'number' || expense.createdAt <= endDate;
      const textMatch =
        expense.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy == 'date') {
        return a.createdAt < b.createdAt ? -1 : 1;
      }
      if (sortBy == 'amount') {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);

});

//
// DISPATCH
//
const expenseRent = store.dispatch(
  addExpense({ description: 'Rent', amount: 1000, createdAt: 2000 })
);
const expenseCell = store.dispatch(
  addExpense({ description: 'Cell', amount: 1599, createdAt: 1000 })
);
// store.dispatch(removeExpense({ id: expenseCell.expense.id }));
// store.dispatch(editExpense(expenseRent.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));
// store.dispatch(setEndDate());

// const demo = {
//   expenses: [
//     {
//       id: 'abcdef12345',
//       description: 'January rent',
//       note: 'This was the final payment',
//       amount: 54500,
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: 'ettie',
//   age: 24
// };

// console.log('user-', user);
// console.log({ ...user,
//   age: 27,
//   location: 'cape town' });
