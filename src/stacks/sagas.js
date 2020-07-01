import { all, takeLatest } from 'redux-saga/effects'

import { getPostData } from './services/post/sagas'
import { getCommentData } from './services/comment/sagas'

import { LOAD_POST } from './services/post/action'
import { LOAD_COMMENT } from './services/comment/action'

export default function* rootSaga() {
	yield all([
		takeLatest(LOAD_POST, getPostData),
		takeLatest(LOAD_COMMENT, getCommentData),
	])
}
