import _ from 'lodash'

export default {
  getData(dataFieldName) {
    return _.get(this.vm.$data, dataFieldName)
  },

  setData(dataFieldName, value) {
    _.set(this.vm.$data, dataFieldName, value)
    return this
  },

  getComputed(computedFieldName) {
    return _.get(this.vm, computedFieldName)
  },

  setComputed(computedFieldName, value) {
    _.set(this.vm, computedFieldName, value)
    return this
  },

  getProp(propFieldName) {
    return _.get(this.vm.$props, propFieldName)
  },

  setProp(propFieldName, value) {
    _.set(this.vm.$props, propFieldName, value)
    return this
  },

  getMethod(methodName) {
    return this.vm[methodName]
  },

  setMethod(methodName, implementation) {
    this.vm[methodName] = implementation
  },

  invokeMethod(methodName, ...params) {
    return this.getMethod(methodName)(...params)
  },

  get$(instanceFieldName) {
    return _.get(this.vm, `$${instanceFieldName}`)
  }
}
