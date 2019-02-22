import getKeyCode from '../utils/KeyCodeMap'

export default {
  click(selector) {
    this.getElement(selector).click()
    return this
  },

  mouseDown(selector, button = 0) {
    this.getElement(selector).dispatchEvent(
      new MouseEvent('mousedown', { button })
    )
    return this
  },

  mouseUp(selector, button = 0) {
    this.getElement(selector).dispatchEvent(
      new MouseEvent('mouseup', { button })
    )
    return this
  },

  keyPress(selector, key = 'Enter') {
    this.getElement(selector).dispatchEvent(
      new KeyboardEvent('keypress', { key, keyCode: getKeyCode(key) })
    )
    return this
  },

  keyDown(selector, key = 'Enter') {
    this.getElement(selector).dispatchEvent(
      new KeyboardEvent('keydown', { key, keyCode: getKeyCode(key) })
    )
    return this
  },

  keyUp(selector, key = 'Enter') {
    this.getElement(selector).dispatchEvent(
      new KeyboardEvent('keyup', { key, keyCode: getKeyCode(key) })
    )
    return this
  }
}
