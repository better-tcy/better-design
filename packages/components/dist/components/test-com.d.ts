import type { Components, JSX } from "../types/components";

interface TestCom extends Components.TestCom, HTMLElement {}
export const TestCom: {
  prototype: TestCom;
  new (): TestCom;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
