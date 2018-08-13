import React from 'react';
import { connect } from 'react-redux';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { getVisibleExpenses } from '../selectors/expenses';
import { getTotalExpensesAmount } from '../selectors/expenses-total';

export class ExpenseDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <h3>This is my expense Dashboard component!</h3>
        {this.props.expenses.length > 0 && (
          <h3>
            Viewing {this.props.expenses.length} expenses totalling
            {getTotalExpensesAmount(this.props.expenses)}
          </h3>
        )}
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
