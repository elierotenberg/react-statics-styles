'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _changeCase = require('change-case');

var _changeCase2 = _interopRequireDefault(_changeCase);

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

function extractStyle(selector, reactStyle) {
  var rules = _Object$keys(reactStyle).map(function (attr) {
    return (
      /* eslint-disable no-multi-space */
      '  ' + _changeCase2['default'].paramCase(attr) + ': ' + reactStyle[attr] + ';'
    )
    /* eslint-enable no-multi-space */
    ;
  }).join('\n');
  return '' + selector + ' {\n' + rules + '\n}';
}

function extractStyles(Component) {
  if (!_.isObject(Component) || !Component.styles || !_.isObject(Component.styles)) {
    return null;
  }
  return '/* @react-statics-styles ' + Component.displayName + ' */\n' + _Object$keys(Component.styles).map(function (selector) {
    return extractStyle(selector, Component.styles[selector]);
  }).join('\n') + '\n';
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join('\n');
}

exports['default'] = { extractStyle: extractStyle, extractStyles: extractStyles, extractAllStyles: extractAllStyles };
module.exports = exports['default'];