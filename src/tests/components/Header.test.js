import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

let startLogOut, startLogIn;

beforeAll(() => {
  startLogOut = jest.fn();
  startLogIn = jest.fn();
});

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogOut={startLogOut} />);

  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  expect(wrapper).toMatchSnapshot();

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogOut on button click', () => {
  const wrapper = shallow(<Header startLogOut={startLogOut} />);
  wrapper.find('button').prop('onClick')();

  expect(startLogOut).toHaveBeenCalled();
});

