import recase from 'change-case';
import _ from 'lodash';

const stylesOpts = Symbol('stylesOpts');

function extractStyle(selector, reactStyle, { prefix = '' } = {}) {
  const rules = Object.keys(reactStyle).map((attr) => {
    return selector.indexOf('keyframes') > -1
    ? `  ${recase.paramCase(attr)} ${reactStyle[attr]}`
    : `  ${recase.paramCase(attr)}: ${reactStyle[attr]};`;
  }).join('\n');
  return `${prefix}${selector} {\n${rules}\n}`;
}

function extractStyles(Component) {
  if(!_.isObject(Component) ||
      !Component.styles ||
      !_.isObject(Component.styles)) {
    return null;
  }
  return `/* @react-statics-styles ${Component.displayName} */\n${Object.keys(Component.styles)
    .map((selector) => extractStyle(selector, Component.styles[selector], Component[stylesOpts]))
  .join('\n')}\n`;
}

function extractAllStyles(Components) {
  return _.without(_.map(Components, extractStyles), null).join('\n');
}

function styles(newStyles, opts) {
  return (Component) => Object.assign(class extends Component {
    static styles = Object.assign({}, Component.styles || {}, newStyles);
  }, { [stylesOpts]: opts })
}

export default { extractStyle, extractStyles, extractAllStyles, styles, stylesOpts };
