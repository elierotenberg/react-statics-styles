'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _extractStyles = require('../');

var _CreateClassComponent = require('./test/CreateClassComponent');

var _CreateClassComponent2 = _interopRequireDefault(_CreateClassComponent);

var _ES6ClassComponent = require('./test/ES6ClassComponent');

var _ES6ClassComponent2 = _interopRequireDefault(_ES6ClassComponent);

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

_extractStyles.extractStyles(_CreateClassComponent2['default']).should.be.exactly('/* @react-statics-styles CreateClassComponent */\n.CreateClassComponent {\n  min-width: 1337px;\n}\n');

_extractStyles.extractStyles(_ES6ClassComponent2['default']).should.be.exactly('/* @react-statics-styles ES6ClassComponent */\n.ES6ClassComponent {\n  min-width: 42px;\n}\n');