import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-content',
  styleUrl: 'bt-content.scss',
  shadow: true
})
export class BtContent {
  @Prop() otherheight: string
  @Prop() bgcolor: string

  render() {
    return (
      <Host>
        <div
          class="bt-content"
          style={{ height: `calc(100vh - ${this.otherheight}px)`, background: this.bgcolor }}
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}
