import { h } from 'preact'
import { Router } from 'preact-router'
import Stacks from 'stacks'
import 'assets/styles/application.scss'

// Code-splitting is automated for routes
import Home from 'views/home'
import Comment from 'views/comment'

const App = () => {
	return (
		<div id="app">
			<Stacks>
				<Router>
					<Home path="/" />
					<Comment path="/post/:id:/comment" />
				</Router>
			</Stacks>
		</div>
	)
}

export default App
