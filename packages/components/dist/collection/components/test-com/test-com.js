import { Component, Host, h } from '@stencil/core';
export class TestCom {
  render() {
    return (h(Host, { class: 'hydrated' }, "\u6D4B\u8BD5"));
  }
  static get is() { return "test-com"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["test-com.css"]
  }; }
  static get styleUrls() { return {
    "$": ["test-com.css"]
  }; }
}
