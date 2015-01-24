"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

require("6to5/polyfill");
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
var React = _interopRequire(require("react"));

var extractStyles = require("../").extractStyles;


var div = React.createFactory("div");

var MyComponentClass = React.createClass({
  displayName: "MyComponentClass",
  statics: {
    styles: {
      ".MyComponent": {
        minWidth: "180px" } } },

  render: function render() {
    return div({ className: "MyComponent" });
  } });

var css = extractStyles(MyComponentClass);

css.should.be.a.String;
console.log(css);
css.should.be.exactly("/* @react-statics-styles MyComponentClass */\n.MyComponent {\n  min-width: 180px;\n}\n");