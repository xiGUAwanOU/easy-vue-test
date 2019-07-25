import Vue from 'vue'

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

import getClonedVue from './utils/VueCloner'

const config = {
  defaultOptions: {},
  extraMixins: []
}

export default class EasyVueTest {
  static configure(newConfig) {
    Object.assign(config, newConfig)
  }

  static mounted(component, options) {
    const clonedVue = getClonedVue()

    const defaultOptions = (typeof config.defaultOptions === 'function')
      ? config.defaultOptions()
      : config.defaultOptions
    const resultantOptions = Object.assign({}, defaultOptions, options)

    if (resultantOptions.stubs) {
      component.mixin({
        beforeCreate() { Object.assign(this.$options.components, resultantOptions.stubs) }
      })
    }

    const Ctor = clonedVue.extend(component)
    const vm = new Ctor(resultantOptions)
    vm.$mount()

    return new Promise((resolve) => {
      setTimeout(() => { resolve(new EasyVueTest(vm)) }, 0)
    })
  }

  static mountedAsMixin(mixin, options) {
    const component = Vue.component('MixinComponent', {
      render: (h) => h(),
      mixins: [mixin]
    })

    return EasyVueTest.mounted(component, options)
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
