'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var CreateClassComponent = _react2['default'].createClass({
  displayName: 'CreateClassComponent',
  statics: {
    styles: {
      '.CreateClassComponent': {
        minWidth: '1337px'
      }
    }
  },

  render: function render() {
    return div({ className: 'MyComponent' });
  }
});

exports['default'] = CreateClassComponent;
module.exports = exports['default'];