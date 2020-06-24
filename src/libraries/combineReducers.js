const getInitialState = (reducerDict) => {
	return Object.keys(reducerDict).reduce((acc, curr) => {
		const slice = reducerDict[curr](undefined, { type: undefined })
		return { ...acc, [curr]: slice }
	}, {})
}

const combineReducers = (reducerDict) => {
	const _initialState = getInitialState(reducerDict)
	console.log(_initialState)
	return function (state = _initialState, action) {
		return Object.keys(reducerDict).reduce((acc, curr) => {
			let slice = reducerDict[curr](state[curr], action)
			return { ...acc, [curr]: slice }
		}, state)
	}
}

export default combineReducers
