export const LOAD_POST = 'LOAD_POST'
export const SUCCESS_LOAD_POST = 'SUCCESS_LOAD_POST'
export const FAILED_LOAD_POST = 'FAILED_LOAD_POST'

export const loadPost = () => {
	return {
		type: LOAD_POST,
	}
}

export const successLoadPost = (data) => {
	return {
		type: SUCCESS_LOAD_POST,
		data,
	}
}

export const failedLoadPost = () => {
	return {
		type: FAILED_LOAD_POST,
	}
}
