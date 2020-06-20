import { useReducer } from 'preact/compat'
import { LOAD, LIST } from './action'
import { reducer } from 'stacks/services/user/reducer'
import http from 'libraries/http'

let initialState = {
	data: [],
}

const [state, dispatch] = useReducer(reducer, initialState)

export const list = (options = {}) => {
	let { node } = options

	dispatch({ type: LOAD })

	switch (node) {
		case true: {
			return http({
				path: '/posts',
			})
		}

		default:
			http({
				path: '/posts',
			}).then((response) => {
				dispatch({
					type: LIST,
					list: response.data,
				})
			})
	}
}
