import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-header',
  styleUrl: 'bt-header.css',
  shadow: true
})
export class BtHeader {
  @Prop() height: number | string = 66

  render() {
    return (
      <Host>
        <div class="bt-herder" style={{ height: this.height + 'px' }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
