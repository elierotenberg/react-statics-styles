const { describe, it } = global;
import 'should';
import { extractStyles } from '../';

import CreateClassComponent from './CreateClassComponent';
import ES6ClassComponent from './ES6ClassComponent';
import ES6ClassDecorator from './ES6ClassDecorator';
import ES6ClassDecoratorWithPrefix from './ES6ClassDecoratorWithPrefix';

describe('CreateClassComponent', () =>
  it('should extract the correct CSS', () =>
    extractStyles(CreateClassComponent).should.be.exactly([
      '/* @react-statics-styles CreateClassComponent */',
      '.CreateClassComponent {',
      '  min-width: 1337px;',
      '}',
      '',
    ].join('\n'))
  )
);

describe('ES6ClassComponent', () =>
  it('should extract the correct CSS', () =>
    extractStyles(ES6ClassComponent).should.be.exactly([
      '/* @react-statics-styles ES6ClassComponent */',
      '.ES6ClassComponent {',
      '  min-width: 42px;',
      '}',
      '',
    ].join('\n'))
  )
);

describe('ES6ClassDecorator', () =>
  it('should extract the correct CSS', () =>
    extractStyles(ES6ClassDecorator).should.be.exactly([
      '/* @react-statics-styles ES6ClassDecorator */',
      '.ES6ClassDecorator {',
      '  min-width: 33px;',
      '}',
      '',
    ].join('\n'))
  )
);

describe('ES6ClassDecoratorWithPrefix', () =>
  it('should extract the correct CSS', () =>
    extractStyles(ES6ClassDecoratorWithPrefix).should.be.exactly([
      '/* @react-statics-styles ES6ClassDecoratorWithPrefix */',
      '.MyApp .ES6ClassDecoratorWithPrefix {',
      '  min-width: 334px;',
      '}',
      '',
    ].join('\n'))
  )
);
