import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const testComCss = ":host{display:block}";

const TestCom$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { class: 'hydrated' }, "\u6D4B\u8BD5"));
  }
  static get style() { return testComCss; }
}, [1, "test-com"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["test-com"];
  components.forEach(tagName => { switch (tagName) {
    case "test-com":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TestCom$1);
      }
      break;
  } });
}

const TestCom = TestCom$1;
const defineCustomElement = defineCustomElement$1;

export { TestCom, defineCustomElement };
