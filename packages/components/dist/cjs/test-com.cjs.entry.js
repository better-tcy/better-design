'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c85995e9.js');

const testComCss = ":host{display:block}";

const TestCom = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: 'hydrated' }, "\u6D4B\u8BD5"));
  }
};
TestCom.style = testComCss;

exports.test_com = TestCom;
