import { put } from 'redux-saga/effects'

import { successLoadPost, failedLoadPost } from './action'
import http from 'libraries/http'

export function* getPostData() {
	try {
		const response = yield http({
			path: '/posts',
		})
		yield put(successLoadPost(response.data))
	} catch (error) {
		yield put(failedLoadPost())
	}
}
