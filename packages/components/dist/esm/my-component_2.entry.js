import { r as registerInstance, h, H as Host } from './index-75deb6b0.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const testComCss = ":host{display:block}";

const TestCom = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, "\u6D4B\u8BD5", h("slot", null)));
  }
};
TestCom.style = testComCss;

export { MyComponent as my_component, TestCom as test_com };
