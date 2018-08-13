import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('shoud render header correctly', () => {
  const wrapper = shallow(<Header />);

  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  expect(wrapper).toMatchSnapshot();
  
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
