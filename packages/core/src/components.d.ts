/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BtContent {
        "otherheight": string;
    }
    interface BtFooter {
        "height": number | string;
    }
    interface BtHeader {
        "height": number | string;
    }
    interface BtLayout {
    }
    interface BtSider {
        "width": number | string;
    }
}
declare global {
    interface HTMLBtContentElement extends Components.BtContent, HTMLStencilElement {
    }
    var HTMLBtContentElement: {
        prototype: HTMLBtContentElement;
        new (): HTMLBtContentElement;
    };
    interface HTMLBtFooterElement extends Components.BtFooter, HTMLStencilElement {
    }
    var HTMLBtFooterElement: {
        prototype: HTMLBtFooterElement;
        new (): HTMLBtFooterElement;
    };
    interface HTMLBtHeaderElement extends Components.BtHeader, HTMLStencilElement {
    }
    var HTMLBtHeaderElement: {
        prototype: HTMLBtHeaderElement;
        new (): HTMLBtHeaderElement;
    };
    interface HTMLBtLayoutElement extends Components.BtLayout, HTMLStencilElement {
    }
    var HTMLBtLayoutElement: {
        prototype: HTMLBtLayoutElement;
        new (): HTMLBtLayoutElement;
    };
    interface HTMLBtSiderElement extends Components.BtSider, HTMLStencilElement {
    }
    var HTMLBtSiderElement: {
        prototype: HTMLBtSiderElement;
        new (): HTMLBtSiderElement;
    };
    interface HTMLElementTagNameMap {
        "bt-content": HTMLBtContentElement;
        "bt-footer": HTMLBtFooterElement;
        "bt-header": HTMLBtHeaderElement;
        "bt-layout": HTMLBtLayoutElement;
        "bt-sider": HTMLBtSiderElement;
    }
}
declare namespace LocalJSX {
    interface BtContent {
        "otherheight"?: string;
    }
    interface BtFooter {
        "height"?: number | string;
    }
    interface BtHeader {
        "height"?: number | string;
    }
    interface BtLayout {
    }
    interface BtSider {
        "width"?: number | string;
    }
    interface IntrinsicElements {
        "bt-content": BtContent;
        "bt-footer": BtFooter;
        "bt-header": BtHeader;
        "bt-layout": BtLayout;
        "bt-sider": BtSider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bt-content": LocalJSX.BtContent & JSXBase.HTMLAttributes<HTMLBtContentElement>;
            "bt-footer": LocalJSX.BtFooter & JSXBase.HTMLAttributes<HTMLBtFooterElement>;
            "bt-header": LocalJSX.BtHeader & JSXBase.HTMLAttributes<HTMLBtHeaderElement>;
            "bt-layout": LocalJSX.BtLayout & JSXBase.HTMLAttributes<HTMLBtLayoutElement>;
            "bt-sider": LocalJSX.BtSider & JSXBase.HTMLAttributes<HTMLBtSiderElement>;
        }
    }
}
