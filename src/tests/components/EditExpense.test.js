import React from 'react';
import { shallow } from 'enzyme';

import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let wrapper, history, startRemoveExpense, startEditExpense;

beforeEach(() => {
  startRemoveExpense = jest.fn();
  startEditExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <EditExpense
      expense={expenses[1]}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
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
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('shoud handle EditExpense onClick(onremove)', () => {
  wrapper.find('button').prop('onClick')();

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
