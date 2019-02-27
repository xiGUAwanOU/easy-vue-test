import EasyVueTest from '@/index'
import Vue from 'vue'

const childComponent = Vue.component('Child', {
  template: '<div><p>Hello world!</p></div>'
})

const component = Vue.component('Parent', {
  template: `
  <div>
    <child-component id="child" @event="onVueEventFromChild"></child-component>
    <p>{{ message }}</p>
    <button @click="$emit('clicked', 'Mouse button clicked!')">Click me!</button>
  </div>
  `,
  components: {
    childComponent
  },
  data() {
    return { message: '' }
  },
  methods: {
    onVueEventFromChild() {
      this.message = 'Vue event received!'
    }
  }
})

describe('VueEventUtilities', () => {
  let wrapper

  beforeEach(async () => {
    wrapper = await EasyVueTest.mounted(component)
  })

  it('calls event listener while vue event being triggered', async () => {
    const eventListener = jest.fn()

    wrapper.setVueEventListener('clicked', eventListener)
    await wrapper.click('button').untilAsyncTasksDone()

    expect(eventListener).toHaveBeenCalledWith('Mouse button clicked!')
  })

  it('triggers event from root element', async () => {
    const eventListener = jest.fn()
    wrapper.setVueEventListener('triggered', eventListener)

    await wrapper.emitVueEvent('triggered', 'foo', 'bar').untilAsyncTasksDone()

    expect(eventListener).toHaveBeenCalledWith('foo', 'bar')
  })

  it('triggers event from child element', async () => {
    await wrapper.getWrappedChildBySelector('#child').emitVueEvent('event').untilAsyncTasksDone()

    expect(wrapper.getTextContent('p')).toEqual('Hello world!')
  })
})
