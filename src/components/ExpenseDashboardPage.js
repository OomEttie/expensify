import React from 'react';
import { connect } from 'react-redux';

import ExpenseSummaryPage from './ExpenseSummaryPage';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { getVisibleExpenses } from '../selectors/expenses';
import { getTotalExpensesAmount } from '../selectors/expenses-total';

export class ExpenseDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <ExpenseSummaryPage />
        <ExpenseListFilters />
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);

// export default ExpenseDashboardPage;
// export default ConnectedExpenseDashboardPage;
