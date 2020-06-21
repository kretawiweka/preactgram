import { h } from 'preact'
import { Router } from 'preact-router'
import Stacks from 'stacks'
import 'assets/styles/application.scss'

// Code-splitting is automated for routes
import Home from 'views/home'

const App = () => {
	return (
		<div id="app">
			<Stacks>
				<Router>
					<Home path="/" />
				</Router>
			</Stacks>
		</div>
	)
}

export default App
