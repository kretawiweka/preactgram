import { put } from 'redux-saga/effects'

import { listPost } from './action'
import http from 'libraries/http'

export function* getPostData() {
	try {
		const response = yield http({
			path: '/posts',
		})
		console.log(response)
		yield put(listPost(response.data))
	} catch (error) {
		yield put({ type: 'USER_FETCH_FAILED' })
	}
}
