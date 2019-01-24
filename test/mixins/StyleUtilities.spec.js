import EasyVueTest from '@/index'
import Vue from 'vue'

const component = Vue.component('message', {
  template: `
  <div>
    <p id="paragraph-1" class="paragraph" :class="{ extra: applyClass }">This is the first paragraph.</p>
    <p id="paragraph-2" style="height: 200px" :style="{ fontSize: fontSize + 'px' }">This is the last paragraph.</p>
  </div>
  `,
  data() {
    return { fontSize: 20, applyClass: true }
  }
})

describe('StyleUtilities', () => {
  let easy

  beforeEach(async () => {
    easy = await EasyVueTest.mounted(component)
  })

  it('gets correct style classes', () => {
    expect(easy.getClasses('#paragraph-1')).toEqual(['paragraph', 'extra'])
  })

  it('sets correct style classes', () => {
    easy.setClasses('#paragraph-2', ['second-paragraph', 'extra'])

    expect(easy.getElement('#paragraph-2').className).toEqual('second-paragraph extra')
  })

  it('gets correct style attribute values', () => {
    expect(easy.getStyleProperty('#paragraph-2', 'height')).toEqual('200px')
    expect(easy.getStyleProperty('#paragraph-2', 'font-size')).toEqual('20px')
  })

  it('sets correct style attribute values', () => {
    easy.setStyleProperty('#paragraph-1', 'font-size', '20px')

    expect(easy.getElement('#paragraph-1').style.getPropertyValue('font-size')).toEqual('20px')
  })
})
