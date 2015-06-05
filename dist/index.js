'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

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

function styles(newStyles) {
  return function (Component) {
    return (function (_Component) {
      var _class = function () {
        _classCallCheck(this, _class);

        if (_Component != null) {
          _Component.apply(this, arguments);
        }
      };

      _inherits(_class, _Component);

      _createClass(_class, null, [{
        key: 'styles',
        value: _Object$assign({}, Component.styles || {}, newStyles),
        enumerable: true
      }]);

      return _class;
    })(Component);
  };
}

exports['default'] = { extractStyle: extractStyle, extractStyles: extractStyles, extractAllStyles: extractAllStyles, styles: styles };
module.exports = exports['default'];