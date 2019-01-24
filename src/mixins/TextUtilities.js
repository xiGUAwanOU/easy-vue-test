export default {
  setTextContent(selector, textContent) {
    this.getElement(selector).textContent = textContent
    return this
  },

  getTextContent(selector) {
    return removeNewlinesAndExtraWhitespace(this.getElement(selector).textContent)
  },

  getTextContents(selector) {
    return this.getElements(selector).map(domObject => removeNewlinesAndExtraWhitespace(domObject.textContent))
  }
}

function removeNewlinesAndExtraWhitespace(text) {
  return text.replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ').trim()
}
