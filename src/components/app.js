import { h } from 'preact'
import { Router } from 'preact-router'

// Code-splitting is automated for routes
import Home from 'views/home'

const App = () => {
  return (
    <div id="app">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  )
}

export default App
