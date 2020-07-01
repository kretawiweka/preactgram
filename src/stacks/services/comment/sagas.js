import { put } from 'redux-saga/effects'

import { successLoadComment, failedLoadComment } from './action'
import http from 'libraries/http'

export function* getCommentData() {
	try {
		const response = yield http({
			path: '/posts/2/comments',
		})
		yield put(successLoadComment(response.data))
	} catch (error) {
		yield put(failedLoadComment())
	}
}
