import EasyVueTest from '@/index'
import Vue from 'vue'

const component = Vue.component('message', {
  template: `
  <div>
    <ol id="list">
      <li class="item">Foo</li>
      <li class="item">Bar</li>
      <li class="item">Baz</li>
      <li class="item">Qux</li>
    </ol>
    <p>Foo  Bar
    Baz Qux</p>
  </div>
  `
})

describe('TextUtilities', () => {
  let easy

  beforeEach(async () => {
    easy = await EasyVueTest.mounted(component)
  })

  it('sets text content', () => {
    easy.setTextContent('p', 'Hello world!')

    expect(easy.getElement('p').textContent).toEqual('Hello world!')
  })

  it('gets text content from one element', () => {
    expect(easy.getTextContent('#list')).toEqual('Foo Bar Baz Qux')
  })

  it('gets text content from one element with extra newlines and spaces replaced', () => {
    expect(easy.getTextContent('p')).toEqual('Foo Bar Baz Qux')
  })

  it('gets text content from multiple elements', () => {
    expect(easy.getTextContents('.item')).toEqual(['Foo', 'Bar', 'Baz', 'Qux'])
  })
})
