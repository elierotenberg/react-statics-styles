"use strict";

require("6to5/polyfill");var Promise = (global || window).Promise = require("lodash-next").Promise;var __DEV__ = (process.env.NODE_ENV !== "production");var __PROD__ = !__DEV__;var __BROWSER__ = (typeof window === "object");var __NODE__ = !__BROWSER__;var _ = require("lodash-next");
var recase = require("change-case");

function extractStyle(selector, reactStyle) {
  var rules = Object.keys(reactStyle).map(function (attr) {
    return "  " + recase.paramCase(attr) + ": " + reactStyle[attr] + ";";
  }).join("\n");
  return "" + selector + " {\n    " + rules + "\n  }\n  ";
}

function extractStyles(Component) {
  if (!_.isObject(Component) || !Component.styles || !_.isObject(Component.styles)) {
    return null;
  }
  return "/* From " + Component.displayName + ".styles: */\n  " + Object.keys(Component.styles).map(function (selector) {
    return extractStyle(selector, Component.styles[selector]);
  }).join("\n");
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join("\n");
}


module.exports = { extractStyle: extractStyle, extractStyles: extractStyles, extractAllStyles: extractAllStyles };