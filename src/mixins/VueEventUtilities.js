export default {
  setVueEventListener(eventName, listener) {
    this.vm.$on(eventName, listener)
    return this
  },

  emitVueEvent(eventName, eventData) {
    this.vm.$emit(eventName, eventData)
    return this
  }
}
