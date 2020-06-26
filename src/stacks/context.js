import { h } from 'preact'
import { createContext, useReducer } from 'preact/compat'

import combineReducers from 'libraries/combineReducers'

import { initialState as postState, postHelper as post } from './services/post'
import { reducer as postReducer } from './services/post/reducer'

import {
	initialState as commentState,
	commentHelper as comment,
} from './services/comment'
import { reducer as commentReducer } from './services/comment/reducer'

export const initialState = {
	comment: commentState,
}
export const Context = createContext()
const rootReducer = combineReducers({
	postReducer,
	commentReducer,
})

export const Provider = ({ children }) => {
	const { Provider } = Context
	const [state, dispatch] = useReducer(rootReducer, initialState)
	return (
		<Provider
			value={{
				commentState,
				state,
				dispatch,
				comment,
			}}
		>
			{children}
		</Provider>
	)
}

export const Consumer = ({ children }) => {
	let { Consumer } = Context
	return <Consumer>{children}</Consumer>
}
