/**  @jsx h **/

import http from 'libraries/http'
import { LOAD_COMMENT, LIST_COMMENT } from './action'

export const initialState = {
	meta: {
		load: false,
	},
	response: {
		data: [],
	},
}

export const commentHelper = {
	list: (dispatch) => {
		dispatch({ type: LOAD_COMMENT })
		http({
			path: '/posts/1/comments',
		}).then((response) => {
			dispatch({
				type: LIST_COMMENT,
				data: response.data,
			})
		})
	},
}
