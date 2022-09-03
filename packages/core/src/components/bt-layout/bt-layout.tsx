import { Component, Host, h, Element, State } from '@stencil/core'

@Component({
  tag: 'bt-layout',
  styleUrl: 'bt-layout.css',
  shadow: true
})
export class BtLayout {
  @Element() el: HTMLElement

  @State() isFlex: boolean = false

  connectedCallback() {
    const children = this.el.children
    for (let item of children) {
      if (item.tagName === 'BT-SIDER') {
        this.isFlex = true
        break
      }
    }
  }

  render() {
    return (
      <Host>
        <div class={{ flex: this.isFlex }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
