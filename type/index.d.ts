import { VueConstructor } from "vue";

interface UntilAsyncTasksDone {
  untilAsyncTasksDone(timeout?: number): Promise<any>;
}

interface DomUtilities {
  getElement(selector: string | null): Element;
  getElements(selector: string): Element[];
  hasElement(selector: string): boolean;
}

interface TextUtilities {
  setTextContent(selector: string | null, textContent: string): EasyVueTestWrapper;
  getTextContent(selector: string | null): string;
  getTextContents(selector: string): string[];
}

interface HtmlUtilities {
  setHtmlContent(selector: string | null, htmlContent: string): EasyVueTestWrapper;
  getHtmlContent(selector: string | null): string;
  getHtmlContents(selector: string): string[];
  getSurroundingHtml(selector: string | null): string;
  getSurroundingHtmls(selector: string): string[];
}

interface StyleUtilities {
  getClasses(selector: string | null): string[];
  setClasses(selector: string | null, classes: string[]): EasyVueTestWrapper;
  getStyleProperty(selector: string | null, property: string): string;
  setStyleProperty(selector: string | null, property: string, value: string | null): EasyVueTestWrapper;
}

interface DomEventUtilities {
  click(selector: string | null): EasyVueTestWrapper;
  mouseDown(selector: string | null, button?: number): EasyVueTestWrapper;
  mouseUp(selector: string | null, button?: number): EasyVueTestWrapper;
  keyPress(selector: string | null, key?: string): EasyVueTestWrapper;
  keyDown(selector: string | null, key?: string): EasyVueTestWrapper;
  keyUp(selector: string | null, key?: string): EasyVueTestWrapper;
}

interface FormInteractionUtilities {
  getTextInputValue(selector: string | null): string;
  setTextInputValue(selector: string | null, text: string): EasyVueTestWrapper;
}

interface ComponentFieldUtilities {
  getData(dataFieldName: string): any;
  setData(dataFieldName: string, value: any): EasyVueTestWrapper;
  getComputed(computedFieldName: string): any;
  setComputed(computedFieldName: string, value: any): EasyVueTestWrapper;
  getProp(propFieldName: string): any;
  setProp(propFieldName: string, value: any): EasyVueTestWrapper;
  getMethod(methodName: string): any;
  setMethod(methodName: string, implementation: any): EasyVueTestWrapper;
  invokeMethod(methodName: string, ...params: any[]): any;
  get$(dollarFieldName: string): any;
}

interface ChildComponentUtilities {
  getWrappedChildByName(childComponentName: string): EasyVueTestWrapper;
  getWrappedChildrenByName(childComponentName: string): EasyVueTestWrapper[];
  getWrappedChildBySelector(selector: string): EasyVueTestWrapper;
  getWrappedChildrenBySelector(selector: string): EasyVueTestWrapper[];
  getWrappedChildByRef(ref: string): EasyVueTestWrapper;
}

interface VueEventUtilities {
  setVueEventListener(eventName: string, listener: any): EasyVueTestWrapper;
  emitVueEvent(eventName: string, ...params: any[]): EasyVueTestWrapper;
}

interface LifecycleUtilities {
  destroy(): void;
}

interface DebugUtilities {
  logHtmlCode(): void;
}

interface EasyVueTestConfig {
  extraMixins?: any[];
  defaultOptions?: () => any | any;
}

export interface EasyVueTestWrapper extends
  UntilAsyncTasksDone,
  DomUtilities,
  TextUtilities,
  HtmlUtilities,
  StyleUtilities,
  DomEventUtilities,
  FormInteractionUtilities,
  ComponentFieldUtilities,
  ChildComponentUtilities,
  VueEventUtilities,
  LifecycleUtilities,
  DebugUtilities { }

export interface EasyVueTestGlobal {
  configure(newConfig: EasyVueTestConfig): void;
  mounted(component: VueConstructor, params?: any): Promise<EasyVueTestWrapper>;
}

declare const EasyVueTest: EasyVueTestGlobal;
export default EasyVueTest;
