import Vue from 'vue'

import DomUtilities from './mixins/DomUtilities'
import UntilAsyncTasksDone from './mixins/UntilAsyncTasksDone'
import TextUtilities from './mixins/TextUtilities'
import HtmlUtilities from './mixins/HtmlUtilities'
import StyleUtilities from './mixins/StyleUtilities'
import DomEventUtilities from './mixins/DomEventUtilities'
import ComponentFieldUtilities from './mixins/ComponentFieldUtilities'
import ChildComponentUtilities from './mixins/ChildComponentUtilities'
import VueEventUtilities from './mixins/VueEventUtilities'
import LifecycleUtilities from './mixins/LifecycleUtilities'
import DebugUtilities from './mixins/DebugUtilities'

const config = {
  extraMixins: []
}

export default class EasyVueTest {
  static extend(...extraMixins) {
    config.extraMixins = extraMixins
  }

  static mounted(component, propsData = {}) {
    const Ctor = Vue.extend(component)
    const vm = new Ctor({ propsData }).$mount()

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
