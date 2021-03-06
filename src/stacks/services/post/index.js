/**  @jsx h **/

import http from 'libraries/http'
import { LOAD_POST, LIST_POST } from './action'

export const initialState = {
	meta: {
		load: false,
	},
	response: {
		data: [],
	},
}

export const postHelper = {
	list: (dispatch) => {
		dispatch({ type: LOAD_POST })
		http({
			path: '/posts',
		}).then((response) => {
			dispatch({
				type: LIST_POST,
				data: response.data,
			})
		})
	},
}
