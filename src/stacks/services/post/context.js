import { h } from 'preact'
import { createContext, useReducer } from 'preact/compat'
import { LOAD, LIST } from './action'
import { reducer } from 'stacks/services/post/reducer'
import http from 'libraries/http'

const initialState = {
	meta: {
		load: false,
	},
	response: {
		data: [],
	},
}

export const Context = createContext(initialState)

export const Provider = ({ children }) => {
	const { Provider } = Context
	const [state, dispatch] = useReducer(reducer, initialState)

	const list = () => {
		dispatch({ type: LOAD })
		http({
			path: '/posts',
		}).then((response) => {
			dispatch({
				type: LIST,
				data: response.data,
			})
		})
	}

	return (
		<Provider
			value={{
				initialState,
				state,
				dispatch,
				list,
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
