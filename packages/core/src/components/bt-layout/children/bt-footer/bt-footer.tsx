import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'bt-footer',
  styleUrl: 'bt-footer.css',
  shadow: true
})
export class BtFooter {
  @Prop() height: number | string = 66

  render() {
    return (
      <Host>
        <div class="bt-footer" style={{ height: this.height + 'px' }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
