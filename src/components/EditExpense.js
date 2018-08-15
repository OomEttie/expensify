import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = expense => {
    // props.dispatch(addExpense(expense));
    this.props.editExpense(this.props.expense.id, { ...expense });
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
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>REMOVE</button>
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
    editExpense: (id, updates) => {
      dispatch(editExpense(id, updates));
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
