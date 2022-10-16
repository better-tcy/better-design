import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-footer',
  styleUrl: 'bt-footer.scss',
  shadow: true
})
export class BtFooter {
  @Prop() height: number | string = 66
  @Prop() bgcolor: string

  render() {
    return (
      <Host style={{ height: this.height + 'px', background: this.bgcolor }}>
        <div>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
