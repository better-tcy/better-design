'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8cbc836e.js');

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const testComCss = ":host{display:block}";

const TestCom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, "\u6D4B\u8BD5", index.h("slot", null)));
  }
};
TestCom.style = testComCss;

exports.my_component = MyComponent;
exports.test_com = TestCom;
