import { h } from 'preact'
import { createContext, useReducer } from 'preact/compat'

import { initialState as postState, postHelper as post } from './post'
import { reducer } from './post/reducer'

export const initialState = [postState]
export const Context = createContext(...initialState)

export const Provider = ({ children }) => {
	const { Provider } = Context
	const [state, dispatch] = useReducer(reducer, ...initialState)
	return (
		<Provider
			value={{
				...initialState,
				state,
				dispatch,
				...post,
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
