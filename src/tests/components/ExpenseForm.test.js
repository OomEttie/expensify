import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error with invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  // expect(wrapper).toMatchSnapshot();
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const description = 'testing description';
  const wrapper = shallow(<ExpenseForm />);
  // wrapper.find('form').simulate('change', { preventDefault: () => {} });
  // expect(wrapper).toMatchSnapshot();
  // expect(wrapper.state('error').length).toBeGreaterThan(0);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: description } });
  expect(wrapper.state('description')).toBe(description);
  expect(wrapper).toMatchSnapshot();
});

test('should set note  on textArea change', () => {
  const note = 'note text to test';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', { target: { value: note } });
  expect(wrapper.state('note')).toBe(note);
  expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input 23.50', () => {
  const amount = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: amount } });
  expect(wrapper.state('amount')).toBe(amount);
  // expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input 23.50', () => {
  const amount = '23.505';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: amount } });
  expect(wrapper.state('amount')).toBe(0);
  // expect(wrapper).toMatchSnapshot();
});

test('should call onsubmitProp for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalled();
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date on datechange', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should update calender focus when focus changed', () => {
  const focused = { focused: true };
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')(focused);
  expect(wrapper.state('calenderFocus')).toEqual(focused.focused);
});

// onSubmitSpy();
// expect(onSubmitSpy).toHaveBeenCalled();
// onSubmitSpy('Et', 'Dwyn');
// expect(onSubmitSpy).toHaveBeenCalledWith('Et', 'Dwyn');
