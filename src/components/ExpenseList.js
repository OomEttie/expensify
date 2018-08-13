import React from 'react';
import { connect } from 'react-redux';
import { ExpenseListItem } from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

// <h1>Expense List</h1>
export const ExpenseList = props => (
  <div>
    {props.expenses.length == 0 ? (
      <p>No Expenses</p>
    ) : (
      props.expenses.map(expense => {
        // console.log(expense);
        // const Temp = () => (
        //   <div>
        //     <p>Amount: </p>
        //     <p>Created At: </p>
        //   </div>
        // )
        // return <Temp />;
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

// export default ExpenseList;
export default ConnectedExpenseList;
