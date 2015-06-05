import recase from 'change-case';

function extractStyle(selector, reactStyle) {
  const rules = Object.keys(reactStyle).map((attr) =>
    /* eslint-disable no-multi-space */
    `  ${recase.paramCase(attr)}: ${reactStyle[attr]};`
    /* eslint-enable no-multi-space */
  ).join('\n');
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

function styles(newStyles) {
  return (Component) => class extends Component {
    static styles = Object.assign({}, Component.styles || {}, newStyles);
  };
}

export default { extractStyle, extractStyles, extractAllStyles, styles };
