import EasyVueTest from '@/index'
import Vue from 'vue'

const component = Vue.component('TestComponent', {
  template: `
  <div>
    <ol id="list">
      <li class="item">Foo</li>
      <li class="item">Bar</li>
      <li class="item">Baz</li>
      <li class="item">Qux</li>
    </ol>
    <ol id="not-list"><li class="not-item"></li></ol>
  </div>
  `
})

describe('DomUtilities', () => {
  let easy

  beforeEach(async () => {
    easy = await EasyVueTest.mounted(component)
  })

  it('selects root element and returns DOM object', () => {
    expect(easy.getRootElement().tagName).toEqual('DIV')
  })

  it('selects root element if not specifying selector', () => {
    expect(easy.getElement().tagName).toEqual('DIV')
  })

  it('selects single child element and returns DOM object', () => {
    expect(easy.getElement('ol#list').tagName).toEqual('OL')
  })

  it('selects single child element and returns first matching DOM object', () => {
    expect(easy.getElement('li.item').textContent).toEqual('Foo')
  })

  it('selects mutiple child elements and returns DOM object array', () => {
    const domArray = easy.getElements('li.item')

    expect(domArray.length).toEqual(4)
    domArray.forEach(domObject => {
      expect(domObject.tagName).toEqual('LI')
    })
  })

  it('selects non-existing child element and returns null', () => {
    expect(easy.getElement('span')).toBeNull()
  })

  it('selects non-existing child elements and returns empty array', () => {
    expect(easy.getElements('span')).toEqual([])
  })

  it('checks if element exists', () => {
    expect(easy.hasElement('span')).toEqual(false)
    expect(easy.hasElement('li')).toEqual(true)
  })
})
