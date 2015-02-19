"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

require("babel/polyfill");
var _ = require("lodash");
var should = require("should");
var Promise = (global || window).Promise = require("bluebird");
var __DEV__ = process.env.NODE_ENV !== "production";
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === "object";
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}
var recase = _interopRequire(require("change-case"));

function extractStyle(selector, reactStyle) {
  var rules = Object.keys(reactStyle).map(function (attr) {
    return "  " + recase.paramCase(attr) + ": " + reactStyle[attr] + ";";
  }).join("\n");
  return "" + selector + " {\n" + rules + "\n}";
}

function extractStyles(Component) {
  if (!_.isObject(Component) || !Component.styles || !_.isObject(Component.styles)) {
    return null;
  }
  return "/* @react-statics-styles " + Component.displayName + " */\n" + Object.keys(Component.styles).map(function (selector) {
    return extractStyle(selector, Component.styles[selector]);
  }).join("\n") + "\n";
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join("\n");
}


module.exports = { extractStyle: extractStyle, extractStyles: extractStyles, extractAllStyles: extractAllStyles };