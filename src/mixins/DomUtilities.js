import _ from 'lodash'

export default {
  getRootElement() {
    return this.vm.$el
  },

  getElement(selector) {
    return _.isNil(selector)
      ? this.getRootElement()
      : this.getRootElement().querySelector(selector)
  },

  getElements(selector) {
    return Array.from(this.getRootElement().querySelectorAll(selector))
  },

  hasElement(selector) {
    return this.getElements(selector).length !== 0
  }
}
