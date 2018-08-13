import expenses from '../fixtures/expenses';
import { getTotalExpensesAmount } from '../../selectors/expenses-total';

test('expenses total test should return 0 for empty array', () => {
  const result = getTotalExpensesAmount([]);
  expect(result).toBe(0);
});

test('should add up a single expense', () => {
  const result = getTotalExpensesAmount([expenses[1]]);
  expect(result).toBe(109500);
});

test('should add up multiple expenses', () => {
  // let arrAmounts = expenses.map(expense => expense.amount);
  // console.log(expenses.map(expense => expense.amount));
  // console.log(arrAmounts);

  const result = getTotalExpensesAmount(expenses);
  expect(result).toBe(114195);
});
