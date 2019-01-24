import EasyVueTest from '@/index'
import Vue from 'vue'

const component = Vue.component('message', {
  template: `
  <div>
    <ol id="list">
      <li class="item"><b>Foo</b></li>
      <li class="item"><b>Bar</b></li>
      <li class="item"><b>Baz</b></li>
      <li class="item"><b>Qux</b></li>
    </ol>
    <p>Foo  <b>Bar</b>  Baz Qux</p>
  </div>
  `
})

describe('HtmlAccessors', () => {
  let easy

  beforeEach(async () => {
    easy = await EasyVueTest.mounted(component)
  })

  it('sets html content', () => {
    easy.setHtmlContent('p', 'Hello <b>world</b>!')

    expect(easy.getElement('p').innerHTML).toEqual('Hello <b>world</b>!')
  })

  it('gets html content from one element', () => {
    expect(easy.getHtmlContent('p')).toEqual('Foo  <b>Bar</b>  Baz Qux')
  })

  it('gets html contents from multiple elements', () => {
    expect(easy.getHtmlContents('.item')).toEqual(['<b>Foo</b>', '<b>Bar</b>', '<b>Baz</b>', '<b>Qux</b>'])
  })

  it('gets surrounding html for one element', () => {
    expect(easy.getSurroundingHtml('p')).toEqual('<p>Foo  <b>Bar</b>  Baz Qux</p>')
  })

  it('gets surrounding html for multiple elements', () => {
    expect(easy.getSurroundingHtmls('.item')).toEqual([
      '<li class="item"><b>Foo</b></li>',
      '<li class="item"><b>Bar</b></li>',
      '<li class="item"><b>Baz</b></li>',
      '<li class="item"><b>Qux</b></li>'
    ])
  })
})
