import _ from 'lodash'
import EasyVueTest from '../index'

export default {
  getWrappedChildByName(childComponentName = null) {
    let child = getFilteredChildrenByNameRecursively.call(this, childComponentName)[0]
    return new EasyVueTest(child)
  },

  getWrappedChildrenByName(childComponentName = null) {
    return getFilteredChildrenByNameRecursively
      .call(this, childComponentName).map(child => new EasyVueTest(child))
  },

  getWrappedChildBySelector(selector) {
    return new EasyVueTest(this.getElement(selector).__vue__)
  },

  getWrappedChildrenBySelector(selector) {
    return this.getElements(selector).map(child => new EasyVueTest(child.__vue__))
  },

  getWrappedChildByRef(ref) {
    return new EasyVueTest(this.vm.$refs[ref])
  }
}

function getFilteredChildrenByNameRecursively(childComponentName = null) {
  return _.filter(
    getAllChildrenRecursively(this.vm),
    childComponent => childComponentName === null || childComponent.$options._componentTag === childComponentName
  )
}

function getAllChildrenRecursively(vm) {
  let children = []

  if (vm.$children) {
    vm.$children.forEach(child => {
      children.push(child)
      children = children.concat(getAllChildrenRecursively(child))
    })
  }

  return children
}
