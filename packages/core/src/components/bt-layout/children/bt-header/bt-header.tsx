import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-header',
  styleUrl: 'bt-header.scss',
  shadow: true
})
export class BtHeader {
  @Prop() height: number | string = 66
  @Prop() bgcolor: string

  componentDidLoad() {
    console.log(this.bgcolor)
  }
  render() {
    return (
      <Host>
        <div class="bt-header" style={{ height: this.height + 'px', background: this.bgcolor }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
