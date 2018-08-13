'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _react2.default.createElement(
  'p',
  null,
  'testing 123'
);
_reactDom2.default.render(template, document.getElementById('appTemplate1'));

// import validator from 'validator';
// console.log('**********VALIDATOR************');
// console.log(validator.isEmail('test'));
// console.log('-------------------------------');

// console.log('**********MODULES************');
// import subtract, { square, add } from './utils';
// import isSenior, { canDrink, isAdult } from './person';

// console.log('app.js is running with watch');

// console.log(square(5));
// console.log(add(5, 5));

// console.log('Is adult at 21 -', isAdult(21));
// console.log('Can drink at 16 - ', canDrink(16));

// console.log(subtract(5, 3));

// console.log(isSenior(60));
// console.log('-------------------------------');
