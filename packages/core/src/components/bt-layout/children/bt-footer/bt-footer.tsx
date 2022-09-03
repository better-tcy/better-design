import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'bt-footer',
  styleUrl: 'bt-footer.css',
  shadow: true
})
export class BtFooter {
  render() {
    return (
      <Host>
        <div class="bt-footer">
          <slot></slot>
        </div>
      </Host>
    )
  }
}
