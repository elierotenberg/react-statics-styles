import React from 'react';

const div = React.createFactory('div');

export default React.createClass({
  displayName: 'CreateClassComponent',
  statics: {
    styles: {
      '.CreateClassComponent': {
        minWidth: '1337px',
      },
    },
  },

  render() {
    return div({ className: 'MyComponent' });
  },
});
