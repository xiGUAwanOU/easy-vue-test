const testConfig = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
}

const config = {
  presets: [
    ['@babel/preset-env', { targets: '> 1%, last 2 versions, not ie <= 8' }]
  ]
}

module.exports = process.env.NODE_ENV === 'test' ? testConfig : config
