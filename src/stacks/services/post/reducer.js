import { LOAD_POST, LIST_POST } from './action'

export const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_POST:
			return {
				...state,
				meta: {
					load: true,
				},
			}
		case LIST_POST:
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
