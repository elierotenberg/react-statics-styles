'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _2 = require('../');

var _ = require('lodash');
var should = require('should');
var Promise = (global || window).Promise = require('bluebird');
var __DEV__ = process.env.NODE_ENV !== 'production';
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === 'object';
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}

var div = _react2['default'].createFactory('div');

var ES6ClassDecorator = (function (_React$Component) {
  function ES6ClassDecorator() {
    _classCallCheck(this, _ES6ClassDecorator);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ES6ClassDecorator, _React$Component);

  var _ES6ClassDecorator = ES6ClassDecorator;

  _createClass(_ES6ClassDecorator, [{
    key: 'render',
    value: function render() {
      return div({ className: 'MyComponent' });
    }
  }], [{
    key: 'displayName',
    value: 'ES6ClassDecorator',
    enumerable: true
  }]);

  ES6ClassDecorator = (0, _2.styles)({
    '.ES6ClassDecorator': {
      minWidth: '42px'
    }
  })(ES6ClassDecorator) || ES6ClassDecorator;
  return ES6ClassDecorator;
})(_react2['default'].Component);

exports['default'] = ES6ClassDecorator;
module.exports = exports['default'];