module.exports = {
  clearMocks: true,
  moduleFileExtensions: [ 'js' ],
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.js',
    '@/(.*)': '<rootDir>/src/$1.js',
    '@test/(.*)': '<rootDir>/test/$1.js'
  },
  testMatch: [
    '**/test/**/*.spec.js'
  ]
}
