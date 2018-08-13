import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
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
        <h3>Add Expense</h3>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createExpense: expense => {
      dispatch(addExpense(expense));
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(CreateExpense);
