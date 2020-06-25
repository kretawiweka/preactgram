import { LOAD_COMMENT, LIST_COMMENT } from './action'

export const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_COMMENT:
			return {
				...state,
				meta: {
					load: true,
				},
			}
		case LIST_COMMENT:
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
