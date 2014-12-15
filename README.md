React Nexus Style
=================

Ultra-light utility to help writing CSS inside your JS React components declarations.
It simply scans a list of React components class definitions (in JS) and translates them into an actual CSS string.

Inside the class definition you have access to the full power of JS, which means you won't ever need a CSS preprocessor again.

Best friends with [`gulp-react-nexus-style`](https://github.com/elierotenberg/gulp-react-nexus-style).

NOTE: This package is included in the React Nexus Starterkit but is it NOT tied to the React Nexus framework in any way. It is perfectly fine to use it without using React Nexus.

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

Then pass one or more class definition(s) to `extractAllStyles`:
```js
require('react-nexus-style').extractAllStyles([MyComponent])
```

Assuming that `readFontSizeFromConfig()` returns `10`, then this outputs the string:

```css
/* @react-nexus-style MyComponent */
.MyComponent .MyComponent-item {
  font-size: 8px;
}
```

Usage (with gulp)
=================

See [`gulp-react-nexus-style`](https://github.com/elierotenberg/gulp-react-nexus-style).
