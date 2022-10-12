import { Component, Prop, Element, State, JSX, h, Host } from '@stencil/core'

@Component({
  tag: 'bt-button',
  styleUrl: 'bt-button.scss',
  shadow: true
})
export class BtButton {
  @Prop() type: 'basic' | 'raised' | 'outline' | 'flat' = 'basic'
  @Prop() color: 'plain' | 'primary' | 'secondary' | 'danger' = 'plain'

  @State() ripples: JSX.Element[] = []

  @Element() buttonEl: HTMLElement

  handleClick = (event) => {
    let { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.buttonEl

    let rippleSize
    if (offsetWidth > offsetHeight) {
      rippleSize = offsetWidth
    } else {
      rippleSize = offsetHeight
    }

    const rippleX = event.pageX - offsetLeft - rippleSize / 2
    const rippleY = event.pageY - offsetTop - rippleSize / 2

    const rippleStyles = {
      width: rippleSize + 'px',
      height: rippleSize + 'px',
      top: rippleY + 'px',
      left: rippleX + 'px'
    }

    this.ripples = [...this.ripples, <span class="ripple" style={rippleStyles} />]
  }

  render() {
    return (
      <Host>
        <button class={`${this.type} ${this.color}`} onMouseDown={this.handleClick}>
          {...this.ripples}
          <slot />
        </button>
      </Host>
    )
  }
}
