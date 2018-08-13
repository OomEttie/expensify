import React from 'react';
import { shallow } from 'enzyme';

import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let wrapper, history, removeExpense, editExpense;

beforeEach(() => {
  removeExpense = jest.fn();
  editExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <EditExpense
      expense={expenses[1]}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test('should render EditExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('shoud handle EditExpense onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('shoud handle EditExpense onClick(onremove)', () => {
  wrapper.find('button').prop('onClick')();

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
