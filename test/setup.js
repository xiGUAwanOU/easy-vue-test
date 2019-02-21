import EasyVueTest from '@/index'
import Vue from 'vue'
import VueRouter from 'vue-router'

EasyVueTest.configure({
  vue: Vue,
  router: new VueRouter()
})
