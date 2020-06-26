import { LOAD_COMMENT, LIST_COMMENT } from './action'

export const reducer = (state, action) => {
	switch (action.type) {
		case LOAD_COMMENT:
			return {
				...state,
				comment: {
					meta: {
						load: true,
					},
				},
			}
		case LIST_COMMENT:
			console.log('action data', action.data)
			return {
				...state,
				comment: {
					meta: {
						load: true,
					},
				},
			}
		// return Object.assign({}, state, {
		// 	comment: {
		// 		meta: {
		// 			load: false,
		// 		},
		// 		response: {
		// 			...state.comment.response,
		// 			data: action.data,
		// 		},
		// 	},
		// })
		// return {
		// 	...state,
		// 	comment: {
		// 		meta: {
		// 			load: false,
		// 		},
		// 		response: {
		// 			...state.comment.response,
		// 			data: action.data,
		// 		},
		// 	},
		// }
		default: {
			return state
		}
	}
}
