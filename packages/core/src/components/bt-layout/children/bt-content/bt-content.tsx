import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'bt-content',
  styleUrl: 'bt-content.css',
  shadow: true
})
export class BtContent {
  render() {
    return (
      <Host>
        <div class="bt-content">
          <slot></slot>
        </div>
      </Host>
    )
  }
}
