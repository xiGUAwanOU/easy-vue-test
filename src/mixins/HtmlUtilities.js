export default {
  setHtmlContent(selector, htmlContent) {
    this.getElement(selector).innerHTML = htmlContent
    return this
  },

  getHtmlContent(selector) {
    return this.getElement(selector).innerHTML
  },

  getHtmlContents(selector) {
    return this.getElements(selector).map(domObject => domObject.innerHTML)
  },

  getSurroundingHtml(selector) {
    return this.getElement(selector).outerHTML
  },

  getSurroundingHtmls(selector) {
    return this.getElements(selector).map(domObject => domObject.outerHTML)
  }
}
