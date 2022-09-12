import { Component, Host, h, Element, State } from '@stencil/core'

@Component({
  tag: 'bt-layout',
  styleUrl: 'bt-layout.css',
  shadow: true
})
export class BtLayout {
  @Element() el: HTMLElement

  @State() isFlex: boolean = false
  @State() headerHeight: number = 0
  @State() footerHeight: number = 0

  commonFun(tagName: String, callBack: Function) {
    const children = this.el.children

    for (let elItem of children) {
      if (elItem.tagName === tagName) {
        callBack(elItem)
      }
    }
  }

  setAttributeFun(el: HTMLElement) {
    const customAttribute = document.createAttribute('otherheight')
    customAttribute.nodeValue = String(this.headerHeight + this.footerHeight)
    el.attributes.setNamedItem(customAttribute)
  }

  componentWillLoad() {
    this.commonFun('BT-SIDER', () => {
      this.isFlex = true
    })
  }

  componentDidLoad() {
    this.commonFun('BT-HEADER', (el: HTMLElement) => {
      this.headerHeight = el.clientHeight
    })

    this.commonFun('BT-FOOTER', (el: HTMLElement) => {
      this.footerHeight = el.clientHeight
    })

    this.commonFun('BT-CONTENT', (el: HTMLElement) => {
      this.setAttributeFun(el)
    })

    this.commonFun('BT-LAYOUT', (el: HTMLElement) => {
      for (let elItem of el.children) {
        if (elItem.tagName === 'BT-CONTENT') {
          this.setAttributeFun(el)
          break
        }
      }
    })
  }

  render() {
    return (
      <Host>
        <div class={{ flex: this.isFlex }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
