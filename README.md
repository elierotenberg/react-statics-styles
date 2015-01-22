React Statics Styles
====================

Ultra-light utility to help writing CSS inside your JS React components declarations.

It takes a React class (created by `React.createClass`), looks for `statics.styles`, assumes it an hash of `selector string: style object` items, and translates it into an actual CSS String.

Best friends with [`gulp-react-statics-styles`](https://github.com/elierotenberg/gulp-react-statics-styles) to make it work with your building pipeline.

Usage (without gulp)
====================

Declare `styles` in the `statics` of your component class:
```js
var MyComponent = React.createClass({
  statics: {
    styles: {
      '.MyComponent .MyComponent-item': {
        // you can put build-time calculations here
        fontSize: 0.8 * readFontSizeFromConfig() + 'px',
      }
    }
  },

  render: function() {
    return <div className='MyComponent'>
      <div className='MyComponent-item'>This is smaller that usual.</div>
    </div>;
  },
});
```

Then pass one or more class definition(s) to `extractStyles(class)` or `extractAllStyles(array of class)`:
```js
require('react-statics-styles').extractStyles(MyComponent); // returns a CSS string
require('react-statics-styles').extractAllStyles([MyComponent1, MyComponent2, ...]);
```

Assuming that `readFontSizeFromConfig()` returns `10`, then the first line returns the string:

```css
/* @react-nexus-style MyComponent */
.MyComponent .MyComponent-item {
  font-size: 8px;
}
```

Usage (with gulp)
=================

See [`gulp-react-statics-styles`](https://github.com/elierotenberg/gulp-react-statics-styles).
