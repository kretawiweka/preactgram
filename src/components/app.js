import { h } from 'preact'
import { Router } from 'preact-router'
import { Provider } from 'react-redux'

import 'assets/styles/application.scss'
import store from 'stacks/store'

// Code-splitting is automated for routes
import Home from 'views/home'
import Comment from 'views/comment'

const App = () => {
	return (
		<div id="app">
			<Provider store={store}>
				<Router>
					<Home path="/" />
					<Comment path="/post/:id:/comment" />
				</Router>
			</Provider>
		</div>
	)
}

export default App
