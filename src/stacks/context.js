import { h } from 'preact'
import { createContext, useReducer } from 'preact/compat'

// import combineReducers from 'libraries/combineReducers'

import { initialState as postState, postHelper as post } from './services/post'
import { reducer as postReducer } from './services/post/reducer'

export const initialState = [postState]
export const Context = createContext(...initialState)
// const rootReducer = combineReducers({
// 	postReducer
// })

export const Provider = ({ children }) => {
	const { Provider } = Context
	const [state, dispatch] = useReducer(postReducer, ...initialState)
	return (
		<Provider
			value={{
				...initialState,
				state,
				dispatch,
				post,
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
