import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// onSubmit = expense => {
//   console.log('onSubmit-', expense);
// };

export class CreateExpense extends React.Component {
  onSubmit = expense => {
    // props.dispatch(addExpense(expense));
    this.props.createExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createExpense: expense => {
      dispatch(startAddExpense(expense));
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(CreateExpense);
