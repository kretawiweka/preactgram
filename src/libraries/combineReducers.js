const combineReducers = (reducers = {}) => {
	let reducerKeys = Object.keys(reducers)
	return function combination(state = {}, action) {
		let hasChanged = false
		let nextState = {}
		for (let i = 0; i < reducerKeys.length; i++) {
			let key = reducerKeys[i]
			nextState[key] = reducers[key](state[key], action)
			hasChanged = hasChanged || nextState[key] !== state[key]
		}
		return hasChanged ? nextState : state
	}
}
export default combineReducers
