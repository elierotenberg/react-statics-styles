const _ = require('lodash-next');
const recase = require('change-case');

function extractStyle(selector, reactStyle) {
  let rules = Object.keys(reactStyle).map((attr) => `  ${recase.paramCase(attr)}: ${reactStyle[attr]};`).join('\n');
  return `${selector}: {
    ${rules}
  }
  `;
}

function extractStyles(Component) {
  if(!_.isObject(Component) ||
      !Component.styles ||
      !_.isObject(Component.styles)) {
    return null;
  }
  return `/* From ${Component.displayName}.styles: */
  ` + Object.keys(Component.styles)
  .map((selector) => extractStyle(selector, Component.styles[selector]))
  .join('\n');
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join('\n');
}


module.exports = { extractStyle, extractStyles, extractAllStyles };
