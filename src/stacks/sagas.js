import { all, takeLatest } from 'redux-saga/effects'

import { getPostData } from './services/post/sagas'

import { LOAD_POST } from './services/post/action'

export default function* rootSaga() {
	yield all([takeLatest(LOAD_POST, getPostData)])
}
