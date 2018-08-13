import React from 'react';
import { shallow } from 'enzyme';

import { CreateExpense } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let createExpense, history, wrapper;

beforeEach(() => {
  createExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(<CreateExpense createExpense={createExpense} history={history} />);
});

test('shoud render CreateExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('shoud handle CreateExpense onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(createExpense).toHaveBeenLastCalledWith(expenses[1]);
});
