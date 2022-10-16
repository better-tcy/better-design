import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-sider',
  styleUrl: 'bt-sider.scss',
  shadow: true
})
export class BtSider {
  @Prop() width: number | string = 200
  @Prop() bgcolor: string

  render() {
    return (
      <Host>
        <div class="bt-sider" style={{ width: this.width + 'px', background: this.bgcolor }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
