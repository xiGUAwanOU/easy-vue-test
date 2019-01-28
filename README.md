# Easy Vue Test

A simple utilities set for Vue.js which makes unit tests easier.

Source code is not transpiled. To use it, make sure that this library will be transpiled while testing. For example, if using Jest, make sure something similar to the following part is in your Jest configuration:

```javascript
transformIgnorePatterns: [
  'node_modules/(?!easy-vue-test/)'
]
```
