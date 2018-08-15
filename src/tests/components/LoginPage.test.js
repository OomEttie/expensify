import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

let startLogin;

beforeAll(() => {
  startLogin = jest.fn();
});

test('render LoginPage component', () => {
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogin on button click', () => {
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').prop('onClick')();

  expect(startLogin).toHaveBeenCalled();
});