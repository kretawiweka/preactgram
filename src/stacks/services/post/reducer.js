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
	console.log(action.type, action.data)
	switch (action.type) {
		case LOAD_POST:
			return Object.assign({}, state, {
				...state.post,
				meta: {
					load: true,
				},
			})
		case LIST_POST:
			return Object.assign({}, state, {
				...state.post,
				response: {
					data: [...state.response.data, action.data],
				},
			})
		default:
			return state
	}
}

export default reducer
