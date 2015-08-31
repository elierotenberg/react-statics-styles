import React from 'react';

const CreateClassComponent = React.createClass({
  displayName: 'Keyframes',
  statics: {
    stylesOpts: '-webkit-',
    styles: {
      '@keyframes animationFromTo': {
        from: {
          transform: 'rotate(0deg)',
          top: '0px',
        },
        to: {
          transform: 'rotate(360deg)',
          top: '100px',
        },
      },
      '@keyframes animationPercent': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },

  render() {
    return <div className='MyComponent' />;
  },
});

export default CreateClassComponent;
