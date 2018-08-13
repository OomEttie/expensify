import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboardPage = () => (
  <div>
    <h3>This is my expense Dashboard component!</h3>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
