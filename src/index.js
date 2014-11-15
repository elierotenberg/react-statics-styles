const _ = require('lodash-next');
const recase = require('change-case');

function extractStyle(selector, reactStyle) {
  let rules = Object.keys(reactStyle).map((attr) => `  ${recase.paramCase(attr)}: ${reactStyle[attr]};`).join('\n');
  return `${selector}: {\n${rules}\n}\n`;
}

function extractStyles(Component) {
  if(!_.isObject(Component) ||
      !Component.styles ||
      !_.isObject(Component.styles)) {
    return null;
  }
  return `/* From ${Component.displayName}.styles: */\n` + Object.keys(Component.styles)
  .map((selector) => extractStyle(selector, Component.statics.styles[selector]))
  .join('\n');
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join('\n');
}

module.exports = _.extend(extractAllStyles, { extractStyle, extractStyles, extractAllStyles });
