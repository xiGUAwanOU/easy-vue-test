export default {
  getTextInputValue(selector) {
    return this.getElement(selector).value
  },

  setTextInputValue(selector, value) {
    let inputElement = this.getElement(selector)
    inputElement.value = value
    inputElement.dispatchEvent(new Event('input'))
    return this
  }
}
