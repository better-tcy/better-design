import { r as registerInstance, h, e as Host } from './index-0eb7addb.js';

const testComCss = ":host{display:block}";

const TestCom = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: 'hydrated' }, "\u6D4B\u8BD5"));
  }
};
TestCom.style = testComCss;

export { TestCom as test_com };
