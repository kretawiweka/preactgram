import path from 'path'

export default (configuration) => {
  const { resolve } = configuration

  resolve.alias['react'] = 'preact/compat'
  resolve.alias['react-dom'] = 'preact/compat'

  resolve.alias.assets = path.resolve(__dirname, './src/assets')
  resolve.alias.components = path.resolve(__dirname, './src/components')
  resolve.alias.views = path.resolve(__dirname, './src/views')
  resolve.alias.style = path.resolve(__dirname, './src/style')
  resolve.alias.test = path.resolve(__dirname, './tests')
}
