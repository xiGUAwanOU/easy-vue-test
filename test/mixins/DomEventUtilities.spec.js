import EasyVueTest from '@/index'
import Vue from 'vue'

const mouseEventHandleableComponent = Vue.component('mouseEventHandleable', {
  template: `
  <div>
    <button @click="clickEventHandler" id="click"></button>
    <button @mousedown="clickEventHandler" id="mousedown"></button>
    <button @mouseup="clickEventHandler" id="mouseup"></button>
    <p>{{ type }} {{ button }}</p>
  </div>
  `,
  data() {
    return { type: '', button: '' }
  },
  methods: {
    clickEventHandler(event) {
      this.type = event.type
      this.button = event.button
    }
  }
})

const keyEventHandleableComponent = Vue.component('keyEventHandleable', {
  template: `
  <div>
    <button @keypress="keyEventHandler" id="keypress"></button>
    <button @keydown="keyEventHandler" id="keydown"></button>
    <button @keyup="keyEventHandler" id="keyup"></button>
    <p>{{ type }} {{ key }} {{ keyCode }}</p>
  </div>
  `,
  data() {
    return { type: '', key: '', keyCode: '' }
  },
  methods: {
    keyEventHandler(event) {
      this.type = event.type
      this.key = event.key
      this.keyCode = event.keyCode
    }
  }
})

describe('DomEventUtilities', () => {
  let easy

  describe('mouse events', () => {
    beforeEach(async () => {
      easy = await EasyVueTest.mounted(mouseEventHandleableComponent)
    })

    it('triggers click event', async () => {
      await easy.click('button#click').untilAsyncTasksDone()
      expect(easy.getTextContent('p')).toEqual('click 0')
    })

    it('triggers mousedown event with another mouse button', async () => {
      await easy.mouseDown('button#mousedown', 1).untilAsyncTasksDone()
      expect(easy.getTextContent('p')).toEqual('mousedown 1')
    })

    it('triggers mouseup event with another mouse button', async () => {
      await easy.mouseUp('button#mouseup', 2).untilAsyncTasksDone()
      expect(easy.getTextContent('p')).toEqual('mouseup 2')
    })
  })

  describe('keyboard events', () => {
    beforeEach(async () => {
      easy = await EasyVueTest.mounted(keyEventHandleableComponent)
    })

    it('triggers keypress event', async () => {
      await easy.keyPress('button#keypress').untilAsyncTasksDone()
      expect(easy.getTextContent('p')).toEqual('keypress Enter 13')
    })

    it('triggers keydown event with another mouse button', async () => {
      await easy.keyDown('button#keydown', 'Shift', 16).untilAsyncTasksDone()
      expect(easy.getTextContent('p')).toEqual('keydown Shift 16')
    })

    it('triggers mouseup event with another mouse button', async () => {
      await easy.keyUp('button#keyup', 'Backspace', 8).untilAsyncTasksDone()
      expect(easy.getTextContent('p')).toEqual('keyup Backspace 8')
    })
  })
})
