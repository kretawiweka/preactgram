import createSagaMiddleware from 'redux-saga'
import { compose, applyMiddleware, combineReducers, createStore } from 'redux'

import rootSaga from './sagas'
import postReducer from './services/post/reducer'
import commentReducer from './services/comment/reducer'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
	post: postReducer,
	comment: commentReducer,
})
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(sagaMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f
	)
)

sagaMiddleware.run(rootSaga)

export default store
