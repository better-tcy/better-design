/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal'
export namespace Components {
  interface TestCom {}
}
declare global {
  interface HTMLTestComElement extends Components.TestCom, HTMLStencilElement {}
  var HTMLTestComElement: {
    prototype: HTMLTestComElement
    new (): HTMLTestComElement
  }
  interface HTMLElementTagNameMap {
    'test-com': HTMLTestComElement
  }
}
declare namespace LocalJSX {
  interface TestCom {}
  interface IntrinsicElements {
    'test-com': TestCom
  }
}
export { LocalJSX as JSX }
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'test-com': LocalJSX.TestCom & JSXBase.HTMLAttributes<HTMLTestComElement>
    }
  }
}
