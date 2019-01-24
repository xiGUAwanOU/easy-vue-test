import EasyVueTest from '@/index'
import Vue from 'vue'

const childComponent = Vue.component('child', {
  template: `
  <div><p>Hello world!</p></div>
  `
})

const component = Vue.component('parent', {
  template: `
  <div>
    <child-component id="child"></child-component>
  </div>
  `,
  components: {
    childComponent
  }
})

describe('ChildComponentUtilities', () => {
  it('wraps child component by name correctly', async () => {
    const easy = await EasyVueTest.mounted(component)

    expect(easy.getWrappedChildByName('child-component').getTextContent('p')).toEqual('Hello world!')
  })

  it('wraps child component by selector correctly', async () => {
    const easy = await EasyVueTest.mounted(component)

    expect(easy.getWrappedChildBySelector('#child').getTextContent('p')).toEqual('Hello world!')
  })
})
