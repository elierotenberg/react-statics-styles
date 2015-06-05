import React from 'react';
import { styles } from '../';

const div = React.createFactory('div');

@styles({
'.ES6ClassComponent': {
  minWidth: '42px',
})
export default class extends React.Component {
  static displayName = 'ES6ClassComponent';

  render() {
    return div({ className: 'MyComponent' });
  }
}
