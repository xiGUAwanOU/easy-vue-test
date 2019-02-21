import { VueConstructor } from "vue";

interface EasyVueTest extends
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

interface UntilAsyncTasksDone {
  untilAsyncTasksDone(timeout?: number): Promise<any>;
}

interface DomUtilities {
  getElement(selector: string | null): Element;
  getElements(selector: string): Element[];
  hasElement(selector: string): boolean;
}

interface TextUtilities {
  setTextContent(selector: string | null, textContent: string): EasyVueTest;
  getTextContent(selector: string | null): string;
  getTextContents(selector: string): string[];
}

interface HtmlUtilities {
  setHtmlContent(selector: string | null, htmlContent: string): EasyVueTest;
  getHtmlContent(selector: string | null): string;
  getHtmlContents(selector: string): string[];
  getSurroundingHtml(selector: string | null): string;
  getSurroundingHtmls(selector: string): string[];
}

interface StyleUtilities {
  getClasses(selector: string | null): string[];
  setClasses(selector: string | null, classes: string[]): EasyVueTest;
  getStyleProperty(selector: string | null, property: string): string;
  setStyleProperty(selector: string | null, property: string, value: string | null): EasyVueTest;
}

interface DomEventUtilities {
  click(selector: string | null): EasyVueTest;
  mouseDown(selector: string | null, button?: number): EasyVueTest;
  mouseUp(selector: string | null, button?: number): EasyVueTest;
  keyPress(selector: string | null, key?: string): EasyVueTest;
  keyDown(selector: string | null, key?: string): EasyVueTest;
  keyUp(selector: string | null, key?: string): EasyVueTest;
}

interface FormInteractionUtilities {
  getTextInputValue(selector: string | null): string;
  setTextInputValue(selector: string | null, text: string): EasyVueTest;
}

interface ComponentFieldUtilities {
  getData(dataFieldName: string): any;
  setData(dataFieldName: string, value: any): EasyVueTest;
  getComputed(computedFieldName: string): any;
  setComputed(computedFieldName: string, value: any): EasyVueTest;
  getProp(propFieldName: string): any;
  setProp(propFieldName: string, value: any): EasyVueTest;
  getMethod(methodName: string): any;
  setMethod(methodName: string, implementation: any): EasyVueTest;
  invokeMethod(methodName: string, ...params: any[]): any;
  get$(dollarFieldName: string): any;
}

interface ChildComponentUtilities {
  getWrappedChildByName(childComponentName: string): EasyVueTest;
  getWrappedChildrenByName(childComponentName: string): EasyVueTest[];
  getWrappedChildBySelector(selector: string): EasyVueTest;
  getWrappedChildrenBySelector(selector: string): EasyVueTest[];
  getWrappedChildByRef(ref: string): EasyVueTest;
}

interface VueEventUtilities {
  setVueEventListener(eventName: string, listener: any): EasyVueTest;
  emitVueEvent(eventName: string, eventData: any): EasyVueTest;
}

interface LifecycleUtilities {
  destroy(): void;
}

interface DebugUtilities {
  logHtmlCode(): void;
}

interface EasyVueTestConfig {
  vue?: VueConstructor;
  extraMixins?: any[];
  defaultParams?: () => any | any;
}

interface EasyVueTestGlobal {
  configure(newConfig: EasyVueTestConfig): void;
  mounted(component: VueConstructor, params?: any): Promise<EasyVueTest>;
}

declare const EasyVueTest: EasyVueTestGlobal;
export default EasyVueTest;
