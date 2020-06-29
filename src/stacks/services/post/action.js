export const LOAD_POST = 'LOAD_POST'
export const LIST_POST = 'LIST_POST'

export const loadPost = () => {
	return {
		type: LOAD_POST,
	}
}

export const listPost = (state) => {
	loadPost()
	return {
		type: LIST_POST,
		state,
	}
}
