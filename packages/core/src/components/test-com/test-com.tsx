import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'test-com',
  styleUrl: 'test-com.css',
  shadow: true
})
export class TestCom {
  render() {
    return (
      <Host class={'hydrated'}>
        这是一个测试组件
        <slot></slot>
      </Host>
    )
  }
}
