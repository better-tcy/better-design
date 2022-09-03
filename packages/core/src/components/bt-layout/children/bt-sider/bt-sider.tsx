import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-sider',
  styleUrl: 'bt-sider.css',
  shadow: true
})
export class BtSider {
  @Prop() width: number | string = 200

  render() {
    return (
      <Host>
        <div class="bt-sider" style={{ width: this.width + 'px' }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
