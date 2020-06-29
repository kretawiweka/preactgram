import { takeLatest } from 'redux-saga/effects'

import { LIST_POST } from './services/post/action'
import { getPostData } from './services/post/sagas'

export default function* rootSaga() {
	yield takeLatest(LIST_POST, getPostData)
}
