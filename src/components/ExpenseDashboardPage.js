import React from 'react';
import { connect } from 'react-redux';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { getVisibleExpenses } from '../selectors/expenses';
import { getTotalExpensesAmount } from '../selectors/expenses-total';

export const ExpenseDashboardPage = props => (
  <div>
    <h3>This is my expense Dashboard component!</h3>
    <h3>
      Viewing {props.expenses.length} expenses totalling
      {getTotalExpensesAmount(props.expenses)}
    </h3>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export const ConnectedExpenseDashboardPage = connect(mapStateToProps)(
  ExpenseDashboardPage
);

// export default ExpenseDashboardPage;
// export default ConnectedExpenseDashboardPage;
