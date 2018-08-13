import moment from 'moment';
import { filtersReducer } from '../../reducers/filters';

const currentStateDefault = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
};

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducer(currentStateDefault, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set filterText', () => {
  const state = filtersReducer(currentStateDefault, {
    type: 'SET_TEXT_FILTER',
    filterText: 'testing'
  });
  expect(state.text).toBe('testing');
});

test('should set start date', () => {
  const state = filtersReducer(currentStateDefault, {
    type: 'SET_START_DATE',
    startDate: 1000
  });
  expect(state.startDate).toBe(1000);
});

test('should set end date', () => {
  const currentState = {
    ...currentStateDefault,
    endDate: 500
  }
  const state = filtersReducer(currentState, {
    type: 'SET_END_DATE',
    endDate: 1000
  });
  expect(state.endDate).toBe(1000);
});

