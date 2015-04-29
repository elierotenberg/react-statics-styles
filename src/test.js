import { extractStyles } from '../';

import CreateClassComponent from './test/CreateClassComponent';
import ES6ClassComponent from './test/ES6ClassComponent';

extractStyles(CreateClassComponent).should.be.exactly(`/* @react-statics-styles CreateClassComponent */
.CreateClassComponent {
  min-width: 1337px;
}
`);

extractStyles(ES6ClassComponent).should.be.exactly(`/* @react-statics-styles ES6ClassComponent */
.ES6ClassComponent {
  min-width: 42px;
}
`);
