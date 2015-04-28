import recase from 'change-case';

function extractStyle(selector, reactStyle) {
  let rules = Object.keys(reactStyle).map((attr) => `${recase.paramCase(attr)}: ${reactStyle[attr]};`).join('\n');
  return `${selector} {\n${rules}\n}`;
}

function extractStyles(Component) {
  if(!_.isObject(Component) ||
      !Component.styles ||
      !_.isObject(Component.styles)) {
    return null;
  }
  return `/* @react-statics-styles ${Component.displayName} */\n${Object.keys(Component.styles)
    .map((selector) => extractStyle(selector, Component.styles[selector]))
  .join('\n')}\n`;
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join('\n');
}

export default { extractStyle, extractStyles, extractAllStyles };
