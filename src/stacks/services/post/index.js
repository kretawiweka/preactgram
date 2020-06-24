/**  @jsx h **/

import http from 'libraries/http'
import { LOAD, LIST } from './action'

export const initialState = {
	meta: {
		load: false,
	},
	response: {
		data: [],
	},
}

export const postHelper = {
	list: () => {
		dispatch({ type: LOAD })
		http({
			path: '/posts',
		}).then((response) => {
			dispatch({
				type: LIST,
				data: response.data,
			})
		})
	},
}
