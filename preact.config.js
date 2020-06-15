import path from 'path'
import Dotenv from 'dotenv-webpack'
import envVars from 'preact-cli-plugin-env-vars'

export default (configuration, env, helpers) => {
  const { resolve } = configuration

  envVars(configuration, env, helpers)
  resolve.alias['react'] = 'preact/compat'
  resolve.alias['react-dom'] = 'preact/compat'

  resolve.alias.assets = path.resolve(__dirname, './src/assets')
  resolve.alias.components = path.resolve(__dirname, './src/components')
  resolve.alias.libraries = path.resolve(__dirname, './src/libraries')
  resolve.alias.stacks = path.resolve(__dirname, './src/stacks')
  resolve.alias.views = path.resolve(__dirname, './src/views')
  resolve.alias.test = path.resolve(__dirname, './tests')

  configuration.plugins.push(new Dotenv({ path: './.env' }))
}
