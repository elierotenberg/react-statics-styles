'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _2 = require('../');

var _testCreateClassComponent = require('./test/CreateClassComponent');

var _testCreateClassComponent2 = _interopRequireDefault(_testCreateClassComponent);

var _testES6ClassComponent = require('./test/ES6ClassComponent');

var _testES6ClassComponent2 = _interopRequireDefault(_testES6ClassComponent);

var _testES6ClassDecorator = require('./test/ES6ClassDecorator');

var _testES6ClassDecorator2 = _interopRequireDefault(_testES6ClassDecorator);

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

(0, _2.extractStyles)(_testCreateClassComponent2['default']).should.be.exactly('/* @react-statics-styles CreateClassComponent */\n.CreateClassComponent {\n  min-width: 1337px;\n}\n');

(0, _2.extractStyles)(_testES6ClassComponent2['default']).should.be.exactly('/* @react-statics-styles ES6ClassComponent */\n.ES6ClassComponent {\n  min-width: 42px;\n}\n');

(0, _2.extractStyles)(_testES6ClassDecorator2['default']).should.be.exactly('/* @react-statics-styles ES6ClassDecorator */\n.ES6ClassDecorator {\n  min-width: 42px;\n}\n');