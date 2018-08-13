import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('shoudl setup the edit expense action', () => {
  const action = editExpense('123abc', { note: 'testing note prop' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'testing note prop'
    }
  });
});

test('should setup the add expense action with provided values', () => {
  const data = {
    description: 'RENT description',
    note: 'RENT note',
    amount: 199.99,
    createdAt: 1000
  };
  const action = addExpense(data);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});

test('should setup the add expense action with default values', () => {
  const data = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});
