const expensesReducerDefaultState = [];

export const expensesReducer = (
  state = expensesReducerDefaultState,
  action
) => {
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
    case 'SET_EXPENSES':
      return action.expenses;
    default:
      return state;
  }
};
