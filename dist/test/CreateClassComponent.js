'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

require('babel/polyfill');
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

var div = _React2['default'].createFactory('div');

exports['default'] = _React2['default'].createClass({
  displayName: 'CreateClassComponent',
  statics: {
    styles: {
      '.CreateClassComponent': {
        minWidth: '1337px' } } },

  render: function render() {
    return div({ className: 'MyComponent' });
  } });
module.exports = exports['default'];