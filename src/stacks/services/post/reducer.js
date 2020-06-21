import { LOAD, LIST } from './action'

export const reducer = (state, action) => {
	switch (action.type) {
		case LOAD:
			return {
				...state,
				meta: {
					load: true,
				},
			}
		case LIST:
			return {
				...state,
				meta: {
					load: false,
				},
				response: {
					...state.response,
					data: action.data,
				},
			}
		default: {
			return state
		}
	}
}
