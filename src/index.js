/* eslint-disable */
import { h } from 'preact'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import App from 'components/App'
import theme from './theme'
import 'assets/styles/application.scss'

export default () => (
  <div>
    <ThemeProvider theme={theme}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </div>
)
