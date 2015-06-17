React Statics Styles
====================

Ultra-light utility to help writing CSS inside your JS React components declarations.

Statically extracts CSS styles declared at the component class level and outputs a nicely formatted CSS string. It is then easing to pipe it to your CSS postprocessor of choice (eg. `postcss`).

Best friends with [`gulp-react-statics-styles`](https://github.com/elierotenberg/gulp-react-statics-styles) to make it work with your building pipeline.

Usage (without gulp)
====================

Declare `styles` as a `static` property of your component class (or using `statics` if you use vanilla `React.createClass`):
```js
class MyComponent extends React.Component {
  static styles = {
    '.MyComponent .MyComponent-item': {
      // you can put build-time calculations here
      fontSize: 0.8 * readFontSizeFromConfig() + 'px',
    }
  };

  render: function() {
    return <div className='MyComponent'>
      <div className='MyComponent-item'>This is smaller that usual.</div>
    </div>;
  },
};

// alternate syntax using the decorator
import { styles } from 'react-statics-styles';

@styles({
  '.MyComponent .MyComponent-item': {
    fontSize: 0.8 * readFontSizeFromConfig() + 'px',
  }
})
class MyComponent extends React.Component { ... }
```

Then pass one or more class definition(s) to `extractStyles(class)` or `extractAllStyles(array of class)`:
```js
import { extractStyles, extractAllStyles } from 'react-statics-styles';
extractStyles(MyComponent); // returns a CSS string
extractAllStyles([MyComponent1, MyComponent2, ...]);
```

Assuming that `readFontSizeFromConfig()` returns `10`, then the first line returns the string:

```css
/* @react-nexus-style MyComponent */
.MyComponent .MyComponent-item {
  font-size: 8px;
}
```

The decorator form supports passing additional options.

The only currently supported option is `prefix`, a static string which will be preprended to all the generated selectors.

```js
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
```

will yield

```css
/* @react-statics-styles ES6ClassDecoratorWithPrefix */
.MyApp .ES6ClassDecoratorWithPrefix {
  min-width: 334px;
}
```

Usage (with gulp)
=================

See [`gulp-react-statics-styles`](https://github.com/elierotenberg/gulp-react-statics-styles).


### Installation

This module is written in ES6/7. You will need `babel` to run it.
