import EasyVueTest from '@/index'
import Vue from 'vue'

const component = Vue.component('TestComponent', {
  template: `
  <div>
    <p>This is the first paragraph.</p>
    <p>This is the last paragraph.</p>
  </div>
  `
})

describe('Configurations', () => {
  beforeEach(() => {
    EasyVueTest.configure({
      extraMixins: [
        {
          getTextContentsOfAllParagraphs() {
            return this.getTextContents('p')
          }
        }
      ]
    })
  })

  it('appends extra mixins', async () => {
    const wrapper = await EasyVueTest.mounted(component)

    expect(wrapper.getTextContentsOfAllParagraphs()).toEqual([
      'This is the first paragraph.',
      'This is the last paragraph.'
    ])
  })
})
