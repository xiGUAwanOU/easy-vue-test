import EasyVueTest from '@/index'
import Vue from 'vue'

const childComponent = Vue.component('Child', {
  template: '<div class="child"></div>'
})

const childComponentStub = Vue.component('Child', {
  template: '<div class="child-stub"></div>'
})

const parentComponent = Vue.component('Parent', {
  template: '<div><child-component></child-component></div>',
  components: {
    childComponent
  },
  props: {
    message: { type: String, default: 'foo' }
  }
})

describe('EasyVueTest', () => {
  it('mounts component', async () => {
    const easy = await EasyVueTest.mounted(parentComponent)
    expect(easy.getProp('message')).toEqual('foo')
  })

  it('mounts component with propsData', async () => {
    const easy = await EasyVueTest.mounted(parentComponent, { propsData: { message: 'bar' } })
    expect(easy.getProp('message')).toEqual('bar')
  })

  it('mounts compoment with default parameters', async () => {
    EasyVueTest.configure({
      defaultOptions: { propsData: { message: 'bar' } }
    })
    const easy = await EasyVueTest.mounted(parentComponent)
    expect(easy.getProp('message')).toEqual('bar')
  })

  it('mounts component with default parameters provider', async () => {
    EasyVueTest.configure({
      defaultOptions: () => ({ propsData: { message: 'bar' } })
    })
    const easy = await EasyVueTest.mounted(parentComponent)
    expect(easy.getProp('message')).toEqual('bar')
  })

  it('mounts component with overwriten parameters', async () => {
    EasyVueTest.configure({
      defaultOptions: () => ({ propsData: { message: 'bar' } })
    })
    const easy = await EasyVueTest.mounted(parentComponent, { propsData: { message: 'baz' } })
    expect(easy.getProp('message')).toEqual('baz')
  })

  it('mounts component with stubbed child', async () => {
    const easy = await EasyVueTest.mounted(parentComponent, { stubs: {
      childComponent: childComponentStub
    } })
    expect(easy.getElement('.child')).toBeNull()
    expect(easy.getElement('.child-stub')).not.toBeNull()
  })
})
