import {
	LOAD_COMMENT,
	SUCCESS_LOAD_COMMENT,
	FAILED_LOAD_COMMENT,
} from './action'

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
		case LOAD_COMMENT:
			return Object.assign({}, state, {
				...state.comment,
				meta: {
					isLoading: true,
					isFailedLoad: false,
				},
			})
		case SUCCESS_LOAD_COMMENT:
			return Object.assign({}, state, {
				...state.comment,
				meta: {
					isLoading: false,
					isFailedLoad: false,
				},
				response: {
					data: [...state.response.data, ...action.data],
				},
			})
		case FAILED_LOAD_COMMENT:
			return Object.assign({}, state, {
				...state.comment,
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
