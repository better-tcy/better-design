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
      <Host style={{ width: this.width + 'px', background: this.bgcolor }}>
        <div>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
