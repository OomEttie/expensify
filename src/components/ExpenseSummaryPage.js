import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

import { getVisibleExpenses } from '../selectors/expenses';
import { getTotalExpensesAmount } from '../selectors/expenses-total';

export class ExpenseSummaryPage extends React.Component {
  render() {
    const expenseTotalFormatted = numeral(
      this.props.expensesTotal / 100
    ).format('$0,00.00');

    return (
      <div className="page-header">
        <div className="content-container">
          {this.props.expenseCount > 0 && (
            <h1 className="page-header__title">
              Viewing <span>{this.props.expenseCount}</span> expenses totalling{' '}
              <span>{expenseTotalFormatted}</span>
            </h1>
          )}
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('visibleExpenses.length-', visibleExpenses.length);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getTotalExpensesAmount(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummaryPage);
