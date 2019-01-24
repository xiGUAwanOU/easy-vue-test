export default {
  getClasses(selector) {
    return this.getElement(selector).className.split(/\s+/)
  },

  setClasses(selector, classes) {
    this.getElement(selector).className = classes.join(' ')
    return this
  },

  getStyleProperty(selector, property) {
    return this.getElement(selector).style.getPropertyValue(property)
  },

  setStyleProperty(selector, property, value) {
    this.getElement(selector).style.setProperty(property, value)
    return this
  }
}
