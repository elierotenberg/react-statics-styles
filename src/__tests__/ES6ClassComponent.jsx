import React from 'react';

class ES6ClassComponent extends React.Component {
  static displayName = 'ES6ClassComponent';

  static styles = {
      '.ES6ClassComponent': {
        minWidth: '42px',
    },
  };

  render() {
    return <div className='MyComponent' />;
  }
}

export default ES6ClassComponent;
