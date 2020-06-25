import { h } from 'preact'
import { createContext, useReducer } from 'preact/compat'

// import combineReducers from 'libraries/combineReducers'

// import { initialState as postState, postHelper as post } from './services/post'
// import { reducer as postReducer } from './services/post/reducer'

import {
	initialState as commentState,
	commentHelper as comment,
} from './services/comment'
import { reducer as commentReducer } from './services/comment/reducer'

// const reducerDummy = (state, action) => {
// 	switch (action.type) {
// 		case 'TEST':
// 			return {
// 				...state,
// 				meta: {
// 					load: true,
// 				},
// 			}
// 		default: {
// 			return state
// 		}
// 	}
// }

export const initialState = [commentState]
export const Context = createContext(...initialState)
// const rootReducer = combineReducers({
// 	postReducer,
// 	reducerDummy
// })

export const Provider = ({ children }) => {
	const { Provider } = Context
	const [state, dispatch] = useReducer(commentReducer, ...initialState)
	return (
		<Provider
			value={{
				...initialState,
				state,
				dispatch,
				comment,
			}}
		>
			{children}
		</Provider>
	)
}

export const Consumer = ({ children }) => {
	let { Consumer } = Context
	return <Consumer>{children}</Consumer>
}
