import EasyVueTest from '@/index'
import Vue from 'vue'

const component = Vue.component('TestVueComponent', {
  template: `
  <div>
    <input class="text-input" type="text" v-model="text"/>
    <span class="text-input-value">{{ text }}</span>
  </div>
  `,
  data() {
    return { text: '' }
  }
})

describe('FormInteractionUtilities', () => {
  let easy

  beforeEach(async () => {
    easy = await EasyVueTest.mounted(component)
  })

  it('sets text input value', async () => {
    await easy.setTextInputValue('.text-input', 'hello world').untilAsyncTasksDone()
    expect(easy.getTextContent('.text-input-value')).toEqual('hello world')
  })

  it('gets text input value', async () => {
    await easy.setData('text', 'hello world').untilAsyncTasksDone()
    expect(easy.getTextInputValue('.text-input')).toEqual('hello world')
  })
})
