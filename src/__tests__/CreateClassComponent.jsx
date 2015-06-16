import React from 'react';

const div = React.createFactory('div');

const CreateClassComponent = React.createClass({
  displayName: 'CreateClassComponent',
  statics: {
    styles: {
      '.CreateClassComponent': {
        minWidth: '1337px',
      },
    },
  },

  render() {
    return <div className='MyComponent' />;
  },
});

export default CreateClassComponent;
