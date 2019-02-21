import DomUtilities from './mixins/DomUtilities'
import UntilAsyncTasksDone from './mixins/UntilAsyncTasksDone'
import TextUtilities from './mixins/TextUtilities'
import HtmlUtilities from './mixins/HtmlUtilities'
import StyleUtilities from './mixins/StyleUtilities'
import DomEventUtilities from './mixins/DomEventUtilities'
import FormInteractionUtilities from './mixins/FormInteractionUtilities'
import ComponentFieldUtilities from './mixins/ComponentFieldUtilities'
import ChildComponentUtilities from './mixins/ChildComponentUtilities'
import VueEventUtilities from './mixins/VueEventUtilities'
import LifecycleUtilities from './mixins/LifecycleUtilities'
import DebugUtilities from './mixins/DebugUtilities'

const config = {
  vue: null,
  extraMixins: []
}

export default class EasyVueTest {
  static configure(newConfig) {
    Object.assign(config, newConfig)
  }

  static mounted(component, params = {}) {
    const Ctor = config.vue.extend(component)
    const vm = new Ctor(params).$mount()

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new EasyVueTest(vm))
      }, 0)
    })
  }

  constructor(vm) {
    this.vm = vm

    Object.assign(this,
      // Survival kit:
      UntilAsyncTasksDone,
      DomUtilities,

      // Basic utilities:
      TextUtilities,
      HtmlUtilities,
      StyleUtilities,
      DomEventUtilities,
      FormInteractionUtilities,

      // Basic Vue.js utilities:
      ComponentFieldUtilities,
      ChildComponentUtilities,
      VueEventUtilities,
      LifecycleUtilities,

      // Debugging utilities:
      DebugUtilities,

      // Extra mixins:
      ...config.extraMixins
    )
  }
}
