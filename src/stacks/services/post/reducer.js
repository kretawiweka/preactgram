import { LOAD_POST, LIST_POST } from './action'

const initialState = {
	meta: {
		load: false,
	},
	response: {
		data: [],
	},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POST:
			return Object.assign({}, state, {
				...state,
				meta: {
					load: true,
				},
			})
		case LIST_POST:
			return Object.assign({}, state, {
				...state,
				response: {
					data: [...state.response.data, state.data],
				},
			})
		default:
			return state
	}
}

export default reducer
