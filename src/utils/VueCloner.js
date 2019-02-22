import _ from 'lodash'
import Vue from 'vue'

export default function getClonedVue() {
  // _.cloneDeep won't work for Vue instance.
  // This implementation is simply stolen from the official vue-test-utils.
  // See https://github.com/vuejs/vue-test-utils/blob/dev/packages/test-utils/src/create-local-vue.js
  const clonedVue = Vue.extend()

  Object.keys(Vue).forEach(key => {
    if (!clonedVue.hasOwnProperty(key)) {
      const original = Vue[key]
      try {
        clonedVue[key] = typeof original === 'object'
          ? _.cloneDeep(original)
          : original
      } catch (e) {
        clonedVue[key] = original
      }
    }
  })

  clonedVue.config = _.cloneDeep(Vue.config)
  clonedVue.config.errorHandler = Vue.config.errorHandler
  clonedVue.config.optionMergeStrategies = Vue.config.optionMergeStrategies
  clonedVue.options._base = clonedVue

  if (clonedVue._installedPlugins && clonedVue._installedPlugins.length) {
    clonedVue._installedPlugins.length = 0
  }
  const use = clonedVue.use
  clonedVue.use = (plugin, ...rest) => {
    if (plugin.installed === true) {
      plugin.installed = false
    }
    if (plugin.install && plugin.install.installed === true) {
      plugin.install.installed = false
    }
    use.call(clonedVue, plugin, ...rest)
  }

  return clonedVue
}
