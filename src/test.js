import React from 'react';
import { extractStyles } from '../';

const div = React.createFactory('div');

const MyComponentClass = React.createClass({
  statics: {
    styles: {
      '.MyComponent': {
        minWidth: '180px',
      },
    },
  },

  render() {
    return div({ className: 'MyComponent' });
  },
});

const css = extractStyles(MyComponentClass);

css.should.be.a.String;
console.log(css);
css.should.be.exactly('/* @react-nexus-style MyComponentClass */\n.MyComponent {\n  min-width: 180px;\n}\n');
