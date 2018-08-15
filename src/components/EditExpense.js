import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = expense => {
    // props.dispatch(addExpense(expense));
    this.props.startEditExpense(this.props.expense.id, { ...expense });
    this.props.history.push('/');
  };

  onClick = () => {
    // console.log(dispatch);
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button__warning" onClick={this.onClick}>REMOVE</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log('mapStateToProps-props->', props)
  return {
    expense: state.expenses.find(expense => {
      return expense.id == props.match.params.id;
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (id, updates) => {
      dispatch(startEditExpense(id, updates));
    },
    startRemoveExpense: id => {
      dispatch(startRemoveExpense(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
