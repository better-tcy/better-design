import { Component, Host, h, Element, State } from '@stencil/core'

@Component({
  tag: 'bt-layout',
  styleUrl: 'bt-layout.scss',
  shadow: true
})
export class BtLayout {
  @Element() el: HTMLElement

  @State() isFlex: boolean = false
  @State() headerHeight: number = 0
  @State() footerHeight: number = 0

  commonFun(tagName: String, callBack: Function, el: HTMLElement = this.el) {
    const children = el.children

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
    let isExistLayout = false

    this.commonFun('BT-LAYOUT', () => {
      isExistLayout = true
    })

    // bt-content高度已经在子layout中计算 不需执行以下代码
    if (isExistLayout) return

    const parentEl = this.el.parentElement
    let parentIsExistHOrF = false

    this.commonFun(
      'BT-HEADER',
      (el: HTMLElement) => {
        this.headerHeight = el.clientHeight
        parentIsExistHOrF = true
      },
      parentEl
    )

    this.commonFun(
      'BT-FOOTER',
      (el: HTMLElement) => {
        this.footerHeight = el.clientHeight
        parentIsExistHOrF = true
      },
      parentEl
    )

    // header和footer在子layout中
    if (!parentIsExistHOrF) {
      this.commonFun('BT-HEADER', (el: HTMLElement) => {
        this.headerHeight = el.clientHeight
      })

      this.commonFun('BT-FOOTER', (el: HTMLElement) => {
        this.footerHeight = el.clientHeight
      })
    }

    this.commonFun('BT-CONTENT', (el: HTMLElement) => {
      this.setAttributeFun(el)
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
