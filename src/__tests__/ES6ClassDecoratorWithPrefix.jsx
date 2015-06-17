import React from 'react';
import { styles } from '../';

@styles({
  '.ES6ClassDecoratorWithPrefix': {
    minWidth: '334px',
  },
}, { prefix: '.MyApp '})
class ES6ClassDecoratorWithPrefix extends React.Component {
  static displayName = 'ES6ClassDecoratorWithPrefix';

  render() {
    return <div className='MyComponent' />;
  }
}

export default ES6ClassDecoratorWithPrefix;
