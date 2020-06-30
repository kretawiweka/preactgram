import { LOAD_POST, SUCCESS_LOAD_POST, FAILED_LOAD_POST } from './action'

const initialState = {
	meta: {
		isLoading: false,
		isFailedLoad: false,
	},
	response: {
		data: [],
	},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_POST:
			return Object.assign({}, state, {
				...state.post,
				meta: {
					isLoading: true,
					isFailedLoad: false,
				},
			})
		case SUCCESS_LOAD_POST:
			return Object.assign({}, state, {
				...state.post,
				meta: {
					isLoading: false,
					isFailedLoad: false,
				},
				response: {
					data: [...state.response.data, ...action.data],
				},
			})
		case FAILED_LOAD_POST:
			return Object.assign({}, state, {
				...state.post,
				meta: {
					isLoading: false,
					isFailedLoad: true,
				},
			})
		default:
			return state
	}
}

export default reducer
