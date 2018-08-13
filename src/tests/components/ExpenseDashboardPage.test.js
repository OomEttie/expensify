import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage';
import expenses from '../fixtures/expenses';

test('render dashboard component', () => {
  // const store = { expenses: expenses };
  // const store = {
  //   subscribe: () => {},
  //   dispatch: () => {},
  //   getState: () => ({
  //     expenses: expenses,
  //     filters: {
  //       text: '',
  //       sortBy: 'date',
  //       startDate: undefined,
  //       endDate: undefined
  //     }
  //   })
  // };

  const wrapper = shallow(<ExpenseDashboardPage expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
