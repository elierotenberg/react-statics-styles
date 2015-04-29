'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _React = require('react');

var _React2 = _interopRequireDefault(_React);

var _extractStyles = require('../');

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

var MyComponentClass = _React2['default'].createClass({
  displayName: 'MyComponentClass',

  statics: {
    styles: {
      '.MyComponent': {
        minWidth: '180px' } } },

  render: function render() {
    return div({ className: 'MyComponent' });
  } });

var css = _extractStyles.extractStyles(MyComponentClass);

css.should.be.a.String;
console.log(css);
css.should.be.exactly('/* @react-statics-styles MyComponentClass */\n.MyComponent {\n  min-width: 180px;\n}\n');